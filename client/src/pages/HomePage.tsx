import { useState } from 'react'
import heroProductsImg from '../assets/hero-products.jpg'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import { FEATURED_PRODUCTS, type Product } from '../data/products'
import { CATEGORIES } from '../data/categories'

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      {/* ── Section 1: Hero Section ─────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__eyebrow">
              <span className="hero__meta-dot" aria-hidden="true" />
              FDM 3D Studio • India
            </span>

            <h1 id="hero-title" className="hero__title">
              Thoughtful 3D Craft, <em>Printed Just for You.</em>
            </h1>

            <p className="hero__copy">
              From personalized name keychains and fluid articulated toys to architectural
              desk accents—each piece is layer-crafted with durable biopolymers right here
              in India.
            </p>

            <div className="hero__actions">
              <a href="#products" className="btn-primary">
                Explore Products
              </a>
              <a href="#custom" className="btn-secondary">
                Request Custom Print
              </a>
            </div>

            {/* Value Highlights */}
            <div className="hero__meta" aria-label="Studio guarantees">
              <div className="hero__meta-item">
                <span className="hero__meta-dot" aria-hidden="true" />
                <span>Zero Warehouse Waste</span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-dot" aria-hidden="true" />
                <span>0.16mm Layer Precision</span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-dot" aria-hidden="true" />
                <span>Ships Across India</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Area */}
          <div className="hero__image-wrap">
            <img
              src={heroProductsImg}
              alt="Curated FDM 3D-printed studio collection including articulated dragon, geometric succulent planter, personalized desk nameplate, and custom keychain"
              loading="eager"
            />
            <div className="hero__image-badge">
              <span aria-hidden="true">★</span>
              <span>Curated Studio Collection</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Featured Categories ───────────────────────── */}
      <section id="categories" className="section section--shaded" aria-labelledby="categories-heading">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Explore Collections</span>
            <h2 id="categories-heading" className="section__title">
              Featured Categories
            </h2>
            <p className="section__subtitle">
              Explore our made-to-order FDM 3D-printed collections, designed with intention
              and fabricated with precision.
            </p>
          </div>

          <div className="categories-grid">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={cat.href}
                className="category-card"
                aria-label={`Explore ${cat.name} category`}
              >
                <div className="category-card__header-row">
                  <div className="category-card__icon-wrap" aria-hidden="true">
                    {cat.id === 'personalized-gifts' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                        <line x1="7" y1="7" x2="7.01" y2="7" />
                      </svg>
                    )}
                    {cat.id === 'fidgets-toys' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {cat.id === 'desk-accessories' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    )}
                    {cat.id === 'custom-prints' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                        <line x1="14" y1="4" x2="10" y2="20" />
                      </svg>
                    )}
                  </div>
                  <span className="category-card__pill">{cat.badge}</span>
                </div>

                <div className="category-card__body">
                  <span className="category-card__tagline">{cat.tagline}</span>
                  <h3 className="category-card__label">{cat.name}</h3>
                  <p className="category-card__desc">{cat.description}</p>
                </div>

                <span className="category-card__arrow" aria-hidden="true">
                  <span>Browse Collection</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Featured Products ─────────────────────────── */}
      <section id="products" className="section" aria-labelledby="products-heading">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Handpicked Prints</span>
            <h2 id="products-heading" className="section__title">
              Featured Products
            </h2>
            <p className="section__subtitle">
              Carefully tuned layer heights, matte biopolymer finishes, and robust infill
              geometry. Sized and priced for Indian everyday life.
            </p>
          </div>

          <div className="products-grid">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={(p) => {
                  window.location.hash = `#/product/${p.slug}`
                }}
                onQuickView={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>

          {/* Illustrative Demo Notice */}
          <div className="demo-notice" role="note" aria-label="Demo catalog disclaimer">
            <strong>Illustrative Demo Catalog:</strong> Products, specifications, and sample
            INR prices above are shown for design and layout preview. Click <em>“View Product”</em> on
            any item to inspect detailed 3D fabrication specs and studio photography.
          </div>
        </div>
      </section>

      {/* ── Section 4: Made for You (Personalization & Print Process) */}
      <section id="made-for-you" className="personalization" aria-labelledby="personalization-heading">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Our Printing Philosophy</span>
            <h2 id="personalization-heading" className="section__title">
              Made for You, Layer by Layer
            </h2>
            <p className="section__subtitle">
              Every item is sliced and 3D printed to order in India, eliminating wasteful
              warehouse overproduction while offering bespoke personalization.
            </p>
          </div>

          <div className="perso-grid">
            {/* Pillar 1: Made to Order */}
            <div className="perso-item">
              <div className="perso-item__icon-wrap" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="perso-item__title">On-Demand Fabrication</h3>
              <p className="perso-item__body">
                We maintain no dusty shelves of unsold plastic goods. Every keychain, toy,
                and planter begins printing right after your order is confirmed.
              </p>
            </div>

            {/* Pillar 2: Personalized Customization */}
            <div className="perso-item">
              <div className="perso-item__icon-wrap" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>
              </div>
              <h3 className="perso-item__title">Bespoke Personalization</h3>
              <p className="perso-item__body">
                Add your name, choose dual-tone color palettes, or specify dimensions. We
                modify the digital 3D model CAD file before extruding your item.
              </p>
            </div>

            {/* Pillar 3: Eco Bio-Polymers */}
            <div className="perso-item">
              <div className="perso-item__icon-wrap" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="perso-item__title">Durable Bio-Polymers</h3>
              <p className="perso-item__body">
                Fabricated with tough PLA+ and PETG sourced for tight layer fusion, vibrant
                non-fading color pigments, and renewable cornstarch-derived polymers.
              </p>
            </div>

            {/* Pillar 4: Hand Inspected */}
            <div className="perso-item">
              <div className="perso-item__icon-wrap" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="perso-item__title">Hand-Inspected Quality</h3>
              <p className="perso-item__body">
                Every print undergoes post-processing deburring, joint clearance checks, and
                safe plastic-free packing before dispatching across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Custom 3D Printing Orders Callout ─────────── */}
      <section id="custom" className="section section--shaded" aria-labelledby="custom-heading">
        <div className="container">
          <div className="custom-banner">
            <div className="custom-banner__content">
              <span className="custom-banner__eyebrow">Custom Fabrication</span>
              <h2 id="custom-heading" className="custom-banner__title">
                Have a Custom 3D File or Unique Idea?
              </h2>
              <p className="custom-banner__copy">
                From bespoke wedding favors and corporate name badges to mechanical replacement
                gears—we accept direct .STL and .STEP files. Send us your requirements for slicing,
                material recommendations, and an instant print assessment.
              </p>
              <div className="custom-banner__spec-box">
                <div>
                  <strong>Supported Formats:</strong> .STL, .STEP, .OBJ, .3MF
                </div>
                <div>
                  <strong>Print Envelope:</strong> Up to 256 × 256 × 256 mm
                </div>
                <div>
                  <strong>Filaments:</strong> Matte PLA, Silk PLA, PETG, High-Temp TPU
                </div>
              </div>
            </div>

            <div className="custom-banner__actions">
              <a href="#contact" className="btn-primary">
                Inquire About Custom Print
              </a>
              <a href="#made-for-you" className="btn-secondary">
                View Material Specifications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Studio Information & Policies ─────────────── */}
      <section className="section" aria-labelledby="studio-info-heading">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Transparent Studio</span>
            <h2 id="studio-info-heading" className="section__title">
              Studio Information & Store Policies
            </h2>
            <p className="section__subtitle">
              Clear commitments, realistic timelines, and genuine customer care.
            </p>
          </div>

          <div className="info-grid">
            {/* Card 1: About */}
            <article id="about" className="info-card" aria-labelledby="about-title">
              <span className="info-card__tag">Our Story</span>
              <h3 id="about-title" className="info-card__title">
                About Our 3D Print Studio
              </h3>
              <p className="info-card__body">
                We are an independent FDM 3D printing workshop based in India. We believe
                additive manufacturing shouldn&apos;t just be for rapid prototyping—it can produce
                long-lasting, delightful everyday objects, customized directly for the person
                using them.
              </p>
            </article>

            {/* Card 2: Shipping & Returns */}
            <article id="shipping-returns" className="info-card" aria-labelledby="shipping-title">
              <span className="info-card__tag">Delivery & Guarantee</span>
              <h3 id="shipping-title" className="info-card__title">
                Shipping & Reprint Guarantee
              </h3>
              <p className="info-card__body">
                Because each item is printed to order, production takes 1–3 business days,
                followed by express courier shipping across India (typically 3–5 days). If your
                item arrives damaged or with layer defects, we reprint and reship at zero cost.
              </p>
            </article>

            {/* Card 3: Contact */}
            <article id="contact" className="info-card" aria-labelledby="contact-title">
              <span className="info-card__tag">Direct Assistance</span>
              <h3 id="contact-title" className="info-card__title">
                Contact & Custom Inquiries
              </h3>
              <p className="info-card__body">
                Need bulk orders for corporate gifting, custom color matching, or technical CAD
                advice? Send an inquiry and our makers will respond with file slicing previews
                and accurate turnaround estimates.
              </p>
            </article>

            {/* Card 4: Legal & Privacy */}
            <article id="legal" className="info-card" aria-labelledby="legal-title">
              <span className="info-card__tag">Privacy & Terms</span>
              <h3 id="legal-title" className="info-card__title">
                Privacy & Data Security
              </h3>
              <p className="info-card__body">
                We respect your privacy. Any uploaded 3D design files, names, or personalized
                text provided for custom prints are used exclusively for fabrication and never
                shared, published, or repurposed.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Product Details Modal Preview ───────────────────────── */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}
