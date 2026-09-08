---
name: Serene Clinical
colors:
  surface: '#fff7fb'
  surface-dim: '#f8cbff'
  surface-bright: '#fff7fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ffeffd'
  surface-container: '#ffe6ff'
  surface-container-high: '#fddfff'
  surface-container-highest: '#fbd7ff'
  on-surface: '#330043'
  on-surface-variant: '#424751'
  inverse-surface: '#54006c'
  inverse-on-surface: '#ffebfe'
  outline: '#727783'
  outline-variant: '#c2c6d3'
  surface-tint: '#1f5daf'
  primary: '#003d7e'
  on-primary: '#ffffff'
  primary-container: '#0d54a5'
  on-primary-container: '#b1cbff'
  inverse-primary: '#aac7ff'
  secondary: '#ab3332'
  on-secondary: '#ffffff'
  secondary-container: '#ff716b'
  on-secondary-container: '#70040e'
  tertiary: '#3c3f40'
  on-tertiary: '#ffffff'
  tertiary-container: '#535657'
  on-tertiary-container: '#cacbcc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00458d'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ae'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#8a1a1e'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#fff7fb'
  on-background: '#330043'
  surface-variant: '#fbd7ff'
typography:
  display-lg:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
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
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system focuses on establishing a "Clinical Sanctuary"—a digital environment that balances professional medical authority with empathetic calm. The target audience includes both patients seeking care and practitioners managing complex clinical data.

The style is a refined **Corporate/Modern** aesthetic with a lean toward **Minimalism**. It prioritizes extreme clarity, generous whitespace to reduce cognitive load, and a systematic approach to information density. The emotional response should be one of "controlled tranquility"—users should feel they are in a safe, organized, and reliable space where their mental health is the priority.

## Colors
The palette is rooted in medical reliability, optimized for high-contrast accessibility and clarity in data-heavy environments.
- **Deep Clinical Blue (#0D54A5)** serves as the primary brand color. It is used for primary actions, progress indicators, and active states, representing professional stability and trust.
- **Alert Crimson (#A12C2C)** is the secondary color, reserved for high-priority clinical alerts, urgent notifications, and critical status updates to ensure immediate visibility.
- **Soft Alabaster (#F8F9FA)** acts as the tertiary color. It is utilized for subtle background layering, secondary section containers, or low-emphasis structural elements, providing a clean, light contrast to the primary surfaces.
- **System Orchid (#B918E8)** is the neutral accent color, used for specialized categorization or secondary metadata that requires distinction without the urgency of the primary or secondary colors.
- **Status Colors** are strictly functional: Green for availability, Blue for active engagement, and Yellow for temporary absence. These must always be accompanied by text labels or unique icons to ensure accessibility for color-blind users.

## Typography
This design system utilizes **Public Sans** for its institutional clarity and high legibility in data-heavy environments. 

- **Hierarchy:** Use bold weights for clinical metrics and headers to ensure patient data is scannable at a glance.
- **Readability:** Body text should maintain a minimum of 16px for general content and 14px for metadata/labels. 
- **Scale:** On mobile devices, large display headings should scale down to prevent excessive line-breaking, while body text remains consistent to preserve readability.

## Layout & Spacing
The layout follows a **Fluid Grid** model to accommodate both therapist dashboards (high density) and patient journals (low density).

- **Desktop:** 12-column grid with 24px gutters. Sidebars are fixed at 280px to allow the main content area to breathe.
- **Tablet:** 8-column grid with 16px gutters.
- **Mobile:** 4-column grid with 16px margins.
- **Vertical Rhythm:** Use increments of 8px (the `base` unit). Components should generally use `md` (16px) for internal padding to maintain a spacious, non-cramped feel.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows** rather than harsh borders, though Soft Alabaster surfaces provide clear regional boundaries.

- **Level 0 (Background):** White or near-white surfaces.
- **Level 1 (Cards/Surface):** Pure White (#FFFFFF) with a subtle 1px border using a light grey or the Soft Alabaster color at low opacity and no shadow.
- **Level 2 (Interactive/Floating):** Pure White (#FFFFFF) with a soft, diffused shadow (0px 4px 12px rgba(0, 0, 0, 0.08)).
- **Active States:** Elements being interacted with should receive a 2px Deep Clinical Blue stroke to indicate focus without adding visual "weight."

## Shapes
The shape language is consistently **Rounded** (8px default) to soften the clinical nature of the platform.

- **Standard Components:** Buttons, input fields, and small cards use the base `rounded` (0.5rem / 8px).
- **Containers:** Large dashboard modules or modal overlays use `rounded-lg` (1rem / 16px) to define distinct sections of the application.
- **Interactive Indicators:** Status dots and notification badges are fully circular (pill-shaped) to distinguish them from structural elements.

## Components
- **Buttons:** Primary buttons use a solid Deep Clinical Blue fill with white text. Secondary buttons use a Deep Clinical Blue outline with transparent background. All buttons must have a minimum height of 48px for mobile accessibility.
- **Cards:** White surfaces with 16px internal padding and 8px corner radius. Use for patient profiles, appointment summaries, and metric widgets.
- **Input Fields:** 1px border (Soft Alabaster or light grey), 8px radius. On focus, the border transitions to 2px Deep Clinical Blue. Labels must always be visible.
- **Chips:** Used for "Tags" (e.g., Anxiety, CBT, Follow-up). These should have a subtle background tint of the Deep Clinical Blue (10% opacity) or Soft Alabaster and 12px horizontal padding.
- **Status Indicators:** Small 10px circles placed next to avatars or names. Use Alert Crimson for critical status flags. Ensure a tooltip or text label is available on hover/focus.
- **Lists:** Clean rows separated by 1px Soft Alabaster dividers. Each row should have a minimum height of 64px to accommodate easy tapping on mobile.
- **Dashboard Metrics:** Use Large `headline-lg` in Deep Clinical Blue or a high-contrast dark grey for primary numbers, paired with `label-sm` for the metric description to create immediate visual hierarchy.