import React, { useState } from 'react';

const COMM_CSS = `
.rf-comm *{box-sizing:border-box;margin:0;padding:0}
.rf-comm{--cream:#f7f3ea;--paper:#fffdf8;--black:#101010;--green:#51913c;--green-dark:#326b27;--green-light:#e5efd9;--gray:#706f69;--border:#d8d2c6;--shadow:0 10px 28px rgba(0,0,0,.1);--radius:14px;--max-width:1240px;background:var(--cream);color:var(--black);font-family:Arial,Helvetica,sans-serif;line-height:1.55;min-height:100vh}
.rf-comm img{display:block;width:100%}
.rf-comm a{color:inherit;text-decoration:none}
.rf-comm button,.rf-comm a{-webkit-tap-highlight-color:transparent}
.rf-comm .container{width:min(calc(100% - 40px),var(--max-width));margin-inline:auto}
.rf-comm .site-header{background:rgba(247,243,234,.96);border-top:9px solid var(--black);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100;backdrop-filter:blur(12px)}
.rf-comm .nav-wrap{min-height:84px;display:flex;align-items:center;justify-content:space-between;gap:32px}
.rf-comm .logo{display:flex;flex-direction:column;line-height:.95;min-width:185px}
.rf-comm .logo-main{font-size:27px;font-weight:900;letter-spacing:-2px;text-transform:uppercase}
.rf-comm .logo-main span{color:var(--green)}
.rf-comm .logo-tagline{margin-top:8px;font-size:9px;font-weight:800;letter-spacing:1.4px;text-transform:uppercase}
.rf-comm .desktop-nav{display:flex;align-items:center;justify-content:center;gap:35px;flex:1}
.rf-comm .desktop-nav a{position:relative;padding:30px 0 27px;font-size:13px;font-weight:800;text-transform:uppercase}
.rf-comm .desktop-nav a::after{content:"";position:absolute;left:0;bottom:18px;width:100%;height:2px;background:var(--green);transform:scaleX(0);transition:transform .2s ease}
.rf-comm .desktop-nav a:hover::after,.rf-comm .desktop-nav a.active::after{transform:scaleX(1)}
.rf-comm .nav-icons{display:flex;align-items:center;gap:17px;min-width:130px;justify-content:flex-end}
.rf-comm .icon-button{border:0;background:transparent;font-size:21px;cursor:pointer;position:relative;color:var(--black)}
.rf-comm .cart-count{position:absolute;top:-8px;right:-10px;width:18px;height:18px;display:grid;place-items:center;border-radius:50%;background:var(--green);color:#fff;font-size:10px;font-weight:800}
.rf-comm .menu-button{display:none;border:0;background:transparent;font-size:26px;cursor:pointer;color:var(--black)}
.rf-comm .mobile-nav{display:none;padding:0 20px 22px}
.rf-comm .mobile-nav.open{display:grid;gap:8px}
.rf-comm .mobile-nav a{padding:12px;border-bottom:1px solid var(--border);font-size:14px;font-weight:800;text-transform:uppercase}
.rf-comm .community-hero{padding:68px 0 45px}
.rf-comm .hero-grid{display:grid;grid-template-columns:1.45fr .75fr;gap:70px;align-items:center}
.rf-comm .eyebrow{display:inline-flex;align-items:center;gap:10px;margin-bottom:15px;font-size:13px;font-weight:900;letter-spacing:1.7px;text-transform:uppercase}
.rf-comm .eyebrow::before{content:"⚑";color:var(--green);font-size:25px}
.rf-comm .hero-h1{font-family:Impact,Haettenschweiler,"Arial Narrow Bold",sans-serif;font-size:clamp(72px,10vw,145px);font-weight:900;letter-spacing:-4px;line-height:.84;text-transform:uppercase}
.rf-comm .hero-script{margin-top:23px;font-family:"Comic Sans MS","Bradley Hand",cursive;font-size:clamp(24px,3vw,38px);font-weight:700}
.rf-comm .hero-intro{margin-top:31px;display:flex;gap:18px;max-width:620px;font-size:16px}
.rf-comm .flag-icon{color:var(--green);font-size:45px;line-height:1;flex-shrink:0}
.rf-comm .start-here-card{position:relative;background:var(--green-light);padding:42px 42px 38px;transform:rotate(2deg);box-shadow:0 8px 20px rgba(0,0,0,.07)}
.rf-comm .start-here-card::before,.rf-comm .start-here-card::after{content:"";position:absolute;left:0;width:100%;height:12px;background:linear-gradient(135deg,transparent 8px,var(--green-light) 0) 0 0/16px 16px repeat-x}
.rf-comm .start-here-card::before{top:-8px}
.rf-comm .start-here-card::after{bottom:-8px;transform:rotate(180deg)}
.rf-comm .start-here-title{display:flex;align-items:center;gap:15px;margin-bottom:14px;font-family:Impact,Haettenschweiler,"Arial Narrow Bold",sans-serif;font-size:31px;letter-spacing:.5px;text-transform:uppercase}
.rf-comm .start-here-title span{color:var(--green);font-size:43px}
.rf-comm .start-here-card p{margin-left:58px;max-width:270px;font-size:15px}
.rf-comm .button{display:inline-flex;align-items:center;justify-content:center;gap:15px;margin-top:23px;padding:14px 19px;background:var(--black);color:#fff;border:2px solid var(--black);font-size:12px;font-weight:900;letter-spacing:.4px;text-transform:uppercase;transition:background .2s ease,color .2s ease,transform .2s ease}
.rf-comm .button:hover{background:var(--green);border-color:var(--green);transform:translateY(-2px)}
.rf-comm .button-arrow{color:#7dcc5c;font-size:20px;line-height:1}
.rf-comm .start-here-card .button{margin-left:58px}
.rf-comm .spotlight-section{padding:0 0 68px}
.rf-comm .spotlight-card{display:grid;grid-template-columns:1.08fr .92fr;gap:0;overflow:hidden;background:var(--paper);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow)}
.rf-comm .spotlight-image{min-height:600px;background:linear-gradient(rgba(0,0,0,.08),rgba(0,0,0,.08)),url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85") center/cover no-repeat}
.rf-comm .spotlight-content{display:flex;flex-direction:column;justify-content:center;padding:55px}
.rf-comm .award-ribbon{width:fit-content;margin-bottom:28px;padding:8px 32px 8px 18px;background:var(--green);color:#fff;clip-path:polygon(0 0,100% 0,92% 50%,100% 100%,0 100%,7% 50%);font-size:12px;font-weight:900;letter-spacing:.5px;text-transform:uppercase}
.rf-comm .spotlight-type{width:fit-content;padding-bottom:7px;border-bottom:2px solid var(--green);font-family:"Comic Sans MS","Bradley Hand",cursive;font-size:clamp(27px,3vw,42px);line-height:1.12}
.rf-comm .spotlight-name{margin-top:25px;font-family:Impact,Haettenschweiler,"Arial Narrow Bold",sans-serif;font-size:40px;line-height:1;text-transform:uppercase}
.rf-comm .spotlight-role{margin-top:7px;font-size:15px;font-weight:800;text-transform:uppercase}
.rf-comm .spotlight-description{margin-top:24px;max-width:500px;font-size:17px}
.rf-comm .explore-section{padding:15px 0 64px}
.rf-comm .section-title-row{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:25px;margin-bottom:36px}
.rf-comm .section-line{height:1px;background:#aaa59c;position:relative}
.rf-comm .section-line::after{content:"";position:absolute;top:-1px;width:38px;height:3px;background:var(--green)}
.rf-comm .section-line:first-child::after{right:0}
.rf-comm .section-line:last-child::after{left:0}
.rf-comm .section-heading{font-family:"Comic Sans MS","Bradley Hand",cursive;font-size:clamp(26px,3vw,36px);text-align:center;text-transform:uppercase}
.rf-comm .community-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.rf-comm .community-card{min-height:350px;display:flex;flex-direction:column;align-items:center;padding:30px 25px 25px;text-align:center;background:var(--paper);border:1px solid var(--border);border-radius:9px;box-shadow:0 5px 13px rgba(0,0,0,.06);transition:transform .2s ease,box-shadow .2s ease}
.rf-comm .community-card:hover{transform:translateY(-5px);box-shadow:0 12px 24px rgba(0,0,0,.1)}
.rf-comm .card-icon{min-height:75px;display:grid;place-items:center;color:var(--green);font-size:58px}
.rf-comm .community-card h3{margin-top:9px;font-family:Impact,Haettenschweiler,"Arial Narrow Bold",sans-serif;font-size:27px;line-height:1;letter-spacing:.3px;text-transform:uppercase}
.rf-comm .community-card p{margin-top:16px;flex-grow:1;font-size:14px}
.rf-comm .community-card .button{width:100%;margin-top:25px}
.rf-comm .movement-banner{margin-bottom:65px;padding:45px 55px;display:grid;grid-template-columns:1.2fr .8fr;align-items:center;gap:50px;background:var(--black);color:#fff;position:relative}
.rf-comm .movement-banner::before,.rf-comm .movement-banner::after{content:"";position:absolute;left:0;width:100%;height:10px;background:linear-gradient(135deg,transparent 7px,var(--black) 0) 0 0/15px 15px repeat-x}
.rf-comm .movement-banner::before{top:-8px}
.rf-comm .movement-banner::after{bottom:-8px;transform:rotate(180deg)}
.rf-comm .movement-message{display:flex;align-items:center;gap:32px}
.rf-comm .movement-message .flag-icon{font-size:70px}
.rf-comm .movement-message h2{font-family:"Comic Sans MS","Bradley Hand",cursive;font-size:clamp(31px,4vw,49px);font-weight:500;line-height:1.2}
.rf-comm .movement-message h2 span{display:inline-block;border-bottom:3px solid var(--green)}
.rf-comm .movement-copy{font-size:15px}
.rf-comm .movement-copy strong{display:block;margin-top:12px}
.rf-comm .movement-copy strong span{color:var(--green)}
.rf-comm .site-footer{border-top:1px solid var(--border);padding:35px 0 50px;background:var(--cream)}
.rf-comm .footer-inner{display:flex;justify-content:center;align-items:center;gap:25px;flex-wrap:wrap}
.rf-comm .footer-label{font-size:12px;font-weight:900;text-transform:uppercase}
.rf-comm .social-links{display:flex;gap:20px;align-items:center}
.rf-comm .social-links a{width:38px;height:38px;display:grid;place-items:center;border-radius:50%;font-size:20px;font-weight:800;transition:background .2s ease,color .2s ease}
.rf-comm .social-links a:hover{background:var(--black);color:#fff}
@media (max-width:1000px){.rf-comm .desktop-nav,.rf-comm .nav-icons{display:none}.rf-comm .menu-button{display:block}.rf-comm .hero-grid{grid-template-columns:1fr;gap:45px}.rf-comm .start-here-card{max-width:520px;transform:rotate(1deg)}.rf-comm .spotlight-card{grid-template-columns:1fr}.rf-comm .spotlight-image{min-height:520px}.rf-comm .community-grid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:700px){.rf-comm .container{width:min(calc(100% - 28px),var(--max-width))}.rf-comm .site-header{border-top-width:6px}.rf-comm .nav-wrap{min-height:70px}.rf-comm .logo-main{font-size:23px}.rf-comm .community-hero{padding-top:45px}.rf-comm .hero-h1{font-size:clamp(62px,21vw,100px);letter-spacing:-2px}.rf-comm .hero-script{font-size:25px}.rf-comm .hero-intro{font-size:15px}.rf-comm .start-here-card{padding:34px 25px}.rf-comm .start-here-card p,.rf-comm .start-here-card .button{margin-left:0}.rf-comm .spotlight-image{min-height:400px}.rf-comm .spotlight-content{padding:36px 26px 42px}.rf-comm .community-grid{grid-template-columns:1fr}.rf-comm .community-card{min-height:320px}.rf-comm .movement-banner{grid-template-columns:1fr;padding:38px 28px}.rf-comm .movement-message{align-items:flex-start;gap:18px}.rf-comm .movement-message .flag-icon{font-size:50px}.rf-comm .section-title-row{gap:12px}}
`;

export default function AboutFounder() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <div className="rf-comm">
      <style dangerouslySetInnerHTML={{ __html: COMM_CSS }} />

      {/* HEADER */}
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="/" className="logo" aria-label="Red Flags & Receipts home">
            <span className="logo-main">Red <span>⚑</span> Flags</span>
            <span className="logo-tagline">Don't Ignore the Signs</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/collections">Future Drops</a>
            <a href="/about" className="active">Community</a>
            <a href="/contact">About</a>
            <a href="/contact">Support</a>
          </nav>

          <div className="nav-icons">
            <button type="button" className="icon-button" aria-label="Search">⌕</button>
            <a href="/shop" className="icon-button" aria-label="Shopping cart">
              ♧
              <span className="cart-count">2</span>
            </a>
          </div>

          <button
            type="button"
            className="menu-button"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
          <a href="/" onClick={close}>Home</a>
          <a href="/shop" onClick={close}>Shop</a>
          <a href="/collections" onClick={close}>Future Drops</a>
          <a href="/about" onClick={close}>Community</a>
          <a href="/contact" onClick={close}>About</a>
          <a href="/contact" onClick={close}>Support</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="community-hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">The Red Flags Society</div>
              <h1 className="hero-h1">Community</h1>
              <p className="hero-script">Real people. Real stories. Real impact.</p>
              <div className="hero-intro">
                <div className="flag-icon">⚑</div>
                <p>
                  We're more than a brand—we're a movement. This is where we lift each other up, share stories and build something bigger together.
                </p>
              </div>
            </div>

            <aside className="start-here-card">
              <h2 className="start-here-title">
                <span>⚑</span>
                Start Here
              </h2>
              <p>
                New to the community? Learn how to get involved, share your story and connect with others.
              </p>
              <a href="#explore" className="button">
                Get Started
                <span className="button-arrow">→</span>
              </a>
            </aside>
          </div>
        </section>

        {/* WEEKLY SPOTLIGHT */}
        <section className="spotlight-section">
          <div className="container">
            <article className="spotlight-card">
              <div
                className="spotlight-image"
                role="img"
                aria-label="This week's featured community member"
              />

              <div className="spotlight-content">
                <div className="award-ribbon">★ This Week's Spotlight</div>
                <p className="spotlight-type">Small Business Spotlight</p>
                <h2 className="spotlight-name">Jessica</h2>
                <p className="spotlight-role">Owner of Hot Stuff Vintage</p>
                <p className="spotlight-description">
                  Jessica turned her passion for vintage clothing and helping others into a thriving small business in our community. Her store is more than clothes—it's a creative hub, a safe space and a reminder that you can rewrite your story.
                </p>
                <div>
                  <a href="/about" className="button">
                    Read Jessica's Story
                    <span className="button-arrow">→</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* EXPLORE COMMUNITY */}
        <section className="explore-section" id="explore">
          <div className="container">
            <div className="section-title-row">
              <div className="section-line" />
              <h2 className="section-heading">Explore the Community</h2>
              <div className="section-line" />
            </div>

            <div className="community-grid">
              <article className="community-card">
                <div className="card-icon">♧</div>
                <h3>Share Your Story</h3>
                <p>Your story could be the green flag someone else needs. Share anonymously or include your name.</p>
                <a href="/confess" className="button">Share Now <span className="button-arrow">→</span></a>
              </article>

              <article className="community-card">
                <div className="card-icon">⚑</div>
                <h3>Red Flag Sightings</h3>
                <p>Spotted a red flag in the wild? Submit it and help spread awareness—and maybe save someone else.</p>
                <a href="/confess" className="button">Submit a Sighting <span className="button-arrow">→</span></a>
              </article>

              <article className="community-card">
                <div className="card-icon">🏆</div>
                <h3>Contests & Challenges</h3>
                <p>Join giveaways, photo challenges and creative contests that bring our community together.</p>
                <a href="/collections" className="button">See What's Active <span className="button-arrow">→</span></a>
              </article>

              <article className="community-card">
                <div className="card-icon">♡</div>
                <h3>Get Involved</h3>
                <p>From events to collaborations, there are plenty of ways to participate and help build something bigger.</p>
                <a href="/contact" className="button">Learn More <span className="button-arrow">→</span></a>
              </article>
            </div>
          </div>
        </section>

        {/* MOVEMENT BANNER */}
        <section className="container movement-banner">
          <div className="movement-message">
            <div className="flag-icon">⚑</div>
            <h2>
              This movement is built by us.<br />
              <span>For us.</span>
            </h2>
          </div>
          <div className="movement-copy">
            <p>Whether you're here to share, connect, create or support—thank you.</p>
            <strong>
              You're a green flag. <span>♥</span>
            </strong>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="footer-label">Follow Along</span>
          <div className="social-links">
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="TikTok">♪</a>
            <a href="#" aria-label="Pinterest">P</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="mailto:hello@shopredflags.com" aria-label="Email">✉</a>
          </div>
        </div>
      </footer>
    </div>
  );
}