import type { PlaceholderType } from '../types'

interface TechnicalBlueprintProps {
  type: PlaceholderType
  className?: string
}

export default function TechnicalBlueprint({ type, className = '' }: TechnicalBlueprintProps) {
  const gridLines = (
    <g opacity="0.15" stroke="#2c2824" strokeWidth="1">
      <line x1="10" y1="30" x2="190" y2="30" />
      <line x1="10" y1="60" x2="190" y2="60" />
      <line x1="10" y1="90" x2="190" y2="90" />
      <line x1="10" y1="120" x2="190" y2="120" />
      <line x1="10" y1="150" x2="190" y2="150" />
      <line x1="10" y1="180" x2="190" y2="180" />
    </g>
  )

  switch (type) {
    case 'keychain':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          {gridLines}
          <circle cx="50" cy="100" r="26" stroke="#8a7f74" strokeWidth="5" fill="none" />
          <circle cx="50" cy="100" r="21" stroke="#e8e0d4" strokeWidth="1.5" fill="none" />
          <path d="M72 100 H86" stroke="#8a7f74" strokeWidth="4" strokeLinecap="round" />
          <rect x="84" y="74" width="98" height="52" rx="8" fill="#c1541a" stroke="#9c3f10" strokeWidth="2" />
          <circle cx="94" cy="100" r="4.5" fill="#faf7f2" stroke="#9c3f10" strokeWidth="1.5" />
          {/* Dual-color raised lettering "LEO" */}
          <rect x="110" y="85" width="8" height="30" rx="2" fill="#faf7f2" />
          <path d="M110 109 h16 v6 h-16 z" fill="#faf7f2" />
          <rect x="134" y="85" width="8" height="30" rx="2" fill="#faf7f2" />
          <path d="M134 85 h16 v6 h-16 z M134 97 h12 v5 h-12 z M134 109 h16 v6 h-16 z" fill="#faf7f2" />
          <rect x="158" y="85" width="22" height="30" rx="8" fill="none" stroke="#faf7f2" strokeWidth="7" />
          <text x="100" y="155" fill="#8a7f74" fontSize="10" fontFamily="monospace" textAnchor="middle">
            0.16mm Layer • 100% Infill
          </text>
        </svg>
      )
    case 'tag':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          {gridLines}
          <rect x="36" y="50" width="128" height="96" rx="10" fill="#c1541a" stroke="#9c3f10" strokeWidth="2" />
          <rect x="48" y="86" width="20" height="24" rx="4" fill="#faf7f2" stroke="#9c3f10" strokeWidth="1.5" />
          <line x1="80" y1="80" x2="150" y2="80" stroke="#faf7f2" strokeWidth="3" strokeLinecap="round" />
          <line x1="80" y1="96" x2="140" y2="96" stroke="#faf7f2" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="80" y1="112" x2="128" y2="112" stroke="#faf7f2" strokeWidth="2" strokeLinecap="round" />
          <path d="M58 50 V28 A12 12 0 0 1 70 16 H76" stroke="#8a7f74" strokeWidth="3.5" strokeLinecap="round" />
          <text x="100" y="165" fill="#8a7f74" fontSize="10" fontFamily="monospace" textAnchor="middle">
            High-Temp PETG • 60% Infill
          </text>
        </svg>
      )
    case 'dragon':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <g opacity="0.12" stroke="#2c2824" strokeWidth="1">
            <circle cx="100" cy="100" r="30" />
            <circle cx="100" cy="100" r="55" />
            <circle cx="100" cy="100" r="80" />
          </g>
          {/* Segmented Dragon Spine */}
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
          <text x="100" y="170" fill="#8a7f74" fontSize="10" fontFamily="monospace" textAnchor="middle">
            Print-In-Place • 28 Ball Joints
          </text>
        </svg>
      )
    case 'spinner':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          {gridLines}
          <circle cx="100" cy="100" r="65" stroke="#c1541a" strokeWidth="4" />
          <ellipse cx="100" cy="100" rx="48" ry="32" stroke="#e07040" strokeWidth="3" transform="rotate(30 100 100)" />
          <ellipse cx="100" cy="100" rx="32" ry="18" stroke="#9c3f10" strokeWidth="2.5" transform="rotate(-30 100 100)" />
          <circle cx="100" cy="100" r="10" fill="#c1541a" />
          <circle cx="100" cy="100" r="4" fill="#faf7f2" />
          <text x="100" y="180" fill="#8a7f74" fontSize="10" fontFamily="monospace" textAnchor="middle">
            0.3mm Clearance • Triple Gimbal
          </text>
        </svg>
      )
    case 'planter':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <ellipse cx="100" cy="165" rx="50" ry="8" fill="#e8e0d4" />
          <path d="M100 85 C92 70 85 55 100 42 C115 55 108 70 100 85 Z" fill="#588157" />
          <path d="M92 88 C76 78 65 68 74 54 C88 62 94 76 92 88 Z" fill="#6a994e" />
          <path d="M108 88 C124 78 135 68 126 54 C112 62 106 76 108 88 Z" fill="#3a5a40" />
          <polygon points="78,98 122,98 136,112 122,126 78,126 64,112" fill="#9c3f10" />
          <polygon points="78,126 122,126 132,152 100,165 68,152" fill="#c1541a" stroke="#9c3f10" strokeWidth="1.5" />
          <polygon points="64,112 78,98 78,126 68,152" fill="#e07040" stroke="#9c3f10" strokeWidth="1.5" />
          <polygon points="122,98 136,112 132,152 122,126" fill="#a84312" stroke="#9c3f10" strokeWidth="1.5" />
          <text x="100" y="182" fill="#8a7f74" fontSize="10" fontFamily="monospace" textAnchor="middle">
            PETG • 3 Perimeters Watertight
          </text>
        </svg>
      )
    case 'organizer':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          {gridLines}
          <rect x="35" y="80" width="130" height="55" rx="8" fill="#c1541a" stroke="#9c3f10" strokeWidth="2" />
          <path d="M60 80 V62 A5 5 0 0 1 70 62 V80" stroke="#faf7f2" strokeWidth="3" fill="#faf7f2" />
          <path d="M95 80 V62 A5 5 0 0 1 105 62 V80" stroke="#faf7f2" strokeWidth="3" fill="#faf7f2" />
          <path d="M130 80 V62 A5 5 0 0 1 140 62 V80" stroke="#faf7f2" strokeWidth="3" fill="#faf7f2" />
          <ellipse cx="100" cy="150" rx="70" ry="8" fill="#e8e0d4" />
          <text x="100" y="175" fill="#8a7f74" fontSize="10" fontFamily="monospace" textAnchor="middle">
            5-Channel Slot • Dense Ballast
          </text>
        </svg>
      )
    case 'nameplate':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <ellipse cx="100" cy="160" rx="65" ry="7" fill="#e8e0d4" />
          <path d="M45 142 V100 A55 55 0 0 1 155 100 V142 Z" fill="#f2ede4" stroke="#e8e0d4" strokeWidth="2" />
          <path d="M52 142 V100 A48 48 0 0 1 148 100 V142" stroke="#e0d6c7" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="100" y="122" fill="#2c2824" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
            EMMA CLARKE
          </text>
          <rect x="36" y="138" width="128" height="14" rx="3" fill="#c1541a" stroke="#9c3f10" strokeWidth="1.5" />
          <line x1="38" y1="140" x2="162" y2="140" stroke="#e07040" strokeWidth="1.5" />
          <text x="100" y="180" fill="#8a7f74" fontSize="10" fontFamily="monospace" textAnchor="middle">
            0.12mm Text • Balanced Arch
          </text>
        </svg>
      )
    case 'custom':
    default:
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          {gridLines}
          <polygon points="100,45 155,75 155,135 100,165 45,135 45,75" stroke="#9c3f10" strokeWidth="2" fill="#f2ede4" />
          <polygon points="100,45 155,75 100,105 45,75" fill="#e07040" stroke="#9c3f10" strokeWidth="1.5" />
          <polygon points="45,75 100,105 100,165 45,135" fill="#c1541a" stroke="#9c3f10" strokeWidth="1.5" />
          <polygon points="155,75 100,105 100,165 155,135" fill="#a84312" stroke="#9c3f10" strokeWidth="1.5" />
          <line x1="100" y1="105" x2="100" y2="45" stroke="#faf7f2" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="100" y="182" fill="#8a7f74" fontSize="10" fontFamily="monospace" textAnchor="middle">
            Direct STL / STEP Toolpath Slicing
          </text>
        </svg>
      )
  }
}
