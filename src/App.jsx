import { useEffect, useState } from 'react'
import { ThemeSwitcher } from './components/ThemeSwitcher'

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
        {/* Preview components will go here */}
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
