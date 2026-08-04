import React, { useState } from 'react';

const SHOP_CSS = `
.rf-shop *{box-sizing:border-box;margin:0;padding:0}
.rf-shop html{scroll-behavior:smooth}
.rf-shop{--red:#c5161d;--dark-red:#8f1015;--black:#090909;--soft-black:#151515;--white:#fff;--cream:#f6f1ea;--gray:#777;--line:#ded7cf;--max-width:1440px;--shadow:0 12px 30px rgba(0,0,0,.10);--red-shadow:0 14px 34px rgba(197,22,29,.22);background:var(--cream);color:var(--black);font-family:Arial,Helvetica,sans-serif;line-height:1.5;min-height:100vh}
.rf-shop img{width:100%;display:block}
.rf-shop a{color:inherit;text-decoration:none}
.rf-shop button,.rf-shop input{font:inherit}
.rf-shop .container{width:min(100% - 32px,var(--max-width));margin-inline:auto}
.rf-shop .eyebrow{color:var(--red);font-size:.82rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase}
.rf-shop .section-title{font-size:clamp(2rem,4vw,4.4rem);font-weight:1000;letter-spacing:-.05em;line-height:.92;text-transform:uppercase}
.rf-shop .section-copy{max-width:520px;margin-top:14px;color:#343434;font-size:1rem}
.rf-shop .button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:12px 20px;border:2px solid var(--black);background:var(--black);color:var(--white);font-size:.83rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase;transition:.22s ease}
.rf-shop .button:hover,.rf-shop .button:focus-visible{border-color:var(--red);background:var(--red);transform:translateY(-2px)}
.rf-shop .button--red{border-color:var(--red);background:var(--red)}
.rf-shop .button--red:hover,.rf-shop .button--red:focus-visible{border-color:var(--white);background:var(--white);color:var(--black)}
.rf-shop .site-header{position:sticky;top:0;z-index:1000;background:rgba(9,9,9,.97);border-bottom:1px solid rgba(255,255,255,.08);backdrop-filter:blur(10px)}
.rf-shop .header-inner{min-height:76px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:32px}
.rf-shop .brand{color:var(--white);font-size:1.1rem;font-weight:1000;line-height:1;text-transform:uppercase}
.rf-shop .brand span{display:block;color:var(--red);font-size:1.35rem}
.rf-shop .main-nav{display:flex;justify-content:center;gap:clamp(16px,3vw,42px)}
.rf-shop .main-nav a{position:relative;color:var(--white);font-size:.78rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}
.rf-shop .main-nav a::after{content:"";position:absolute;left:0;bottom:-10px;width:100%;height:2px;background:var(--red);transform:scaleX(0);transform-origin:left;transition:transform .22s ease}
.rf-shop .main-nav a:hover::after,.rf-shop .main-nav a.active::after{transform:scaleX(1)}
.rf-shop .header-actions{display:flex;align-items:center;gap:12px;color:var(--white)}
.rf-shop .icon-button{min-width:40px;min-height:40px;border:1px solid rgba(255,255,255,.18);background:transparent;color:var(--white);cursor:pointer;display:inline-grid;place-items:center;text-decoration:none}
.rf-shop .menu-toggle{display:none}
.rf-shop .shop-hero{min-height:520px;display:grid;align-items:stretch;background:linear-gradient(90deg,rgba(0,0,0,.96) 0%,rgba(0,0,0,.82) 43%,rgba(0,0,0,.20) 72%,rgba(0,0,0,.08) 100%),url("https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85") center/cover no-repeat;color:var(--white)}
.rf-shop .hero-inner{display:flex;align-items:center;min-height:520px}
.rf-shop .hero-content{max-width:720px;padding-block:72px}
.rf-shop .hero-title{font-size:clamp(5rem,14vw,12rem);font-weight:1000;letter-spacing:-.08em;line-height:.74;text-transform:uppercase}
.rf-shop .hero-copy{max-width:560px;margin-top:28px;font-family:"Courier New",monospace;font-size:clamp(1rem,2vw,1.35rem)}
.rf-shop .hero-mark{width:280px;height:8px;margin-top:26px;background:var(--red);transform:rotate(-2deg)}
.rf-shop .anchor-nav{position:sticky;top:76px;z-index:900;overflow-x:auto;background:var(--white);border-bottom:1px solid var(--line);scrollbar-width:none}
.rf-shop .anchor-nav::-webkit-scrollbar{display:none}
.rf-shop .anchor-list{min-width:max-content;display:flex;justify-content:center;gap:42px;padding:18px 16px}
.rf-shop .anchor-list a{position:relative;font-size:.78rem;font-weight:900;letter-spacing:.05em;text-transform:uppercase}
.rf-shop .anchor-list a:hover{color:var(--red)}
.rf-shop .collection-section{scroll-margin-top:145px;padding:78px 0;border-bottom:1px solid var(--line)}
.rf-shop .collection-layout{display:grid;grid-template-columns:minmax(220px,.72fr) minmax(0,2.4fr);gap:42px;align-items:start}
.rf-shop .collection-intro{position:sticky;top:170px}
.rf-shop .collection-intro .button{margin-top:26px}
.rf-shop .product-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:16px}
.rf-shop .product-card{position:relative;overflow:hidden;min-width:0;background:var(--white);border:2px solid var(--red);box-shadow:0 4px 0 var(--red);transition:transform .22s ease,box-shadow .22s ease}
.rf-shop .product-card:hover{transform:translateY(-6px);box-shadow:var(--red-shadow)}
.rf-shop .product-card__image-wrap{position:relative;aspect-ratio:4/4.6;overflow:hidden;background:#eee8df}
.rf-shop .product-card__image{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}
.rf-shop .product-card:hover .product-card__image{transform:scale(1.04)}
.rf-shop .product-card__badge{position:absolute;top:12px;left:12px;z-index:2;padding:7px 10px;background:var(--red);color:var(--white);font-size:.68rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}
.rf-shop .product-card__body{padding:12px}
.rf-shop .product-card__category{color:var(--red);font-size:.69rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase}
.rf-shop .product-card__title{min-height:38px;margin-top:6px;font-size:.92rem;font-weight:900;line-height:1.15}
.rf-shop .product-card__price{margin-top:7px;color:var(--red);font-size:.92rem;font-weight:1000}
.rf-shop .product-card__link{width:100%;margin-top:10px;display:inline-flex;align-items:center;justify-content:space-between;padding-top:10px;border-top:1px solid #e8e2da;font-size:.66rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}
.rf-shop .product-card__link:hover{color:var(--red)}
.rf-shop .category-band{padding:0;background:var(--white);border-bottom:1px solid var(--line)}
.rf-shop .category-grid{display:grid;grid-template-columns:repeat(3,1fr)}
.rf-shop .category-panel{padding:58px 32px;border-right:1px solid var(--line)}
.rf-shop .category-panel:last-child{border-right:0}
.rf-shop .category-panel .mini-grid{margin-top:28px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.rf-shop .mini-product{overflow:hidden;border:2px solid var(--red);background:var(--cream)}
.rf-shop .mini-product img{aspect-ratio:4/5;object-fit:cover}
.rf-shop .category-panel .button{margin-top:26px}
.rf-shop .split-feature{display:grid;grid-template-columns:1fr 1fr;background:var(--cream);border-bottom:1px solid var(--line)}
.rf-shop .feature-card{min-height:420px;display:grid;grid-template-columns:.9fr 1.1fr;align-items:center;gap:28px;padding:48px;border-right:1px solid var(--line)}
.rf-shop .feature-card:last-child{border-right:0}
.rf-shop .feature-card img{height:100%;min-height:300px;object-fit:cover;border:2px solid var(--red);box-shadow:8px 8px 0 var(--red)}
.rf-shop .feature-card .button{margin-top:22px}
.rf-shop .future-drops{padding:80px 0;background:#f0e9df;border-bottom:1px solid var(--line)}
.rf-shop .future-grid{display:grid;grid-template-columns:.75fr repeat(3,1fr);gap:22px;align-items:stretch}
.rf-shop .drop-card{min-height:300px;display:flex;flex-direction:column;justify-content:center;padding:28px;background:var(--black);color:var(--white);border:2px solid var(--red);box-shadow:7px 7px 0 var(--red);text-align:center}
.rf-shop .drop-card:nth-child(3){background:var(--cream);color:var(--black)}
.rf-shop .drop-card__number{font-size:.75rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase}
.rf-shop .drop-card__title{margin-top:20px;font-size:clamp(1.5rem,3vw,2.6rem);font-weight:1000;line-height:.95;text-transform:uppercase}
.rf-shop .drop-card__status{margin-top:22px;color:var(--red);font-size:.78rem;font-weight:1000;letter-spacing:.12em;text-transform:uppercase}
.rf-shop .newsletter{padding:46px 0;background:var(--black);color:var(--white)}
.rf-shop .newsletter-inner{display:grid;grid-template-columns:auto minmax(260px,1fr);gap:34px;align-items:center}
.rf-shop .newsletter-title{font-size:clamp(1.8rem,4vw,3.6rem);font-weight:1000;line-height:.95;text-transform:uppercase}
.rf-shop .newsletter-form{display:grid;grid-template-columns:1fr auto;gap:12px}
.rf-shop .newsletter-form input{width:100%;min-height:52px;padding:0 18px;border:1px solid #666;background:#111;color:var(--white);outline:none}
.rf-shop .newsletter-form input:focus{border-color:var(--red)}
.rf-shop .site-footer{padding:68px 0 28px;background:#060606;color:var(--white)}
.rf-shop .footer-grid{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:44px}
.rf-shop .footer-heading{color:var(--red);font-size:.8rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase}
.rf-shop .footer-column ul{margin-top:16px;list-style:none}
.rf-shop .footer-column li+li{margin-top:8px}
.rf-shop .footer-column a{color:#c8c8c8;font-size:.9rem}
.rf-shop .footer-column a:hover{color:var(--red)}
.rf-shop .footer-bottom{margin-top:56px;padding-top:22px;display:flex;justify-content:space-between;gap:20px;border-top:1px solid #262626;color:#888;font-size:.8rem}
.rf-shop .footer-tagline{max-width:280px;margin-top:18px;color:#aaa}
@media (max-width:1280px){.rf-shop .product-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
@media (max-width:1100px){.rf-shop .main-nav{gap:18px}.rf-shop .product-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.rf-shop .category-grid{grid-template-columns:1fr}.rf-shop .category-panel{border-right:0;border-bottom:1px solid var(--line)}.rf-shop .split-feature{grid-template-columns:1fr}.rf-shop .feature-card{border-right:0;border-bottom:1px solid var(--line)}.rf-shop .future-grid{grid-template-columns:repeat(2,1fr)}.rf-shop .future-grid>.collection-intro{grid-column:1/-1;position:static}}
@media (max-width:820px){.rf-shop .product-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.rf-shop .header-inner{grid-template-columns:1fr auto}.rf-shop .main-nav{position:absolute;top:76px;left:0;right:0;display:none;flex-direction:column;align-items:center;padding:28px;background:var(--black);border-top:1px solid #222}.rf-shop .main-nav.open{display:flex}.rf-shop .header-actions .icon-button:first-child{display:none}.rf-shop .menu-toggle{display:inline-grid;place-items:center}.rf-shop .shop-hero,.rf-shop .hero-inner{min-height:470px}.rf-shop .shop-hero{background-position:64% center}.rf-shop .hero-title{font-size:clamp(4.4rem,22vw,8rem)}.rf-shop .collection-layout{grid-template-columns:1fr}.rf-shop .collection-intro{position:static}.rf-shop .feature-card{grid-template-columns:1fr}.rf-shop .newsletter-inner{grid-template-columns:1fr}.rf-shop .footer-grid{grid-template-columns:1fr 1fr}}
@media (max-width:560px){.rf-shop .container{width:min(100% - 22px,var(--max-width))}.rf-shop .hero-content{padding-block:54px}.rf-shop .hero-copy{max-width:320px}.rf-shop .anchor-list{justify-content:flex-start;gap:24px}.rf-shop .collection-section{padding:54px 0}.rf-shop .product-grid{grid-template-columns:1fr}.rf-shop .category-panel{padding:44px 18px}.rf-shop .category-panel .mini-grid{grid-template-columns:repeat(2,1fr)}.rf-shop .feature-card{padding:34px 18px}.rf-shop .future-grid{grid-template-columns:1fr}.rf-shop .newsletter-form{grid-template-columns:1fr}.rf-shop .footer-grid{grid-template-columns:1fr}.rf-shop .footer-bottom{flex-direction:column}}
`;

export default function Shop() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="rf-shop">
      <style dangerouslySetInnerHTML={{ __html: SHOP_CSS }} />

      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="brand" aria-label="Red Flags and Receipts home">
            <span>Red Flags</span>
            &amp; Receipts
          </a>

          <nav className={`main-nav${menuOpen ? ' open' : ''}`} id="mainNav" aria-label="Main navigation">
            <a href="/" onClick={closeMenu}>Home</a>
            <a href="/shop" className="active" onClick={closeMenu}>Shop</a>
            <a href="/journal" onClick={closeMenu}>Journal</a>
            <a href="/confess" onClick={closeMenu}>Confess</a>
            <a href="/about" onClick={closeMenu}>Founder</a>
            <a href="/contact" onClick={closeMenu}>Contact</a>
          </nav>

          <div className="header-actions">
            <a href="/shop" className="icon-button" aria-label="Shopping bag">Bag</a>
            <button
              type="button"
              className="icon-button menu-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="shop-hero">
          <div className="container hero-inner">
            <div className="hero-content">
              <p className="eyebrow">Red Flags &amp; Receipts</p>
              <h1 className="hero-title">Shop</h1>
              <p className="hero-copy">
                Everything you need to wear your standards, keep receipts, and heal out loud.
              </p>
              <div className="hero-mark" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ANCHOR NAV */}
        <nav className="anchor-nav" aria-label="Shop categories">
          <div className="anchor-list">
            <a href="#featured">Featured</a>
            <a href="#signature">Signature</a>
            <a href="#apparel">Apparel</a>
            <a href="#accessories">Accessories</a>
            <a href="#digital">Digital</a>
            <a href="#gifts-pets">Gifts &amp; Pets</a>
            <a href="#future-drops">Future Drops</a>
          </div>
        </nav>

        {/* FEATURED DROP */}
        <section className="collection-section" id="featured">
          <div className="container collection-layout">
            <div className="collection-intro">
              <p className="eyebrow">Featured Drop</p>
              <h2 className="section-title">Drop 001 — The Beginning</h2>
              <p className="section-copy">
                The first pieces that started the movement. Show only four products here, then send shoppers into the full collection.
              </p>
              <a className="button" href="/collections/featured-signature-collection">Shop the Drop →</a>
            </div>

            <div className="product-grid">
              <article className="product-card">
                <a href="https://shopredflags.myshopify.com/collections/featured-signature-collection">
                  <div className="product-card__image-wrap">
                    <span className="product-card__badge">Featured</span>
                    <img className="product-card__image" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85" alt="Black Red Flags hoodie" />
                  </div>
                  <div className="product-card__body">
                    <p className="product-card__category">Apparel</p>
                    <h3 className="product-card__title">Red Flag Hoodie</h3>
                    <p className="product-card__price">$69.99</p>
                    <span className="product-card__link">View Product <span>→</span></span>
                  </div>
                </a>
              </article>

              <article className="product-card">
                <a href="https://shopredflags.myshopify.com/collections/featured-signature-collection">
                  <div className="product-card__image-wrap">
                    <span className="product-card__badge">Signature</span>
                    <img className="product-card__image" src="https://images.unsplash.com/photo-1601924638867-3ec4f2f22e15?auto=format&fit=crop&w=900&q=85" alt="Red fashion scarf" />
                  </div>
                  <div className="product-card__body">
                    <p className="product-card__category">Accessories</p>
                    <h3 className="product-card__title">Signature Red Flag Scarf</h3>
                    <p className="product-card__price">$39.99</p>
                    <span className="product-card__link">View Product <span>→</span></span>
                  </div>
                </a>
              </article>

              <article className="product-card">
                <a href="https://shopredflags.myshopify.com/collections/featured-signature-collection">
                  <div className="product-card__image-wrap">
                    <span className="product-card__badge">New</span>
                    <img className="product-card__image" src="https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85" alt="Black fashion cap" />
                  </div>
                  <div className="product-card__body">
                    <p className="product-card__category">Accessories</p>
                    <h3 className="product-card__title">Protect Your Peace Hat</h3>
                    <p className="product-card__price">$34.99</p>
                    <span className="product-card__link">View Product <span>→</span></span>
                  </div>
                </a>
              </article>

              <article className="product-card">
                <a href="https://shopredflags.myshopify.com/collections/featured-signature-collection">
                  <div className="product-card__image-wrap">
                    <img className="product-card__image" src="https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=900&q=85" alt="Black tote bag" />
                  </div>
                  <div className="product-card__body">
                    <p className="product-card__category">Bags</p>
                    <h3 className="product-card__title">Close Chapters Tote</h3>
                    <p className="product-card__price">$24.99</p>
                    <span className="product-card__link">View Product <span>→</span></span>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* SIGNATURE COLLECTION */}
        <section className="collection-section" id="signature">
          <div className="container collection-layout">
            <div className="collection-intro">
              <p className="eyebrow">The Signature Collection</p>
              <h2 className="section-title">The Pieces That Define the Brand</h2>
              <p className="section-copy">
                Keep your strongest four signature products here. These should be the pieces that remain available between drops.
              </p>
              <a className="button" href="https://shopredflags.myshopify.com/collections/featured-signature-collection">View Collection →</a>
            </div>

            <div className="product-grid">
              <article className="product-card">
                <a href="https://shopredflags.myshopify.com/products/signature-lightweight-red-flag-fashion-scarf">
                  <div className="product-card__image-wrap">
                    <img className="product-card__image" src="https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=85" alt="Patterned scarf" />
                  </div>
                  <div className="product-card__body">
                    <p className="product-card__category">Signature</p>
                    <h3 className="product-card__title">Signature Scarf</h3>
                    <p className="product-card__price">$39.99</p>
                    <span className="product-card__link">View Product <span>→</span></span>
                  </div>
                </a>
              </article>

              <article className="product-card">
                <a href="https://shopredflags.myshopify.com/products/signature-red-flags-pencil-skirt-1">
                  <div className="product-card__image-wrap">
                    <img className="product-card__image" src="https://images.unsplash.com/photo-1583496661160-fb5886a13d14?auto=format&fit=crop&w=900&q=85" alt="Black pencil skirt" />
                  </div>
                  <div className="product-card__body">
                    <p className="product-card__category">Bottoms</p>
                    <h3 className="product-card__title">Signature Red Flags Pencil Skirt</h3>
                    <p className="product-card__price">$53.68</p>
                    <span className="product-card__link">View Product <span>→</span></span>
                  </div>
                </a>
              </article>

              <article className="product-card">
                <a href="https://shopredflags.myshopify.com/products/the-receipts-spiral-journal">
                  <div className="product-card__image-wrap">
                    <img className="product-card__image" src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=900&q=85" alt="Black spiral journal" />
                  </div>
                  <div className="product-card__body">
                    <p className="product-card__category">Stationery</p>
                    <h3 className="product-card__title">The Receipts Spiral Journal</h3>
                    <p className="product-card__price">$24.99</p>
                    <span className="product-card__link">View Product <span>→</span></span>
                  </div>
                </a>
              </article>

              <article className="product-card">
                <a href="https://shopredflags.myshopify.com/products/backpack">
                  <div className="product-card__image-wrap">
                    <img className="product-card__image" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85" alt="Black backpack" />
                  </div>
                  <div className="product-card__body">
                    <p className="product-card__category">Bags</p>
                    <h3 className="product-card__title">Signature Red Flags Backpack</h3>
                    <p className="product-card__price">$59.99</p>
                    <span className="product-card__link">View Product <span>→</span></span>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* APPAREL / ACCESSORIES / DIGITAL */}
        <section className="category-band">
          <div className="category-grid">
            <article className="category-panel" id="apparel">
              <p className="eyebrow">Apparel</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>Wear the Warning</h2>
              <p className="section-copy">Show four best-selling clothing items, then let customers open the full apparel collection.</p>

              <div className="mini-grid">
                <a className="mini-product" href="https://shopredflags.myshopify.com/collections/apparel"><img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80" alt="Black hoodie" /></a>
                <a className="mini-product" href="https://shopredflags.myshopify.com/collections/apparel"><img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80" alt="Red t-shirt" /></a>
                <a className="mini-product" href="https://shopredflags.myshopify.com/collections/apparel"><img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80" alt="Black jacket" /></a>
                <a className="mini-product" href="https://shopredflags.myshopify.com/collections/apparel"><img src="https://images.unsplash.com/photo-1583496661160-fb5886a13d14?auto=format&fit=crop&w=500&q=80" alt="Black skirt" /></a>
              </div>

              <a className="button" href="https://shopredflags.myshopify.com/collections/apparel">Shop All Apparel →</a>
            </article>

            <article className="category-panel" id="accessories">
              <p className="eyebrow">Accessories</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>Small Details. Loud Message.</h2>
              <p className="section-copy">Scarves, bags, hats, cases, and the pieces that finish the look.</p>

              <div className="mini-grid">
                <a className="mini-product" href="https://shopredflags.myshopify.com/collections/accessories"><img src="https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=500&q=80" alt="Scarf" /></a>
                <a className="mini-product" href="https://shopredflags.myshopify.com/collections/accessories"><img src="https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=500&q=80" alt="Hat" /></a>
                <a className="mini-product" href="https://shopredflags.myshopify.com/collections/accessories"><img src="https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=500&q=80" alt="Tote bag" /></a>
                <a className="mini-product" href="https://shopredflags.myshopify.com/collections/accessories"><img src="https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=500&q=80" alt="Phone case" /></a>
              </div>

              <a className="button" href="https://shopredflags.myshopify.com/collections/accessories">Shop All Accessories →</a>
            </article>

            <article className="category-panel" id="digital">
              <p className="eyebrow">Books, Journals &amp; Digital</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>Write It Down</h2>
              <p className="section-copy">Keep the receipts. Add workbooks, coloring books, journals, and downloadable guides here.</p>

              <div className="mini-grid">
                <a className="mini-product" href="https://shopredflags.myshopify.com/collections/digital"><img src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=500&q=80" alt="Journal" /></a>
                <a className="mini-product" href="https://shopredflags.myshopify.com/collections/digital"><img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80" alt="Book" /></a>
                <a className="mini-product" href="https://shopredflags.myshopify.com/collections/digital"><img src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&q=80" alt="Workbook" /></a>
                <a className="mini-product" href="https://shopredflags.myshopify.com/collections/digital"><img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80" alt="Guide" /></a>
              </div>

              <a className="button" href="https://shopredflags.myshopify.com/collections/digital">Explore Digital →</a>
            </article>
          </div>
        </section>

        {/* GIFTS & PETS */}
        <section className="split-feature" id="gifts-pets">
          <article className="feature-card">
            <div>
              <p className="eyebrow">Gifts &amp; Sets</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem,4vw,4rem)' }}>Give Them the Hint</h2>
              <p className="section-copy">Gift boxes for breakups, fresh starts, birthdays, and the friend who needs the reminder.</p>
              <a className="button" href="https://shopredflags.myshopify.com/collections/gift-sets">Shop Gift Sets →</a>
            </div>
            <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85" alt="Gift set box" />
          </article>

          <article className="feature-card">
            <div>
              <p className="eyebrow">Ramsey's Picks</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem,4vw,4rem)' }}>For the Real Boss</h2>
              <p className="section-copy">Bandanas, blankets, bowls, and accessories for dogs with excellent judgment.</p>
              <a className="button" href="/collections/pets">Shop Pets →</a>
            </div>
            <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=85" alt="French bulldog wearing a bandana" />
          </article>
        </section>

        {/* FUTURE DROPS */}
        <section className="future-drops" id="future-drops">
          <div className="container future-grid">
            <div className="collection-intro">
              <p className="eyebrow">Future Drops</p>
              <h2 className="section-title">What Comes Next</h2>
              <p className="section-copy">Use these cards for teasers, waitlists, launch dates, previews, and open submissions.</p>
              <a className="button" href="/collections">See What's Coming →</a>
            </div>

            <a className="drop-card" href="/collections">
              <span className="drop-card__number">Drop 002</span>
              <h3 className="drop-card__title">No Contact Collection</h3>
              <span className="drop-card__status">Coming Soon</span>
            </a>

            <a className="drop-card" href="/collections">
              <span className="drop-card__number">Drop 003</span>
              <h3 className="drop-card__title">CEO of Me Collection</h3>
              <span className="drop-card__status">In Development</span>
            </a>

            <a className="drop-card" href="/confess">
              <span className="drop-card__number">Community</span>
              <h3 className="drop-card__title">Designer Collaboration</h3>
              <span className="drop-card__status">Open Submissions</span>
            </a>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="newsletter">
          <div className="container newsletter-inner">
            <div>
              <p className="eyebrow">Do Not Miss the Next Drop</p>
              <h2 className="newsletter-title">Join the Red Flag List</h2>
            </div>

            <form className="newsletter-form" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="rf-shop-email" style={{ position: 'absolute', left: '-9999px' }}>Email address</label>
              <input id="rf-shop-email" name="email" type="email" placeholder="Email address" required />
              <button className="button button--red" type="submit">Join the List →</button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="/" className="brand">
                <span>Red Flags</span>
                &amp; Receipts
              </a>
              <p className="footer-tagline">Wear the warning. Write the ending.</p>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Shop</p>
              <ul>
                <li><a href="https://shopredflags.myshopify.com/collections/all">All Products</a></li>
                <li><a href="https://shopredflags.myshopify.com/collections/featured-signature-collection">Signature Collection</a></li>
                <li><a href="https://shopredflags.myshopify.com/collections/apparel">Apparel</a></li>
                <li><a href="https://shopredflags.myshopify.com/collections/accessories">Accessories</a></li>
                <li><a href="https://shopredflags.myshopify.com/collections/digital">Digital</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <p className="footer-heading">About</p>
              <ul>
                <li><a href="/about">Founder</a></li>
                <li><a href="/confess">Confess</a></li>
                <li><a href="/journal">Journal</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Help</p>
              <ul>
                <li><a href="/contact">FAQ</a></li>
                <li><a href="/contact">Shipping</a></li>
                <li><a href="/contact">Returns</a></li>
                <li><a href="/contact">Track Order</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Red Flags &amp; Receipts. All rights reserved.</span>
            <span>
              <a href="/contact">Privacy</a> ·
              <a href="/contact">Terms</a> ·
              <a href="/contact">Refunds</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}