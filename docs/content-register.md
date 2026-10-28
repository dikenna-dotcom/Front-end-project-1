UAR content and claim register

I use this register to keep the wording on the site accurate. The site combines static information with a small illustrative browser interaction. I based the UAR descriptions on the supplied brief; I did not inspect a separate runtime repository. For that reason, I describe UAR capabilities as proposals or examples rather than claiming that a working product has them.

| Claim or topic | Source supplied by owner | Evidence status | Wording used | Page |
| --- | --- | --- | --- | --- |
| UAR means Universal Application Runtime | Master brief title and section 2 | Supplied project identity; not independently verified | “UAR - Universal Application Runtime” | All pages |
| UAR's intended idea includes understanding requirements, reviewing compatibility and policy, choosing a strategy and recording outcomes | Master brief section 2 | Conceptual intent supplied; no operational implementation evidence | “Proposed model” / “proposed workflow” and explanatory stage descriptions | Home, Features, How It Works |
| Compatibility outcomes may be described as pass, warning and blocker | Master brief sections 7 and 18 | Illustrative terminology supplied; no real application outcomes supplied | These labels are explanatory examples, not live checks | Compatibility, Features, FAQ |
| Features page comparison | Project scope and distinction guidance | The browser compares values entered by the visitor; no real application or environment is inspected | Result labels describe only entered values; the tool is not a UAR capability, verified compatibility result, security verdict or safety guarantee | Features |
| Comparison data handling | Implementation in `assets/js/compatibility-comparison.js` | The JavaScript performs calculations in the browser and makes no network requests or storage calls | Values are not sent to a server or saved; the page does not inspect the visitor's device | Features, Security, FAQ |
| Comparison statuses | Authored educational rules | OS match, entered numeric thresholds, and missing values are checked by deterministic client-side logic | Pass means entered values align; Warning means a value is missing; Blocker means entered values conflict | Features, Compatibility, FAQ |
| Compatibility is not a safety guarantee | Master brief section 7 | Owner requirement and sound content boundary; no certification claim | A compatibility label does not establish safety, privacy compliance or performance | Compatibility, Security, FAQ |
| The site cannot inspect devices, analyse uploads, run applications or enforce policy | Master brief section 2 and current implementation | Verified from the page and script behavior | The comparison only reads values entered into its form; no device access, upload, execution or policy enforcement is implemented | Home, Security, About, FAQ |
| Universal support, guaranteed safety, prices, customers, partners, downloads or benchmarks | Master brief section 2 | No approved supporting facts were supplied | No positive claim is made; no installer or runtime is represented as available | Site-wide |
| Use-case examples | Master brief section 2 and 7 | Authored hypotheticals; not product outcomes | Explicitly labelled hypothetical; no scenario is stated as tested | Use Cases |
| Project status and future direction | Master brief section 2 and 7 | Runtime status and roadmap not supplied | Website scope is stated; future product status is left for owner confirmation | About, FAQ |

How I use this register

If I add a claim about a real or planned capability, I check it against an approved source and record where it appears and how certain it is. This register only covers the information supplied for this project; it does not verify claims about a separate UAR product.
