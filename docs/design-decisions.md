# Why I made these design choices

## Project goal

I made this site to explain the Universal Application Runtime (UAR) idea to people who may be hearing about it for the first time. The content pages present the proposal and its limits; the Features page adds a small interactive comparison so visitors can explore how stated requirements might be discussed.

I focused on learners, application users and support staff who need to understand an application's declared requirements before considering an environment. Their main tasks are to understand the proposal, compare a few known values, identify gaps or mismatches, and learn what still needs human review.

## Five UX planes

1. **Strategy:** I want a first-time visitor to understand both the UAR proposal and what this website does not do.
2. **Scope:** I cover the idea, suggested workflow, compatibility terms, security and policy questions, hypothetical examples, and common questions. The comparison accepts only manually entered operating-system, memory and storage values. It cannot inspect a device, process an upload, or produce a verified assessment.
3. **Structure:** I split the information across eight pages. The main navigation has six links; Use Cases and FAQ are still easy to find in the footer and from related pages. The home page also offers three question-led routes into the workflow, compatibility labels and security boundaries, so visitors can start with the topic they need.
4. **Skeleton:** I used semantic page areas, a clear heading order, a numbered workflow, native FAQ disclosures, and layouts that stack on narrower screens.
5. **Surface:** I chose a light background, dark text, blue accents, system fonts, and consistent spacing. The homepage diagram, fixed Features example and interactive comparison are clearly labelled as illustrations.

## Interactive comparison and content boundaries

The Features comparison lets a visitor enter an application's stated operating-system, memory and storage requirements and values for a hypothetical environment. JavaScript runs the comparison in the browser, flags entered mismatches as Blocker, incomplete information as Warning, and matching known values as Pass. A preset fictional example makes the result easy to try. The comparison has no server, saves no entries, and sends no values away from the page.

I limited the comparison to three simple, visible comparisons rather than suggesting it can run applications or discover device data. Its results are about the information entered, not verified compatibility, security, privacy or safety. A real decision needs reliable evidence and human review. This boundary is intentional: it demonstrates an interaction without pretending to implement or certify the proposed UAR runtime.

I use words such as “proposed”, “illustrative”, and “hypothetical” when describing the idea. I have not inspected a separate UAR runtime. I keep track of these boundaries in the [content register](content-register.md).

## Responsive layout and accessibility

I used Grid and Flexbox so page sections can stack and the navigation can wrap. At 840px and below, the multi-column sections stack; at 520px and below, the page gutters get smaller. The homepage diagram changes to a vertical layout below 1180px so its labels have room.

I included a skip link, semantic page landmarks, visible keyboard focus, descriptive link text, native `details`/`summary` controls for the FAQ, labelled form controls, visible result text and a polite status announcement. The form stacks at narrower widths, and invalid numeric entries use browser validation. The wireframes were made after the first implementation, so I treat them as layout references, not original planning evidence. They predate the current comparison form and are listed in [the wireframe index](wireframes/README.md).

## Hosting and release

I keep the source in GitHub and publish the static files through Netlify. [netlify.toml](../netlify.toml) runs [the release script](../scripts/build_netlify_release.py), which copies the nine HTML pages, stylesheet and comparison script into `build/netlify/`. My notes, evidence, and local development files stay out of the published folder. The site does not need a backend or package installation.

## Historical note

I first removed a planner when I brought the project back in line with its static-information purpose. After reviewing the distinction guidance, I added a narrower browser-only comparison. It preserves the educational scope while giving visitors a real interaction and making no claim that the UAR runtime exists or works.
