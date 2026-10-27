import heroProductsImg from '../assets/hero-products.jpg'
import type {
  Product,
  ProductSpec,
  ProductImage,
  ProductCategory,
  CategoryId,
  PlaceholderType,
} from '../types'

export type { Product, ProductSpec, ProductImage, PlaceholderType }

export const PRODUCTS: readonly Product[] = [
  {
    id: 'keychain-01',
    slug: 'personalized-dual-tone-keychain',
    name: 'Personalized Dual-Tone Keychain',
    category: 'Personalized Gifts',
    categoryId: 'personalized-gifts',
    tag: 'Custom Name',
    subtitle: 'Dual-color extruded lettering on weighted backing',
    description:
      'Crisp debossed lettering with contrasting backing and stainless steel split ring. Tailored for everyday carry.',
    longDescription:
      'Individually sliced and printed with precise filament color changes to create sharp, permanent two-tone typography. Sized to fit comfortably in your pocket with an integrated steel split ring hole.',
    specs: {
      material: 'Bio-PLA+',
      layerHeight: '0.16mm high-detail',
      infill: '100% solid',
      printTime: '~45 mins',
      dimensions: '65 × 24 × 4.5 mm',
      finishes: ['Terracotta & Cream', 'Charcoal & Ivory', 'Olive & Gold'],
    },
    priceInr: 249,
    originalPriceInr: 349,
    badge: 'Bestseller',
    featured: true,
    personalizable: true,
    isCustomizable: true,
    placeholderType: 'keychain',
    imageSrc: heroProductsImg,
    imageFocalPoint: {
      x: 67,
      y: 74,
      scale: 2.1,
    },
    image: {
      src: heroProductsImg,
      alt: 'Personalized dual-tone 3D printed keychain sample',
      focalPoint: {
        x: 67,
        y: 74,
        scale: 2.1,
      },
      placeholderType: 'keychain',
    },
    demoNotice: 'Demo sample item — Indicative INR pricing for preview.',
  },
  {
    id: 'luggage-tag-02',
    slug: 'custom-embossed-luggage-tag',
    name: 'Custom Embossed Luggage Tag',
    category: 'Personalized Gifts',
    categoryId: 'personalized-gifts',
    tag: 'Travel Gear',
    subtitle: 'Durable flexible tag with raised contact typography',
    description:
      'Impact-resistant luggage tag with raised lettering and recessed security strap slot. Designed for Indian rail and flight travel.',
    longDescription:
      'Engineered from tough high-temperature PETG with bold raised lettering that never rubs off. Sized for standard baggage loop straps with an underside confidentiality flap.',
    specs: {
      material: 'High-Temp PETG',
      layerHeight: '0.20mm standard',
      infill: '60% dense honeycomb',
      printTime: '~1 hour 15 mins',
      dimensions: '85 × 50 × 4.0 mm',
      finishes: ['Signal Orange & Charcoal', 'Matte Terracotta & Cream', 'Navy & White'],
    },
    priceInr: 299,
    originalPriceInr: 399,
    badge: 'Durable PETG',
    featured: false,
    personalizable: true,
    isCustomizable: true,
    placeholderType: 'tag',
    imageSrc: heroProductsImg,
    imageFocalPoint: {
      x: 64,
      y: 70,
      scale: 2.2,
    },
    image: {
      src: heroProductsImg,
      alt: 'Custom embossed luggage tag sample',
      focalPoint: {
        x: 64,
        y: 70,
        scale: 2.2,
      },
      placeholderType: 'tag',
    },
    demoNotice: 'Demo sample item — Indicative INR pricing for preview.',
  },
  {
    id: 'dragon-03',
    slug: 'articulated-crystal-dragon',
    name: 'Articulated Crystal Dragon',
    category: 'Fidgets & Toys',
    categoryId: 'fidgets-toys',
    tag: 'Print-in-Place',
    subtitle: 'Fully flexible multi-jointed sensory dragon',
    description:
      'Fluidly moving dragon with interconnected ball-and-socket links printed in a single build. Satisfying tactile fidgeting.',
    longDescription:
      'Zero assembly required. The 28-segment interlocking spine is printed flat in a single continuous print job, using loose mechanical tolerances for ultra-smooth fluid movement straight off the print bed.',
    specs: {
      material: 'Silk PLA',
      layerHeight: '0.16mm curved slope',
      infill: '25% gyroid',
      printTime: '~3.5 hours',
      dimensions: '240 × 65 × 35 mm',
      finishes: ['Copper Silk', 'Terracotta Red', 'Emerald Green'],
    },
    priceInr: 599,
    originalPriceInr: 799,
    badge: 'Tactile Fidget',
    featured: true,
    personalizable: false,
    isCustomizable: false,
    placeholderType: 'dragon',
    imageSrc: heroProductsImg,
    imageFocalPoint: {
      x: 26,
      y: 26,
      scale: 1.8,
    },
    image: {
      src: heroProductsImg,
      alt: 'Articulated crystal dragon print-in-place toy',
      focalPoint: {
        x: 26,
        y: 26,
        scale: 1.8,
      },
      placeholderType: 'dragon',
    },
    demoNotice: 'Demo sample item — Indicative INR pricing for preview.',
  },
  {
    id: 'gyro-spinner-04',
    slug: 'gyroscopic-kinetic-desk-spinner',
    name: 'Gyroscopic Kinetic Desk Spinner',
    category: 'Fidgets & Toys',
    categoryId: 'fidgets-toys',
    tag: 'Kinetic Physics',
    subtitle: 'Concentric gimbal rings with smooth print-in-place bearings',
    description:
      'Triple-axis kinetic desk toy featuring concentric rotating rings printed as a single interlocking mechanism.',
    longDescription:
      'A mesmerizing physics fidget engineered with calibrated 0.3mm clearances between three gimbal rings. Spins smoothly in hand or on your desk with zero bearings or hardware required.',
    specs: {
      material: 'Matte PLA+',
      layerHeight: '0.16mm high-detail',
      infill: '30% gyroid',
      printTime: '~2 hours',
      dimensions: '72 × 72 × 18 mm',
      finishes: ['Dual-Tone Sage & Sand', 'Matte Basalt', 'Silk Bronze'],
    },
    priceInr: 349,
    originalPriceInr: 499,
    badge: 'Print-in-Place',
    featured: false,
    personalizable: false,
    isCustomizable: false,
    placeholderType: 'spinner',
    imageSrc: heroProductsImg,
    imageFocalPoint: {
      x: 30,
      y: 32,
      scale: 1.9,
    },
    image: {
      src: heroProductsImg,
      alt: 'Gyroscopic kinetic desk spinner sample',
      focalPoint: {
        x: 30,
        y: 32,
        scale: 1.9,
      },
      placeholderType: 'spinner',
    },
    demoNotice: 'Demo sample item — Indicative INR pricing for preview.',
  },
  {
    id: 'planter-05',
    slug: 'geometric-dodecahedron-planter',
    name: 'Geometric Dodecahedron Planter',
    category: 'Desk Accessories',
    categoryId: 'desk-accessories',
    tag: 'Low-Poly Architecture',
    subtitle: 'Faceted desktop planter with hidden drainage',
    description:
      'Low-polygon faceted planter designed for succulents and small desk plants. Includes hidden drainage tray.',
    longDescription:
      'Architectural faceted geometry inspired by low-poly computer modeling. Printed in water-safe, UV-resistant PETG with 3 exterior perimeters to guarantee watertight performance for indoor botanicals.',
    specs: {
      material: 'Matte PETG',
      layerHeight: '0.20mm adaptive',
      infill: '20% honeycomb',
      printTime: '~4 hours',
      dimensions: '95 × 95 × 85 mm',
      finishes: ['Matte Terracotta', 'Sand Cream', 'Basalt Charcoal'],
    },
    priceInr: 449,
    originalPriceInr: 599,
    badge: 'Water-Resistant',
    featured: true,
    personalizable: false,
    isCustomizable: false,
    placeholderType: 'planter',
    imageSrc: heroProductsImg,
    imageFocalPoint: {
      x: 34,
      y: 68,
      scale: 2.0,
    },
    image: {
      src: heroProductsImg,
      alt: 'Geometric dodecahedron 3D printed planter',
      focalPoint: {
        x: 34,
        y: 68,
        scale: 2.0,
      },
      placeholderType: 'planter',
    },
    demoNotice: 'Demo sample item — Indicative INR pricing for preview.',
  },
  {
    id: 'cable-dock-06',
    slug: 'architectural-modular-cable-catcher',
    name: 'Architectural Modular Cable Catcher',
    category: 'Desk Accessories',
    categoryId: 'desk-accessories',
    tag: 'Cable Management',
    subtitle: 'Weighted geometric cable channel for USB-C & MagSafe',
    description:
      'Minimalist multi-slot desktop organizer with anti-slip silicone footing channels. Prevents cables from falling behind desks.',
    longDescription:
      'Designed for modern workstations. Accommodates up to 5 braided cables with micro-friction retention slots. High-infill base provides solid desktop ballast without taking up cluttering space.',
    specs: {
      material: 'Recycled Matte PLA',
      layerHeight: '0.20mm clean layer',
      infill: '50% dense grid',
      printTime: '~1 hour 45 mins',
      dimensions: '110 × 32 × 28 mm',
      finishes: ['Charcoal Matte', 'Oatmeal Sand', 'Sage Green'],
    },
    priceInr: 279,
    originalPriceInr: 379,
    badge: 'Minimalist',
    featured: false,
    personalizable: false,
    isCustomizable: false,
    placeholderType: 'organizer',
    imageSrc: heroProductsImg,
    imageFocalPoint: {
      x: 42,
      y: 64,
      scale: 2.1,
    },
    image: {
      src: heroProductsImg,
      alt: 'Architectural modular cable catcher sample',
      focalPoint: {
        x: 42,
        y: 64,
        scale: 2.1,
      },
      placeholderType: 'organizer',
    },
    demoNotice: 'Demo sample item — Indicative INR pricing for preview.',
  },
  {
    id: 'nameplate-07',
    slug: 'bespoke-arch-desk-nameplate',
    name: 'Bespoke Arch Desk Nameplate',
    category: 'Custom Prints',
    categoryId: 'custom-prints',
    tag: 'Workspace Display',
    subtitle: 'Architectural arch stand with embossed name & title',
    description:
      'Sleek curved arch display with custom raised typography and weighted cantilevered stand. Anchors your office setup.',
    longDescription:
      'Modern arch silhouette featuring high-relief custom 3D typography for your name, title, or studio branding. The weighted base ensures solid footing on work desks and studio tables.',
    specs: {
      material: 'Matte PLA & PETG base',
      layerHeight: '0.12mm ultra-fine text',
      infill: '40% dense grid',
      printTime: '~5 hours',
      dimensions: '180 × 85 × 38 mm',
      finishes: ['Cream Arch / Terracotta Base', 'Charcoal / Ivory', 'Dual Terracotta'],
    },
    priceInr: 699,
    originalPriceInr: 899,
    badge: 'Custom CAD',
    featured: true,
    personalizable: true,
    isCustomizable: true,
    placeholderType: 'nameplate',
    imageSrc: heroProductsImg,
    imageFocalPoint: {
      x: 72,
      y: 35,
      scale: 1.8,
    },
    image: {
      src: heroProductsImg,
      alt: 'Bespoke arch desk nameplate sample',
      focalPoint: {
        x: 72,
        y: 35,
        scale: 1.8,
      },
      placeholderType: 'nameplate',
    },
    demoNotice: 'Demo sample item — Indicative INR pricing for preview.',
  },
  {
    id: 'cad-slicing-08',
    slug: 'rapid-prototype-custom-cad-slicing',
    name: 'Rapid Prototype & Custom CAD Slicing',
    category: 'Custom Prints',
    categoryId: 'custom-prints',
    tag: 'Direct Slicing',
    subtitle: 'Bespoke STL/STEP fabrication with engineering tolerances',
    description:
      'Direct fabrication service for your 3D models. We optimize orientation, supports, and layer slicing for strength and finish.',
    longDescription:
      'Upload or share your 3D CAD files (.STL, .STEP, .OBJ, .3MF). Our technicians inspect wall thicknesses, overhang angles, and tolerance fits before slicing on high-precision direct-drive FDM extruders.',
    specs: {
      material: 'Engineering PETG / Tough PLA+',
      layerHeight: '0.12mm – 0.28mm tailored',
      infill: '15% – 100% custom infill',
      printTime: 'Variable per geometry',
      dimensions: 'Up to 256 × 256 × 256 mm',
      finishes: ['Matte Black', 'Industrial Grey', 'Studio White', 'Natural Translucent'],
    },
    priceInr: 499,
    originalPriceInr: 699,
    badge: 'Bespoke CAD',
    featured: false,
    personalizable: true,
    isCustomizable: true,
    placeholderType: 'custom',
    imageSrc: heroProductsImg,
    imageFocalPoint: {
      x: 68,
      y: 40,
      scale: 1.9,
    },
    image: {
      src: heroProductsImg,
      alt: 'Rapid prototype custom CAD slicing sample',
      focalPoint: {
        x: 68,
        y: 40,
        scale: 1.9,
      },
      placeholderType: 'custom',
    },
    demoNotice: 'Demo sample item — Indicative INR pricing for preview.',
  },
] as const

export const FEATURED_PRODUCTS: readonly Product[] = PRODUCTS.filter(
  (product) => product.featured,
)

export function getProducts(): readonly Product[] {
  return PRODUCTS
}

export function getFeaturedProducts(): readonly Product[] {
  return FEATURED_PRODUCTS
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug)
}

export function getProductsByCategory(
  category: ProductCategory | CategoryId,
): readonly Product[] {
  return PRODUCTS.filter(
    (product) => product.category === category || product.categoryId === category,
  )
}
