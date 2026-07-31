# Workspace Rules

## Asset Handling & Inspiration Folders
- **Strict Separation**: Any file or asset located in folders named `inspiration`, `reference`, `mockups`, or similar MUST be treated strictly as UI/UX/design references.
- **Never Embed**: Never use or embed these files as actual content (images, videos, audio) in the production application or website unless the user explicitly commands it.
- **Content Sourcing**: For actual website content, you must source real, relevant assets (e.g., from the business's actual Google Maps profile, official social media, or high-quality stock if authorized) rather than repurposing reference materials.

## Real Asset Sourcing vs. AI Generation
- **Never Substitute Real with AI Silently**: When a user explicitly requests real assets (e.g., "get an image from the internet", "use a real photo"), NEVER silently generate an AI image as a substitute if scraping or sourcing is difficult. 
- **Actionable Sourcing**: Instead of defaulting to AI generation, write a custom script (using Python, DuckDuckGo search, Unsplash, etc.) to actively hunt down and download the real asset. If it is truly impossible, explicitly tell the user and ask how to proceed, rather than generating an AI image without permission.

## UI Completeness & Interactivity
- **No Dummy UI Elements**: NEVER add non-functional interactive elements to the DOM. If you add a burger icon, a "See More" button, or a dropdown toggle, you MUST implement its state (e.g., `useState`) and its corresponding functional behavior immediately. Do not leave "blind spots".

## Safe Area & Z-Index Management
- **Fixed Element Offset**: Whenever adding a fixed or sticky navigation bar, you MUST ensure the underlying page content (like a Hero section) is pushed down (using `pt-[navbar-height]` or similar) so it doesn't collide with or get obscured by the navbar.

## Glassmorphism Defaults
- **Always Active by Default**: Unless explicitly instructed otherwise by the user, if a "glass effect" or "glassmorphism" (iPhone X style) is requested for a navbar, apply it universally (`bg-black/30 backdrop-blur-xl`) on load, not conditionally on scroll.

## Debugging & Root Cause Analysis
- **Never Guess**: When faced with a bug (e.g., a missing image or lagging animation), never guess the cause or blindly apply fixes based on assumptions. Always systematically verify the state (e.g., check CSS blending modes, z-indexes, or network logs) before concluding the root cause.
- **"Be Real"**: Provide honest, verified explanations to the user rather than hypothetical reasons.

## Mobile Web Performance (Zero-Lag UX)
- **Avoid Live Filters**: Never use `blur-[]`, `backdrop-blur`, or `drop-shadow` on large, moving, or animated elements. These instantly cause severe GPU lag (frame dropping) on mobile devices (e.g., Safari on iPhone).
- **Fake Depth**: To achieve premium depth without lag, use static ground cast shadows (squashed `radial-gradient`), deep vertical gradients (`bg-gradient-to-b`), and global static noise textures (e.g., a repeating `noise.png` overlay).
- **Hardware Acceleration**: Always add `will-change: transform` to heavily animated wrappers and use viewport units (`100vw`) rather than massive absolute pixel values (e.g., `1000px`) for translations.

## Proactive Senior Engineering
- **Anticipate Domain Needs**: Never act as a mere "code executor". Always analyze the geographical, cultural, and domain context of the project. 
- **Suggest Critical Missing Features**: Proactively suggest standard features that the user may have forgotten before starting work. For example:
  - Middle Eastern sites: Require Arabic i18n and full RTL support.
  - Government/Public sites: Require strict WCAG accessibility standards.
  - E-commerce: Require loading states, error boundaries, and transactional emails.
- **Be Helpful**: Bring these suggestions up early and clearly to save the user time and ensure the architecture supports them from day one.
