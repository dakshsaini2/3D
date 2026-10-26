const CURRENT_YEAR = 2026

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="site-footer__inner">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-brand__name">
              <span>3D Print</span> Store
            </div>
            <p className="footer-brand__tagline">
              Bespoke FDM 3D printing studio based in India. Crafting personalized gifts,
              tactile fidgets, and functional desk pieces layer by layer.
            </p>
            <span className="footer-brand__badge">🇮🇳 Designed & Printed in India</span>
          </div>

          {/* Column 1: Categories */}
          <div className="footer-col">
            <h3 className="footer-col__heading">Collections</h3>
            <div className="footer-col__links">
              <a href="#categories" className="footer-col__link">
                Personalized Gifts
              </a>
              <a href="#categories" className="footer-col__link">
                Fidgets & Toys
              </a>
              <a href="#categories" className="footer-col__link">
                Desk Accessories
              </a>
              <a href="#custom" className="footer-col__link">
                Custom Prints
              </a>
            </div>
          </div>

          {/* Column 2: Customer Care */}
          <div className="footer-col">
            <h3 className="footer-col__heading">Customer Care</h3>
            <div className="footer-col__links">
              <a href="#shipping-returns" className="footer-col__link">
                Shipping & Delivery
              </a>
              <a href="#shipping-returns" className="footer-col__link">
                Returns & Guarantee
              </a>
              <a href="#made-for-you" className="footer-col__link">
                Personalization Guide
              </a>
              <a href="#contact" className="footer-col__link">
                Contact Studio
              </a>
            </div>
          </div>

          {/* Column 3: Studio & Legal */}
          <div className="footer-col">
            <h3 className="footer-col__heading">Studio & Legal</h3>
            <div className="footer-col__links">
              <a href="#about" className="footer-col__link">
                About Our Studio
              </a>
              <a href="#made-for-you" className="footer-col__link">
                Filament & Quality Specs
              </a>
              <a href="#legal" className="footer-col__link">
                Privacy Policy
              </a>
              <a href="#legal" className="footer-col__link">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="site-footer__bottom">
          <p>© {CURRENT_YEAR} 3D Print Store. All rights reserved.</p>
          <p>Illustrative demo storefront • No live payment or orders processed yet.</p>
        </div>
      </div>
    </footer>
  )
}
