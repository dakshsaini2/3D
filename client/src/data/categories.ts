import type { Category, CategoryId } from '../types'

export type { Category }

export const CATEGORIES: readonly Category[] = [
  {
    id: 'personalized-gifts',
    name: 'Personalized Gifts',
    tagline: 'Custom Made',
    description: 'Custom dual-tone name keychains, luggage tags, and keepsake plaques.',
    badge: 'Customizable',
    href: '#products',
  },
  {
    id: 'fidgets-toys',
    name: 'Fidgets & Toys',
    tagline: 'Print-in-Place',
    description: 'Multi-segmented articulated dragons, gyroscopic desk spinners, and tactile sensory toys.',
    badge: 'Articulated',
    href: '#products',
  },
  {
    id: 'desk-accessories',
    name: 'Desk Accessories',
    tagline: 'Modern Workspace',
    description: 'Geometric succulent planters, architectural cable catchers, and personalized nameplates.',
    badge: 'Functional',
    href: '#products',
  },
  {
    id: 'custom-prints',
    name: 'Custom Prints',
    tagline: 'Direct Slicing',
    description: 'Have your own .STL or CAD idea? We slice, optimize, and fabricate to your exact specifications.',
    badge: 'Bespoke CAD',
    href: '#custom',
  },
] as const

export function getCategories(): readonly Category[] {
  return CATEGORIES
}

export function getCategoryById(id: CategoryId | string): Category | undefined {
  return CATEGORIES.find((cat) => cat.id === id)
}
