export function ThemeSwitcher({ themes, value, onChange }) {
  return (
    <div className="theme-switcher">
      <label className="theme-switcher__label" htmlFor="theme-select">
        Theme
      </label>
      <select
        id="theme-select"
        className="theme-switcher__select"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {themes.map((themeName) => (
          <option key={themeName} value={themeName}>
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}

