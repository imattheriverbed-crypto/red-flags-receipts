<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Community | Red Flags & Receipts</title>

  <style>
    :root {
      --cream: #f7f3ea;
      --paper: #fffdf8;
      --black: #101010;
      --green: #51913c;
      --green-dark: #326b27;
      --green-light: #e5efd9;
      --gray: #706f69;
      --border: #d8d2c6;
      --shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
      --radius: 14px;
      --max-width: 1240px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--cream);
      color: var(--black);
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.55;
    }

    img {
      display: block;
      width: 100%;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button,
    a {
      -webkit-tap-highlight-color: transparent;
    }

    .container {
      width: min(calc(100% - 40px), var(--max-width));
      margin-inline: auto;
    }

    /* HEADER */

    .site-header {
      background: rgba(247, 243, 234, 0.96);
      border-top: 9px solid var(--black);
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(12px);
    }

    .nav-wrap {
      min-height: 84px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
    }

    .logo {
      display: flex;
      flex-direction: column;
      line-height: 0.95;
      min-width: 185px;
    }

    .logo-main {
      font-size: 27px;
      font-weight: 900;
      letter-spacing: -2px;
      text-transform: uppercase;
    }

    .logo-main span {
      color: var(--green);
    }

    .logo-tagline {
      margin-top: 8px;
      font-size: 9px;
      font-weight: 800;
      letter-spacing: 1.4px;
      text-transform: uppercase;
    }

    .desktop-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 35px;
      flex: 1;
    }

    .desktop-nav a {
      position: relative;
      padding: 30px 0 27px;
      font-size: 13px;
      font-weight: 800;
      text-transform: uppercase;
    }

    .desktop-nav a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 18px;
      width: 100%;
      height: 2px;
      background: var(--green);
      transform: scaleX(0);
      transition: transform 0.2s ease;
    }

    .desktop-nav a:hover::after,
    .desktop-nav a.active::after {
      transform: scaleX(1);
    }

    .nav-icons {
      display: flex;
      align-items: center;
      gap: 17px;
      min-width: 130px;
      justify-content: flex-end;
    }

    .icon-button {
      border: 0;
      background: transparent;
      font-size: 21px;
      cursor: pointer;
      position: relative;
    }

    .cart-count {
      position: absolute;
      top: -8px;
      right: -10px;
      width: 18px;
      height: 18px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: var(--green);
      color: white;
      font-size: 10px;
      font-weight: 800;
    }

    .menu-button {
      display: none;
      border: 0;
      background: transparent;
      font-size: 26px;
      cursor: pointer;
    }

    .mobile-nav {
      display: none;
      padding: 0 20px 22px;
    }

    .mobile-nav.open {
      display: grid;
      gap: 8px;
    }

    .mobile-nav a {
      padding: 12px;
      border-bottom: 1px solid var(--border);
      font-size: 14px;
      font-weight: 800;
      text-transform: uppercase;
    }

    /* HERO */

    .community-hero {
      padding: 68px 0 45px;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.45fr 0.75fr;
      gap: 70px;
      align-items: center;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
      font-size: 13px;
      font-weight: 900;
      letter-spacing: 1.7px;
      text-transform: uppercase;
    }

    .eyebrow::before {
      content: "⚑";
      color: var(--green);
      font-size: 25px;
    }

    h1 {
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      font-size: clamp(72px, 10vw, 145px);
      font-weight: 900;
      letter-spacing: -4px;
      line-height: 0.84;
      text-transform: uppercase;
    }

    .hero-script {
      margin-top: 23px;
      font-family: "Comic Sans MS", "Bradley Hand", cursive;
      font-size: clamp(24px, 3vw, 38px);
      font-weight: 700;
    }

    .hero-intro {
      margin-top: 31px;
      display: flex;
      gap: 18px;
      max-width: 620px;
      font-size: 16px;
    }

    .flag-icon {
      color: var(--green);
      font-size: 45px;
      line-height: 1;
      flex-shrink: 0;
    }

    /* START HERE */

    .start-here-card {
      position: relative;
      background: var(--green-light);
      padding: 42px 42px 38px;
      transform: rotate(2deg);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
    }

    .start-here-card::before,
    .start-here-card::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 12px;
      background:
        linear-gradient(
          135deg,
          transparent 8px,
          var(--green-light) 0
        ) 0 0 / 16px 16px repeat-x;
    }

    .start-here-card::before {
      top: -8px;
    }

    .start-here-card::after {
      bottom: -8px;
      transform: rotate(180deg);
    }

    .start-here-title {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 14px;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      font-size: 31px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .start-here-title span {
      color: var(--green);
      font-size: 43px;
    }

    .start-here-card p {
      margin-left: 58px;
      max-width: 270px;
      font-size: 15px;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      margin-top: 23px;
      padding: 14px 19px;
      background: var(--black);
      color: white;
      border: 2px solid var(--black);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      transition:
        background 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;
    }

    .button:hover {
      background: var(--green);
      border-color: var(--green);
      transform: translateY(-2px);
    }

    .button-arrow {
      color: #7dcc5c;
      font-size: 20px;
      line-height: 1;
    }

    .start-here-card .button {
      margin-left: 58px;
    }

    /* SPOTLIGHT */

    .spotlight-section {
      padding: 0 0 68px;
    }

    .spotlight-card {
      display: grid;
      grid-template-columns: 1.08fr 0.92fr;
      gap: 0;
      overflow: hidden;
      background: var(--paper);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }

    .spotlight-image {
      min-height: 600px;
      background:
        linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)),
        url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85")
        center / cover no-repeat;
    }

    .spotlight-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 55px;
    }

    .award-ribbon {
      width: fit-content;
      margin-bottom: 28px;
      padding: 8px 32px 8px 18px;
      background: var(--green);
      color: white;
      clip-path: polygon(
        0 0,
        100% 0,
        92% 50%,
        100% 100%,
        0 100%,
        7% 50%
      );
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .spotlight-type {
      width: fit-content;
      padding-bottom: 7px;
      border-bottom: 2px solid var(--green);
      font-family: "Comic Sans MS", "Bradley Hand", cursive;
      font-size: clamp(27px, 3vw, 42px);
      line-height: 1.12;
    }

    .spotlight-name {
      margin-top: 25px;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      font-size: 40px;
      line-height: 1;
      text-transform: uppercase;
    }

    .spotlight-role {
      margin-top: 7px;
      font-size: 15px;
      font-weight: 800;
      text-transform: uppercase;
    }

    .spotlight-description {
      margin-top: 24px;
      max-width: 500px;
      font-size: 17px;
    }

    /* EXPLORE */

    .explore-section {
      padding: 15px 0 64px;
    }

    .section-title-row {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 25px;
      margin-bottom: 36px;
    }

    .section-line {
      height: 1px;
      background: #aaa59c;
      position: relative;
    }

    .section-line::after {
      content: "";
      position: absolute;
      top: -1px;
      width: 38px;
      height: 3px;
      background: var(--green);
    }

    .section-line:first-child::after {
      right: 0;
    }

    .section-line:last-child::after {
      left: 0;
    }

    .section-heading {
      font-family: "Comic Sans MS", "Bradley Hand", cursive;
      font-size: clamp(26px, 3vw, 36px);
      text-align: center;
      text-transform: uppercase;
    }

    .community-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .community-card {
      min-height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 25px 25px;
      text-align: center;
      background: var(--paper);
      border: 1px solid var(--border);
      border-radius: 9px;
      box-shadow: 0 5px 13px rgba(0, 0, 0, 0.06);
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
    }

    .community-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    .card-icon {
      min-height: 75px;
      display: grid;
      place-items: center;
      color: var(--green);
      font-size: 58px;
    }

    .community-card h3 {
      margin-top: 9px;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      font-size: 27px;
      line-height: 1;
      letter-spacing: 0.3px;
      text-transform: uppercase;
    }

    .community-card p {
      margin-top: 16px;
      flex-grow: 1;
      font-size: 14px;
    }

    .community-card .button {
      width: 100%;
      margin-top: 25px;
    }

    /* BOTTOM BANNER */

    .movement-banner {
      margin-bottom: 65px;
      padding: 45px 55px;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      align-items: center;
      gap: 50px;
      background: var(--black);
      color: white;
      position: relative;
    }

    .movement-banner::before,
    .movement-banner::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      background:
        linear-gradient(
          135deg,
          transparent 7px,
          var(--black) 0
        ) 0 0 / 15px 15px repeat-x;
    }

    .movement-banner::before {
      top: -8px;
    }

    .movement-banner::after {
      bottom: -8px;
      transform: rotate(180deg);
    }

    .movement-message {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .movement-message .flag-icon {
      font-size: 70px;
    }

    .movement-message h2 {
      font-family: "Comic Sans MS", "Bradley Hand", cursive;
      font-size: clamp(31px, 4vw, 49px);
      font-weight: 500;
      line-height: 1.2;
    }

    .movement-message h2 span {
      display: inline-block;
      border-bottom: 3px solid var(--green);
    }

    .movement-copy {
      font-size: 15px;
    }

    .movement-copy strong {
      display: block;
      margin-top: 12px;
    }

    .movement-copy strong span {
      color: var(--green);
    }

    /* FOOTER */

    .site-footer {
      border-top: 1px solid var(--border);
      padding: 35px 0 50px;
    }

    .footer-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;
      flex-wrap: wrap;
    }

    .footer-label {
      font-size: 12px;
      font-weight: 900;
      text-transform: uppercase;
    }

    .social-links {
      display: flex;
      gap: 20px;
      align-items: center;
    }

    .social-links a {
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      font-size: 20px;
      font-weight: 800;
      transition:
        background 0.2s ease,
        color 0.2s ease;
    }

    .social-links a:hover {
      background: var(--black);
      color: white;
    }

    /* RESPONSIVE */

    @media (max-width: 1000px) {
      .desktop-nav,
      .nav-icons {
        display: none;
      }

      .menu-button {
        display: block;
      }

      .hero-grid {
        grid-template-columns: 1fr;
        gap: 45px;
      }

      .start-here-card {
        max-width: 520px;
        transform: rotate(1deg);
      }

      .spotlight-card {
        grid-template-columns: 1fr;
      }

      .spotlight-image {
        min-height: 520px;
      }

      .community-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 700px) {
      .container {
        width: min(calc(100% - 28px), var(--max-width));
      }

      .site-header {
        border-top-width: 6px;
      }

      .nav-wrap {
        min-height: 70px;
      }

      .logo-main {
        font-size: 23px;
      }

      .community-hero {
        padding-top: 45px;
      }

      h1 {
        font-size: clamp(62px, 21vw, 100px);
        letter-spacing: -2px;
      }

      .hero-script {
        font-size: 25px;
      }

      .hero-intro {
        font-size: 15px;
      }

      .start-here-card {
        padding: 34px 25px;
      }

      .start-here-card p,
      .start-here-card .button {
        margin-left: 0;
      }

      .spotlight-image {
        min-height: 400px;
      }

      .spotlight-content {
        padding: 36px 26px 42px;
      }

      .community-grid {
        grid-template-columns: 1fr;
      }

      .community-card {
        min-height: 320px;
      }

      .movement-banner {
        grid-template-columns: 1fr;
        padding: 38px 28px;
      }

      .movement-message {
        align-items: flex-start;
        gap: 18px;
      }

      .movement-message .flag-icon {
        font-size: 50px;
      }

      .section-title-row {
        gap: 12px;
      }
    }
  </style>
</head>

<body>

  <!-- HEADER -->

  <header class="site-header">
    <div class="container nav-wrap">

      <a href="/" class="logo" aria-label="Red Flags & Receipts home">
        <span class="logo-main">Red <span>⚑</span> Flags</span>
        <span class="logo-tagline">Don't Ignore the Signs</span>
      </a>

      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/shop.html">Shop</a>
        <a href="/future-drops.html">Future Drops</a>
        <a href="/community.html" class="active">Community</a>
        <a href="/about.html">About</a>
        <a href="/support.html">Support</a>
      </nav>

      <div class="nav-icons">
        <button class="icon-button" aria-label="Search">⌕</button>
        <button class="icon-button" aria-label="Account">♙</button>
        <a href="/cart" class="icon-button" aria-label="Shopping cart">
          ♧
          <span class="cart-count">2</span>
        </a>
      </div>

      <button
        class="menu-button"
        id="menuButton"
        aria-label="Open navigation"
        aria-expanded="false"
      >
        ☰
      </button>

    </div>

    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
      <a href="/">Home</a>
      <a href="/shop.html">Shop</a>
      <a href="/future-drops.html">Future Drops</a>
      <a href="/community.html">Community</a>
      <a href="/about.html">About</a>
      <a href="/support.html">Support</a>
    </nav>
  </header>


  <main>

    <!-- HERO -->

    <section class="community-hero">
      <div class="container hero-grid">

        <div>
          <div class="eyebrow">The Red Flags Society</div>

          <h1>Community</h1>

          <p class="hero-script">
            Real people. Real stories. Real impact.
          </p>

          <div class="hero-intro">
            <div class="flag-icon">⚑</div>

            <p>
              We’re more than a brand—we’re a movement. This is where
              we lift each other up, share stories and build something
              bigger together.
            </p>
          </div>
        </div>

        <aside class="start-here-card">
          <h2 class="start-here-title">
            <span>⚑</span>
            Start Here
          </h2>

          <p>
            New to the community? Learn how to get involved, share your
            story and connect with others.
          </p>

          <a href="#explore" class="button">
            Get Started
            <span class="button-arrow">→</span>
          </a>
        </aside>

      </div>
    </section>


    <!-- WEEKLY SPOTLIGHT -->

    <section class="spotlight-section">
      <div class="container">

        <article class="spotlight-card">

          <!-- Replace this image in the CSS .spotlight-image rule -->
          <div
            class="spotlight-image"
            role="img"
            aria-label="This week's featured community member"
          ></div>

          <div class="spotlight-content">

            <div class="award-ribbon">
              ★ This Week’s Spotlight
            </div>

            <!-- This title changes every week -->
            <p class="spotlight-type">
              Small Business Spotlight
            </p>

            <h2 class="spotlight-name">Jessica</h2>

            <p class="spotlight-role">
              Owner of Hot Stuff Vintage
            </p>

            <p class="spotlight-description">
              Jessica turned her passion for vintage clothing and helping
              others into a thriving small business in our community. Her
              store is more than clothes—it’s a creative hub, a safe space
              and a reminder that you can rewrite your story.
            </p>

            <div>
              <a href="/spotlight.html" class="button">
                Read Jessica’s Story
                <span class="button-arrow">→</span>
              </a>
            </div>

          </div>
        </article>

      </div>
    </section>


    <!-- EXPLORE COMMUNITY -->

    <section class="explore-section" id="explore">
      <div class="container">

        <div class="section-title-row">
          <div class="section-line"></div>
          <h2 class="section-heading">Explore the Community</h2>
          <div class="section-line"></div>
        </div>

        <div class="community-grid">

          <article class="community-card">
            <div class="card-icon">♧</div>

            <h3>Share Your Story</h3>

            <p>
              Your story could be the green flag someone else needs.
              Share anonymously or include your name.
            </p>

            <a href="/share-your-story.html" class="button">
              Share Now
              <span class="button-arrow">→</span>
            </a>
          </article>


          <article class="community-card">
            <div class="card-icon">⚑</div>

            <h3>Red Flag Sightings</h3>

            <p>
              Spotted a red flag in the wild? Submit it and help spread
              awareness—and maybe save someone else.
            </p>

            <a href="/red-flag-sightings.html" class="button">
              Submit a Sighting
              <span class="button-arrow">→</span>
            </a>
          </article>


          <article class="community-card">
            <div class="card-icon">🏆</div>

            <h3>Contests & Challenges</h3>

            <p>
              Join giveaways, photo challenges and creative contests that
              bring our community together.
            </p>

            <a href="/contests.html" class="button">
              See What’s Active
              <span class="button-arrow">→</span>
            </a>
          </article>


          <article class="community-card">
            <div class="card-icon">♡</div>

            <h3>Get Involved</h3>

            <p>
              From events to collaborations, there are plenty of ways to
              participate and help build something bigger.
            </p>

            <a href="/get-involved.html" class="button">
              Learn More
              <span class="button-arrow">→</span>
            </a>
          </article>

        </div>
      </div>
    </section>


    <!-- MOVEMENT BANNER -->

    <section class="container movement-banner">

      <div class="movement-message">
        <div class="flag-icon">⚑</div>

        <h2>
          This movement is built by us.<br />
          <span>For us.</span>
        </h2>
      </div>

      <div class="movement-copy">
        <p>
          Whether you’re here to share, connect, create or support—thank you.
        </p>

        <strong>
          You’re a green flag. <span>♥</span>
        </strong>
      </div>

    </section>

  </main>


  <!-- FOOTER -->

  <footer class="site-footer">
    <div class="container footer-inner">

      <span class="footer-label">Follow Along</span>

      <div class="social-links">
        <a href="#" aria-label="Instagram">◎</a>
        <a href="#" aria-label="TikTok">♪</a>
        <a href="#" aria-label="Pinterest">P</a>
        <a href="#" aria-label="YouTube">▶</a>
        <a href="mailto:hello@shopredflags.com" aria-label="Email">✉</a>
      </div>

    </div>
  </footer>


  <script>
    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    menuButton.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
  </script>

</body>
</html>