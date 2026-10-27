# UAR — Universal Application Runtime

By Dikenna Okose

## Project purpose

This is a static front-end milestone project for presenting useful information. It introduces the Universal Application Runtime (UAR) concept and explains a proposed way to think about application requirements, compatibility, security, policy, and execution decisions.

The site is for people who are new to UAR or want a clear explanation of the idea. It helps visitors understand the proposed process and the limits of the information presented. It also supports the site owner's goal of explaining the concept accurately without suggesting that a UAR product or assessment service is available here.

The project is static HTML and CSS. It does not collect input, run a backend, inspect a visitor's device or application, or produce a real compatibility or safety assessment. The Features page contains only a fixed example using fictional data.

## User needs

1. Understand what UAR proposes to do and what this website does not do.
2. Follow the proposed review process.
3. Understand Pass, Warning, and Blocker as illustrative labels rather than verified outcomes.
4. Find hypothetical use cases and answers to common questions.
5. Read and navigate the site on a small screen and with a keyboard.

## Pages

| Page | Information presented |
|---|---|
| [Home](index.html) | UAR concept, project scope, and routes into the site |
| [Features](features.html) | Proposed review areas and a fixed fictional comparison |
| [How It Works](how-it-works.html) | The proposed process in five ordered stages |
| [Compatibility](compatibility.html) | Illustrative Pass, Warning, and Blocker labels |
| [Security](security.html) | Security, privacy, and policy considerations |
| [Use Cases](use-cases.html) | Hypothetical examples |
| [About](about.html) | Project purpose and limits |
| [FAQ](faq.html) | Answers to common questions and a glossary |
| [404](404.html) | Branded not-found page for supported hosts |

## Design and accessibility

The pages use semantic HTML, consistent navigation, skip links, clear headings, visible focus, native FAQ disclosures, and responsive CSS Grid and Flexbox layouts. The homepage process diagram is built with HTML and CSS and is identified as an illustration. The Features example is fixed HTML content, not an interactive tool.

Twenty-four SVG wireframes are included as retrospective layout references. They were created after the initial site implementation and are not represented as original pre-coding plans. The three Features wireframes were updated to show the current static example.

## Technologies

- HTML5 for content and page structure.
- CSS3 for responsive layouts, typography, and presentation.
- Python 3 standard library for assembling the Netlify publish folder only; Python is not used to serve the deployed site.
- Git and GitHub for source history and repository hosting.
- Netlify for static-site publishing.

The published site has no JavaScript, framework, backend, third-party library, or external font dependency.

## Run locally

From the project root, start Python's built-in static file server:

```powershell
python -m http.server 8000
```

Open [http://localhost:8000/](http://localhost:8000/) and press `Ctrl+C` in the terminal to stop the server. No dependency installation is required.

## Build and deploy with GitHub and Netlify

The repository is `https://github.com/dikenna-dotcom/Front-end-project-1`. The Netlify configuration in [netlify.toml](netlify.toml) runs the release script and publishes `build/netlify/`. The release contains only the nine HTML pages and stylesheet; project documentation and local evidence are not deployed.

The site is published at [https://zesty-croissant-e95ed9.netlify.app/](https://zesty-croissant-e95ed9.netlify.app/). The live Home and Features pages were checked and show the current static version, including the fixed fictional comparison. Complete a full route, responsive, 404, and accessibility review before treating the deployment as fully tested.

To rebuild the publish folder locally:

```powershell
python scripts/build_netlify_release.py
```

To connect a fresh local copy to the repository, run these commands from the project root:

```powershell
git init -b main
git add .
git commit -m "Create static UAR front end"
git remote add origin https://github.com/dikenna-dotcom/Front-end-project-1.git
git push -u origin main
```

If Git asks for an author name or email, configure them for this repository. A public repository may expose commit author emails; GitHub also provides a private noreply address in **Settings → Emails**. This is separate from the email used to sign in.

Netlify is connected to the GitHub repository. Keep the build settings from `netlify.toml`; pushes to `main` should trigger a deployment. Confirm each deploy succeeds and inspect the published pages before sharing changes. Do not put account passwords, access tokens, or other credentials in this project.

## Testing status

The current release build was checked for the expected file inventory and the absence of forms, scripts, and planner references. The local build was opened in a browser and all nine HTML pages were checked at 320px, 768px, and 1440px; no horizontal overflow was found. The live Home and Features pages were also checked at [the Netlify URL](https://zesty-croissant-e95ed9.netlify.app/). These checks do not replace a full live-route review or manual keyboard, assistive-technology, and device checks.

Earlier browser, validation, and published-site records concern earlier revisions. See [testing.md](testing.md), the [manual test sheet](docs/manual-test-sheet.md), and the [evidence index](docs/evidence/README.md) for current and historical status.

## Assessment scope note

The project purpose supplied for this milestone is static presentation of information. An earlier project brief in the workspace described separate JavaScript interaction requirements. This version follows the static-site direction and does not meet those interaction-specific requirements. Confirm the applicable assessment brief with the course provider before submission.

## Credits

- The project concept and factual scope are based on the UAR master brief supplied for this project. A separate UAR runtime repository was not inspected.
- Public Code Institute milestone examples informed general research into README structure, user stories, and CSS organisation. No code, distinctive wording, or assets were reused; sources and limits are listed in [docs/research.md](docs/research.md).
- The HTML, CSS, and diagram were developed for this website. No downloaded media, external fonts, or third-party UI libraries are included.
- AI assistance was used while developing the project and its documentation.
