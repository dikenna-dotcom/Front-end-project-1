# How I tested the site

I checked that the project builds as a static site, that the published pages load, and that the fixed Features example stays informational rather than interactive. I recorded the checks I could complete below and left the checks that need a physical device or assistive technology open.

## Build and validation

- I ran `python scripts/build_netlify_release.py`. The Netlify release contains nine HTML pages and `assets/css/style.css`; it excludes forms, scripts, the removed planner, and project documentation.
- I submitted all nine source HTML files to the W3C Nu checker. Each returned zero messages and zero errors.
- The live stylesheet passed the W3C Jigsaw CSS validator with zero errors and one informational warning: CSS custom properties are not checked statically.

## Live-site checks

I checked the live [Netlify site](https://zesty-croissant-e95ed9.netlify.app/) on 27 October 2026.

- All nine page routes, including `/404.html`, returned HTTP 200.
- I checked those routes at browser viewport widths of 320px, 390px, 768px, 1024px, and 1440px: 45 route-and-width checks in total. The stylesheet loaded, the main content was present, and I found no horizontal overflow, forms, or project JavaScript.
- Internal links on the pages returned successfully. A deliberately nonexistent route returned HTTP 404 and showed the branded not-found page; its Home, FAQ, and How It Works links worked.
- On all nine routes, the first Tab reached the skip link, its focus was visible, and Enter moved focus to the main content. On the FAQ page, Enter closed and reopened a native disclosure.
- I captured the current Features page from a local preview at [320px](docs/evidence/features-current-320.png), [390px](docs/evidence/features-current-390.png), [768px](docs/evidence/features-current-768.png), [1024px](docs/evidence/features-current-1024.png), and [1440px](docs/evidence/features-current-1440.png). The local version uses the project files and does not include the injected Netlify badge.

## GitHub and Netlify deployment check

I checked the GitHub repository and live site again after the latest push on 27 October 2026.

- GitHub repository: [dikenna-dotcom/Front-end-project-1](https://github.com/dikenna-dotcom/Front-end-project-1).
- Latest GitHub `main` commit at the time of the check: `81b270f` (`Record user device checks and local screenshots`). Local and remote `main` matched.
- Published site: [zesty-croissant-e95ed9.netlify.app](https://zesty-croissant-e95ed9.netlify.app/).
- All eight content routes and `/404.html` responded with HTTP 200, and all linked to the stylesheet. An unknown route responded with HTTP 404 and displayed the branded not-found page.
- The Features route displayed the current fixed comparison using fictional data. It has no review planner; this project is intentionally static and has no project JavaScript.
- The site was published and responding, but I did not inspect the Netlify dashboard to confirm which commit ID its latest deploy reports. The latest GitHub commit only changed documentation and screenshots, not the site HTML or CSS.

The floating Netlify badge remains visible on the published site. It is injected outside my source HTML and CSS; I left it enabled and used a local preview for clean screenshots.

These are focused checks, not a full accessibility audit or a broad user study. The keyboard checks cover the skip link and the FAQ disclosure, not every link in a full keyboard-only walkthrough.

## Checks still open

1. Perform a native 200% browser zoom review in Edge and record any reflow or clipping. A browser viewport can approximate the narrower layout, but it does not replace setting Edge's actual zoom.
2. Record the details of the user-reported iPhone 16/Chrome and iOS VoiceOver checks, including versions, routes, orientation, and actions. The user reported no issues and no VoiceOver concerns.
3. Ask a first-time visitor to explain the UAR concept and whether the example is an actual assessment, with their permission.

The [manual test sheet](docs/manual-test-sheet.md) has the current status for each check. Screenshots and notes from before the static-site change are listed in the [evidence index](docs/evidence/README.md) as historical records, not evidence for the current release.
