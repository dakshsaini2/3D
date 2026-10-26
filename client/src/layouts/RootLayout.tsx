import type { ReactNode } from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100svh' }}>
      {/* Keyboard accessible skip-link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Primary Sticky Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="site-main" tabIndex={-1}>
        {children}
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  )
}
