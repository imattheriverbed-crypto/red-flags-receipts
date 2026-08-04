<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Shop Red Flags & Receipts collections, apparel, accessories, journals, digital products, gifts, and future drops." />
  <title>Shop | Red Flags & Receipts</title>

  <style>
    :root {
      --red: #c5161d;
      --dark-red: #8f1015;
      --black: #090909;
      --soft-black: #151515;
      --white: #ffffff;
      --cream: #f6f1ea;
      --gray: #777;
      --line: #ded7cf;
      --max-width: 1440px;
      --shadow: 0 12px 30px rgba(0, 0, 0, 0.10);
      --red-shadow: 0 14px 34px rgba(197, 22, 29, 0.22);
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
      line-height: 1.5;
    }

    img {
      width: 100%;
      display: block;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button,
    input {
      font: inherit;
    }

    .container {
      width: min(100% - 32px, var(--max-width));
      margin-inline: auto;
    }

    .eyebrow {
      color: var(--red);
      font-size: 0.82rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 4.4rem);
      font-weight: 1000;
      letter-spacing: -0.05em;
      line-height: 0.92;
      text-transform: uppercase;
    }

    .section-copy {
      max-width: 520px;
      margin-top: 14px;
      color: #343434;
      font-size: 1rem;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      padding: 12px 20px;
      border: 2px solid var(--black);
      background: var(--black);
      color: var(--white);
      font-size: 0.83rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      transition: 0.22s ease;
    }

    .button:hover,
    .button:focus-visible {
      border-color: var(--red);
      background: var(--red);
      transform: translateY(-2px);
    }

    .button--red {
      border-color: var(--red);
      background: var(--red);
    }

    .button--red:hover,
    .button--red:focus-visible {
      border-color: var(--white);
      background: var(--white);
      color: var(--black);
    }

    /* HEADER */
    .site-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(9, 9, 9, 0.97);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
    }

    .header-inner {
      min-height: 76px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 32px;
    }

    .brand {
      color: var(--white);
      font-size: 1.1rem;
      font-weight: 1000;
      line-height: 1;
      text-transform: uppercase;
    }

    .brand span {
      display: block;
      color: var(--red);
      font-size: 1.35rem;
    }

    .main-nav {
      display: flex;
      justify-content: center;
      gap: clamp(16px, 3vw, 42px);
    }

    .main-nav a {
      position: relative;
      color: var(--white);
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .main-nav a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 2px;
      background: var(--red);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.22s ease;
    }

    .main-nav a:hover::after,
    .main-nav a.active::after {
      transform: scaleX(1);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--white);
    }

    .icon-button {
      min-width: 40px;
      min-height: 40px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      background: transparent;
      color: var(--white);
      cursor: pointer;
    }

    .menu-toggle {
      display: none;
    }

    /* HERO */
    .shop-hero {
      min-height: 520px;
      display: grid;
      align-items: stretch;
      background:
        linear-gradient(90deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.82) 43%, rgba(0,0,0,0.20) 72%, rgba(0,0,0,0.08) 100%),
        url("https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85")
        center/cover no-repeat;
      color: var(--white);
    }

    .hero-inner {
      display: flex;
      align-items: center;
      min-height: 520px;
    }

    .hero-content {
      max-width: 720px;
      padding-block: 72px;
    }

    .hero-title {
      font-size: clamp(5rem, 14vw, 12rem);
      font-weight: 1000;
      letter-spacing: -0.08em;
      line-height: 0.74;
      text-transform: uppercase;
    }

    .hero-copy {
      max-width: 560px;
      margin-top: 28px;
      font-family: "Courier New", monospace;
      font-size: clamp(1rem, 2vw, 1.35rem);
    }

    .hero-mark {
      width: 280px;
      height: 8px;
      margin-top: 26px;
      background: var(--red);
      transform: rotate(-2deg);
    }

    /* ANCHOR NAV */
    .anchor-nav {
      position: sticky;
      top: 76px;
      z-index: 900;
      overflow-x: auto;
      background: var(--white);
      border-bottom: 1px solid var(--line);
      scrollbar-width: none;
    }

    .anchor-nav::-webkit-scrollbar {
      display: none;
    }

    .anchor-list {
      min-width: max-content;
      display: flex;
      justify-content: center;
      gap: 42px;
      padding: 18px 16px;
    }

    .anchor-list a {
      position: relative;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .anchor-list a:hover {
      color: var(--red);
    }

    /* COLLECTION SECTIONS */
    .collection-section {
      scroll-margin-top: 145px;
      padding: 78px 0;
      border-bottom: 1px solid var(--line);
    }

    .collection-layout {
      display: grid;
      grid-template-columns: minmax(220px, 0.72fr) minmax(0, 2.4fr);
      gap: 42px;
      align-items: start;
    }

    .collection-intro {
      position: sticky;
      top: 170px;
    }

    .collection-intro .button {
      margin-top: 26px;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 16px;
    }

    .product-card {
      position: relative;
      overflow: hidden;
      min-width: 0;
      background: var(--white);
      border: 2px solid var(--red);
      box-shadow: 0 4px 0 var(--red);
      transition: transform 0.22s ease, box-shadow 0.22s ease;
    }

    .product-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--red-shadow);
    }

    .product-card__image-wrap {
      position: relative;
      aspect-ratio: 4 / 4.6;
      overflow: hidden;
      background: #eee8df;
    }

    .product-card__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.35s ease;
    }

    .product-card:hover .product-card__image {
      transform: scale(1.04);
    }

    .product-card__badge {
      position: absolute;
      top: 12px;
      left: 12px;
      z-index: 2;
      padding: 7px 10px;
      background: var(--red);
      color: var(--white);
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .product-card__body {
      padding: 12px;
    }

    .product-card__category {
      color: var(--red);
      font-size: 0.69rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .product-card__title {
      min-height: 38px;
      margin-top: 6px;
      font-size: 0.92rem;
      font-weight: 900;
      line-height: 1.15;
    }

    .product-card__price {
      margin-top: 7px;
      color: var(--red);
      font-size: 0.92rem;
      font-weight: 1000;
    }

    .product-card__link {
      width: 100%;
      margin-top: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;
      border-top: 1px solid #e8e2da;
      font-size: 0.66rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .product-card__link:hover {
      color: var(--red);
    }

    /* THREE-UP CATEGORY AREA */
    .category-band {
      padding: 0;
      background: var(--white);
      border-bottom: 1px solid var(--line);
    }

    .category-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .category-panel {
      padding: 58px 32px;
      border-right: 1px solid var(--line);
    }

    .category-panel:last-child {
      border-right: 0;
    }

    .category-panel .mini-grid {
      margin-top: 28px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    .mini-product {
      overflow: hidden;
      border: 2px solid var(--red);
      background: var(--cream);
    }

    .mini-product img {
      aspect-ratio: 4 / 5;
      object-fit: cover;
    }

    .category-panel .button {
      margin-top: 26px;
    }

    /* SPLIT FEATURE */
    .split-feature {
      display: grid;
      grid-template-columns: 1fr 1fr;
      background: var(--cream);
      border-bottom: 1px solid var(--line);
    }

    .feature-card {
      min-height: 420px;
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      align-items: center;
      gap: 28px;
      padding: 48px;
      border-right: 1px solid var(--line);
    }

    .feature-card:last-child {
      border-right: 0;
    }

    .feature-card img {
      height: 100%;
      min-height: 300px;
      object-fit: cover;
      border: 2px solid var(--red);
      box-shadow: 8px 8px 0 var(--red);
    }

    .feature-card .button {
      margin-top: 22px;
    }

    /* FUTURE DROPS */
    .future-drops {
      padding: 80px 0;
      background: #f0e9df;
      border-bottom: 1px solid var(--line);
    }

    .future-grid {
      display: grid;
      grid-template-columns: 0.75fr repeat(3, 1fr);
      gap: 22px;
      align-items: stretch;
    }

    .drop-card {
      min-height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 28px;
      background: var(--black);
      color: var(--white);
      border: 2px solid var(--red);
      box-shadow: 7px 7px 0 var(--red);
      text-align: center;
    }

    .drop-card:nth-child(3) {
      background: var(--cream);
      color: var(--black);
    }

    .drop-card__number {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .drop-card__title {
      margin-top: 20px;
      font-size: clamp(1.5rem, 3vw, 2.6rem);
      font-weight: 1000;
      line-height: 0.95;
      text-transform: uppercase;
    }

    .drop-card__status {
      margin-top: 22px;
      color: var(--red);
      font-size: 0.78rem;
      font-weight: 1000;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    /* NEWSLETTER */
    .newsletter {
      padding: 46px 0;
      background: var(--black);
      color: var(--white);
    }

    .newsletter-inner {
      display: grid;
      grid-template-columns: auto minmax(260px, 1fr);
      gap: 34px;
      align-items: center;
    }

    .newsletter-title {
      font-size: clamp(1.8rem, 4vw, 3.6rem);
      font-weight: 1000;
      line-height: 0.95;
      text-transform: uppercase;
    }

    .newsletter-form {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 12px;
    }

    .newsletter-form input {
      width: 100%;
      min-height: 52px;
      padding: 0 18px;
      border: 1px solid #666;
      background: #111;
      color: var(--white);
      outline: none;
    }

    .newsletter-form input:focus {
      border-color: var(--red);
    }

    /* FOOTER */
    .site-footer {
      padding: 68px 0 28px;
      background: #060606;
      color: var(--white);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.4fr repeat(3, 1fr);
      gap: 44px;
    }

    .footer-heading {
      color: var(--red);
      font-size: 0.8rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .footer-column ul {
      margin-top: 16px;
      list-style: none;
    }

    .footer-column li + li {
      margin-top: 8px;
    }

    .footer-column a {
      color: #c8c8c8;
      font-size: 0.9rem;
    }

    .footer-column a:hover {
      color: var(--red);
    }

    .footer-bottom {
      margin-top: 56px;
      padding-top: 22px;
      display: flex;
      justify-content: space-between;
      gap: 20px;
      border-top: 1px solid #262626;
      color: #888;
      font-size: 0.8rem;
    }

    /* RESPONSIVE */
    @media (max-width: 1280px) {
      .product-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }

    @media (max-width: 1100px) {
      .main-nav {
        gap: 18px;
      }

      .product-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .category-grid {
        grid-template-columns: 1fr;
      }

      .category-panel {
        border-right: 0;
        border-bottom: 1px solid var(--line);
      }

      .split-feature {
        grid-template-columns: 1fr;
      }

      .feature-card {
        border-right: 0;
        border-bottom: 1px solid var(--line);
      }

      .future-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .future-grid > .collection-intro {
        grid-column: 1 / -1;
        position: static;
      }
    }

    @media (max-width: 820px) {
      .product-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .header-inner {
        grid-template-columns: 1fr auto;
      }

      .main-nav {
        position: absolute;
        top: 76px;
        left: 0;
        right: 0;
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 28px;
        background: var(--black);
        border-top: 1px solid #222;
      }

      .main-nav.open {
        display: flex;
      }

      .header-actions .icon-button:first-child {
        display: none;
      }

      .menu-toggle {
        display: inline-grid;
        place-items: center;
      }

      .shop-hero,
      .hero-inner {
        min-height: 470px;
      }

      .shop-hero {
        background-position: 64% center;
      }

      .hero-title {
        font-size: clamp(4.4rem, 22vw, 8rem);
      }

      .collection-layout {
        grid-template-columns: 1fr;
      }

      .collection-intro {
        position: static;
      }

      .feature-card {
        grid-template-columns: 1fr;
      }

      .newsletter-inner {
        grid-template-columns: 1fr;
      }

      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 560px) {
      .container {
        width: min(100% - 22px, var(--max-width));
      }

      .hero-content {
        padding-block: 54px;
      }

      .hero-copy {
        max-width: 320px;
      }

      .anchor-list {
        justify-content: flex-start;
        gap: 24px;
      }

      .collection-section {
        padding: 54px 0;
      }

      .product-grid {
        grid-template-columns: 1fr;
      }

      .category-panel {
        padding: 44px 18px;
      }

      .category-panel .mini-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .feature-card {
        padding: 34px 18px;
      }

      .future-grid {
        grid-template-columns: 1fr;
      }

      .newsletter-form {
        grid-template-columns: 1fr;
      }

      .footer-grid {
        grid-template-columns: 1fr;
      }

      .footer-bottom {
        flex-direction: column;
      }
    }
  </style>
</head>

<body>
  <!--
    RED FLAGS & RECEIPTS SHOP PAGE
    Replace every placeholder URL, product image, title, price, and Shopify link.
    You can paste this into a custom HTML page or use it as a full standalone page.
  -->

  <header class="site-header">
    <div class="container header-inner">
      <a href="/" class="brand" aria-label="Red Flags and Receipts home">
        <span>Red Flags</span>
        &amp; Receipts
      </a>

      <nav class="main-nav" id="mainNav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/pages/shop" class="active">Shop</a>
        <a href="/pages/community">Community</a>
        <a href="/pages/founder">Founder</a>
        <a href="/pages/journal">Journal</a>
        <a href="https://buymeacoffee.com/redflags">Donate</a>
      </nav>

      <div class="header-actions">
        <button class="icon-button" aria-label="Search">⌕</button>
        <a href="/cart" class="icon-button" aria-label="Shopping cart" style="display:grid;place-items:center;">Bag</a>
        <button class="icon-button menu-toggle" id="menuToggle" aria-label="Open menu">☰</button>
      </div>
    </div>
  </header>

  <main>
    <section class="shop-hero">
      <div class="container hero-inner">
        <div class="hero-content">
          <p class="eyebrow">Red Flags &amp; Receipts</p>
          <h1 class="hero-title">Shop</h1>
          <p class="hero-copy">
            Everything you need to wear your standards, keep receipts, and heal out loud.
          </p>
          <div class="hero-mark" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <nav class="anchor-nav" aria-label="Shop categories">
      <div class="anchor-list">
        <a href="#featured">Featured</a>
        <a href="#signature">Signature</a>
        <a href="#apparel">Apparel</a>
        <a href="#accessories">Accessories</a>
        <a href="#digital">Digital</a>
        <a href="#gifts-pets">Gifts &amp; Pets</a>
        <a href="#future-drops">Future Drops</a>
      </div>
    </nav>

    <!-- FEATURED DROP -->
    <section class="collection-section" id="featured">
      <div class="container collection-layout">
        <div class="collection-intro">
          <p class="eyebrow">Featured Drop</p>
          <h2 class="section-title">Drop 001 — The Beginning</h2>
          <p class="section-copy">
            The first pieces that started the movement. Show only four products here, then send shoppers into the full collection.
          </p>
          <a class="button" href="/collections/featured-signature-collection">Shop the Drop →</a>
        </div>

        <div class="product-grid">
          <article class="product-card">
            <a href="PASTE-SHOPIFY-PRODUCT-LINK-HERE">
              <div class="product-card__image-wrap">
                <span class="product-card__badge">Featured</span>
                <img class="product-card__image" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85" alt="Black Red Flags hoodie" />
              </div>
              <div class="product-card__body">
                <p class="product-card__category">Apparel</p>
                <h3 class="product-card__title">Red Flag Hoodie</h3>
                <p class="product-card__price">$69.99</p>
                <span class="product-card__link">View Product <span>→</span></span>
              </div>
            </a>
          </article>

          <article class="product-card">
            <a href="PASTE-SHOPIFY-PRODUCT-LINK-HERE">
              <div class="product-card__image-wrap">
                <span class="product-card__badge">Signature</span>
                <img class="product-card__image" src="https://images.unsplash.com/photo-1601924638867-3ec4f2f22e15?auto=format&fit=crop&w=900&q=85" alt="Red fashion scarf" />
              </div>
              <div class="product-card__body">
                <p class="product-card__category">Accessories</p>
                <h3 class="product-card__title">Signature Red Flag Scarf</h3>
                <p class="product-card__price">$39.99</p>
                <span class="product-card__link">View Product <span>→</span></span>
              </div>
            </a>
          </article>

          <article class="product-card">
            <a href="PASTE-SHOPIFY-PRODUCT-LINK-HERE">
              <div class="product-card__image-wrap">
                <span class="product-card__badge">New</span>
                <img class="product-card__image" src="https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85" alt="Black fashion cap" />
              </div>
              <div class="product-card__body">
                <p class="product-card__category">Accessories</p>
                <h3 class="product-card__title">Protect Your Peace Hat</h3>
                <p class="product-card__price">$34.99</p>
                <span class="product-card__link">View Product <span>→</span></span>
              </div>
            </a>
          </article>

          <article class="product-card">
            <a href="PASTE-SHOPIFY-PRODUCT-LINK-HERE">
              <div class="product-card__image-wrap">
                <img class="product-card__image" src="https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=900&q=85" alt="Black tote bag" />
              </div>
              <div class="product-card__body">
                <p class="product-card__category">Bags</p>
                <h3 class="product-card__title">Close Chapters Tote</h3>
                <p class="product-card__price">$24.99</p>
                <span class="product-card__link">View Product <span>→</span></span>
              </div>
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- SIGNATURE COLLECTION -->
    <section class="collection-section" id="signature">
      <div class="container collection-layout">
        <div class="collection-intro">
          <p class="eyebrow">The Signature Collection</p>
          <h2 class="section-title">The Pieces That Define the Brand</h2>
          <p class="section-copy">
            Keep your strongest four signature products here. These should be the pieces that remain available between drops.
          </p>
          <a class="button" href="/collections/featured-signature-collection">View Collection →</a>
        </div>

        <div class="product-grid">
          <article class="product-card">
            <a href="PASTE-SHOPIFY-PRODUCT-LINK-HERE">
              <div class="product-card__image-wrap">
                <img class="product-card__image" src="https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=85" alt="Patterned scarf" />
              </div>
              <div class="product-card__body">
                <p class="product-card__category">Signature</p>
                <h3 class="product-card__title">Signature Scarf</h3>
                <p class="product-card__price">$39.99</p>
                <span class="product-card__link">View Product <span>→</span></span>
              </div>
            </a>
          </article>

          <article class="product-card">
            <a href="https://shopredflags.myshopify.com/products/red-flag-pattern-pencil-skirt-womens-mid-waist-graphic-skirt?color=Black&size=S">
              <div class="product-card__image-wrap">
                <img class="product-card__image" src="https://images.unsplash.com/photo-1583496661160-fb5886a13d14?auto=format&fit=crop&w=900&q=85" alt="Black pencil skirt" />
              </div>
              <div class="product-card__body">
                <p class="product-card__category">Bottoms</p>
                <h3 class="product-card__title">Red Flag Pattern Pencil Skirt</h3>
                <p class="product-card__price">$69.99</p>
                <span class="product-card__link">View Product <span>→</span></span>
              </div>
            </a>
          </article>

          <article class="product-card">
            <a href="https://shopredflags.myshopify.com/products/the-receipts-spiral-journal">
              <div class="product-card__image-wrap">
                <img class="product-card__image" src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=900&q=85" alt="Black spiral journal" />
              </div>
              <div class="product-card__body">
                <p class="product-card__category">Stationery</p>
                <h3 class="product-card__title">The Receipts Spiral Journal</h3>
                <p class="product-card__price">$24.99</p>
                <span class="product-card__link">View Product <span>→</span></span>
              </div>
            </a>
          </article>

          <article class="product-card">
            <a href="https://shopredflags.myshopify.com/products/backpack">
              <div class="product-card__image-wrap">
                <img class="product-card__image" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85" alt="Black backpack" />
              </div>
              <div class="product-card__body">
                <p class="product-card__category">Bags</p>
                <h3 class="product-card__title">Red Flag Backpack</h3>
                <p class="product-card__price">$59.99</p>
                <span class="product-card__link">View Product <span>→</span></span>
              </div>
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- APPAREL / ACCESSORIES / DIGITAL -->
    <section class="category-band">
      <div class="category-grid">
        <article class="category-panel" id="apparel">
          <p class="eyebrow">Apparel</p>
          <h2 class="section-title" style="font-size:clamp(2rem,4vw,3.5rem);">Wear the Warning</h2>
          <p class="section-copy">Show four best-selling clothing items, then let customers open the full apparel collection.</p>

          <div class="mini-grid">
            <a class="mini-product" href="PASTE-LINK"><img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80" alt="Black hoodie" /></a>
            <a class="mini-product" href="PASTE-LINK"><img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80" alt="Red t-shirt" /></a>
            <a class="mini-product" href="PASTE-LINK"><img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80" alt="Black jacket" /></a>
            <a class="mini-product" href="PASTE-LINK"><img src="https://images.unsplash.com/photo-1583496661160-fb5886a13d14?auto=format&fit=crop&w=500&q=80" alt="Black skirt" /></a>
          </div>

          <a class="button" href="/collections/apparel">Shop All Apparel →</a>
        </article>

        <article class="category-panel" id="accessories">
          <p class="eyebrow">Accessories</p>
          <h2 class="section-title" style="font-size:clamp(2rem,4vw,3.5rem);">Small Details. Loud Message.</h2>
          <p class="section-copy">Scarves, bags, hats, cases, and the pieces that finish the look.</p>

          <div class="mini-grid">
            <a class="mini-product" href="PASTE-LINK"><img src="https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=500&q=80" alt="Scarf" /></a>
            <a class="mini-product" href="PASTE-LINK"><img src="https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=500&q=80" alt="Hat" /></a>
            <a class="mini-product" href="PASTE-LINK"><img src="https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=500&q=80" alt="Tote bag" /></a>
            <a class="mini-product" href="PASTE-LINK"><img src="https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=500&q=80" alt="Phone case" /></a>
          </div>

          <a class="button" href="/collections/accessories">Shop All Accessories →</a>
        </article>

        <article class="category-panel" id="digital">
          <p class="eyebrow">Books, Journals &amp; Digital</p>
          <h2 class="section-title" style="font-size:clamp(2rem,4vw,3.5rem);">Write It Down</h2>
          <p class="section-copy">Keep the receipts. Add workbooks, coloring books, journals, and downloadable guides here.</p>

          <div class="mini-grid">
            <a class="mini-product" href="PASTE-LINK"><img src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=500&q=80" alt="Journal" /></a>
            <a class="mini-product" href="PASTE-LINK"><img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80" alt="Book" /></a>
            <a class="mini-product" href="PASTE-LINK"><img src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&q=80" alt="Workbook" /></a>
            <a class="mini-product" href="PASTE-LINK"><img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80" alt="Guide" /></a>
          </div>

          <a class="button" href="/collections/digital">Explore Digital →</a>
        </article>
      </div>
    </section>

    <!-- GIFTS & PETS -->
    <section class="split-feature" id="gifts-pets">
      <article class="feature-card">
        <div>
          <p class="eyebrow">Gifts &amp; Sets</p>
          <h2 class="section-title" style="font-size:clamp(2.2rem,4vw,4rem);">Give Them the Hint</h2>
          <p class="section-copy">Gift boxes for breakups, fresh starts, birthdays, and the friend who needs the reminder.</p>
          <a class="button" href="/collections/gift-sets">Shop Gift Sets →</a>
        </div>
        <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85" alt="Gift set box" />
      </article>

      <article class="feature-card">
        <div>
          <p class="eyebrow">Ramsey's Picks</p>
          <h2 class="section-title" style="font-size:clamp(2.2rem,4vw,4rem);">For the Real Boss</h2>
          <p class="section-copy">Bandanas, blankets, bowls, and accessories for dogs with excellent judgment.</p>
          <a class="button" href="/collections/pets">Shop Pets →</a>
        </div>
        <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=85" alt="French bulldog wearing a bandana" />
      </article>
    </section>

    <!-- FUTURE DROPS -->
    <section class="future-drops" id="future-drops">
      <div class="container future-grid">
        <div class="collection-intro">
          <p class="eyebrow">Future Drops</p>
          <h2 class="section-title">What Comes Next</h2>
          <p class="section-copy">Use these cards for teasers, waitlists, launch dates, previews, and open submissions.</p>
          <a class="button" href="/pages/future-drops">See What's Coming →</a>
        </div>

        <a class="drop-card" href="/pages/future-drops">
          <span class="drop-card__number">Drop 002</span>
          <h3 class="drop-card__title">No Contact Collection</h3>
          <span class="drop-card__status">Coming Soon</span>
        </a>

        <a class="drop-card" href="/pages/future-drops">
          <span class="drop-card__number">Drop 003</span>
          <h3 class="drop-card__title">CEO of Me Collection</h3>
          <span class="drop-card__status">In Development</span>
        </a>

        <a class="drop-card" href="/pages/community">
          <span class="drop-card__number">Community</span>
          <h3 class="drop-card__title">Designer Collaboration</h3>
          <span class="drop-card__status">Open Submissions</span>
        </a>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="newsletter">
      <div class="container newsletter-inner">
        <div>
          <p class="eyebrow">Do Not Miss the Next Drop</p>
          <h2 class="newsletter-title">Join the Red Flag List</h2>
        </div>

        <!-- Replace action URL with Shopify Forms, Klaviyo, Mailchimp, etc. -->
        <form class="newsletter-form" action="#" method="post">
          <label for="email" style="position:absolute;left:-9999px;">Email address</label>
          <input id="email" name="email" type="email" placeholder="Email address" required />
          <button class="button button--red" type="submit">Join the List →</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="/" class="brand">
            <span>Red Flags</span>
            &amp; Receipts
          </a>
          <p style="max-width:280px;margin-top:18px;color:#aaa;">
            Wear the warning. Write the ending.
          </p>
        </div>

        <div class="footer-column">
          <p class="footer-heading">Shop</p>
          <ul>
            <li><a href="/collections/all">All Products</a></li>
            <li><a href="/collections/featured-signature-collection">Signature Collection</a></li>
            <li><a href="/collections/apparel">Apparel</a></li>
            <li><a href="/collections/accessories">Accessories</a></li>
            <li><a href="/collections/digital">Digital</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <p class="footer-heading">About</p>
          <ul>
            <li><a href="/pages/founder">Founder</a></li>
            <li><a href="/pages/community">Community</a></li>
            <li><a href="/pages/journal">Journal</a></li>
            <li><a href="/pages/contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <p class="footer-heading">Help</p>
          <ul>
            <li><a href="/pages/faq">FAQ</a></li>
            <li><a href="/policies/shipping-policy">Shipping</a></li>
            <li><a href="/policies/refund-policy">Returns</a></li>
            <li><a href="/pages/contact">Track Order</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 Red Flags &amp; Receipts. All rights reserved.</span>
        <span>
          <a href="/policies/privacy-policy">Privacy</a> ·
          <a href="/policies/terms-of-service">Terms</a> ·
          <a href="/policies/refund-policy">Refunds</a>
        </span>
      </div>
    </div>
  </footer>

  <script>
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      menuToggle.setAttribute(
        "aria-label",
        mainNav.classList.contains("open") ? "Close menu" : "Open menu"
      );
    });

    document.querySelectorAll("#mainNav a").forEach((link) => {
      link.addEventListener("click", () => mainNav.classList.remove("open"));
    });
  </script>
</body>
</html>