# Manual test sheet

This sheet tracks checks for the current static release. Do not mark a check complete based only on an expected result or a test of an earlier version.

## Record for each manual run

- Tester / initials:
- Date and local time:
- Device, operating system, and browser/version:
- Viewport (CSS px), zoom, orientation, and text-size settings:
- Site revision or commit:
- Routes and actions checked:
- Actual result and evidence:
- Defects and retest result:

Use **Pass**, **Fail**, **Blocked**, or **Pending**. Ask permission before recording visitors or capturing identifiable information.

## Checks

| Check | Procedure and expected result | Current status |
|---|---|---|
| Static route and layout review | Open all eight content pages and `404.html` from the generated Netlify release at narrow, tablet, and desktop widths. Confirm headings, navigation, fixed example content, footer, and 404 links are visible and usable without horizontal overflow. | Pass — browser review of the local release at 320px, 768px, and 1440px found no horizontal overflow on the nine HTML pages. |
| No interactive planner | Inspect the release HTML for forms and scripts. Confirm the Features example is fixed HTML data and does not request, store, or generate visitor-specific results. | Pass — release inventory check found no forms, script tags, planner references, or JavaScript files. |
| Keyboard-only navigation | Use Tab and Shift+Tab on every page. Confirm the skip link and focus indicators are visible, navigation links have a sensible order, links activate with Enter, and native FAQ disclosures can be opened and closed. | Pending — do not rely on historical keyboard checks of the former planner revision. |
| Browser zoom and reflow | Set browser zoom to 200% and review all content pages and the 404 page. Confirm ordinary text reflows without clipping or two-dimensional scrolling. Record the effective CSS viewport and any exceptions. | Pending for the current revision. Earlier zoom evidence is historical. |
| Physical mobile device | Review all pages on a phone in portrait and landscape. Check text, navigation wrapping, diagram, fixed Features example, footer, and touch targets. Record device and browser versions. | Pending for the current revision. Earlier user-reported phone results are not a detailed test record. |
| Screen-reader review | With a screen reader and browser, review landmarks, heading order, navigation names, skip link, diagram description, link purpose, and FAQ disclosure state. Record exact versions and routes. | Pending for the current revision. Earlier partial Narrator results are historical. |
| Published Netlify version | Open all routes on the public URL. Check navigation, stylesheet, fixed example, custom 404 status/links, and responsive layouts. | Partial — the owner provided [the live site](https://zesty-croissant-e95ed9.netlify.app/); the Home and Features pages were checked and show the current static version. Other routes, the custom 404 response, responsive behavior, and accessibility remain to be checked live. |
| Independent visitor task | Ask a first-time visitor, without coaching, to explain the UAR idea, what this site does, and whether the example is an actual assessment. Record their response with permission. | Pending for the current revision. Earlier visitor feedback relates to previous content. |

## Historical test evidence

Prior planner, zoom, device, visitor, and Netlify results are indexed in [the evidence folder](evidence/README.md). Those records describe earlier revisions, not the current static release.
