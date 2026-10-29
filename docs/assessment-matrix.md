# How this project fits the assessment guidance

I use this matrix to connect the supplied pass, merit and distinction characteristics to the project and its evidence. It is an evidence map, not an assessor's grade or a promise of a particular result.

## Purpose and audience

The site introduces the Universal Application Runtime (UAR) as a proposal to people learning about application requirements and environment compatibility. Its likely visitors include application users, learners and support staff who want to understand which requirements are known, which are missing, and which questions need human review.

The informational pages explain the idea and its limitations. The Features page lets visitors compare manually entered operating-system, memory and storage values. The interaction demonstrates a limited, understandable comparison; it is not the UAR product and does not verify a real application or device.

## Evidence against the supplied characteristics

| Characteristic | Project evidence | Status and remaining evidence |
|---|---|---|
| Clear purpose and justified audience | The [home page](../index.html) explains the proposal and links to the workflow, use cases, compatibility guidance and comparison. The [design notes](design-decisions.md) describe learners, application users and support staff as likely audiences. One first-time visitor tried the current live comparison and understood that Pass does not guarantee a safe or functioning application. | Evidence recorded on 28 October 2026. This is one formative visitor test, not a representative user study. |
| Real, bounded interaction | The [Features page](../features.html) compares entered operating-system, memory and storage values, includes a fictional preset, supports reset and produces result labels with explanations. | Implemented and exercised locally and on the live site. The tool demonstrates a limited comparison; it is not the UAR product, and does not run or inspect applications or devices. |
| Defensive behavior and clear boundaries | The form uses native 0–1024 GB numeric constraints, warns on missing values, blocks known mismatches, clears stale results after edits and renders user-derived text with DOM nodes. The no-JavaScript page retains an explanation and fixed example. | Example, matching, missing-value, no-OS-specific-requirement, range, decimal, edit, reset and blocked-script cases were checked locally. No network or browser-storage calls are used for comparison values. |
| Usability and accessibility features | Shared navigation and landmarks, skip link, visible keyboard focus, responsive layouts, labelled inputs, native form validity, live result status, native FAQ disclosures and reduced-motion CSS are implemented. | Keyboard interaction and actual 200% browser zoom were checked. A user reported successful iPhone 16 / VoiceOver testing in portrait and landscape, but exact iOS/browser versions and spoken announcements were not recorded. This remains incomplete, non-reproducible screen-reader evidence. |
| Responsive design | The stylesheet uses Grid, Flexbox and breakpoints at 1180px, 840px and 520px; the form and page layouts reflow rather than requiring a separate mobile application. | All nine routes were checked locally at 320px, 390px, 768px, 1024px and 1440px (45 route/width checks). On the live site, all nine routes were checked at actual 200% zoom (640 CSS px on a 1280px display); there was no horizontal overflow or overlapping navigation. |
| Compliant and readable code | Nine HTML pages, one shared stylesheet, one browser script and one Python release script are separated by responsibility. The release builder uses an explicit allow-list. | W3C Nu reported zero messages and zero errors for the nine HTML files on both 28 and 29 October 2026; `node --check` and the release build passed. Jigsaw returned HTTP 500 twice for the current stylesheet; no external CSS-validator result is available, so I make no claim that CSS validation passed. |
| Authorship, research and documentation | The [README](../README.md) maps the HTML, CSS, JavaScript and deployment files to the work I wrote. [Research notes](research.md), [design decisions](design-decisions.md), [content register](content-register.md), [testing record](../testing.md) and [evidence index](evidence/README.md) describe sources, decisions, checks and limitations. | The page wording and site code are identified as my work. I used Google search for font ideas but did not retain the exact queries/results. The SVG wireframes were reconstructed after initial implementation and are labelled retrospective rather than original pre-coding evidence. |
| Version control and development process | Git commits have separate descriptive changes for the static-site work, homepage navigation improvements, comparison feature, tests and documentation. The repository history is public. | Feature code, test evidence and follow-up documentation were pushed in separate commits. Review [the commit history](https://github.com/dikenna-dotcom/Front-end-project-1/commits/main/). |
| Deployment and end-to-end testing | Netlify builds the allow-listed `build/netlify/` output from the GitHub-connected repository; the live pages, CSS and JavaScript were checked. | Live page structure and content matched GitHub source commit `f381702` after accounting for Netlify's injected badge comment and clean-URL rewrite; CSS and JS matched exactly. The live form worked. Netlify's dashboard deploy record was not accessible for independent confirmation. |

## What this interaction does and does not prove

- The comparison checks user-entered values only; it does not inspect a computer or verify the source or accuracy of those values.
- A Pass means the entered values meet the simple comparison rule. It is not a promise that software will install, run, perform correctly or be safe.
- Security, privacy, policy and execution decisions remain outside the comparison and require appropriate evidence and human review.
- The project demonstrates a browser interaction, not a fully implemented or verified UAR runtime.
- Historical visitor feedback, screenshots, validation records and deployment checks are identified by date and version in the documentation; I do not treat them as current evidence unless I explicitly retested them.

## Design and process evidence

The [design decisions](design-decisions.md) explain the intended audience, information structure, interaction scope, privacy boundary, type and colour decisions, and responsive/accessibility choices. The [research notes](research.md) identify websites consulted and what was not retained. The [content register](content-register.md) tracks claims and their sources. The [manual test sheet](manual-test-sheet.md) records test scenarios, outcomes and evidence limits. The [evidence index](evidence/README.md) distinguishes current evidence from earlier screenshots and notes.

## Final evidence status

The implementation and deployment checks recorded for this project are complete for their stated scope. No known functional defect is recorded. The evidence has limits that I report transparently:

- The CSS validator returned HTTP 500 twice; those completed attempts did not produce a CSS validation result.
- The iPhone/VoiceOver result was reported as successful, but exact software versions and spoken announcements were not recorded. It is not a reproducible screen-reader audit.
- One first-time visitor completed the comparison task and understood the result boundaries. This is formative feedback, not a representative user study.
- The live site code was checked against the GitHub revision. I could not access the Netlify dashboard's deployment record; the live-source comparison is recorded instead.

These are limitations of the available evidence, not identified implementation defects or work left unbuilt. This matrix maps evidence to the supplied characteristics; only the assessor can decide the grade, and no document can guarantee a distinction.
