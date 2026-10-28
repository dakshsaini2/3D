import { useState } from 'react'
import type { Product, PlaceholderType } from '../types'

interface ProductCardProps {
  product: Product
  onSelectProduct?: (product: Product) => void
  onQuickView?: (product: Product) => void
}

function FallbackBlueprint({ type }: { type: PlaceholderType }) {
  switch (type) {
    case 'keychain':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="50" cy="100" r="26" stroke="#8a7f74" strokeWidth="5" fill="none" />
          <circle cx="50" cy="100" r="21" stroke="#e8e0d4" strokeWidth="1.5" fill="none" />
          <path d="M72 100 H86" stroke="#8a7f74" strokeWidth="4" strokeLinecap="round" />
          <rect x="84" y="76" width="96" height="48" rx="8" fill="#c1541a" stroke="#9c3f10" strokeWidth="2" />
          <circle cx="94" cy="100" r="4.5" fill="#faf7f2" stroke="#9c3f10" strokeWidth="1.5" />
          <rect x="110" y="87" width="8" height="26" rx="2" fill="#faf7f2" />
          <path d="M110 87 h18 v6 h-18 z M110 97 h14 v6 h-14 z" fill="#faf7f2" />
          <rect x="136" y="87" width="8" height="26" rx="2" fill="#faf7f2" />
          <path d="M136 107 h18 v6 h-18 z" fill="#faf7f2" />
          <rect x="162" y="87" width="8" height="26" rx="2" fill="#faf7f2" />
        </svg>
      )
    case 'tag':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="40" y="55" width="120" height="90" rx="10" fill="#c1541a" stroke="#9c3f10" strokeWidth="2" />
          <rect x="52" y="88" width="18" height="24" rx="4" fill="#faf7f2" stroke="#9c3f10" strokeWidth="1.5" />
          <line x1="82" y1="85" x2="145" y2="85" stroke="#faf7f2" strokeWidth="3" strokeLinecap="round" />
          <line x1="82" y1="100" x2="135" y2="100" stroke="#faf7f2" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="82" y1="115" x2="125" y2="115" stroke="#faf7f2" strokeWidth="2" strokeLinecap="round" />
          <path d="M61 55 V35 A15 15 0 0 1 76 20 H80" stroke="#8a7f74" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case 'dragon':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="45" cy="140" r="9" fill="#c1541a" stroke="#9c3f10" strokeWidth="1.5" />
          <path d="M38 144 L25 152 L34 137 Z" fill="#e07040" />
          <rect x="52" y="128" width="16" height="18" rx="4" fill="#c1541a" />
          <circle cx="75" cy="125" r="14" fill="#e07040" stroke="#9c3f10" strokeWidth="1.5" />
          <path d="M75 110 L81 122 L69 122 Z" fill="#c1541a" />
          <rect x="85" y="105" width="20" height="22" rx="5" fill="#c1541a" />
          <path d="M95 92 L103 105 L87 105 Z" fill="#e07040" />
          <circle cx="115" cy="95" r="17" fill="#e07040" stroke="#9c3f10" strokeWidth="1.5" />
          <path d="M115 76 L124 93 L106 93 Z" fill="#c1541a" />
          <path d="M128 85 L165 65 L175 75 L160 98 L138 98 Z" fill="#c1541a" stroke="#9c3f10" strokeWidth="2" />
          <path d="M145 76 L172 45 L156 70 Z" fill="#e07040" stroke="#9c3f10" strokeWidth="1" />
          <circle cx="152" cy="74" r="2.5" fill="#faf7f2" />
        </svg>
      )
    case 'spinner':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="100" cy="100" r="65" stroke="#c1541a" strokeWidth="4" />
          <ellipse cx="100" cy="100" rx="48" ry="32" stroke="#e07040" strokeWidth="3" transform="rotate(30 100 100)" />
          <ellipse cx="100" cy="100" rx="32" ry="18" stroke="#9c3f10" strokeWidth="2.5" transform="rotate(-30 100 100)" />
          <circle cx="100" cy="100" r="10" fill="#c1541a" />
          <circle cx="100" cy="100" r="4" fill="#faf7f2" />
        </svg>
      )
    case 'planter':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <ellipse cx="100" cy="165" rx="50" ry="8" fill="#e8e0d4" />
          <path d="M100 85 C92 70 85 55 100 42 C115 55 108 70 100 85 Z" fill="#588157" />
          <path d="M92 88 C76 78 65 68 74 54 C88 62 94 76 92 88 Z" fill="#6a994e" />
          <path d="M108 88 C124 78 135 68 126 54 C112 62 106 76 108 88 Z" fill="#3a5a40" />
          <polygon points="78,98 122,98 136,112 122,126 78,126 64,112" fill="#9c3f10" />
          <polygon points="78,126 122,126 132,152 100,165 68,152" fill="#c1541a" stroke="#9c3f10" strokeWidth="1.5" />
          <polygon points="64,112 78,98 78,126 68,152" fill="#e07040" stroke="#9c3f10" strokeWidth="1.5" />
          <polygon points="122,98 136,112 132,152 122,126" fill="#a84312" stroke="#9c3f10" strokeWidth="1.5" />
        </svg>
      )
    case 'organizer':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="35" y="90" width="130" height="50" rx="8" fill="#c1541a" stroke="#9c3f10" strokeWidth="2" />
          <path d="M60 90 V75 A5 5 0 0 1 70 75 V90" stroke="#faf7f2" strokeWidth="3" fill="#faf7f2" />
          <path d="M95 90 V75 A5 5 0 0 1 105 75 V90" stroke="#faf7f2" strokeWidth="3" fill="#faf7f2" />
          <path d="M130 90 V75 A5 5 0 0 1 140 75 V90" stroke="#faf7f2" strokeWidth="3" fill="#faf7f2" />
          <ellipse cx="100" cy="155" rx="70" ry="8" fill="#e8e0d4" />
        </svg>
      )
    case 'nameplate':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <ellipse cx="100" cy="160" rx="65" ry="7" fill="#e8e0d4" />
          <path d="M45 142 V100 A55 55 0 0 1 155 100 V142 Z" fill="#f2ede4" stroke="#e8e0d4" strokeWidth="2" />
          <path d="M52 142 V100 A48 48 0 0 1 148 100 V142" stroke="#e0d6c7" strokeWidth="1.5" strokeDasharray="4 2" />
          <rect x="36" y="138" width="128" height="14" rx="3" fill="#c1541a" stroke="#9c3f10" strokeWidth="1.5" />
          <line x1="38" y1="140" x2="162" y2="140" stroke="#e07040" strokeWidth="1.5" />
        </svg>
      )
    case 'custom':
    default:
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <polygon points="100,45 155,75 155,135 100,165 45,135 45,75" stroke="#9c3f10" strokeWidth="2" fill="#f2ede4" />
          <polygon points="100,45 155,75 100,105 45,75" fill="#e07040" stroke="#9c3f10" strokeWidth="1.5" />
          <polygon points="45,75 100,105 100,165 45,135" fill="#c1541a" stroke="#9c3f10" strokeWidth="1.5" />
          <polygon points="155,75 100,105 100,165 155,135" fill="#a84312" stroke="#9c3f10" strokeWidth="1.5" />
          <line x1="100" y1="105" x2="100" y2="45" stroke="#faf7f2" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      )
  }
}

export default function ProductCard({
  product,
  onSelectProduct,
  onQuickView,
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false)

  const handleCardClick = () => {
    if (onSelectProduct) {
      onSelectProduct(product)
    } else {
      window.location.hash = `#/product/${product.slug}`
    }
  }

  const handleImageClick = () => {
    if (onQuickView) {
      onQuickView(product)
    } else {
      handleCardClick()
    }
  }

  const focalPoint = product.image.focalPoint ?? product.imageFocalPoint ?? {
    x: 50,
    y: 50,
    scale: 1.5,
  }
  const imgSrc = product.image.src || product.imageSrc || ''
  const placeholderType = product.image.placeholderType || product.placeholderType || 'keychain'
  const isPersonalizable = product.personalizable ?? product.isCustomizable ?? false

  return (
    <article
      className="product-card"
      aria-labelledby={`product-title-${product.id}`}
      id={`product-${product.id}`}
    >
      {/* Product Image Area */}
      <div
        className="product-card__image"
        onClick={handleImageClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleImageClick()
          }
        }}
        aria-label={`Preview ${product.name} image and specifications`}
      >
        {!imageError && imgSrc ? (
          <div
            className="product-card__photo-crop"
            style={{
              transformOrigin: `${focalPoint.x}% ${focalPoint.y}%`,
              transform: `scale(${focalPoint.scale})`,
            }}
          >
            <img
              src={imgSrc}
              alt={product.image.alt || `${product.name} studio photography sample`}
              className="product-card__photo"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="product-card__placeholder-art">
            <FallbackBlueprint type={placeholderType} />
          </div>
        )}

        {/* Badges Overlay */}
        <div className="product-card__badges" aria-hidden="true">
          {product.badge && (
            <span className="badge-highlight">{product.badge}</span>
          )}
          <span className="badge-demo">Demo Sample</span>
        </div>
      </div>

      {/* Product Card Body */}
      <div className="product-card__body">
        {/* Category & Customization Indicator */}
        <div className="product-card__category-row">
          <span className="product-card__category-tag">
            <span className="category-dot" aria-hidden="true" />
            {product.category}
          </span>
          {isPersonalizable && (
            <span className="product-card__custom-pill">Personalizable</span>
          )}
        </div>

        {/* Product Title */}
        <h3 id={`product-title-${product.id}`} className="product-card__name">
          {product.name}
        </h3>

        {/* Short Subtitle / Purpose */}
        <p className="product-card__subtitle">{product.subtitle}</p>

        {/* Description (2 lines clamp) */}
        <p className="product-card__desc">{product.description}</p>

        {/* Specifications Chips */}
        <div className="product-card__specs-row" aria-label="Technical specifications">
          <span className="spec-chip">{product.specs.material}</span>
          <span className="spec-chip">{product.specs.layerHeight}</span>
        </div>

        {/* Footer: Believable INR Pricing & "View Product" Action */}
        <div className="product-card__footer">
          <div className="product-card__price-wrap">
            <div className="price-main">
              <span className="currency-symbol">₹</span>
              <span className="amount">{product.priceInr}</span>
              {product.originalPriceInr && (
                <span className="original-price">₹{product.originalPriceInr}</span>
              )}
            </div>
            <span className="price-caption">Made to order • Tax incl.</span>
          </div>

          <button
            type="button"
            className="product-card__view-btn"
            onClick={handleCardClick}
            aria-label={`View Product: ${product.name} (Opens detailed view)`}
          >
            <span>View Product</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}
