export default function AnnouncementBar() {
  return (
    <aside className="announcement-bar" aria-label="Announcement">
      <div className="container">
        <p>
          <span className="announcement-bar__pill">Made in India</span>
          <span>
            Free shipping on orders over <strong>₹499</strong> across India
          </span>
          <span aria-hidden="true">•</span>
          <span>Bespoke 3D prints crafted layer-by-layer to your order</span>
        </p>
      </div>
    </aside>
  )
}
