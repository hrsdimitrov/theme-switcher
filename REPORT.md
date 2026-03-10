# Tracing Generated CSS Report

## Chosen element

The element I chose is the primary button with text "Get Started". It has selector `.preview-button.preview-button--primary`. The reason I selected it is because its styling comes from:

- the base button class - `.preview-button`
- the variant class - `preview-button--primary`
- it has a `:hover` and `:focus-visible` classes
- it uses the global theme variables

Here is the main CSS for the button element from `/src/styles/components/_buttons.scss`:

```css
.preview-button {
	border-radius: 999px;
	border: 1px solid transparent;
	padding: 0.45rem 0.95rem;
	font-size: 0.85rem;
	font-weight: 500;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	gap: 0.4rem;

	/* theme-driven appearance via local custom properties */
	--btn-bg: var(--color-surface-hover);
	--btn-bg-hover: var(--color-surface);
	--btn-border: transparent;
	--btn-border-hover: var(--color-border);
	--btn-color: var(--color-text);
	--btn-shadow: none;
	--btn-shadow-hover: none;

	background: var(--btn-bg);
	color: var(--btn-color);
	border-color: var(--btn-border);
	box-shadow: var(--btn-shadow);

	transition:
		background-color 150ms ease-out,
		color 150ms ease-out,
		box-shadow 180ms ease-out,
		border-color 150ms ease-out,
		transform 120ms ease-out;
	transform-origin: center;
}

.preview-button:hover {
	background: var(--btn-bg-hover);
	border-color: var(--btn-border-hover);
	box-shadow: var(--btn-shadow-hover);
	transform: translateY(-1px);
}

.preview-button:focus-visible {
	outline: 2px solid var(--color-primary);
	outline-offset: 2px;
}

.preview-button--primary {
	--btn-bg: var(--color-primary);
	--btn-bg-hover: var(--color-primary-hover);
	--btn-border: transparent;
	--btn-border-hover: transparent;
	--btn-color: #ffffff;
	--btn-shadow: 0 14px 30px rgba(37, 99, 235, 0.35);
	--btn-shadow-hover: 0 18px 38px rgba(37, 99, 235, 0.45);
}
```

It also uses the following theme tokens (example for light theme):

```css
:root[data-theme="light"] {
	color-scheme: light;
	--color-bg: #f8f9fc;
	--color-surface: #ffffff;
	--color-surface-hover: #eef1f6;
	--color-text: #1a1d24;
	--color-text-muted: #5c6370;
	--color-primary: #2563eb;
	--color-primary-hover: #1d4ed8;
	--color-accent: #c026d3;
	--color-accent-hover: #a21caf;
	--color-border: #e2e6ee;
}
```

## Analyzed properties

### `background-color` property

**Computer value:** `rgb(37, 99, 235)`
**Styles chain:** `.preview-button` sets the `background-color` property to `var(--btn-bg)`. It also sets `-btn-bg` to be `var(--color-surface-hover)`. `--color-surface-hover` comes from the current active theme. But then `.preview-button--primary` overwrites `var(--btn-bg)` to be `var(--color-primary)` which also comes from the current active theme `:root`.
**Generated CSS location:**
**Original authored source:** Clicking the rule jumps back to `_buttons.scss` at the background: `var(--btn-bg);` and `--btn-bg: var(--color-primary);` lines. Following `--color-primary` leads to `_light.scss` where the actual hex color is authored.
