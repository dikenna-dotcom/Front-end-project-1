# Manual checks for the current release

I use this sheet to plan and record checks for the current information-led site and its browser-only Features comparison. Results from older versions are identified as historical; I do not carry them forward as proof for changed pages or interactions.

## Record for a manual run

- Tester / initials:
- Date and local time:
- Device, operating system, and browser/version:
- Viewport (CSS px), zoom, orientation, and text-size settings:
- Site revision or commit:
- Routes and actions checked:
- Actual result and evidence:
- Defects and retest result:

I use **Pass**, **Fail**, **Blocked**, or **Pending** for each result. If I ask someone else to try the site or take a screenshot, I ask permission first and avoid collecting personal information.

## How I reproduce the local checks

The site has no package manifest, framework or test runner. These are the commands I use from the repository root in PowerShell:

```powershell
# Build the same allow-listed static folder that Netlify publishes.
python scripts/build_netlify_release.py

# Check that the browser script parses.
node --check assets/js/compatibility-comparison.js

# Serve the built release locally.
python -m http.server 8000 --directory build/netlify
```

I then open `http://localhost:8000/` and test the site in the browser. I stop the local server with `Ctrl+C`. To preview source files without first building the release, I can instead run `python -m http.server 8000` from the repository root. I do not record a check as passed just because a command started; I inspect the served pages and run the relevant scenarios.

For HTML, I submitted all nine current page files to the [W3C Nu checker](https://validator.w3.org/nu/). For CSS, I tried the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/), but its HTTP 500 response is a failed attempt, not a passing result. I also visually inspected the stylesheet in the browser at the recorded widths and checked the interactive and keyboard behavior. Browser inspection does not replace CSS validation.

## Checks

| What I want to check | What I will do | Current status |
|---|---|---|
| Page layout | Open the eight information pages and `404.html` at narrow, tablet and desktop widths. Check headings, navigation, content, form, result cards, footer and not-found links for clipping or horizontal scrolling. | Pass on the local release at five widths (45 checks) and on the published release at 320px. The live comparison remained visible without horizontal overflow. |
| Comparison outcomes | Use the fictional preset, matching values, missing values, an OS-independent requirement and a mismatch. Check each label and its explanation. | Pass in the local browser release — the preset returned Blocker for OS and memory, Pass for storage; matching values returned three Pass labels; blank values returned three Warnings; the no-OS-specific-requirement option did not require a target OS value. |
| Invalid values and current-result state | Enter a negative value and a value above the 1024 GB limit. Edit values after producing a result, then clear the form. | Pass in the local browser release — native number validation rejected an out-of-range value, changes hid the old result until the visitor compares again, and Clear values emptied the controls and result. Minimum, maximum and decimal boundaries were checked in the browser. |
| Example and no-JavaScript fallback | Load and run the fictional preset. Then block the comparison script and reload Features. | Pass in the local browser release — the preset populated the fields and required an explicit compare action. With the script blocked, the form stayed hidden, an explanatory message appeared, and the fixed example remained available. |
| Data handling | Review the comparison script and browser resource requests; reload after using the form. | Pass for implementation review — the script has no network or storage calls, and the browser check recorded no external resource requests from the local page. The comparison is not saved by the site. |
| Keyboard-only interaction | On each route, Tab to the skip link and press Enter. On Features, traverse the form in both directions and operate the preset, compare and reset controls with the keyboard. Test the FAQ disclosure. | Pass for the focused browser checks — the skip link moved focus to main content on all nine routes at a 640 CSS-pixel viewport; the form controls were reachable in order and in reverse, with visible focus, and buttons worked from the keyboard. The FAQ disclosure closed and reopened with Enter. A full audit of every page control still remains. |
| Browser zoom at 200% | Set the browser to 200% on a 1280px-wide display. Open every route and check heading, navigation, content and form for clipping, overlapping controls or horizontal scrolling. | Pass on the published site on 28 October 2026 in the shared Windows browser (Code 1.143.1 / Chrome 150.0.7871.250 / Electron 43.7.7). Browser zoom reported a 640 CSS-pixel viewport and DPR 2. All nine routes had a main heading, navigation stayed within the viewport with no link overlap, and none had horizontal overflow. The Features form remained visible. A screenshot is in [the evidence folder](evidence/README.md). |
| Physical mobile device | Open the Features page on a phone in portrait and landscape. Operate the comparison and record device/browser versions and any layout or control problems. | User-reported test on 28 October 2026: the live Features comparison was opened on an iPhone 16 with Chrome and VoiceOver in both portrait and landscape; the user reported success. Exact iOS/Chrome versions, detailed actions and supporting evidence were not recorded. This documents the Features task only, not a full test of every page on the phone. |
| Screen-reader review | Use a screen reader and browser to review the comparison labels, descriptions, validation feedback, result announcement, landmarks, headings, navigation and FAQ state. Record exact versions and routes. | User reported a successful VoiceOver session on the Features comparison on 28 October 2026. Exact iOS/Chrome versions and announcements for labels, validation, results and state changes were not recorded. In a separate browser review, all six controls had associated labels and descriptions; native number validation rejected an out-of-range value; result and edit messages appeared in a `role="status"` live region. Those checks do not independently verify what VoiceOver announced. |
| Published Netlify version | Check every route, the form script, results, errors and responsive behavior against the source commit. | Pass on 28 October 2026 — all nine page routes, CSS and JavaScript returned HTTP 200; an unknown route returned HTTP 404; the live fictional comparison returned two Blockers and one Pass; at 320px and actual 200% browser zoom there was no horizontal overflow. The deployed HTML structure and content matched GitHub commit `f381702` after accounting for Netlify's injected badge comment and clean-URL rewrites; the CSS and JavaScript matched exactly. The Netlify dashboard itself was not accessible for independent confirmation. |
| First-time visitor task | Ask a first-time visitor to explain the site's purpose, try the comparison, and describe what its results do and do not mean. | Completed on 28 October 2026 with one first-time visitor. They understood that the result compares only entered values and does not prove safety, compatibility or device inspection. See [testing.md](../testing.md) for their reported feedback. This is formative feedback, not a broad user study. |

## Validation and release checks

- W3C Nu: all nine HTML files returned zero messages and zero errors on 28 October 2026.
- JavaScript syntax: `node --check assets/js/compatibility-comparison.js` passed.
- Netlify release build: `python scripts/build_netlify_release.py` succeeded and copied the nine HTML pages, stylesheet and comparison script (11 files).
- W3C Jigsaw: the updated CSS submission returned HTTP 500 on 28 October and again on 29 October (`Reader used`). I do not have a fresh external CSS validation result.
- Current local screenshots and earlier Features captures are identified by version in [the evidence folder](evidence/README.md).

## Earlier test notes

Older planner screenshots and previous-domain test results are listed in [the evidence folder](evidence/README.md). They describe earlier versions and are not results for this release.

## Publishing procedure

The repository is connected to Netlify through `netlify.toml`. When I push a commit to `main`, Netlify runs `python scripts/build_netlify_release.py` and publishes `build/netlify/`. I use these commands to check and push a change:

```powershell
git status
git diff --check
git diff
git add README.md docs testing.md
git commit -m "Describe the change"
git push origin main
```

The `git add` line is an example for documentation changes only. For a code change, I stage the exact source files I reviewed as well. After pushing, I check the GitHub commit and open the live Netlify site to verify the result. A dashboard deployment record is a separate check; I did not have dashboard access when I recorded the current deployment test. I never commit credentials, `.env` files or access tokens. The full project and file map are in the [README](../README.md).
