export type CategoryId =
  | 'personalized-gifts'
  | 'fidgets-toys'
  | 'desk-accessories'
  | 'custom-prints'

export type ProductCategory =
  | 'Personalized Gifts'
  | 'Fidgets & Toys'
  | 'Desk Accessories'
  | 'Custom Prints'

export interface ProductSpec {
  material: string
  layerHeight: string
  infill: string
  printTime: string
  dimensions: string
  finishes: string[]
}

export interface ProductImageFocalPoint {
  x: number // focal percentage 0-100
  y: number // focal percentage 0-100
  scale: number
}

export type PlaceholderType =
  | 'keychain'
  | 'dragon'
  | 'planter'
  | 'nameplate'
  | 'tag'
  | 'spinner'
  | 'organizer'
  | 'custom'

export interface ProductImage {
  src: string
  alt: string
  focalPoint?: ProductImageFocalPoint
  placeholderType: PlaceholderType
}

export interface Product {
  id: string
  slug: string
  name: string
  tag: string
  subtitle: string
  description: string
  longDescription: string
  category: ProductCategory
  categoryId: CategoryId
  priceInr: number
  originalPriceInr?: number
  featured: boolean
  personalizable: boolean
  isCustomizable?: boolean
  badge?: string
  specs: ProductSpec
  image: ProductImage
  imageSrc?: string
  imageFocalPoint?: ProductImageFocalPoint
  placeholderType?: PlaceholderType
  demoNotice?: string
}

export interface Category {
  id: CategoryId
  name: ProductCategory
  tagline: string
  description: string
  badge: string
  href: string
}
