---
name: Florasense Organic Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#3f4944'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#6f7973'
  outline-variant: '#bec9c2'
  surface-tint: '#1b6b51'
  primary: '#004532'
  on-primary: '#ffffff'
  primary-container: '#065f46'
  on-primary-container: '#8bd6b7'
  inverse-primary: '#8bd6b6'
  secondary: '#5a5f64'
  on-secondary: '#ffffff'
  secondary-container: '#dfe3e9'
  on-secondary-container: '#60656a'
  tertiary: '#563400'
  on-tertiary: '#ffffff'
  tertiary-container: '#764900'
  on-tertiary-container: '#ffb960'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a6f2d1'
  primary-fixed-dim: '#8bd6b6'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#00513b'
  secondary-fixed: '#dfe3e9'
  secondary-fixed-dim: '#c3c7cd'
  on-secondary-fixed: '#171c20'
  on-secondary-fixed-variant: '#43474c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is built for the precision-driven world of commercial floriculture, where data and biology intersect. The brand personality is **Professional, Grounded, and Enlightened**. It seeks to evoke a sense of calm control over complex biological systems, positioning AI not as a replacement for the grower’s intuition, but as a high-fidelity lens through which to view it.

The visual style is **Corporate Modern with a Biophilic twist**. It utilizes high-quality whitespace and a structured grid to manage dense agricultural data, while incorporating organic curves and a nature-inspired palette to maintain a connection to the living product. The interface should feel as efficient as a modern laboratory but as welcoming as a greenhouse at sunrise.

## Colors

This design system uses a palette rooted in the lifecycle of a plant. 
- **Primary (Emerald Green):** Represents vitality and the healthy foliage of commercial crops. It is used for primary actions, success states, and key navigational elements.
- **Secondary (Earth Neutrals):** A range of cool grays and warm stones that provide a professional, stable foundation for data visualizations.
- **Tertiary (Harvest Amber):** Used sparingly for alerts, warnings, or time-sensitive agricultural insights (e.g., harvest windows or moisture deficits).
- **Surface & Background:** Crisp whites and very light grays maintain an "open-air" feel, ensuring that complex charts and sensor data remain legible.

## Typography

The typography strategy balances the humanistic nature of floriculture with the technical precision of AI. **Hanken Grotesk** serves as the primary typeface for its sharp, contemporary geometry and exceptional legibility in professional SaaS environments. 

For technical readouts, sensor IDs, and coordinate data, **JetBrains Mono** is introduced to provide a clear visual distinction between descriptive text and raw data points. Use `display-lg` for dashboard overviews and `label-mono` for all telemetry-related labels to ensure the UI feels like a high-end diagnostic tool.

## Layout & Spacing

The design system employs a **Fluid Grid** model to accommodate the varied data density required by commercial growers. 
- **Desktop:** 12-column grid with a 24px gutter. Content should be organized into modular "Field Cards" that can span 3, 4, 6, or 12 columns depending on the complexity of the data visualization.
- **Tablet:** 8-column grid. Sidebars should collapse into a drawer to prioritize visual space for greenhouse maps.
- **Mobile:** 4-column grid with 16px margins. Data tables should reflow into vertical cards, and primary navigation should move to a bottom tab bar for easy one-handed operation in the field.

Spacing follows an 8px rhythmic scale, ensuring consistent vertical breathing room between disparate data sets.

## Elevation & Depth

To maintain a clean and professional look, this design system avoids heavy shadows. Hierarchy is established through **Tonal Layering** and **Subtle Outlines**:
- **Level 0 (Background):** Solid `#F9FAFB`.
- **Level 1 (Cards/Surface):** Solid `#FFFFFF` with a 1px border in `#E5E7EB`.
- **Level 2 (Modals/Overlays):** White surface with a highly diffused, 10% opacity Emerald-tinted shadow (`0 10px 25px -5px rgba(6, 95, 70, 0.1)`).

In data-heavy views, use semi-transparent green washes (5-10% opacity) to highlight active rows or selected data ranges, rather than increasing elevation.

## Shapes

The shape language is **Rounded**, reflecting the organic curves of plant life while maintaining the structure of a professional tool. 
- A base radius of **8px (0.5rem)** is used for standard inputs, buttons, and cards.
- **Large (16px)** radius is reserved for primary dashboard containers and major UI sections.
- Icons should utilize a consistent 2px stroke with rounded terminals to mirror the typeface and plant-inspired aesthetic.

## Components

- **Primary Buttons:** Solid Emerald Green with white text. High-emphasis actions (e.g., "Adjust Irrigation") use a slightly more pronounced rounded corner to invite interaction.
- **Status Chips:** Use a "Pill" shape with a background tint matching the status (e.g., light green for "Optimal", light amber for "Needs Attention"). Text should be all-caps in the `label-mono` font.
- **Data Input Fields:** Minimalist design with a 1px neutral border that transitions to an Emerald border on focus. Labels should always be visible above the field in `body-sm` bold.
- **Field Cards:** The core unit of the UI. Cards must have a consistent padding of 24px and contain a `label-mono` header indicating the sensor group or greenhouse zone.
- **Growth Charts:** Line charts should use smoothed (bezier) curves rather than jagged angles to emphasize the organic nature of plant growth, using the Primary Emerald as the main data line.
- **Toggle Switches:** Use a tactile, soft-sliding animation with a clear green "On" state, mimicking physical greenhouse controls.