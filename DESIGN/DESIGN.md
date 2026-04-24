---
name: Digital Agency Design System
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
  on-surface-variant: '#464555'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006686'
  on-secondary: '#ffffff'
  secondary-container: '#7ed4fd'
  on-secondary-container: '#005b78'
  tertiary: '#40494e'
  on-tertiary: '#ffffff'
  tertiary-container: '#586166'
  on-tertiary-container: '#d3dce2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#c0e8ff'
  secondary-fixed-dim: '#7bd1fa'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#004d66'
  tertiary-fixed: '#dbe4ea'
  tertiary-fixed-dim: '#bfc8ce'
  on-tertiary-fixed: '#141d21'
  on-tertiary-fixed-variant: '#3f484d'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
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
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is built on the pillars of **Minimalism** and **Corporate Modernism**, blending the systematic precision of a global SaaS product with the approachable clarity required by a creative agency. The brand personality is defined by "Quiet Confidence"—it does not need to shout to be heard. 

The UI prioritizes high-quality whitespace to reduce cognitive load, allowing the agency's work and case studies to take center stage. The aesthetic is inspired by the structured simplicity of Notion and the polished, fluid execution of Stripe. It targets high-growth startups and established enterprises in Indonesia and beyond, evoking a sense of reliability, scalability, and forward-thinking innovation.

## Colors

The color palette is anchored in **Indigo** and **Slate**, providing a professional and tech-literate foundation. 

*   **Primary:** A vibrant Indigo used sparingly for calls-to-action and critical brand moments.
*   **Secondary & Tertiary:** Soft pastels and sky blues are used for decorative elements, icon backgrounds, and highlighting content sections without overwhelming the eye.
*   **Neutrals:** A sophisticated range of cool grays (Slate) handles the heavy lifting of typography and structural borders.
*   **Functional Surfaces:** The design system utilizes "Off-white" and "Ghost-gray" surfaces to create a sense of hierarchy through color rather than heavy shadows.

## Typography

The typography system relies exclusively on **Inter** to achieve a systematic, utilitarian aesthetic that remains highly readable at all scales. 

Headlines utilize a tighter letter spacing and heavier weights to project authority and modernity. Body text is set with generous line-heights to ensure accessibility and a comfortable reading rhythm. For metadata and category tags, an uppercase label style is used to provide visual contrast against the primary body copy.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop environments, centering content within a 1280px container to maintain readability on ultra-wide monitors. On smaller screens, the layout transitions to a fluid model with 24px side margins.

The spacing rhythm is based on an 8px linear scale. Large-scale layouts should utilize the "Section" spacing (80px+) to create distinct visual breaks between agency services and case studies. Alignment should be strict, favoring left-aligned text for professional clarity and using the 24px gutter for all internal component relationships.

## Elevation & Depth

Depth is communicated through a combination of **Tonal Layers** and **Ambient Shadows**. This design system avoids heavy drop shadows in favor of subtle, high-blur elevations that mimic the way light interacts with paper.

1.  **Level 0 (Base):** Pure white or `#F8FAFC` background.
2.  **Level 1 (Surface):** White cards or containers with a 1px border in a very light gray (`#E2E8F0`).
3.  **Level 2 (Interaction):** When hovered, elements may gain a soft, diffused shadow (15% opacity, 20px blur) to indicate interactivity.
4.  **Level 3 (Overlays):** Modals and dropdowns use a "Glassmorphism" approach with a `backdrop-filter: blur(8px)` and a semi-transparent white background to maintain the airy feel of the interface.

## Shapes

The shape language is consistently **Rounded (Level 2)**, mirroring the modern friendliness found in the agency's personality. 

A base radius of 8px (0.5rem) is applied to standard buttons and input fields. Larger containers, such as project cards or testimonial blocks, utilize 16px (1rem) to create a softer, more inviting frame. This balance ensures the UI feels innovative and current without appearing overly "bubbly" or juvenile.

## Components

*   **Buttons:** Primary buttons feature solid Indigo backgrounds with white text. Secondary buttons are "Ghost" style (transparent background, 1px Slate border). All buttons use an 8px corner radius and 16px horizontal padding.
*   **Cards:** Project cards should use a white background with a subtle 1px border. Images within cards should have a matching 8px or 12px radius. Avoid shadows on static cards; reserve them for hover states.
*   **Inputs:** Text fields use a light gray background (`#F1F5F9`) that shifts to white with an Indigo border on focus. Labels are always positioned above the input in `body-sm` weight.
*   **Chips/Tags:** Used for "Services" or "Tech Stack" labels. These use the `tertiary_color` (soft blue) background with a darker blue text for high legibility and a pill-shaped radius.
*   **Navigation:** A "Sticky" top navigation with a blur effect ensures the agency's primary links are always accessible while maintaining the minimalist aesthetic.
*   **Data Visualization:** For agency metrics, use clean line charts with Indigo gradients, avoiding cluttered grids or heavy axes.