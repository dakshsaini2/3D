export interface Product {
  id: string
  name: string
  category: string
  tag: string
  description: string
  specs: string
  priceInr: number
  placeholderType: 'keychain' | 'dragon' | 'planter' | 'nameplate'
}

interface ProductCardProps {
  product: Product
}

function ProductIllustration({ type }: { type: Product['placeholderType'] }) {
  switch (type) {
    case 'keychain':
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Background Layer Lines */}
          <g opacity="0.12" stroke="#2c2824" strokeWidth="1">
            <line x1="20" y1="50" x2="180" y2="50" />
            <line x1="20" y1="70" x2="180" y2="70" />
            <line x1="20" y1="90" x2="180" y2="90" />
            <line x1="20" y1="110" x2="180" y2="110" />
            <line x1="20" y1="130" x2="180" y2="130" />
            <line x1="20" y1="150" x2="180" y2="150" />
          </g>
          {/* Stainless steel split ring */}
          <circle cx="50" cy="100" r="26" stroke="#8a7f74" strokeWidth="5" fill="none" />
          <circle cx="50" cy="100" r="21" stroke="#e8e0d4" strokeWidth="1.5" fill="none" />
          {/* Connecting jump ring */}
          <path d="M72 100 H86" stroke="#8a7f74" strokeWidth="4" strokeLinecap="round" />
          {/* Main 3D Printed Keychain Plate */}
          <rect
            x="84"
            y="76"
            width="96"
            height="48"
            rx="8"
            fill="#c1541a"
            stroke="#9c3f10"
            strokeWidth="2"
          />
          {/* Keychain Hole */}
          <circle cx="94" cy="100" r="4.5" fill="#faf7f2" stroke="#9c3f10" strokeWidth="1.5" />
          {/* Embossed Text in White PLA */}
          <rect x="110" y="87" width="8" height="26" rx="2" fill="#faf7f2" />
          <path d="M110 87 h18 v6 h-18 z M110 97 h14 v6 h-14 z" fill="#faf7f2" />
          <rect x="136" y="87" width="8" height="26" rx="2" fill="#faf7f2" />
          <path d="M136 107 h18 v6 h-18 z" fill="#faf7f2" />
          <rect x="162" y="87" width="8" height="26" rx="2" fill="#faf7f2" />
          {/* Layer texture hint */}
          <line x1="90" y1="84" x2="174" y2="84" stroke="#e07040" strokeWidth="1" opacity="0.6" />
          <line x1="90" y1="116" x2="174" y2="116" stroke="#9c3f10" strokeWidth="1" opacity="0.6" />
        </svg>
      )

    case 'dragon':
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Background Concentric Print Paths */}
          <g opacity="0.1" stroke="#2c2824" strokeWidth="1">
            <circle cx="100" cy="100" r="30" />
            <circle cx="100" cy="100" r="50" />
            <circle cx="100" cy="100" r="70" />
          </g>
          {/* Articulated Body Segments (Print-in-place ball links) */}
          {/* Tail segment */}
          <circle cx="45" cy="140" r="9" fill="#c1541a" stroke="#9c3f10" strokeWidth="1.5" />
          <path d="M38 144 L25 152 L34 137 Z" fill="#e07040" />
          {/* Segment link 1 */}
          <rect x="52" y="128" width="16" height="18" rx="4" fill="#c1541a" />
          {/* Segment link 2 */}
          <circle cx="75" cy="125" r="14" fill="#e07040" stroke="#9c3f10" strokeWidth="1.5" />
          <path d="M75 110 L81 122 L69 122 Z" fill="#c1541a" />
          {/* Segment link 3 */}
          <rect x="85" y="105" width="20" height="22" rx="5" fill="#c1541a" />
          <path d="M95 92 L103 105 L87 105 Z" fill="#e07040" />
          {/* Mid torso segment */}
          <circle cx="115" cy="95" r="17" fill="#e07040" stroke="#9c3f10" strokeWidth="1.5" />
          <path d="M115 76 L124 93 L106 93 Z" fill="#c1541a" />
          {/* Dragon Head */}
          <path
            d="M128 85 L165 65 L175 75 L160 98 L138 98 Z"
            fill="#c1541a"
            stroke="#9c3f10"
            strokeWidth="2"
          />
          {/* Dragon Horns & Crest */}
          <path d="M145 76 L172 45 L156 70 Z" fill="#e07040" stroke="#9c3f10" strokeWidth="1" />
          <path d="M138 80 L160 52 L148 78 Z" fill="#e07040" stroke="#9c3f10" strokeWidth="1" />
          {/* Eye */}
          <circle cx="152" cy="74" r="2.5" fill="#faf7f2" />
          {/* Ball link socket indicator */}
          <circle cx="95" cy="116" r="4" fill="#faf7f2" opacity="0.6" />
        </svg>
      )

    case 'planter':
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Ground shadow */}
          <ellipse cx="100" cy="165" rx="50" ry="8" fill="#e8e0d4" />
          {/* Succulent Leaves */}
          <path d="M100 85 C92 70 85 55 100 42 C115 55 108 70 100 85 Z" fill="#588157" />
          <path d="M92 88 C76 78 65 68 74 54 C88 62 94 76 92 88 Z" fill="#6a994e" />
          <path d="M108 88 C124 78 135 68 126 54 C112 62 106 76 108 88 Z" fill="#3a5a40" />
          <path d="M85 96 C68 94 58 90 62 76 C76 78 84 88 85 96 Z" fill="#6a994e" />
          <path d="M115 96 C132 94 142 90 138 76 C124 78 116 88 115 96 Z" fill="#588157" />
          {/* Center core */}
          <circle cx="100" cy="88" r="6" fill="#a7c957" />
          {/* Dodecahedron Faceted Planter Faces */}
          {/* Top opening rim */}
          <polygon points="78,98 122,98 136,112 122,126 78,126 64,112" fill="#9c3f10" />
          {/* Front Center Facet */}
          <polygon
            points="78,126 122,126 132,152 100,165 68,152"
            fill="#c1541a"
            stroke="#9c3f10"
            strokeWidth="1.5"
          />
          {/* Left Upper Facet */}
          <polygon
            points="64,112 78,98 78,126 68,152"
            fill="#e07040"
            stroke="#9c3f10"
            strokeWidth="1.5"
          />
          {/* Right Upper Facet */}
          <polygon
            points="122,98 136,112 132,152 122,126"
            fill="#a84312"
            stroke="#9c3f10"
            strokeWidth="1.5"
          />
          {/* Bottom Left Triangular Facet */}
          <polygon
            points="68,152 100,165 76,165"
            fill="#9c3f10"
            stroke="#9c3f10"
            strokeWidth="1"
          />
          {/* Bottom Right Triangular Facet */}
          <polygon
            points="132,152 100,165 124,165"
            fill="#7a2e07"
            stroke="#9c3f10"
            strokeWidth="1"
          />
        </svg>
      )

    case 'nameplate':
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Desk surface shadow */}
          <ellipse cx="100" cy="160" rx="65" ry="7" fill="#e8e0d4" />
          {/* Arch Backplate in warm cream PLA */}
          <path
            d="M45 142 V100 A55 55 0 0 1 155 100 V142 Z"
            fill="#f2ede4"
            stroke="#e8e0d4"
            strokeWidth="2"
          />
          {/* Inner embossed arch contour line */}
          <path
            d="M52 142 V100 A48 48 0 0 1 148 100 V142"
            stroke="#e0d6c7"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          {/* Embossed text: "STUDIO 3D" in terracotta */}
          <g fill="#c1541a">
            {/* S */}
            <path d="M68 114 C68 110 74 110 77 112 L75 115 C73 114 70 114 70 116 C70 118 78 117 78 122 C78 125 73 126 68 124 L69 121 C72 122 76 122 76 120 C76 118 68 119 68 114 Z" />
            {/* T */}
            <path d="M82 110 H92 V113 H88 V125 H85 V113 H82 Z" />
            {/* U */}
            <path d="M96 110 H99 V121 C99 123 102 123 103 123 C105 123 107 123 107 121 V110 H110 V121 C110 126 104 126 103 126 C101 126 96 126 96 121 Z" />
            {/* D */}
            <path d="M115 110 H122 C127 110 129 114 129 117.5 C129 121 127 125 122 125 H115 Z M118 113 V122 H122 C124 122 126 120 126 117.5 C126 115 124 113 122 113 Z" />
          </g>
          {/* Minimalist Cantilevered Base Stand */}
          <rect
            x="36"
            y="138"
            width="128"
            height="14"
            rx="3"
            fill="#c1541a"
            stroke="#9c3f10"
            strokeWidth="1.5"
          />
          {/* Base bevel highlight */}
          <line x1="38" y1="140" x2="162" y2="140" stroke="#e07040" strokeWidth="1.5" />
        </svg>
      )
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card" aria-labelledby={`product-title-${product.id}`}>
      {/* Product Image Preview Area */}
      <div className="product-card__image">
        <div className="product-card__placeholder-art">
          <ProductIllustration type={product.placeholderType} />
        </div>
        <span className="product-card__demo-pill">Demo Item</span>
      </div>

      {/* Product Information */}
      <div className="product-card__body">
        <span className="product-card__tag">{product.category}</span>
        <h3 id={`product-title-${product.id}`} className="product-card__name">
          {product.name}
        </h3>
        <p className="product-card__desc">{product.description}</p>
        <span className="product-card__specs">{product.specs}</span>

        {/* Footer with Price and Safe Action */}
        <div className="product-card__footer">
          <span className="product-card__price">₹{product.priceInr}</span>
          <a
            href="#products"
            className="product-card__cta"
            aria-label={`View details for ${product.name} (Demo item)`}
          >
            <span>View Details</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </article>
  )
}
