export function PreviewCodeBlock({ theme, tokens, language = 'css' }) {
  if (!tokens) return null

  const snippet = [
    `:root[data-theme='${theme}'] {`,
    `  --color-bg: ${tokens.bg};`,
    `  --color-surface: ${tokens.surface};`,
    `  --color-surface-hover: ${tokens.surfaceHover};`,
    `  --color-text: ${tokens.text};`,
    `  --color-text-muted: ${tokens.textMuted};`,
    `  --color-primary: ${tokens.primary};`,
    `  --color-primary-hover: ${tokens.primaryHover};`,
    `  --color-accent: ${tokens.accent};`,
    `  --color-accent-hover: ${tokens.accentHover};`,
    `  --color-border: ${tokens.border};`,
    `}`,
  ].join('\n')

  return (
    <div className="code-block">
      <div className="code-block__header">
        <span className="code-block__lang">{language}</span>
      </div>
      <pre className="code-block__pre">
        <code className="code-block__code">{snippet}</code>
      </pre>
    </div>
  )
}


