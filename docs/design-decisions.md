# Why I made these design choices

## Project goal

I made this site to explain the Universal Application Runtime (UAR) idea to people who may be hearing about it for the first time. The milestone asks for static information that is useful to visitors, so the site explains the proposal and makes its own limits clear. It does not run applications or assess a visitor's device.

## Five UX planes

1. **Strategy:** I want a first-time visitor to understand both the UAR proposal and what this website does not do.
2. **Scope:** I cover the idea, suggested workflow, compatibility terms, security and policy questions, hypothetical examples, and common questions. I left out forms, uploads, device scans, and real assessment results so the site does not promise something it cannot do.
3. **Structure:** I split the information across eight pages. The main navigation has six links; Use Cases and FAQ are still easy to find in the footer and from related pages.
4. **Skeleton:** I used semantic page areas, a clear heading order, a numbered workflow, native FAQ disclosures, and layouts that stack on narrower screens.
5. **Surface:** I chose a light background, dark text, blue accents, system fonts, and consistent spacing. The homepage diagram and the Features example are both clearly labelled as illustrations.

## Static example and content boundaries

On the Features page, I placed fictional application requirements next to a made-up environment. The fixed Pass and Blocker labels show how a proposed review might describe a match or a mismatch. Visitors cannot edit the example, and it is not a real compatibility result, security verdict, or safety guarantee.

I use words such as “proposed”, “illustrative”, and “hypothetical” when describing the idea. I have not inspected a separate UAR runtime. I keep track of these boundaries in the [content register](content-register.md).

## Responsive layout and accessibility

I used Grid and Flexbox so page sections can stack and the navigation can wrap. At 840px and below, the multi-column sections stack; at 520px and below, the page gutters get smaller. The homepage diagram changes to a vertical layout below 1180px so its labels have room.

I included a skip link, semantic page landmarks, visible keyboard focus, descriptive link text, and native `details`/`summary` controls for the FAQ. The wireframes were made after the first implementation, so I treat them as layout references, not original planning evidence. They are listed in [the wireframe index](wireframes/README.md).

## Hosting and release

I keep the source in GitHub and publish the static site through Netlify. [netlify.toml](../netlify.toml) runs [the release script](../scripts/build_netlify_release.py), which copies the nine HTML pages and stylesheet into `build/netlify/`. My notes, evidence, and local development files stay out of the published folder. The site does not need a runtime server or package installation.

## Historical note

I originally had a planner that accepted visitor input and an optional Python/Heroku server. I removed both when I brought the project back in line with its static-information purpose. I have kept some screenshots and test notes from that version, but they describe the earlier site, not this one.
