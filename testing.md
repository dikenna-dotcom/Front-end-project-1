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
- I captured the current live Features page at [320px](docs/evidence/features-current-320.png), [390px](docs/evidence/features-current-390.png), [768px](docs/evidence/features-current-768.png), [1024px](docs/evidence/features-current-1024.png), and [1440px](docs/evidence/features-current-1440.png).

The live site shows a floating Netlify badge that is injected outside my source HTML and CSS. It appears over page content in the screenshots. I have not changed Netlify settings, so I still need to check whether I can turn off or reposition the badge before I treat the screenshots as clean presentation evidence.

These are focused checks, not a full accessibility audit or a broad user study. The keyboard checks cover the skip link and the FAQ disclosure, not every link in a full keyboard-only walkthrough.

## Checks still open

1. Review the current release at 200% zoom and record any reflow or clipping.
2. Use a screen reader with a browser to review landmarks, heading order, names, and FAQ disclosure state.
3. If available, check the pages on a physical phone and record the device, browser, viewport, and orientation.
4. Ask a first-time visitor to explain the UAR concept and whether the example is an actual assessment, with their permission.
5. Check the Netlify dashboard for a setting to disable or reposition the floating badge, then capture replacement screenshots if the presentation changes.

The [manual test sheet](docs/manual-test-sheet.md) has the current status for each check. Screenshots and notes from before the static-site change are listed in the [evidence index](docs/evidence/README.md) as historical records, not evidence for the current release.
