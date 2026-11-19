'use client';

import { useState } from 'react';
import './index.css';

const products = [
  {
    id: 'prod-1',
    title: 'Sugar Plum Bubble Swirl Cones',
    category: 'Air Dry Foam Clay',
    price: '$68',
    image: '/products/berry-bubble-swirl-cones-set4.jpg',
    badge: 'Small Batch • Set of 4',
    href: '#custom',
  },
  {
    id: 'prod-2',
    title: 'Velvet Berry Cake Slice',
    category: 'Air Dry Foam Clay',
    price: '$34',
    image: '/products/velvet-berry-cake-slice.jpg',
    badge: 'Handcrafted Faux Bake',
    href: '#custom',
  },
  {
    id: 'prod-3',
    title: 'Purple Galaxy Swirl Trio',
    category: 'Air Dry Foam Clay',
    price: '$85',
    image: '/products/purple-trio.jpg',
    badge: 'Artisan Collector Trio',
    href: '#custom',
  },
  {
    id: 'prod-4',
    title: 'Pastel Patisserie Donuts',
    category: 'Air Dry Foam Clay',
    price: '$95',
    image: '/products/pastel-donuts.jpg',
    badge: 'Set of 6 • Best Seller',
    href: '#custom',
  },
  {
    id: 'prod-5',
    title: 'Holiday Ornament Cones',
    category: 'Air Dry Foam Clay',
    price: '$68',
    image: '/products/mint-cones.jpg',
    badge: 'Small Batch • Set of 4',
    href: '#custom',
  },
  {
    id: 'prod-6',
    title: 'Festive Sprinkle Donuts',
    category: 'Air Dry Foam Clay',
    price: '$125',
    image: '/products/holiday-donuts.jpg',
    badge: 'Set of 9 • Holiday Drop',
    href: '#custom',
  },
  {
    id: 'prod-7',
    title: 'Peppermint Twist Cookie Cones',
    category: 'Air Dry Foam Clay',
    price: '$68',
    image: '/products/peppermint-twist-cones-set4.jpg',
    badge: 'Winter Wonderland Edition',
    href: '#custom',
  },
  {
    id: 'prod-8',
    title: 'Citrus Tropics Faux Soft-Serve Trio',
    category: 'Air Dry Foam Clay',
    price: '$58',
    image: '/products/citrus-tropics-trio.jpg',
    badge: 'Tropical Sorbet Collection',
    href: '#custom',
  },
];

const collections = products.map((p) => [p.title, p.href, p.image]);

const shop = [
  ['Best Sellers', '#collection'],
  ['Air Dry Foam Clay', '#collection'],
  ['Ice Cream Cones', '#collection'],
  ['Donut Wreaths', '#collection'],
  ['Cake Slices & Gift Boxes', '#collection'],
  ['Custom Orders', '#custom'],
];

const socials = [
  ['Facebook', 'https://www.facebook.com'],
  ['Instagram', 'https://www.instagram.com'],
  ['YouTube', 'https://www.youtube.com'],
  ['TikTok', 'https://www.tiktok.com'],
];

function Icon({
  type,
}: {
  type:
    | 'search'
    | 'user'
    | 'bag'
    | 'menu'
    | 'close'
    | 'arrow'
    | 'chevron-left'
    | 'chevron-right';
}) {
  const path = {
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 21c0-4 3-6.2 7.5-6.2s7.5 2.2 7.5 6.2" />
      </>
    ),
    bag: (
      <>
        <path d="M4 8h16l-1 13H5L4 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
    close: <path d="M5 5 19 19M19 5 5 19" />,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    'chevron-left': <path d="m15 18-6-6 6-6" />,
    'chevron-right': <path d="m9 18 6-6-6-6" />,
  };
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path[type]}
    </svg>
  );
}

function EmailForm() {
  const [done, setDone] = useState(false);
  return (
    <form
      className="email-form"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input type="email" aria-label="Email" placeholder="Email" required />
      <button aria-label="Subscribe" type="submit">
        <Icon type="arrow" />
      </button>
      {done && <span className="success">Thank you for subscribing!</span>}
    </form>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [productPage, setProductPage] = useState(0); // 0 = items 1-4, 1 = items 5-8
  const [review, setReview] = useState(0);

  const handlePrevProduct = () => {
    setProductPage((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNextProduct = () => {
    setProductPage((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <>
      <a className="skip" href="#MainContent">
        Skip to content
      </a>

      <div className="announcement">
        Welcome to Vette&apos;s Crafting • Free Shipping on Orders $75+
      </div>

      <header>
        <div className="header-top">
          <div className="header-icons">
            <button
              className="icon-button mobile-only"
              aria-label="Menu"
              onClick={() => setMenu(true)}
            >
              <Icon type="menu" />
            </button>
            <button
              className="icon-button"
              aria-label="Search"
              onClick={() => setSearch(true)}
            >
              <Icon type="search" />
            </button>
          </div>

          <a className="logo" href="/">
            <span className="logo-text">Vette&apos;s Crafting</span>
          </a>

          <div className="header-icons">
            <a className="icon-button account" href="#custom" aria-label="Account">
              <Icon type="user" />
            </a>
            <a className="icon-button" href="#collection" aria-label="Cart">
              <Icon type="bag" />
            </a>
          </div>
        </div>

        <nav className="desktop-nav">
          <a href="/">Home</a>
          <div className="dropdown">
            <button>Shop ⌄</button>
            <div className="dropdown-menu">
              <span>New Arrivals</span>
              {shop.map(([label, href]) => (
                <a key={label} href={href}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="dropdown">
            <button>Info ⌄</button>
            <div className="dropdown-menu">
              <a href="#custom">Custom Orders</a>
              <a href="mailto:contact@vettescrafting.com">Contact</a>
            </div>
          </div>
          <a href="#collection">Browse Collections</a>
        </nav>
      </header>

      {search && (
        <div className="search-layer">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearch(false);
            }}
          >
            <Icon type="search" />
            <input
              autoFocus
              placeholder="Search Air Dry Foam Clay, cones, donuts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button aria-label="Submit search">
              <Icon type="arrow" />
            </button>
          </form>
          <button
            className="icon-button"
            aria-label="Close search"
            onClick={() => setSearch(false)}
          >
            <Icon type="close" />
          </button>
          {query && (
            <div className="search-suggestions">
              {products
                .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
                .map((p) => (
                  <a key={p.id} href={p.href} onClick={() => setSearch(false)}>
                    {p.title} ({p.price})
                  </a>
                ))}
            </div>
          )}
        </div>
      )}

      {menu && (
        <div className="drawer-backdrop" onClick={() => setMenu(false)}>
          <aside className="drawer" onClick={(e) => e.stopPropagation()}>
            <button
              className="drawer-close"
              aria-label="Close menu"
              onClick={() => setMenu(false)}
            >
              <Icon type="close" />
            </button>
            <a href="/" onClick={() => setMenu(false)}>
              Home
            </a>
            <button onClick={() => setShopOpen(!shopOpen)}>
              Shop <span>⌄</span>
            </button>
            {shopOpen && (
              <div className="drawer-sub">
                {shop.map(([label, href]) => (
                  <a href={href} key={label} onClick={() => setMenu(false)}>
                    {label}
                  </a>
                ))}
              </div>
            )}
            <button onClick={() => setInfoOpen(!infoOpen)}>
              Info <span>⌄</span>
            </button>
            {infoOpen && (
              <div className="drawer-sub">
                <a href="#custom" onClick={() => setMenu(false)}>
                  Custom Orders
                </a>
                <a href="mailto:contact@vettescrafting.com" onClick={() => setMenu(false)}>
                  Contact
                </a>
              </div>
            )}
            <a href="#collection" onClick={() => setMenu(false)}>
              Browse Collections
            </a>
          </aside>
        </div>
      )}

      <main id="MainContent">
        {/* Collections 8-Product Showcase with Arrows & Hover Animations */}
        <section id="collection" className="collections">
          <div className="collections-header">
            <div>
              <h2 className="collections-heading">Air Dry Foam Clay Confections</h2>
              <p className="collections-subheading">
                Showing {productPage === 0 ? '1–4' : '5–8'} of 8 handcrafted boutique pieces
              </p>
            </div>
            <div className="carousel-nav-buttons">
              <button
                className="carousel-circle-btn"
                onClick={handlePrevProduct}
                aria-label="Previous products"
                title="View previous products"
              >
                <Icon type="chevron-left" />
              </button>
              <button
                className="carousel-circle-btn"
                onClick={handleNextProduct}
                aria-label="Next products"
                title="View next products"
              >
                <Icon type="chevron-right" />
              </button>
            </div>
          </div>

          <div className="carousel-viewport-wrapper">
            <button
              className="carousel-edge-arrow prev"
              onClick={handlePrevProduct}
              aria-label="Previous products"
              title="View previous 4 products"
            >
              <Icon type="chevron-left" />
            </button>

            <div className="collections-viewport">
              <div
                className="collections-track"
                style={{ transform: `translateX(-${productPage * 50}%)` }}
              >
                {/* Page 1: Items 1 - 4 */}
                <div className="collection-grid">
                  {products.slice(0, 4).map((p) => (
                    <a className="collection" key={p.id} href={p.href}>
                      <div className="collection-img-wrap">
                        <span className="collection-badge">{p.badge}</span>
                        <img src={p.image} alt={p.title} />
                        <span className="collection-quick-view">Quick View</span>
                      </div>
                      <div className="collection-info">
                        <h2>{p.title}</h2>
                        <span className="collection-price">{p.price}</span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Page 2: Items 5 - 8 */}
                <div className="collection-grid">
                  {products.slice(4, 8).map((p) => (
                    <a className="collection" key={p.id} href={p.href}>
                      <div className="collection-img-wrap">
                        <span className="collection-badge">{p.badge}</span>
                        <img src={p.image} alt={p.title} />
                        <span className="collection-quick-view">Quick View</span>
                      </div>
                      <div className="collection-info">
                        <h2>{p.title}</h2>
                        <span className="collection-price">{p.price}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="carousel-edge-arrow next"
              onClick={handleNextProduct}
              aria-label="Next products"
              title="View next 4 products"
            >
              <Icon type="chevron-right" />
            </button>
          </div>

          <div className="controls">
            <button onClick={handlePrevProduct} aria-label="Previous products">
              ←
            </button>
            <span className="page-indicator">
              Page {productPage + 1} of 2 • Showing {productPage === 0 ? '1–4' : '5–8'} of 8 pieces
            </span>
            <button onClick={handleNextProduct} aria-label="Next products">
              →
            </button>
          </div>
        </section>

        {/* Custom Orders Section (Unified Enticing Berry Red CTAs) */}
        <section id="custom" className="subscription">
          <h1>Custom Air Dry Foam Clay Designs</h1>
          <div className="cta-group">
            <a
              className="cta-red"
              href="mailto:contact@vettescrafting.com?subject=Custom%20Air%20Dry%20Foam%20Clay%20Order"
            >
              Request Custom Order
            </a>
            <a className="cta-red" href="#collection">
              Shop Available Stock
            </a>
          </div>
        </section>

        {/* Newsletter Section (Teal Wash) */}
        <section className="newsletter">
          <div className="newsletter-form">
            <p>Be the first to know about new collections and weekly drops.</p>
            <EmailForm />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <div className="reviews">
            {[
              ['Fast shipping!', 'Fast shipping and incredible detail on every piece!'],
              [
                'Pleased with my purchase!',
                'Ordered multiple sets for my holiday tree and they look like real patisserie pieces.',
              ],
              [
                'I love it so much!',
                'Packaged safely so nothing got crushed. The glitter and piping look amazing in person.',
              ],
            ]
              .slice(review, review + 2)
              .map(([title, text]) => (
                <article key={title}>
                  <div className="stars">★★★★★</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
          </div>
          <div className="controls">
            <button onClick={() => setReview(0)} aria-label="Previous reviews">
              ←
            </button>
            <span>{review + 1} of 2</span>
            <button onClick={() => setReview(1)} aria-label="Next reviews">
              →
            </button>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-grid">
          <div>
            <h2>Vette&apos;s Crafting</h2>
            <div className="socials">
              {socials.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2>Info</h2>
            <a href="#collection">Collections</a>
            <a href="#custom">Custom Orders</a>
            <a href="mailto:contact@vettescrafting.com">Contact</a>
          </div>
          <div>
            <h2>Subscribe to our emails</h2>
            <EmailForm />
          </div>
        </div>
        <div className="footer-bottom">
          <span>USD $ | United States</span>
          <span>Visa • Mastercard • Amex • Apple Pay • Google Pay</span>
        </div>
        <div className="copyright">
          © 2026 <a href="/">Vette&apos;s Crafting</a> — All Rights Reserved
        </div>
      </footer>
    </>
  );
}

export default App;
