export function PreviewCodeBlock({ children, language = 'css' }) {
  return (
    <div className="code-block">
      <div className="code-block__header">
        <span className="code-block__lang">{language}</span>
      </div>
      <pre className="code-block__pre">
        <code className="code-block__code">{children}</code>
      </pre>
    </div>
  )
}

