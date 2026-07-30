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
