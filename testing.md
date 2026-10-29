# How I tested the site

I test the information pages and the interactive Features comparison separately. The comparison works in the browser, while Netlify publishes the pages, CSS and JavaScript as static files.

## Build and validation

- I ran `python scripts/build_netlify_release.py`. The Netlify release contains nine HTML pages, `assets/css/style.css` and `assets/js/compatibility-comparison.js` (11 files); it excludes project documentation.
- I submitted all nine current HTML files to the W3C Nu checker on 28 October 2026, then rechecked all nine on 29 October. Both runs returned zero messages and zero errors for every page.
- `node --check assets/js/compatibility-comparison.js` passed.
- I submitted the current stylesheet to W3C Jigsaw, but the service returned HTTP 500. The browser loaded the CSS and applied the responsive form styles; I do not have a fresh external CSS-validator result for this stylesheet.
- I retried the CSS submission on 29 October 2026; the service returned HTTP 500 again (`Reader used`). The validator attempts are complete, but no external CSS validation result is available.

The relevant external services are the [W3C Nu HTML Checker](https://validator.w3.org/nu/) and [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/). For the JavaScript check I used the installed Node.js command-line runtime, not an online linter. There is no package manifest or configured automated test runner in this project.

To reproduce the release build and syntax check from the repository root:

```powershell
python scripts/build_netlify_release.py
node --check assets/js/compatibility-comparison.js
git diff --check
```

To serve the generated release locally:

```powershell
python -m http.server 8000 --directory build/netlify
```

I open `http://localhost:8000/` in a browser and stop the server with `Ctrl+C`. For the source files instead of the generated release, I run `python -m http.server 8000` from the repository root.

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

These are focused browser checks, not a complete accessibility audit. The separate iPhone/VoiceOver report is summarized below as user-reported evidence.

## Netlify and visitor feedback

After pushing website-code commit `f381702`, I checked the published [Netlify site](https://uar-project.netlify.app/) on 28 October 2026. Later commits updated documentation and evidence rather than the published HTML, stylesheet or script.

- The nine page routes returned HTTP 200 with their expected titles; the stylesheet and comparison script also returned HTTP 200.
- An unknown route returned HTTP 404 and showed the branded not-found page. The explicit `/404.html` page returned HTTP 200 as expected.
- In the browser, the Features form loaded, the fictional example returned two Blockers and one Pass, and the result included the disclaimer that it is not a real-world assessment.
- At a 320 CSS-pixel viewport, the Features page had no horizontal overflow and the comparison form remained visible.
- I compared all nine live HTML pages with the GitHub files at website-code commit `f381702`, allowing for Netlify's injected badge comment and its clean-URL link rewrites. The page structure, content and remaining attributes matched. The deployed stylesheet and comparison script matched the same commit exactly.
- The live site code therefore matches that GitHub revision. Later commits updated documentation and evidence rather than the published HTML, CSS or JavaScript. I could not access the Netlify dashboard to independently check its deploy record.

The floating Netlify badge remains enabled; it is injected outside my source HTML and CSS.

On 27 October 2026, one first-time visitor reviewed the earlier static version. They understood UAR as a concept for considering whether an application might work in an environment and knew that the example was not an actual device or application assessment. That feedback is historical and does not test the current form.

On 28 October 2026, a first-time visitor tried the current live comparison and said:

> “I understood that the website explains UAR and how it could help people review application compatibility. The comparison helped me understand the different outcomes. A pass suggests the requirements appear to match, but it doesn’t guarantee that an application is safe or will work. I also understood that the website itself doesn’t scan my device, test applications or produce a real compatibility assessment.”

Their response shows that they understood the site's purpose and the limits of the illustrative result. No improvement was reported from this session. This is one formative visitor test, not a broad user study.

The user also reported testing the live Features comparison with VoiceOver on a physical iPhone 16 using Chrome in portrait and landscape on 28 October 2026. They described the test as successful. The iOS and Chrome versions, exact announcements, detailed actions and any supporting recording were not provided, so I record this as a user-reported result rather than a reproducible screen-reader audit. The exact iOS version and browser version remain unknown.

## Development and evidence trail

The Git history shows the work as separate changes rather than one large final commit:

| Commit | Development step |
|---|---|
| `5c80a2d` | Brought the earlier site back toward an information-led static-site scope. |
| `22b5c4a` | Improved the homepage's question-led routes for visitors. |
| `062dc10` | Added the bounded browser-only comparison as a distinct feature. |
| `2961772` | Documented the interaction and its initial local test evidence. |
| `f381702` | Recorded the live site and comparison checks. |
| `e9ec337` | Recorded and pushed actual 200% zoom evidence. |
| `2d8e752` | Recorded the reported phone/VoiceOver test and first-time visitor feedback. |

Later documentation work expands the authorship map, research record and reproducible commands. The commit list is available in the [GitHub history](https://github.com/dikenna-dotcom/Front-end-project-1/commits/main/). The [README](README.md) maps each authored implementation file to its responsibility. The [evidence index](docs/evidence/README.md) labels screenshots and validator records by project stage so historical evidence is not mistaken for current test results.

## Final status and evidence limits

The website, comparison feature, release build and Netlify publication are complete, and the recorded local and live checks passed for the scenarios listed above. I have not recorded a known unresolved site defect.

- On 29 October 2026, I retested the live Features comparison: the fictional example returned Blocker, Blocker and Pass; editing an input cleared the stale result and announced that the values had changed; Clear values removed the inputs and result. The live stylesheet loaded and exposed its CSS rules in the browser. These checks passed; the CSS parser smoke check is not a substitute for the unavailable Jigsaw result.
- **HTML:** The latest W3C Nu run on 29 October returned zero messages and zero errors for all nine pages.
- **CSS:** The Jigsaw validation attempts ended with HTTP 500 responses. This external service failure is a completed test attempt with no validator result; it is not evidence that the stylesheet failed or passed. I visually checked that the stylesheet loads and the tested layouts reflow.
- **Mobile and screen reader:** The user reported successful iPhone 16 / Chrome / VoiceOver testing of the Features comparison in portrait and landscape. The report did not include exact OS/browser versions, specific spoken announcements or supporting recordings; this is accurately retained as user-reported evidence, not upgraded into a reproducible audit.
- **Visitor feedback:** One first-time visitor tested the current comparison and understood the site's purpose and the limits of its result. This completes the recorded formative test; it is not a broad usability study.
- **Deployment:** The live pages and assets were checked against the GitHub website-code revision. The Netlify dashboard was not available, so no dashboard screenshot or deploy-record claim is included.

These are evidence boundaries, not a list of unfinished implementation tasks. More testing can always improve confidence, but none of these notes represents a known functional issue. The [manual test sheet](docs/manual-test-sheet.md) and [evidence index](docs/evidence/README.md) preserve the supporting details and historical version labels. No documentation can guarantee a distinction; the assessor determines the grade.
