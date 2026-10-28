import { useState, useEffect } from 'react'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'

interface ProductRoute {
  view: 'product'
  slugOrId: string
}

interface HomeRoute {
  view: 'home'
}

type RouteState = HomeRoute | ProductRoute

function getRouteFromHash(): RouteState {
  if (typeof window === 'undefined') return { view: 'home' }
  const hash = window.location.hash
  if (hash.startsWith('#/product/')) {
    const slugOrId = hash.replace('#/product/', '').trim()
    if (slugOrId) {
      return { view: 'product', slugOrId }
    }
  }
  return { view: 'home' }
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(getRouteFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getRouteFromHash()
      setRoute(nextRoute)

      if (nextRoute.view === 'product') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <RootLayout>
      {route.view === 'product' ? (
        <ProductDetailPage
          productSlug={route.slugOrId}
          onBack={() => {
            window.location.hash = '#products'
          }}
        />
      ) : (
        <HomePage />
      )}
    </RootLayout>
  )
}

