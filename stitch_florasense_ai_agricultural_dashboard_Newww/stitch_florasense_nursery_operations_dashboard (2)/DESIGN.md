---
name: FloraSense Operations Hub
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#404940'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#707a6f'
  outline-variant: '#bfc9bd'
  surface-tint: '#1f6c3a'
  primary: '#004c22'
  on-primary: '#ffffff'
  primary-container: '#166534'
  on-primary-container: '#93e0a2'
  inverse-primary: '#8bd79b'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#004b31'
  on-tertiary: '#ffffff'
  tertiary-container: '#006544'
  on-tertiary-container: '#58e7ab'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a6f4b5'
  primary-fixed-dim: '#8bd79b'
  on-primary-fixed: '#00210b'
  on-primary-fixed-variant: '#005226'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
  data-metric:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  gutter-desktop: 1.5rem
  gutter-tablet: 1rem
  gutter-mobile: 0.75rem
  sidebar-width: 17.5rem
  sidebar-collapsed: 4.5rem
---

## Brand & Style

This design system targets commercial horticultural directors, greenhouse agronomists, and nursery operations floor managers. The aesthetic balances agricultural vitality with disciplined enterprise-grade telemetry.

The visual style is **Corporate Modern with Tactile Clarity**: crisp, structured data densities tempered by fresh botanical undertones. Interfaces prioritize immediate legibility under high-glare ambient greenhouse lighting and rapid hand-held tablet interactions. The emotional posture conveys systematic operational precision, ecological vitality, and reliable enterprise control.

## Colors

The palette establishes visual rigor with botanical groundedness:

- **Primary (`#166534`, with tints `#15803d` and deep `#0e4429`):** Represents crop vitality, canopy metrics, primary calls-to-action, active batch indicators, and primary navigation active states.
- **Secondary Corporate Navy (`#0f172a`, `#1e293b`, `#334155`):** Dictates structural framing, top-level navigation, charts, and high-hierarchy data tables.
- **Tertiary / Success Mint (`#10b981`, surface tint `#d1fae5`):** Yield targets, irrigation active states, and nominal sensor telemetry.
- **Operational Alerts & Status:**
  - **Warning Amber (`#f59e0b`, surface `#fef3c7`):** Nutrient thresholds, climate divergence, deferred maintenance.
  - **Alert Red (`#dc2626`, surface `#fee2e2`):** Pathogen warnings, critical dry-outs, valve malfunctions.
- **Neutral & Canvas Foundations:**
  - Background: `#f8fafc` (Cool Slate Canvas) and `#f1f5f9` (Subtle Recessed Wells).
  - Surfaces: `#ffffff` (Pure Crisp White).
  - Structural Hairlines: `#e2e8f0` (Neutral 200).
  - Text Hierarchy: Primary text `#0f172a`, Secondary text `#475569`, Muted labels `#64748b`.

## Typography

Typography blends **Plus Jakarta Sans** for welcoming yet commanding headlines and numerical metric readouts, with **Inter** for dense tabular data and interface controls.

- **Display & Metrics:** Use Plus Jakarta Sans for KPI dashboards, greenhouse bay totals, and section headings. Numbers feature tabular lining where alignment across rows is critical.
- **Body & Tabular Controls:** Inter ensures legible text down to 11px for telemetry metadata, batch identifiers, and timestamp stamps.
- **Operational Data:** Numerical values in charts and table cells must employ fixed-width tabular figures (`font-variant-numeric: tabular-nums`) to prevent jitter during real-time data polling.

## Layout & Spacing

The layout utilizes a responsive 12-column grid anchored by an enterprise operational sidebar on desktop and a collapsable drawer on mobile and tablet.

- **Desktop (>= 1280px):** 12-column fluid grid, 24px gutters, max layout container width uncapped or bounded at 1920px for multi-monitor operations rooms. Sidebar fixed at `17.5rem` (280px).
- **Tablet / Rugged Toughpad (768px - 1279px):** 8-column layout, 16px gutters, collapsed icon rail sidebar at `4.5rem` (72px) to maximize dashboard telemetry area.
- **Mobile (320px - 767px):** 4-column single-stack flow, 12px margins, horizontal carousels for greenhouse climate cards, persistent bottom operation sheet for urgent interventions.
- **Rhythm:** An 8pt base grid governs all layout containers, while a 4pt sub-grid handles internal component micro-spacing (chips, badge padding, button insets).

## Elevation & Depth

This system avoids heavy drop shadows in favor of **Crisp Tactile Layering**: white container cards defined by crisp borders (`#e2e8f0`) enhanced with subtle, diffused slate shadows.

- **Level 0 (Floor/Canvas):** Base canvas in `#f8fafc`. Recessed tables and well containers in `#f1f5f9` with an inset `0 1px 2px rgba(15, 23, 42, 0.04)`.
- **Level 1 (Cards & Data Panels):** Surface `#ffffff`, border 1px solid `#e2e8f0`, shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`.
- **Level 2 (Hovered Cards & Dropdown Menus):** Surface `#ffffff`, border 1px solid `#cbd5e1`, shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Modals, Flyout Drawers, Sensor Diagnostic Sheets):** Elevated white surface, shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`.

## Shapes

The design system employs a **Rounded (Level 2)** geometry to soften enterprise clinicality into an approachable, modern agricultural cockpit.

- **Standard Elements (Buttons, Inputs, Selects):** `0.5rem` (8px) for balanced structural tactility.
- **Cards & Data Modules (`rounded-xl`):** `0.75rem` to `1rem` (12px to 16px) bounding main greenhouse zones, sensor matrices, and harvest charts.
- **Pills / Status Badges:** Fully rounded `9999px` to distinguish quick-scan status tokens from rectangular structural components.

## Components

### Buttons
- **Primary:** Solid `#166534` background, white text, 8px radius. On hover: `#15803d` with subtle scale-down active state (`0.98`).
- **Secondary Corporate:** Deep navy outline or ghost styling. Border 1px solid `#334155`, text `#0f172a`, background transparent; on hover, subtle tint `#f1f5f9`.
- **Destructive/Emergency Stop:** Borderless solid `#dc2626` or soft red fill `#fee2e2` with `#dc2626` text for lower priority alerts.
- **Touch Targets:** Minimum 44px height across tablet viewports for seamless gloved or one-handed field operations.

### Cards & Telemetry Tiles
- Built with pure `#ffffff` background, `1px solid #e2e8f0` border, and `16px` (`rounded-xl`) corner radius.
- Includes a dedicated header row with high-contrast label (`Plus Jakarta Sans`, 14px uppercase/semi-bold) and top-right live status pill.
- Metric values are styled with the `data-metric` typography token accompanied by green/red delta trend arrows.

### Chips & Operational Status Badges
- Compact padding (`0.25rem 0.625rem`), font size 12px, font weight 600, fully pill-shaped (`9999px`).
- **Nominal/Optimal:** `#d1fae5` background with `#065f46` text and an optional `#10b981` pulsing dot.
- **Warning/Nutrient Deficit:** `#fef3c7` background with `#92400e` text.
- **Critical/Failure:** `#fee2e2` background with `#991b1b` text.

### Form Inputs & Filters
- Inactive: Background `#ffffff`, border 1px solid `#cbd5e1`, 8px border radius, 14px Inter text.
- Focus: Border `#166534`, matching emerald focus ring (`0 0 0 3px rgba(22, 101, 52, 0.15)`).
- Prefix icons (search loupe, greenhouse bay pin, date range) rendered in muted `#64748b`.

### Checkboxes & Radio Controls
- High-contrast square with 4px radius (checkbox) or circle (radio).
- Inactive: 1.5px border `#94a3b8`. Checked: solid `#166534` with crisp white SVG check icon.

### Data Tables & Specimen Lists
- Dense row height (44px compact, 52px comfortable).
- Alternating subtle stripe or clean divider lines (`#f1f5f9`).
- Row hover triggers light cool slate wash (`#f8fafc`) with active cell selection ring.

### Domain-Specific Components
- **Bay Climate Gauge:** Radial or vertical micro-bar representing temperature, humidity (VPD), and light levels against set targets.
- **Crop Lifecycle Stepper:** Node-based progression tracker showing seedling, vegetative, flowering, and harvest readiness stages.