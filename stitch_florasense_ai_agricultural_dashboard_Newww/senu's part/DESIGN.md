---
name: AgroClinical Precision
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
  on-surface-variant: '#414942'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#717972'
  outline-variant: '#c0c9c0'
  surface-tint: '#33694a'
  primary: '#002f19'
  on-primary: '#ffffff'
  primary-container: '#0d472b'
  on-primary-container: '#7db591'
  inverse-primary: '#9ad3ad'
  secondary: '#286b41'
  on-secondary: '#ffffff'
  secondary-container: '#aaf0bb'
  on-secondary-container: '#2d6f45'
  tertiary: '#590004'
  on-tertiary: '#ffffff'
  tertiary-container: '#820009'
  on-tertiary-container: '#ff8579'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b6f0c8'
  primary-fixed-dim: '#9ad3ad'
  on-primary-fixed: '#002110'
  on-primary-fixed-variant: '#195033'
  secondary-fixed: '#adf2bd'
  secondary-fixed-dim: '#92d6a3'
  on-secondary-fixed: '#00210d'
  on-secondary-fixed-variant: '#07522b'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000b'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-code:
    fontFamily: jetbrainsMono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
  label-status:
    fontFamily: inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
  metric-display:
    fontFamily: inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
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
  sidebar-width: 16rem
  gutter-dashboard: 1.5rem
---

## Brand & Style

This design system establishes a high-precision, clinical agronomy management environment tailored for industrial plant pathologists, commercial greenhouse managers, and phytosanitary inspectors. The visual narrative combines the scientific rigor of diagnostic laboratory software with operational enterprise ergonomics.

### Design Principles
- **Clinical Certainty:** Visual indicators leave zero ambiguity regarding diagnostic confidence, contagion status, or phytosanitary clearances. Critical data points are isolated, structured, and legible at a glance.
- **Botanical Authority:** The color scheme is anchored by deep forestry tones and balanced against cool laboratory neutrals, avoiding playful consumer-plant motifs in favor of commercial-scale bio-intelligence.
- **Diagnostic Hierarchy:** Critical alerts and actionable protocols command spatial priority using disciplined contrast tiers rather than visual clutter.
- **Instrument Precision:** Monospaced labeling, micro-data captions, and crisp structural borders evoke specialized optical hardware and telemetry consoles.

## Colors

The color architecture is built around calibrated botanical tones, scientific diagnostic states, and crisp cool-slate neutrals.

### Palette Roles
- **Primary (`#0D472B`):** Deep pine green used for high-emphasis primary triggers, focused navigation tabs, and system-level actions.
- **Secondary (`#165B33`):** Forest green applied to verified safe badges, positive bio-metrics, and secondary control headers.
- **Tertiary & Diagnostics:**
  - **Quarantine Red (`#DC2626` / Light Tint `#FEF2F2` / Border `#FCA5A5`):** Severe pathogen detection, export rejection, and containment triggers.
  - **Warning Amber (`#D97706` / Light Tint `#FFFBEB` / Border `#FDE68A`):** Latent stress, observation queues, and climatic anomalies.
  - **Healthy Green (`#059669` / Light Tint `#ECFDF5` / Border `#A7F3D0`):** Cleared lots, commercial grade validation, and stable environmental cycles.
  - **Diagnostic Blue (`#2563EB` / Light Tint `#EFF6FF` / Border `#BFDBFE`):** Telemetry stream indicators, batch sequencing, and telemetry metadata.
- **Neutrals & Surfaces:**
  - **App Canvas:** `#F4F6F9` (Subtle cool slate-tinted white for low eye strain in illuminated facility settings).
  - **Sidebar & Surface Level 1:** `#F8FAFC` to `#FFFFFF`.
  - **Card Surface Level 2:** `#FFFFFF` with precise 1px borders (`#E2E8F0`).
  - **Text Primary:** `#0F172A` (Slate 900 for absolute contrast).
  - **Text Muted & Labels:** `#64748B` (Slate 500 for technical metadata and category tags).

## Typography

Typography pairs `Inter` for clarity in narrative data and UI controls with `JetBrains Mono` for metadata tags, batch IDs, optical diagnostics, and system timestamps.

### Typographic Hierarchy Rules
- **Header & Telemetry Context:** Section labels, sample contexts, and optical result headers utilize `label-code` in all caps (`text-transform: uppercase`) with positive tracking (`letter-spacing: 0.06em`) to convey scientific instrumentation.
- **Diagnostic Metrics:** Quantitative readings (e.g., confidence percentages, microclimate thresholds) utilize high-weight figures with tightened letter spacing.
- **Clinical Action Guidance:** Instructional copy follows compact line heights to allow dense tactical directives without multi-line sprawl.

## Layout & Spacing

The viewport implements a structured application frame with a fixed-density ergonomic sidebar paired with a multi-column responsive dashboard work area.

### Spatial Distribution
- **Sidebar Shell:** Fixed `16rem` width containing platform identity, primary modules, and session credentials.
- **Top Utility Header:** Single row (`3.5rem` height) housing path diagnostics, breadcrumbs, localization, and system profile states.
- **Dashboard Canvas:** Structured fluid multi-column grid with a consistent `1.5rem` gutter system.
  - **Alert Banners:** Span full available canvas width with integrated action triggers.
  - **Analytical Pairings:** 60/40 ratio between telemetry/optical scans (left) and diagnostic decision protocols (right).
- **Component Padding Scale:**
  - Cards: `1.25rem` to `1.5rem` internal padding.
  - Metric cells & data micro-boxes: `0.75rem` internal padding.
  - Interactive inputs & buttons: `0.5rem` vertical by `1rem` horizontal.

## Elevation & Depth

Visual depth is achieved through surgical border framing and ambient, low-opacity slate shadow diffusion, reinforcing laboratory cleanliness.

### Surface Tiers
- **Tier 0 (Base Canvas):** `#F4F6F9` — Matte backdrop with zero elevation.
- **Tier 1 (Panels & Sidebar):** `#F8FAFC` to `#FFFFFF` bound by a crisp 1px `#E2E8F0` border.
- **Tier 2 (Cards & Diagnostic Modules):** Solid `#FFFFFF` surface elevated via `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)` and a `1px solid #E2E8F0` border perimeter.
- **Tier 3 (Active Overlays & Critical Alert Bars):** Light diagnostic-tinted backdrops accompanied by slightly weighted borders (e.g., `#FCA5A5` on `#FEF2F2`) and subtle edge definition rather than heavy drop shadows.
- **Optical Scans:** Recessed appearance with a subtle inset border and high-contrast dark targeting overlays.

## Shapes

The design uses controlled geometric radiuses (`level 2` / base 8px) to soften the density of technical enterprise tooling while maintaining an authoritative presence.

### Corner Radius Mapping
- **Buttons, Badges & Inputs:** `8px` (`0.5rem`) for a tailored, balanced contour.
- **Diagnostic Cards & Analysis Viewports:** `12px` to `16px` (`0.75rem` - `1rem`) corner radius for modular container separation.
- **Micro Badges & Tags:** Fully rounded pill format (`9999px`) or `6px` (`rounded-md`) strictly based on operational context:
  - Dynamic status tags (e.g., `Suspended`, `Cleared`) use `9999px` pills.
  - Technical specs and bounding labels use `4px` to `6px` rounded rects.
- **Inspection Step Anchors:** Full circular indicators (`9999px`) with centered sequence integers.

## Components

### Buttons & Action Triggers
- **Primary Diagnostic Action:** Full-width or contextual trigger styled with `#0D472B` background, white bold text, subtle inner border highlight, and active press state `#0A3620`.
- **Destructive/Quarantine Action:** Deep crimson border and text with `#FEF2F2` background, escalating to solid red for quarantine confirmations.
- **Ghost/Utility Button:** Slate-outlined (`#CBD5E1`) transparent background with `label-code` uppercase text formatting.

### Critical Alert Banners
- Banner layouts use light pastel-tinted backgrounds corresponding to alert status (e.g., `#FEF2F2` for pathogen alerts) bordered completely with an accent stroke (`#FCA5A5`).
- Left-aligned bold diagnostic summary paired with descriptive remediation protocol and an inline secondary review action on the right.

### Optical Analysis Viewports
- Image frames house sample photographs inside a rounded `12px` masked container with a technical HUD overlay.
- Bounding boxes feature high-contrast translucent pill tags (e.g., dark semi-transparent with red indicator dot) marking detected lesions or necrotic tissue.
- Associated micro-metrics (Confidence Score, Severity Level) sit adjacent in tinted metric cards with centered quantitative readouts.

### Protocol Checklist & Routing
- Stepped vertical workflow containing circular numeric badges:
  - Completed/Active steps use `#0D472B` with white numerals.
  - Pending steps use light slate outlines (`#E2E8F0`) with muted numerals.
- Each step features a bold instruction header with subordinate monospace microclimate or chemical compound guidance.

### Navigation Items
- Sidebar navigation features generous touch targets (`0.75rem` vertical padding) with standard icon + label alignment.
- Selected state adopts a solid `#0D472B` surface with crisp white iconography and text, accompanied by smooth corner rounding.