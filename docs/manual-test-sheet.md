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
| Page layout | Open the eight content pages and `404.html` from my generated Netlify folder at phone, tablet, and desktop widths. Check that the headings, navigation, Features example, footer, and error-page links fit without horizontal scrolling. | Pass — I checked the local release at 320px, 768px, and 1440px. I found no horizontal overflow on the nine pages. |
| Static Features example | Check the release HTML to make sure the example is fixed page content, with no form, script, or visitor-generated result. | Pass — I checked the release inventory; it contains no forms, scripts, planner references, or JavaScript files. |
| Keyboard-only navigation | Use Tab and Shift+Tab on every page. Confirm the skip link and focus indicators are visible, navigation links have a sensible order, links activate with Enter, and native FAQ disclosures can be opened and closed. | Pending — do not rely on historical keyboard checks of the former planner revision. |
| Browser zoom and reflow | Set browser zoom to 200% and review all content pages and the 404 page. Confirm ordinary text reflows without clipping or two-dimensional scrolling. Record the effective CSS viewport and any exceptions. | Pending for the current revision. Earlier zoom evidence is historical. |
| Physical mobile device | Review all pages on a phone in portrait and landscape. Check text, navigation wrapping, diagram, fixed Features example, footer, and touch targets. Record device and browser versions. | Pending for the current revision. Earlier user-reported phone results are not a detailed test record. |
| Screen-reader review | With a screen reader and browser, review landmarks, heading order, navigation names, skip link, diagram description, link purpose, and FAQ disclosure state. Record exact versions and routes. | Pending for the current revision. Earlier partial Narrator results are historical. |
| Published Netlify version | Open every route on the public URL. Check navigation, stylesheet, fixed example, custom 404 status and links, and responsive layouts. | Partial — I checked the Home and Features pages on [the live site](https://zesty-croissant-e95ed9.netlify.app/) and saw the current static version. I still need to check the other routes, 404 response, responsive behavior, and accessibility on the live site. |
| Independent visitor task | Ask a first-time visitor, without coaching, to explain the UAR idea, what this site does, and whether the example is an actual assessment. Record their response with permission. | Pending for the current revision. Earlier visitor feedback relates to previous content. |

## Earlier test notes

I kept some earlier planner, zoom, device, visitor, and Netlify results in [the evidence folder](evidence/README.md). They describe old versions, not the current static release.
