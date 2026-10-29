# My wireframe references

## Timing and purpose

I made these 24 SVGs as layout references after I had already built the first version of the pages. The original set was reconstructed on 24 October 2026. I updated the three Features drawings on 27 October 2026 to show a fixed example with fictional information. They are not original wireframes made before coding.

I wanted a simple layout that made the information order visible: a shared header, one clear page heading, related information grouped together, and a consistent footer. I reconstructed these drawings after the first page implementation, so they record my layout thinking retrospectively; they do not prove that the SVGs were used to plan the first implementation. Each page has a mobile (320px), tablet (768px), and desktop (1440px) drawing. They show rough page structure and reading order, not the finished styling, final copy, final spacing or every small-screen behavior.

## Available files

| Page | Mobile | Tablet | Desktop |
|---|---|---|---|
| Home | [home-mobile.svg](home-mobile.svg) | [home-tablet.svg](home-tablet.svg) | [home-desktop.svg](home-desktop.svg) |
| Features | [features-mobile.svg](features-mobile.svg) | [features-tablet.svg](features-tablet.svg) | [features-desktop.svg](features-desktop.svg) |
| How It Works | [workflow-mobile.svg](workflow-mobile.svg) | [workflow-tablet.svg](workflow-tablet.svg) | [workflow-desktop.svg](workflow-desktop.svg) |
| Compatibility | [compatibility-mobile.svg](compatibility-mobile.svg) | [compatibility-tablet.svg](compatibility-tablet.svg) | [compatibility-desktop.svg](compatibility-desktop.svg) |
| Security | [security-mobile.svg](security-mobile.svg) | [security-tablet.svg](security-tablet.svg) | [security-desktop.svg](security-desktop.svg) |
| Use Cases | [use-cases-mobile.svg](use-cases-mobile.svg) | [use-cases-tablet.svg](use-cases-tablet.svg) | [use-cases-desktop.svg](use-cases-desktop.svg) |
| About | [about-mobile.svg](about-mobile.svg) | [about-tablet.svg](about-tablet.svg) | [about-desktop.svg](about-desktop.svg) |
| FAQ | [faq-mobile.svg](faq-mobile.svg) | [faq-tablet.svg](faq-tablet.svg) | [faq-desktop.svg](faq-desktop.svg) |

## Current project scope

The project is an information-led site with an interactive browser-only comparison on the Features page. These drawings predate that form: they show the review-area cards and fixed fictional comparison, not the current visitor inputs or generated result.

In the current CSS, the feature and example cards stack at 840px and below. The homepage diagram stacks below 1180px. The six main navigation links stay visible and wrap on narrower screens.

I have not redrawn the Features wireframes to include the new comparison form. Treat them as retrospective layout references, not current visual evidence or proof that these sketches existed before the first implementation. For current page appearance, use the [interactive screenshots](../evidence/README.md). I explain the design choices and the timing of the drawings in [design-decisions.md](../design-decisions.md).

## How I used these references

1. I used the page sketches to make the content hierarchy and order easier to discuss.
2. I kept the implementation in semantic HTML and a shared stylesheet rather than converting the sketches into images in the site.
3. I changed the final implementation as it developed; the SVGs do not document every later change.
4. I keep older screenshots and wireframes separate from current screenshots so a reader can tell what was tested on the final version.

The actual source and responsive implementation are in the root HTML pages and `assets/css/style.css`; the README's [file map](../../README.md#what-i-wrote-and-where-it-lives) lists each file. The wireframes are planning references only, not a second implementation.
