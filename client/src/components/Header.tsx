import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* Brand logo & text */}
        <a href="#" className="site-header__brand" aria-label="3D Print Store homepage">
          <svg
            className="site-header__brand-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* Minimal 3D Cube with layer lines */}
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span>3D Print</span> Store
        </a>

        {/* Primary navigation */}
        <nav
          id="primary-navigation"
          className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <a href="#categories" className="site-nav__link" onClick={closeMenu}>
            Categories
          </a>
          <a href="#products" className="site-nav__link" onClick={closeMenu}>
            Featured Prints
          </a>
          <a href="#made-for-you" className="site-nav__link" onClick={closeMenu}>
            Made for You
          </a>
          <a href="#custom" className="site-nav__link" onClick={closeMenu}>
            Custom Orders
          </a>
          <a href="#about" className="site-nav__link" onClick={closeMenu}>
            About
          </a>
        </nav>

        {/* Actions: Cart & Mobile Menu Toggle */}
        <div className="site-header__actions">
          <button
            type="button"
            className="cart-btn"
            aria-label="Shopping Cart with 0 items (Demo storefront)"
            title="Cart is empty (Illustrative demo)"
          >
            <svg
              className="cart-btn__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>Cart</span>
            <span className="cart-btn__badge" aria-hidden="true">
              0
            </span>
          </button>

          {/* Mobile navigation toggle */}
          <button
            type="button"
            className="menu-btn"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleMenu}
          >
            <span className="menu-btn__bar" />
            <span className="menu-btn__bar" />
            <span className="menu-btn__bar" />
          </button>
        </div>
      </div>
    </header>
  )
}
