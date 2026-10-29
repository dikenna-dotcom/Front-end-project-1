# Why I made these design choices

## Project goal

I made this site to explain the Universal Application Runtime (UAR) idea to people who may be hearing about it for the first time. The content pages present the proposal and its limits; the Features page adds a small interactive comparison so visitors can explore how stated requirements might be discussed.

I focused on learners, application users and support staff who need to understand an application's declared requirements before considering an environment. Their main tasks are to understand the proposal, compare a few known values, identify gaps or mismatches, and learn what still needs human review.

I wrote the site-specific wording myself from the supplied project brief and my own explanation of the proposal. I drafted the information structure to keep the experience simple: explain the concept first, then show a proposed workflow, clarify the labels and boundaries, and offer examples and common answers. I did not want decoration or interactions to make a visitor think the page was a real compatibility service.

The SVG wireframes are not proof that I created formal wireframes before writing the first HTML. I reconstructed them after the initial pages were implemented, so I use them to record layout thinking rather than as original design-stage artefacts. See [the wireframe notes](wireframes/README.md).

## Five UX planes

1. **Strategy:** I want a first-time visitor to understand both the UAR proposal and what this website does not do.
2. **Scope:** I cover the idea, suggested workflow, compatibility terms, security and policy questions, hypothetical examples, and common questions. The comparison accepts only manually entered operating-system, memory and storage values. It cannot inspect a device, process an upload, or produce a verified assessment.
3. **Structure:** I split the information across eight pages. The main navigation has six links; Use Cases and FAQ are still easy to find in the footer and from related pages. The home page also offers three question-led routes into the workflow, compatibility labels and security boundaries, so visitors can start with the topic they need.
4. **Skeleton:** I used semantic page areas, a clear heading order, a numbered workflow, native FAQ disclosures, and layouts that stack on narrower screens.
5. **Surface:** I chose a light background, dark text, blue accents, system fonts, and consistent spacing. The homepage diagram, fixed Features example and interactive comparison are clearly labelled as illustrations.

## What I designed and why

| Design decision | Reason | Where it appears |
|---|---|---|
| Plain-language, first-person educational copy | A first-time visitor should understand that UAR is a proposal and distinguish this site from a working runtime. | The page-specific copy in `index.html`, `about.html`, `features.html`, `how-it-works.html`, `compatibility.html`, `security.html`, `use-cases.html` and `faq.html`. |
| Consistent navigation and page landmarks | Visitors can recognize where they are and move between related topics; the skip link offers a keyboard route past repeated navigation. | Repeated header, footer, `<main>` and skip link in each HTML page. |
| Question-led routes from the home page | Visitors can begin with their question instead of having to understand the site's page names first. | `index.html` links to the workflow, compatibility labels and security information. |
| System font stack | Readable text without downloading a font, adding a network dependency or delaying first render. I searched Google for font ideas but did not retain the exact queries/results. | `--font-sans` in `assets/css/style.css`; no external font stylesheet or font file is loaded. |
| Blue as the primary action colour; distinct green, amber and red status colours | Primary navigation and actions remain recognizable, while the example statuses are visually distinct and also carry text labels. | CSS custom properties at the start of `assets/css/style.css`; textual status names in the Features comparison. |
| Responsive Grid and Flexbox, plus content-driven media queries | Columns and the workflow diagram need to collapse before content becomes cramped; mobile controls need usable width. | `assets/css/style.css` at 1180px, 840px and 520px, plus the reduced-motion preference. |
| Small browser-only comparison, not device detection | The distinction brief asks for interaction, but the project should not imply that a real UAR runtime has been implemented. | `features.html` and `assets/js/compatibility-comparison.js`. |
| No database, server endpoint, uploads or browser storage | The interaction needs only temporary values for its example and does not need to collect personal information. | The comparison script reads and renders form values in the current page; there are no network or storage calls. |

## Interactive comparison and content boundaries

The Features comparison lets a visitor enter an application's stated operating-system, memory and storage requirements and values for a hypothetical environment. JavaScript runs the comparison in the browser, flags entered mismatches as Blocker, incomplete information as Warning, and matching known values as Pass. A preset fictional example makes the result easy to try. The comparison has no server, saves no entries, and sends no values away from the page.

I limited the comparison to three simple, visible comparisons rather than suggesting it can run applications or discover device data. Its results are about the information entered, not verified compatibility, security, privacy or safety. A real decision needs reliable evidence and human review. This boundary is intentional: it demonstrates an interaction without pretending to implement or certify the proposed UAR runtime.

I use words such as “proposed”, “illustrative”, and “hypothetical” when describing the idea. I have not inspected a separate UAR runtime. I keep track of these boundaries in the [content register](content-register.md).

## Responsive layout and accessibility

I used Grid and Flexbox so page sections can stack and the navigation can wrap. At 840px and below, the multi-column sections stack; at 520px and below, the page gutters get smaller. The homepage diagram changes to a vertical layout below 1180px so its labels have room.

I included a skip link, semantic page landmarks, visible keyboard focus, descriptive link text, native `details`/`summary` controls for the FAQ, labelled form controls, visible result text and a polite status announcement. The form stacks at narrower widths, and invalid numeric entries use browser validation. The wireframes were made after the first implementation, so I treat them as layout references, not original planning evidence. They predate the current comparison form and are listed in [the wireframe index](wireframes/README.md).

I considered font options by searching Google, but my exact queries and saved search results are not available. I chose the system stack in the CSS instead of embedding or remotely loading a typeface. That decision keeps the project self-contained; it is not a claim that I ran formal font-performance or user-preference testing.

## Where I implemented the design

- Page wording and semantic structure: the nine page files at the repository root.
- Shared colours, spacing, typography, responsive breakpoints, forms and focus styles: `assets/css/style.css`.
- Input handling, the comparison rules, result cards and accessible status updates: `assets/js/compatibility-comparison.js`.
- The homepage workflow illustration: HTML structure in `index.html` and its styles in `assets/css/style.css`.
- The static release allow-list and output directory: `scripts/build_netlify_release.py` and `netlify.toml`.
- Content scope and source of claims: [the content register](content-register.md).
- Test cases, results and remaining caveats: [the manual test sheet](manual-test-sheet.md) and [testing record](../testing.md).

## Hosting and release

I keep the source in GitHub and publish the static files through Netlify. [netlify.toml](../netlify.toml) runs [the release script](../scripts/build_netlify_release.py), which copies the nine HTML pages, stylesheet and comparison script into `build/netlify/`. My notes, evidence, and local development files stay out of the published folder. The site does not need a backend or package installation.

When I push a change to the connected `main` branch, Netlify runs the configured build and publishes that folder. I can preview the source with `python -m http.server 8000` and run the release build with `python scripts/build_netlify_release.py`. The exact local workflow and Git commands are in the [README](../README.md).

## Historical note

I first removed a planner when I brought the project back in line with its information-led purpose. After I compared that direction with the supplied distinction guidance, I chose to add a narrower browser-only comparison. It preserves the educational content while providing a bounded interaction and making no claim that the UAR runtime exists or works. The feature is documented in its own implementation and documentation commits; the [GitHub history](https://github.com/dikenna-dotcom/Front-end-project-1/commits/main/) shows the sequence.
