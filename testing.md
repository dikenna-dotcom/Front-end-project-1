# Testing and review

## Current static release

The current revision removes the interactive planner and the Python web server. The published site is a static collection of HTML pages and one stylesheet.

### Build and package checks

- Ran `python scripts/build_netlify_release.py` successfully.
- Parsed `netlify.toml` and checked that its build command and publish directory match the release script.
- Confirmed `build/netlify/` contains exactly nine HTML pages and `assets/css/style.css`.
- Confirmed the published files contain no `<form>`, `<script>`, or planner references, and that project documentation is not copied into the release.

### Browser checks

Opened the generated release in a browser and checked the eight content routes plus `404.html` at 320px, 768px, and 1440px. All 27 route-and-viewport checks had no horizontal overflow. The Features page displayed the fixed fictional comparison at all three widths and had no form or script elements.

These are focused local checks of the static package. They do not establish that the current site has passed a full accessibility audit or an independent user study.

## Live Netlify check

The owner provided [https://zesty-croissant-e95ed9.netlify.app/](https://zesty-croissant-e95ed9.netlify.app/). The published Home and Features pages were fetched and checked on 27 October 2026. Both show the current static version; Features displays the fixed fictional comparison and no interactive planner. This confirms those two routes only. A complete live-route, custom-404, responsive, and accessibility check remains outstanding.

## Checks still needed

Before submission or sharing:

1. Validate the current HTML with the W3C Nu HTML Checker and the stylesheet with the W3C CSS Validator.
2. Complete keyboard-only and screen-reader review using the steps in the [manual test sheet](docs/manual-test-sheet.md).
3. If possible, review on a physical phone and record the browser, device, and viewport.
4. Push to GitHub, connect the repository to Netlify, deploy, and verify all routes and the custom 404 page on the public URL.
5. Capture new screenshots of the current Features page if current-version evidence is required.

## Historical evidence

The evidence folder includes browser captures, validator responses, planner tests, visitor feedback, and a review of the former Netlify deployment. They were recorded before the current static revision. They must not be presented as validation of the current Features content or current public deployment.

See the [evidence index](docs/evidence/README.md) for historical records and the [manual test sheet](docs/manual-test-sheet.md) for outstanding current-version checks.
