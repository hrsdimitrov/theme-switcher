import { useEffect, useState } from 'react'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { PreviewCard } from './components/PreviewCard'

const THEMES = ['light', 'dark', 'neon', 'pastel']

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
  }, [theme])

  return (
    <div className="app">
      <header className="app__header">
        <div>
          <h1 className="app__title">Theme playground</h1>
          <p className="app__subtitle">
            Switch between light, dark, neon and pastel themes and see how shared components respond.
          </p>
        </div>

        <ThemeSwitcher
          themes={THEMES}
          value={theme}
          onChange={setTheme}
        />
      </header>

      <main className="app__main">
        <div className="preview-grid">
          <PreviewCard title="Buttons & actions" badge="Interactive">
            Primary buttons, subtle ghost actions and accent chips share the same palette.
          </PreviewCard>

          <PreviewCard title="Panels & surfaces" badge="Layout">
            Cards, sidebars and modals all inherit <code>--color-surface</code> and <code>--color-border</code>.
          </PreviewCard>

          <PreviewCard title="States & emphasis" badge="States">
            Hover, focus and muted text are derived from the same variables across themes.
          </PreviewCard>
        </div>
      </main>

      <footer className="app__footer">
        <small>
          Themes are applied via <code>data-theme</code> on <code>:root</code> and CSS custom properties.
        </small>
      </footer>
    </div>
  )
}

export default App
