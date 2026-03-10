import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { PreviewButtons } from "./components/PreviewButtons";
import { PreviewCard } from "./components/PreviewCard";
import { PreviewCodeBlock } from "./components/PreviewCodeBlock";
import { THEME_TOKENS } from "./theme-tokens";

const THEMES = ["light", "dark", "neon", "pastel"];

function App() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const root = document.documentElement;
		root.dataset.theme = theme;
	}, [theme]);

	return (
		<div className="app">
			<header className="app__header">
				<div>
					<h1 className="app__title">Theme playground</h1>
					<p className="app__subtitle">
						Switch between light, dark, neon and pastel themes and
						see how shared components respond.
					</p>
				</div>

				<ThemeSwitcher
					themes={THEMES}
					value={theme}
					onChange={setTheme}
				/>
			</header>

			<main className="app__main">
				<section className="landing-hero">
					<h2 className="landing-hero__title">
						One landing page, four themes.
					</h2>
					<p className="landing-hero__subtitle">
						Toggle between light, dark, neon and pastel to see how a
						single set of CSS variables drives colors for buttons,
						copy and layout.
					</p>

					<PreviewButtons />
				</section>

				<section className="preview-grid">
					<PreviewCard title="Buttons & actions" badge="Interactive">
						Primary, ghost and accent buttons all read from shared
						theme variables.
					</PreviewCard>

					<PreviewCard title="Panels & surfaces" badge="Layout">
						Cards, sidebars and modals all inherit{" "}
						<code>--color-surface</code> and{" "}
						<code>--color-border</code>.
					</PreviewCard>

					<PreviewCard title="States & emphasis" badge="States">
						Hover, focus and muted text are derived from the same
						variables across themes.
					</PreviewCard>
				</section>

				<section className="section-code">
					<h3 className="section-code__title">Theme variables</h3>
					<p className="section-code__description">
						Each theme defines the same custom properties on{" "}
						<code>:root[data-theme="…"]</code>. Components use these
						so colors update when you switch themes. The snippet
						below always shows the currently selected theme.
					</p>
					<PreviewCodeBlock
						language="css"
						theme={theme}
						tokens={THEME_TOKENS[theme]}
					/>
				</section>
			</main>

			<footer className="app__footer">
				<small>
					Themes are applied via <code>data-theme</code> on{" "}
					<code>:root</code> and CSS custom properties.
				</small>
			</footer>
		</div>
	);
}

export default App;
