# How this project fits the assessment guidance

I use this matrix to connect the supplied pass, merit and distinction characteristics to the project and its evidence. It is an evidence map, not an assessor's grade or a promise of a particular result.

## Purpose and audience

The site introduces the Universal Application Runtime (UAR) as a proposal to people learning about application requirements and environment compatibility. Its likely visitors include application users, learners and support staff who want to understand which requirements are known, which are missing, and which questions need human review.

The informational pages explain the idea and its limitations. The Features page lets visitors compare manually entered operating-system, memory and storage values. The interaction demonstrates a limited, understandable comparison; it is not the UAR product and does not verify a real application or device.

## Evidence against the supplied characteristics

| Characteristic | Project evidence | Status and remaining evidence |
|---|---|---|
| Clear purpose for a real audience | The home page describes the proposal and links to the workflow, use cases and interactive comparison. The first-time visitor feedback records that one visitor understood the site's purpose and that the earlier fixed example was illustrative. | The purpose and audience are stated. The interactive version needs a fresh first-time visitor task to test whether its comparison and limits are understood without coaching. |
| Working interaction | The Features form compares operating system, minimum memory and free storage. It includes a fictional preset, a clear action, reset behavior, result labels and warnings for unknown values. | Implemented in browser JavaScript. Re-run the functional cases in the current browser and record results before treating the test record as complete. |
| Honest, defensive behavior | The comparison only reads values entered into labelled fields. Numeric controls restrict values to 0–1024 GB; missing values produce warnings; entered mismatches produce blockers. Results are built as text nodes, not interpreted as HTML. | The interface states that it does not inspect devices, run apps, assess security or save/send entries. Boundary and malformed-input cases need retesting. |
| UX and accessibility | Shared navigation, semantic page sections, responsive CSS, keyboard focus, a skip link, labelled controls, native validation, live result announcement, and FAQ disclosures support use. | Earlier responsive and focused keyboard checks passed before this interaction was added. Recheck all routes and the form at narrow widths, 200% zoom, keyboard-only use and with assistive technology. |
| Responsive implementation | CSS Grid, Flexbox and media queries adapt the shared layouts and comparison form. | The previous release was checked at 320px, 390px, 768px, 1024px, 1440px and at 200% zoom. Capture fresh evidence for the interactive release. |
| Readable, organised code | HTML, CSS, browser JavaScript and the Python release script are separated by purpose. No framework, external library, backend or package install is required. | Inspect the changed files, validate HTML/CSS, run JavaScript syntax checks, and confirm the release includes the form script. |
| Development lifecycle and version control | Git history separates the static-site change, later UX refinements and the current interaction. Project notes explain the design boundaries and release process. | Keep this feature in its own descriptive commit and record tests, defects and retests. The wireframes were reconstructed after implementation and are not original design-stage evidence. |
| Publishing and end testing | Netlify publishes the generated static-file folder from GitHub. | Rebuild and inspect the release locally, then confirm the live site contains the same script and rerun the comparison after deployment. The Netlify dashboard's deployed commit has not been independently confirmed. |

## What this interaction does and does not prove

- The comparison checks user-entered values only; it does not inspect a computer or verify the source or accuracy of those values.
- A Pass means the entered values meet the simple comparison rule. It is not a promise that software will install, run, perform correctly or be safe.
- Security, privacy, policy and execution decisions remain outside the comparison and require appropriate evidence and human review.
- The project demonstrates a browser interaction, not a fully implemented or verified UAR runtime.
- The previous visitor feedback, screenshots, validation records and deployment checks predate this change unless they are explicitly recorded as current retests.

## Design and process evidence

The [design decisions](design-decisions.md) explain the intended audience, information structure, interaction scope, privacy boundary and responsive/accessibility choices. The [content register](content-register.md) tracks claims and the evidence behind them. The [manual test sheet](manual-test-sheet.md) records planned and completed checks. The [evidence index](evidence/README.md) distinguishes current evidence from earlier screenshots and notes.
