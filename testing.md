# How I tested the site

I test the information pages and the interactive Features comparison separately. The comparison works in the browser, while Netlify publishes the pages, CSS and JavaScript as static files.

## Build and validation

- I ran `python scripts/build_netlify_release.py`. The Netlify release contains nine HTML pages, `assets/css/style.css` and `assets/js/compatibility-comparison.js` (11 files); it excludes project documentation.
- I submitted all nine current HTML files to the W3C Nu checker on 28 October 2026. Each returned zero messages and zero errors.
- `node --check assets/js/compatibility-comparison.js` passed.
- I submitted the current stylesheet to W3C Jigsaw, but the service returned HTTP 500. The browser loaded the CSS and applied the responsive form styles; I do not have a fresh external CSS-validator result for this stylesheet.

## Earlier published-site checks

The following checks were run on [the previous Netlify site](https://zesty-croissant-e95ed9.netlify.app/) on 27 October 2026. They describe the earlier site, not this interactive update.

- All nine page routes, including `/404.html`, returned HTTP 200.
- The nine routes were checked at 320px, 390px, 768px, 1024px and 1440px (45 route-and-width checks), with no horizontal overflow.
- Microsoft Edge at 200% zoom produced a 640 CSS-pixel viewport. The nine routes had no horizontal overflow or overlapping navigation.
- A deliberately nonexistent route returned HTTP 404 and showed the branded not-found page; its Home, FAQ and How It Works links worked.
- The first Tab reached the skip link on all nine routes, and Enter moved focus to main content. On the FAQ page, Enter closed and reopened a native disclosure.
- I captured the former static Features page at [320px](docs/evidence/features-current-320.png), [390px](docs/evidence/features-current-390.png), [768px](docs/evidence/features-current-768.png), [1024px](docs/evidence/features-current-1024.png) and [1440px](docs/evidence/features-current-1440.png). These screenshots predate the comparison form.
- The earlier homepage starting-point links were checked at 320px, 768px and 1440px. Their screenshots are in the [evidence index](docs/evidence/README.md).

## New Netlify domain before the interactive update

I smoke-tested [uar-project.netlify.app](https://uar-project.netlify.app/) on 27 October 2026, before adding the current comparison.

- The homepage and seven clean navigation routes returned HTTP 200 with the expected page titles. `/404.html` returned HTTP 200 and an unknown path returned HTTP 404 with the branded not-found page.
- I checked the homepage, seven clean content routes and 404 route at five widths; the stylesheet loaded and I found no horizontal overflow.
- The deployed stylesheet matched the local source after normalizing Windows and web line endings. I had not confirmed the deployment commit in the Netlify dashboard.

## Interactive release checks

On 28 October 2026, I tested the local release at `http://127.0.0.1:8766/` in a browser. These are local results for the interactive change; they are not evidence that Netlify has deployed it.

- I checked all nine routes at 320px, 390px, 768px, 1024px and 1440px: 45 route-and-viewport checks. Every page had its main heading and stylesheet, and none had horizontal overflow. The Features form remained within its page.
- At a 640 CSS-pixel viewport (the reflow width corresponding to 200% zoom on a 1280px-wide display), all nine routes had no horizontal overflow or overlapping/out-of-bounds navigation.
- The fictional preset produced OS Blocker, memory Blocker and storage Pass. Matching entered values produced three Pass labels. Blank values produced three Warnings. Choosing “No OS-specific requirement” produced a Pass for the OS comparison without requiring a target OS.
- Numeric fields accepted 0, 1024 and decimals, and rejected negative values and values above 1024 GB. Editing a completed comparison hid the old result until the visitor ran it again. Clear values reset inputs and results.
- With the comparison script blocked, the form stayed hidden, the explanatory JavaScript notice appeared, and the fixed example remained readable.
- I checked the skip link on all nine routes. On Features, keyboard navigation reached all six fields and three buttons in order and in reverse with visible focus. Enter activated the fictional preset and Compare button. The FAQ disclosure closed and reopened with Enter.
- The local comparison page made no external resource requests; the script contains no network or browser-storage calls. Reloading after a comparison cleared its values and result.
- I found no JavaScript runtime or browser console errors during the normal feature scenarios. The intentionally blocked-script fallback check logged the expected failed script request.
- I captured the fictional comparison result at [320px](docs/evidence/features-interactive-320.png) and [1440px](docs/evidence/features-interactive-1440.png). The 320px capture had no horizontal overflow.

These are focused browser checks, not a complete accessibility audit or a physical-device test.

## Netlify and visitor feedback

After pushing commit `f381702`, I checked the published [Netlify site](https://uar-project.netlify.app/) on 28 October 2026.

- The nine page routes returned HTTP 200 with their expected titles; the stylesheet and comparison script also returned HTTP 200.
- An unknown route returned HTTP 404 and showed the branded not-found page. The explicit `/404.html` page returned HTTP 200 as expected.
- In the browser, the Features form loaded, the fictional example returned two Blockers and one Pass, and the result included the disclaimer that it is not a real-world assessment.
- At a 320 CSS-pixel viewport, the Features page had no horizontal overflow and the comparison form remained visible.
- I compared all nine live HTML pages with the GitHub files at `f381702`, allowing for Netlify's injected badge comment and its clean-URL link rewrites. The page structure, content and remaining attributes matched. The deployed stylesheet and comparison script matched the same commit exactly.
- The live content therefore matches the latest GitHub source commit. I could not access the Netlify dashboard to independently check its deploy record.

The floating Netlify badge remains enabled; it is injected outside my source HTML and CSS.

On 27 October 2026, one first-time visitor reviewed the earlier static version. They understood UAR as a concept for considering whether an application might work in an environment and knew that the example was not an actual device or application assessment. This is one formative test, not a broad user study, and it does not test the current form.

## Checks still open

1. Test the comparison on a physical iPhone with VoiceOver (or another screen reader), and record device, OS, browser and assistive-technology versions, orientation, pages and actions. The earlier user-reported iPhone and iOS screen-reader checks were on a previous version.
2. Ask a first-time visitor to use the comparison and explain the meaning and limits of its result; the previous feedback predates this interaction.
3. Retry W3C Jigsaw when its service is available. The current CSS has not received a fresh external validation result.
4. A larger or more varied set of first-time visitors could provide broader evidence than the single earlier formative test.

The [manual test sheet](docs/manual-test-sheet.md) has the current status for each check. Earlier screenshots and notes are listed in the [evidence index](docs/evidence/README.md) as historical records, not evidence for the interactive release.
