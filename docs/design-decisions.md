# Design decisions

## Project goal

The supplied milestone purpose is static presentation of information. The website explains the Universal Application Runtime (UAR) concept to people who may be unfamiliar with it and makes the site's limits explicit. It does not implement a runtime or assess visitors' applications or devices.

## Five UX planes

1. **Strategy:** Help a first-time visitor understand the proposed UAR idea and its boundaries; help the site owner communicate the concept without implying an operational product.
2. **Scope:** Cover the concept, proposed workflow, compatibility terminology, security and policy questions, hypothetical use cases, project scope, and FAQ. Do not collect user input, generate a result, scan a device, accept an upload, or claim to make a real assessment.
3. **Structure:** Use eight content pages with distinct purposes, a shared six-link main navigation, contextual links, and a consistent footer. Use Cases and FAQ are available from the footer and relevant page links.
4. **Skeleton:** Use semantic landmarks, clear heading order, an ordered workflow, native FAQ disclosures, and responsive layouts that stack at narrower widths.
5. **Surface:** Use system fonts, a light background, dark text, blue accents, consistent spacing, and a CSS-built homepage illustration. The Features page uses static cards and a fictional example.

## Static example and content boundaries

The Features page presents stated fictional requirements next to a hypothetical environment. Fixed Pass and Blocker labels illustrate how a proposed review might communicate a mismatch or match. The content is authored in HTML; visitors cannot edit it. It is not a compatibility result, security verdict, or safety guarantee.

Other product statements use proposed, illustrative, or hypothetical language. The separate UAR runtime was not inspected. See the [content register](content-register.md) for the claim boundaries.

## Responsive layout and accessibility

Grid and Flexbox create the main layouts and allow content to stack or wrap. At 840px and below, multi-column page sections stack and the header navigation can wrap; at 520px and below, page gutters narrow. The homepage flow illustration stacks below 1180px to keep its labels readable.

Pages use a skip link, semantic page landmarks, visible keyboard focus, descriptive link text, and native `details`/`summary` disclosures for FAQ content. Wireframes are retrospective reconstructions, not proof of pre-implementation planning. See [the wireframe index](wireframes/README.md).

## Hosting and release

GitHub is the source repository and Netlify is the intended static host. [netlify.toml](../netlify.toml) runs [the release script](../scripts/build_netlify_release.py), which copies the nine HTML pages and stylesheet into `build/netlify/`. Documentation, evidence, and local development files are not part of the published package. No runtime server or package installation is required.

## Historical note

An earlier revision contained a visitor-input planner and an optional Python/Heroku server. Those features were removed to align with the static-information project purpose. Old planner screenshots and interaction test records are retained only as historical evidence and do not describe the current project.
