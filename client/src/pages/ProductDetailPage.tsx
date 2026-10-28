import { useState, useEffect, useRef } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import type { Product } from '../types'
import {
  PRODUCTS,
  getProductById,
  getProductBySlug,
} from '../data/products'
import TechnicalBlueprint from '../components/TechnicalBlueprint'

export interface ProductDetailPageProps {
  /** Optional slug to look up product; defaults to current route or fallback */
  productSlug?: string
  /** Optional id to look up product */
  productId?: string
  /** Optional pre-resolved product object */
  product?: Product
  /** Callback when navigating back to catalog / home */
  onBack?: () => void
  /** Callback when selecting a different product */
  onSelectProduct?: (product: Product) => void
}

/** Standalone navigation helper to avoid mutating globals inside components */
function navigateToHash(hash: string) {
  if (typeof window !== 'undefined') {
    window.location.hash = hash
  }
}

/** Helper to generate visual swatch gradients for filament finishes */
function getFinishSwatchStyle(finishName: string): { background: string } {
  const lower = finishName.toLowerCase()
  if (lower.includes('terracotta') && lower.includes('cream')) {
    return { background: 'linear-gradient(135deg, #c1541a 50%, #f5eedf 50%)' }
  }
  if (lower.includes('charcoal') && lower.includes('ivory')) {
    return { background: 'linear-gradient(135deg, #2c2824 50%, #fffff0 50%)' }
  }
  if (lower.includes('olive') && lower.includes('gold')) {
    return { background: 'linear-gradient(135deg, #556b2f 50%, #d4af37 50%)' }
  }
  if (lower.includes('orange') && lower.includes('charcoal')) {
    return { background: 'linear-gradient(135deg, #e65100 50%, #2c2824 50%)' }
  }
  if (lower.includes('navy') && lower.includes('white')) {
    return { background: 'linear-gradient(135deg, #1a237e 50%, #ffffff 50%)' }
  }
  if (lower.includes('sage') && lower.includes('sand')) {
    return { background: 'linear-gradient(135deg, #879a83 50%, #d8caa7 50%)' }
  }
  if (lower.includes('cream') && lower.includes('terracotta')) {
    return { background: 'linear-gradient(135deg, #f5eedf 50%, #c1541a 50%)' }
  }
  if (lower.includes('copper')) {
    return { background: 'linear-gradient(135deg, #b87333 0%, #da8a45 100%)' }
  }
  if (lower.includes('emerald')) {
    return { background: 'linear-gradient(135deg, #097969 0%, #2e8b57 100%)' }
  }
  if (lower.includes('terracotta red') || lower.includes('matte terracotta')) {
    return { background: '#c1541a' }
  }
  if (lower.includes('basalt') || lower.includes('charcoal')) {
    return { background: '#2c2824' }
  }
  if (lower.includes('sand') || lower.includes('oatmeal')) {
    return { background: '#d8caa7' }
  }
  if (lower.includes('sage')) {
    return { background: '#879a83' }
  }
  if (lower.includes('white') || lower.includes('translucent')) {
    return { background: '#f5f5f5' }
  }
  if (lower.includes('grey') || lower.includes('gray')) {
    return { background: '#78909c' }
  }
  if (lower.includes('black')) {
    return { background: '#1a1a1a' }
  }
  if (lower.includes('bronze')) {
    return { background: '#cd7f32' }
  }
  return { background: '#c1541a' }
}

/** Helper for preview plate background matching the selected finish */
function getPreviewPlateStyle(finishName: string): { backgroundColor: string; color: string } {
  const lower = finishName.toLowerCase()
  if (lower.includes('cream') || lower.includes('ivory') || lower.includes('sand') || lower.includes('white')) {
    return { backgroundColor: '#f2ede4', color: '#2c2824' }
  }
  if (lower.includes('charcoal') || lower.includes('black') || lower.includes('basalt')) {
    return { backgroundColor: '#211d1a', color: '#f5eedf' }
  }
  if (lower.includes('copper') || lower.includes('bronze')) {
    return { backgroundColor: '#5c3a21', color: '#ffd29d' }
  }
  if (lower.includes('emerald') || lower.includes('sage') || lower.includes('olive')) {
    return { backgroundColor: '#233827', color: '#e8f5e9' }
  }
  return { backgroundColor: '#8f3c11', color: '#faf7f2' }
}

interface ProductDetailViewProps {
  product: Product
  onBack?: () => void
  onSelectProduct?: (product: Product) => void
}

function ProductDetailView({ product, onBack, onSelectProduct }: ProductDetailViewProps) {
  // ── Form & View State ──────────────────────────────────────────────────
  const [viewMode, setViewMode] = useState<'photo' | 'cad'>('photo')
  const [customText, setCustomText] = useState('')
  const [selectedFinish, setSelectedFinish] = useState<string>(() => product.specs.finishes[0] || '')
  const [customNotes, setCustomNotes] = useState('')
  const [errors, setErrors] = useState<{ customText?: string; finish?: string }>({})
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null)

  const customTextInputRef = useRef<HTMLInputElement>(null)
  const finishContainerRef = useRef<HTMLFieldSetElement>(null)

  // ── Document Title ──────────────────────────────────────────────────────
  useEffect(() => {
    document.title = `${product.name} — 3D Print Store`
    return () => {
      document.title = '3D Print Store'
    }
  }, [product.name])

  // ── Navigation Handlers ────────────────────────────────────────────────
  const handleBackClick = () => {
    if (onBack) {
      onBack()
    } else {
      navigateToHash('#products')
    }
  }

  const handleSelectDifferentProduct = (newProduct: Product) => {
    if (onSelectProduct) {
      onSelectProduct(newProduct)
    } else {
      navigateToHash(`#/product/${newProduct.slug}`)
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  // ── Customization & Validation Logic ────────────────────────────────────
  const isPersonalizable = product.personalizable ?? product.isCustomizable ?? false

  const handleCustomTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCustomText(value)

    if (errors.customText) {
      if (value.trim().length > 0 && value.length <= 20) {
        setErrors((prev) => ({ ...prev, customText: undefined }))
      }
    }
  }

  const handleCustomTextBlur = () => {
    if (isPersonalizable && customText.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        customText: 'Please enter a name or text for your personalized 3D print (1–20 characters).',
      }))
    }
  }

  const handleFinishChange = (finish: string) => {
    setSelectedFinish(finish)
    if (errors.finish) {
      setErrors((prev) => ({ ...prev, finish: undefined }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const newErrors: { customText?: string; finish?: string } = {}

    if (isPersonalizable) {
      if (customText.trim().length === 0) {
        newErrors.customText =
          'Please enter a name or text for your personalized 3D print (1–20 characters).'
      } else if (customText.length > 20) {
        newErrors.customText = 'Custom text cannot exceed 20 characters.'
      }
    }

    if (product.specs.finishes.length > 0 && !selectedFinish) {
      newErrors.finish = 'Please select a filament finish option.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setFeedbackMessage(null)

      if (newErrors.customText) {
        customTextInputRef.current?.focus()
      } else if (newErrors.finish) {
        finishContainerRef.current?.focus()
      }
      return
    }

    setErrors({})
    setFeedbackMessage(
      `✓ Custom specification verified: "${isPersonalizable ? customText.trim() : product.name}" in ${selectedFinish}. (Illustrative Demo: Cart and order submission are disabled in this prototype.)`,
    )
  }

  // Visual calculations
  const focalPoint = product.image.focalPoint ?? product.imageFocalPoint ?? {
    x: 50,
    y: 50,
    scale: 1.5,
  }
  const imgSrc = product.image.src || product.imageSrc || ''
  const placeholderType = product.image.placeholderType || product.placeholderType || 'keychain'
  const savingsAmount = product.originalPriceInr
    ? product.originalPriceInr - product.priceInr
    : 0

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <article className="pdp-page container" aria-labelledby="pdp-product-title">
      {/* ── Top Navigation / Breadcrumbs ───────────────────────── */}
      <nav className="pdp-nav-bar" aria-label="Breadcrumb navigation">
        <button
          type="button"
          className="pdp-back-btn"
          onClick={handleBackClick}
          aria-label="Return to Featured Prints on homepage"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>Back to Featured Prints</span>
        </button>

        <ol className="pdp-breadcrumbs">
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); handleBackClick(); }}>
              Home
            </a>
          </li>
          <li className="pdp-breadcrumbs__separator" aria-hidden="true">/</li>
          <li>
            <a href="#products" onClick={(e) => { e.preventDefault(); handleBackClick(); }}>
              Featured Prints
            </a>
          </li>
          <li className="pdp-breadcrumbs__separator" aria-hidden="true">/</li>
          <li>
            <span>{product.category}</span>
          </li>
          <li className="pdp-breadcrumbs__separator" aria-hidden="true">/</li>
          <li className="pdp-breadcrumbs__current" aria-current="page">
            {product.name}
          </li>
        </ol>

        {/* Quick Product Switcher for Testing/Browsing */}
        <div className="pdp-quick-switcher">
          <label htmlFor="pdp-product-select">Switch Print:</label>
          <select
            id="pdp-product-select"
            value={product.slug}
            onChange={(e) => {
              const target = PRODUCTS.find((p) => p.slug === e.target.value)
              if (target) handleSelectDifferentProduct(target)
            }}
          >
            {PRODUCTS.map((p) => (
              <option key={p.id} value={p.slug}>
                {p.name} (₹{p.priceInr})
              </option>
            ))}
          </select>
        </div>
      </nav>

      {/* ── Main Two-Column Layout ─────────────────────────────── */}
      <div className="pdp-layout">
        {/* ── Column 1: Media Showcase & Fabrication Specs ───────── */}
        <div className="pdp-media-col">
          <section className="pdp-gallery-card" aria-label="Product Media and Visualizer">
            {/* View Mode Switcher */}
            <div className="pdp-view-tabs" role="tablist" aria-label="Visual representation">
              <button
                type="button"
                role="tab"
                id="tab-photo"
                aria-selected={viewMode === 'photo'}
                aria-controls="panel-visual-view"
                className={`pdp-view-tab ${viewMode === 'photo' ? 'is-active' : ''}`}
                onClick={() => setViewMode('photo')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span>Studio Photo</span>
              </button>
              <button
                type="button"
                role="tab"
                id="tab-cad"
                aria-selected={viewMode === 'cad'}
                aria-controls="panel-visual-view"
                className={`pdp-view-tab ${viewMode === 'cad' ? 'is-active' : ''}`}
                onClick={() => setViewMode('cad')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <span>CAD Blueprint</span>
              </button>
            </div>

            {/* Visual Viewport Stage */}
            <div
              id="panel-visual-view"
              role="tabpanel"
              aria-labelledby={viewMode === 'photo' ? 'tab-photo' : 'tab-cad'}
              className="pdp-image-stage"
            >
              {viewMode === 'photo' && imgSrc ? (
                <div
                  className="pdp-image-stage__photo-wrap"
                  style={{
                    transformOrigin: `${focalPoint.x}% ${focalPoint.y}%`,
                    transform: `scale(${focalPoint.scale * 1.08})`,
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={product.image.alt || `${product.name} studio photography sample`}
                    className="pdp-image-stage__photo"
                  />
                </div>
              ) : (
                <div className="pdp-image-stage__cad-wrap">
                  <TechnicalBlueprint type={placeholderType} />
                </div>
              )}

              <span className="pdp-image-badge-tag">
                {viewMode === 'photo' ? 'Genuine Studio Sample' : 'FDM Vector Toolpath'}
              </span>
            </div>

            <div className="pdp-gallery-caption">
              <strong>Fabrication note:</strong>{' '}
              {viewMode === 'photo'
                ? 'High-resolution capture of our printed studio sample using matte biopolymer filament.'
                : 'Vector slice representation demonstrating layer line orientation and structural infill.'}
            </div>
          </section>

          {/* Technical Fabrication Specifications */}
          <section className="pdp-specs-box" aria-labelledby="specs-heading">
            <h2 id="specs-heading" className="pdp-specs-box__heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>FDM Fabrication Specifications</span>
            </h2>

            <div className="pdp-specs-table">
              <div className="pdp-spec-row">
                <span className="pdp-spec-label">Material</span>
                <span className="pdp-spec-val">{product.specs.material}</span>
              </div>
              <div className="pdp-spec-row">
                <span className="pdp-spec-label">Layer Resolution</span>
                <span className="pdp-spec-val">{product.specs.layerHeight}</span>
              </div>
              <div className="pdp-spec-row">
                <span className="pdp-spec-label">Infill Density</span>
                <span className="pdp-spec-val">{product.specs.infill}</span>
              </div>
              <div className="pdp-spec-row">
                <span className="pdp-spec-label">Dimensions</span>
                <span className="pdp-spec-val">{product.specs.dimensions}</span>
              </div>
              <div className="pdp-spec-row">
                <span className="pdp-spec-label">Print Duration</span>
                <span className="pdp-spec-val">{product.specs.printTime}</span>
              </div>
              <div className="pdp-spec-row">
                <span className="pdp-spec-label">Available Finishes</span>
                <span className="pdp-spec-val">{product.specs.finishes.join(', ')}</span>
              </div>
            </div>
          </section>
        </div>

        {/* ── Column 2: Information, Customizer & Demo Actions ────── */}
        <div className="pdp-info-col">
          {/* Header & Badges */}
          <header className="pdp-header-section">
            <div className="pdp-category-row">
              <span className="pdp-category-pill">
                <span className="pdp-category-dot" aria-hidden="true" />
                {product.category}
              </span>
              {product.badge && (
                <span className="pdp-badge-pill">{product.badge}</span>
              )}
            </div>

            <h1 id="pdp-product-title" className="pdp-title">
              {product.name}
            </h1>

            <p className="pdp-subtitle">{product.subtitle}</p>
          </header>

          {/* Pricing Box */}
          <div className="pdp-price-box" aria-label="Pricing details">
            <div className="pdp-price-main">
              <span className="pdp-price-currency" aria-hidden="true">₹</span>
              <span>{product.priceInr}</span>
            </div>

            {product.originalPriceInr && (
              <span className="pdp-price-original" aria-label={`Original price: ₹${product.originalPriceInr}`}>
                ₹{product.originalPriceInr}
              </span>
            )}

            {savingsAmount > 0 && (
              <span className="pdp-price-savings">
                Save ₹{savingsAmount}
              </span>
            )}

            <div className="pdp-price-caption">
              Illustrative INR pricing • All taxes included • Sliced & printed in India
            </div>
          </div>

          {/* Personalization Status Card */}
          <div
            className={`pdp-status-card ${
              isPersonalizable ? 'pdp-status-card--custom' : 'pdp-status-card--standard'
            }`}
            role="status"
          >
            <div className="pdp-status-icon" aria-hidden="true">
              {isPersonalizable ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                </svg>
              )}
            </div>
            <div>
              <strong>
                {isPersonalizable
                  ? 'Personalizable 3D Print'
                  : 'Standard Batch Print (Fixed Geometry)'}
              </strong>
              <p>
                {isPersonalizable
                  ? 'This item includes custom extruded/debossed lettering tailored before slicing. Fill out your details below.'
                  : 'This item is fabricated from a verified fixed 3D CAD model. Select your preferred filament finish below.'}
              </p>
            </div>
          </div>

          {/* Detailed Description */}
          <section className="pdp-desc-section" aria-label="Product Description">
            <p>{product.description}</p>
            <p>{product.longDescription}</p>
          </section>

          {/* ── Customization Form ──────────────────────────────── */}
          <section className="pdp-form-card" aria-labelledby="customization-heading">
            <div className="pdp-form-card__header">
              <h2 id="customization-heading" className="pdp-form-title">
                {isPersonalizable ? 'Customize Your Print' : 'Select Filament Finish'}
              </h2>
              <p className="pdp-form-subtitle">
                {isPersonalizable
                  ? 'Specify custom text, select dual-tone or single filament colors, and leave special maker notes.'
                  : 'Choose from our studio-calibrated matte and silk PLA/PETG finishes.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="pdp-form">
              {/* Field 1: Custom Name / Text (Only for personalizable products) */}
              {isPersonalizable ? (
                <div className="pdp-field">
                  <div className="pdp-field__label-row">
                    <label htmlFor="custom-text-input" className="pdp-label">
                      Custom Name or Text
                      <span className="required-star" aria-hidden="true">*</span>
                      <span className="sr-only">(Required)</span>
                    </label>
                    <span
                      id="custom-text-count"
                      className="pdp-char-counter"
                      aria-live="polite"
                    >
                      {customText.length}/20 chars
                    </span>
                  </div>

                  <input
                    ref={customTextInputRef}
                    id="custom-text-input"
                    name="customText"
                    type="text"
                    maxLength={20}
                    placeholder="e.g. AARAV, PRIYA, NEXUS-3D"
                    value={customText}
                    onChange={handleCustomTextChange}
                    onBlur={handleCustomTextBlur}
                    className={`pdp-input ${errors.customText ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.customText}
                    aria-describedby={
                      errors.customText
                        ? 'custom-text-error custom-text-desc custom-text-count'
                        : 'custom-text-desc custom-text-count'
                    }
                  />

                  <p id="custom-text-desc" className="pdp-help-text">
                    Debossed directly into the CAD model before slicing. Maximum 20 characters.
                  </p>

                  {errors.customText && (
                    <div
                      id="custom-text-error"
                      role="alert"
                      className="pdp-error-message"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span>{errors.customText}</span>
                    </div>
                  )}

                  {/* Live 3D Extrusion Text Simulation */}
                  <div className="pdp-live-preview" aria-label="Live customization preview">
                    <div className="pdp-live-preview__header">
                      <span>3D Extrusion Simulation</span>
                      <span className="pdp-live-preview__badge">
                        <span className="pdp-live-preview__dot" aria-hidden="true" />
                        Live Slicing Preview
                      </span>
                    </div>

                    <div
                      className="pdp-live-preview__plate"
                      style={getPreviewPlateStyle(selectedFinish)}
                    >
                      {customText.trim().length > 0 ? (
                        <span className="pdp-live-preview__text">
                          {customText.trim()}
                        </span>
                      ) : (
                        <span className="pdp-live-preview__placeholder">
                          (Your customized text will appear here)
                        </span>
                      )}
                    </div>

                    <div className="pdp-live-preview__meta">
                      <span>Layer: {product.specs.layerHeight}</span>
                      <span>Finish: {selectedFinish || 'Standard'}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pdp-help-text" style={{ padding: '8px 12px', background: 'var(--color-cream)', borderRadius: 'var(--radius-sm)' }}>
                  ℹ Fixed geometry: Custom debossed lettering is not available for this item.
                </div>
              )}

              {/* Field 2: Filament Finish Selection */}
              <fieldset
                ref={finishContainerRef}
                tabIndex={-1}
                className="pdp-finishes-fieldset"
              >
                <legend className="pdp-finishes-legend">
                  Select Filament Finish
                  <span className="required-star" aria-hidden="true">*</span>
                  <span className="sr-only">(Required)</span>
                </legend>

                <div
                  className="pdp-finishes-grid"
                  role="radiogroup"
                  aria-label="Filament finish options"
                  aria-invalid={!!errors.finish}
                  aria-describedby={errors.finish ? 'finish-error' : undefined}
                >
                  {product.specs.finishes.map((finish) => {
                    const isSelected = selectedFinish === finish
                    const swatchStyle = getFinishSwatchStyle(finish)

                    return (
                      <label
                        key={finish}
                        className={`pdp-finish-option ${isSelected ? 'is-selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name="filamentFinish"
                          value={finish}
                          checked={isSelected}
                          onChange={() => handleFinishChange(finish)}
                        />
                        <span
                          className="pdp-finish-swatch"
                          style={swatchStyle}
                          aria-hidden="true"
                        />
                        <span className="pdp-finish-label">{finish}</span>
                        {isSelected && (
                          <svg
                            className="pdp-finish-check"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            aria-hidden="true"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </label>
                    )
                  })}
                </div>

                {errors.finish && (
                  <div id="finish-error" role="alert" className="pdp-error-message">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{errors.finish}</span>
                  </div>
                )}
              </fieldset>

              {/* Field 3: Optional Notes */}
              <div className="pdp-field">
                <div className="pdp-field__label-row">
                  <label htmlFor="custom-notes-input" className="pdp-label">
                    Special Maker Notes (Optional)
                  </label>
                  <span className="pdp-char-counter">
                    {customNotes.length}/200 chars
                  </span>
                </div>

                <textarea
                  id="custom-notes-input"
                  name="customNotes"
                  maxLength={200}
                  rows={2}
                  placeholder="e.g. Please place ring hole on left side, prefer matte texture, or anniversary gift packaging..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="pdp-textarea"
                  aria-describedby="custom-notes-desc"
                />

                <p id="custom-notes-desc" className="pdp-help-text">
                  Any specific dimensional checks, key ring orientation, or gift requests for our makers.
                </p>
              </div>

              {/* Accessible Feedback Banner upon validation */}
              {feedbackMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className="pdp-feedback-banner pdp-feedback-banner--success"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {/* ── Actions: Clearly Non-Functional "Add to Cart" ── */}
              <div className="pdp-actions-section">
                <button
                  type="submit"
                  className="pdp-btn-cart"
                  aria-describedby="pdp-demo-notice"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <span>Add to Cart (Demo Only)</span>
                </button>

                {/* Explicit Non-functional Notice */}
                <div id="pdp-demo-notice" className="pdp-demo-cart-notice" role="note">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <span>
                    <strong>Illustrative Demo Storefront:</strong> Cart checkout, payment processing,
                    and order submission are non-functional in this design prototype. Clicking &ldquo;Add to Cart&rdquo; validates your custom specifications.
                  </span>
                </div>

                <a
                  href="#custom"
                  className="pdp-btn-secondary"
                  onClick={(e) => {
                    e.preventDefault()
                    navigateToHash('#custom')
                  }}
                >
                  Request Bespoke CAD Print Inquiry Instead
                </a>
              </div>
            </form>
          </section>

          {/* ── Studio Trust Highlights ────────────────────────── */}
          <section className="pdp-trust-grid" aria-label="Studio Fabrication Guarantees">
            <div className="pdp-trust-item">
              <svg className="pdp-trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Printed to order within 1–3 business days</span>
            </div>
            <div className="pdp-trust-item">
              <svg className="pdp-trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Defect reprint guarantee across India</span>
            </div>
            <div className="pdp-trust-item">
              <svg className="pdp-trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              <span>Zero-waste additive manufacturing</span>
            </div>
            <div className="pdp-trust-item">
              <svg className="pdp-trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
              <span>Eco-friendly non-toxic biopolymer</span>
            </div>
          </section>
        </div>
      </div>

      {/* ── Related / Other Products Section ─────────────────────── */}
      <section className="pdp-related-section" aria-labelledby="related-heading">
        <h2 id="related-heading" className="pdp-related-heading">
          Explore More 3D Prints
        </h2>

        <div className="pdp-related-grid">
          {relatedProducts.map((relProduct) => {
            const relImgSrc = relProduct.image.src || relProduct.imageSrc || ''
            const relFocal = relProduct.image.focalPoint ?? relProduct.imageFocalPoint ?? {
              x: 50,
              y: 50,
              scale: 1.5,
            }

            return (
              <a
                key={relProduct.id}
                href={`#/product/${relProduct.slug}`}
                className="pdp-related-card"
                onClick={(e) => {
                  e.preventDefault()
                  handleSelectDifferentProduct(relProduct)
                }}
              >
                <div className="pdp-related-card__thumb">
                  {relImgSrc ? (
                    <img
                      src={relImgSrc}
                      alt={relProduct.name}
                      style={{
                        objectPosition: `${relFocal.x}% ${relFocal.y}%`,
                        transform: `scale(${relFocal.scale * 1.1})`,
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <TechnicalBlueprint type={relProduct.placeholderType || 'keychain'} />
                  )}
                </div>

                <div className="pdp-related-card__body">
                  <span className="pdp-related-card__cat">{relProduct.category}</span>
                  <h3 className="pdp-related-card__title">{relProduct.name}</h3>

                  <div className="pdp-related-card__footer">
                    <span className="pdp-related-card__price">₹{relProduct.priceInr}</span>
                    <span className="pdp-related-card__cta">
                      <span>View Print</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </section>
    </article>
  )
}

function ProductNotFoundView({
  onBack,
  onSelectProduct,
}: {
  onBack?: () => void
  onSelectProduct?: (product: Product) => void
}) {
  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      navigateToHash('#products')
    }
  }

  const handleSelect = (prod: Product) => {
    if (onSelectProduct) {
      onSelectProduct(prod)
    } else {
      navigateToHash(`#/product/${prod.slug}`)
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="pdp-page container">
      <nav className="pdp-nav-bar" aria-label="Catalog Navigation">
        <button
          type="button"
          className="pdp-back-btn"
          onClick={handleBack}
        >
          ← Return to Homepage Catalog
        </button>
      </nav>

      <section className="pdp-not-found" aria-labelledby="not-found-heading">
        <div className="pdp-not-found__icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h1 id="not-found-heading" className="pdp-not-found__title">
          3D Print Item Not Found
        </h1>
        <p className="pdp-not-found__text">
          We couldn&apos;t find a 3D-printed item matching your request. Select one of our available
          studio products below:
        </p>

        <div className="pdp-not-found__catalog-list" role="list">
          {PRODUCTS.map((prod) => (
            <a
              key={prod.id}
              href={`#/product/${prod.slug}`}
              className="pdp-not-found__catalog-item"
              onClick={(e) => {
                e.preventDefault()
                handleSelect(prod)
              }}
            >
              <span>{prod.name} ({prod.category})</span>
              <span>₹{prod.priceInr} →</span>
            </a>
          ))}
        </div>

        <button
          type="button"
          className="btn-primary"
          onClick={handleBack}
        >
          ← Return to Featured Prints
        </button>
      </section>
    </div>
  )
}

export default function ProductDetailPage({
  productSlug,
  productId,
  product: directProduct,
  onBack,
  onSelectProduct,
}: ProductDetailPageProps) {
  let resolvedProduct: Product | undefined = directProduct

  if (!resolvedProduct) {
    if (productSlug) {
      resolvedProduct = getProductBySlug(productSlug)
    } else if (productId) {
      resolvedProduct = getProductById(productId)
    } else if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash
      if (hash.startsWith('#/product/')) {
        const identifier = hash.replace('#/product/', '').trim()
        resolvedProduct = getProductBySlug(identifier) || getProductById(identifier)
      }
    }
  }

  if (!resolvedProduct) {
    return <ProductNotFoundView onBack={onBack} onSelectProduct={onSelectProduct} />
  }

  return (
    <ProductDetailView
      key={resolvedProduct.id}
      product={resolvedProduct}
      onBack={onBack}
      onSelectProduct={onSelectProduct}
    />
  )
}
