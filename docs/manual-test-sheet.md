# Manual checks I still need to do

I use this sheet to keep track of the manual checks for the current static release. I only mark a check complete after I have actually done it on this version; an expected result or an old test does not count.

## Record for each manual run

- Tester / initials:
- Date and local time:
- Device, operating system, and browser/version:
- Viewport (CSS px), zoom, orientation, and text-size settings:
- Site revision or commit:
- Routes and actions checked:
- Actual result and evidence:
- Defects and retest result:

I use **Pass**, **Fail**, **Blocked**, or **Pending** for each result. If I ask someone else to try the site or take a screenshot, I ask permission first and avoid collecting personal information.

## Checks

| What I want to check | What I will do | Current status |
|---|---|---|
| Page layout | Open the eight content pages and `404.html` on the live site at narrow, tablet, and desktop widths. Check headings, navigation, the Features example, footer, and error-page links for horizontal scrolling or clipping. | Pass for browser widths — I checked all nine routes at 320px, 390px, 768px, 1024px, and 1440px (45 checks). No horizontal overflow was found. The floating Netlify badge remains enabled by choice. This does not replace a physical-phone check. |
| Static Features example | Check the release HTML to make sure the example is fixed page content, with no form, script, or visitor-generated result. | Pass — I checked the release inventory; it contains no forms, scripts, planner references, or JavaScript files. |
| Home-page starting points | Choose each question-led home-page card and confirm it leads to the relevant explanatory page; check that the cards remain readable at narrow, tablet and desktop widths. | Pass — the workflow, compatibility and security/privacy links loaded at 320px, 768px and 1440px. No horizontal overflow was found. |
| Keyboard-only navigation | Use Tab and Shift+Tab on every page. Confirm the skip link and focus indicators are visible, navigation links have a sensible order, links activate with Enter, and native FAQ disclosures can be opened and closed. | Partial — on all nine live routes, the first Tab reached the visible skip link and Enter moved focus to main content. On the FAQ page, Enter closed and reopened a native disclosure. I have not completed a full forward-and-reverse walkthrough of every link. |
| Browser zoom and reflow | Set browser zoom to 200% and review all content pages and the 404 page. Confirm ordinary text reflows without clipping or two-dimensional scrolling. Record the effective CSS viewport and any exceptions. | Pass — I set Microsoft Edge 156.0.4314.50 to 200% and checked all nine local-release routes at a 640px CSS viewport. Each stylesheet loaded; navigation links stayed in the viewport without overlap; no horizontal overflow was found. I saved the Features page capture in [the evidence folder](evidence/features-zoom-200.png). |
| Physical mobile device | Review all pages on a phone in portrait and landscape. Check text, navigation wrapping, diagram, fixed Features example, footer, and touch targets. Record device and browser versions. | User-reported partial result — iPhone 16 with Chrome; no issues were reported. iOS/Chrome versions, orientation, and routes/actions were not recorded, so this is not yet a reproducible full-device test record. |
| Screen-reader review | With a screen reader and browser, review landmarks, heading order, navigation names, skip link, diagram description, link purpose, and FAQ disclosure state. Record exact versions and routes. | User-reported partial result — the user reports that the iOS screen reader was enabled and there were no concerns. Exact screen-reader/browser versions, routes, and actions were not recorded. |
| Published Netlify version | Open every route on the public URL. Check navigation, stylesheet, fixed example, custom 404 status and links, and responsive layouts. | Pass for route, link, and browser-width checks — all nine routes returned HTTP 200, and all 45 responsive checks passed. An unknown route returned HTTP 404 with the branded page and working links. I compared the live stylesheet with the checked-in source and their SHA-256 hashes matched. The latest GitHub commit checked was `5a70234` and changed documentation only. I did not inspect the Netlify dashboard to confirm its deploy record. The badge remains enabled by choice. |
| Independent visitor task | Ask a first-time visitor, without coaching, to explain the UAR idea, what this site does, and whether the Features example is an actual assessment. Record their response with permission. | Pass — one first-time visitor understood UAR as a concept for considering application/environment fit, understood that the site presents a proposal, and correctly identified the Features example as illustrative rather than a real device or application assessment. They found the site straightforward and helpful. No change was indicated by this single response. This is limited formative feedback, not a broad user study. The visitor used the phrase “review planner”; the current page is static and has no interactive planner. |

## Current validation and screenshots

- W3C Nu: all nine source HTML files returned zero messages and zero errors.
- W3C Jigsaw: an earlier stylesheet version was valid with zero errors and one informational custom-properties warning. The current CSS loaded and parsed in the browser, but a fresh Jigsaw request returned HTTP 500; the updated stylesheet still needs a successful external validation run.
- Current local-preview Features screenshots: [320px](evidence/features-current-320.png), [390px](evidence/features-current-390.png), [768px](evidence/features-current-768.png), [1024px](evidence/features-current-1024.png), and [1440px](evidence/features-current-1440.png). The local preview avoids the floating Netlify badge that appears on the live site and is not part of the authored source.

## Earlier test notes

I kept some earlier planner, zoom, device, visitor, and Netlify results in [the evidence folder](evidence/README.md). They describe old versions, not the current static release.
