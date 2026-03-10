export function PreviewCard({ title, badge, children }) {
  return (
    <article className="preview-card">
      <header className="preview-card__header">
        <div>
          {badge ? <span className="preview-card__badge">{badge}</span> : null}
          <h2 className="preview-card__title">{title}</h2>
        </div>
      </header>

      <div className="preview-card__body">{children}</div>
    </article>
  )
}

