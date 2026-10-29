# UAR — Universal Application Runtime

**By Dikenna Okose**

## Project overview

For this milestone, I built an information-led website to explain the idea behind Universal Application Runtime (UAR). I wanted someone who had never heard of UAR to understand the proposal, follow the suggested review process, and try a small comparison using their own example values.

The site presents the UAR concept; it is not the UAR product. Its Features page includes an interactive, browser-only comparison of application requirements and environment values entered by the visitor. It does not run applications, inspect devices, analyse files, or make real compatibility, security or safety decisions. The result only reflects the information entered and is not saved or sent to a server.

The informational pages keep the project grounded in the brief's goal of presenting useful static information. The comparison adds a practical way to explore that information while keeping the product's real-world limits clear.

## Target audience and user goals

I designed the site for people who need to understand an application's stated requirements before considering an environment, including learners, application users and support staff. I want a first-time visitor to be able to:

- understand what the UAR proposal is and what this website cannot do;
- compare a few known application requirements with values for a hypothetical environment;
- see which details are missing or conflict, and know that a human review is still needed.

The comparison is a small educational tool for those goals, not a recommendation to install or run an application.

## UX and design

I started by considering what a first-time visitor would need to understand and what they should be able to do. I drafted a simple information structure before writing the page content: explain the UAR idea, show a proposed review process, explain the labels and boundaries, and provide examples and answers. I wanted the layout to feel straightforward rather than like a software dashboard, because this website explains a proposal and is not the UAR runtime.

I wrote the page wording myself from the project brief and my own explanation of the idea. I used “proposed”, “example” and “hypothetical” where the wording could otherwise imply that a real UAR product or compatibility service exists. I track important claims and their sources in the [content register](docs/content-register.md).

I organised the pages around questions I thought a first-time visitor might ask, including:

- What is UAR, and does this website actually run it?
- What might a UAR review involve?
- What do Pass, Warning, and Blocker mean?
- What are the security and policy boundaries?
- Where can I find an example or a quick answer?

I kept the same navigation and footer across the site so visitors can move between topics without having to find their way again on every page. On the home page, I added three question-led routes to the workflow, compatibility labels, and security and privacy information so visitors can start with the topic they need. The layout uses responsive CSS Grid and Flexbox, a simple colour palette, and a diagram made with HTML and CSS. The diagram and comparison are labelled as examples, not screenshots or results from a working product.

I included skip links, semantic page landmarks, visible keyboard focus, clear headings, and native FAQ disclosures. The navigation remains visible and wraps on smaller screens.

For the visual direction, I drafted a simple page structure and aimed for readable text, calm spacing, familiar links and buttons, and consistent navigation. The SVG wireframes in [docs/wireframes/](docs/wireframes/README.md) were reconstructed after I had implemented the original pages, so I use them to explain layout rather than claiming they are dated pre-code mockups.

I researched font options using Google search, then kept the design on a system font stack instead of adding a downloaded font. I did not keep the exact search queries or results, so I cannot provide a reliable source-by-source list of the fonts I considered. The final choice is visible in `--font-sans` in [the stylesheet](assets/css/style.css); the page does not load a Google Font or make a font request. I describe that choice in [the design notes](docs/design-decisions.md).

## Pages and content

| Page | What I included |
|---|---|
| [Home](index.html) | The UAR idea, the limits of this website, and links to the main topics |
| [Features](features.html) | Four proposed review areas, a browser-only comparison tool, and a fixed fictional example |
| [How It Works](how-it-works.html) | Five ordered stages in the proposed process |
| [Compatibility](compatibility.html) | Explanations of the illustrative Pass, Warning, and Blocker labels |
| [Security](security.html) | Security, privacy, and policy questions, kept separate from technical compatibility |
| [Use Cases](use-cases.html) | Hypothetical situations to help explain the idea |
| [About](about.html) | Why I made the site and what it does not claim |
| [FAQ](faq.html) | Answers to common questions and a glossary |
| [404](404.html) | A branded page for visitors who follow a missing link |

The project also includes 24 SVG wireframes. I reconstructed them after the initial pages were implemented, so they are useful layout references, but they are not original pre-coding plans. They predate the current comparison form and should be treated as earlier layout evidence, not a match for the current Features page.

## Technologies

1. **HTML5** — page content, navigation, headings, and page structure.
2. **CSS3** — responsive layouts, typography, colours, and the homepage illustration.
3. **JavaScript** — validates the entered resource values and renders the comparison in the browser; it has no server or network dependency.
4. **Python 3 standard library** — builds the Netlify publish folder; it does not run the published website.
5. **Git and GitHub** — version history and source repository.
6. **Netlify** — static hosting.

The pages are served as static files. The Features comparison is the only project JavaScript; there is no framework, backend, third-party UI library, or externally hosted font.

## What I wrote and where it lives

| File or folder | What I wrote or maintain there |
|---|---|
| [index.html](index.html) | Home-page wording, question-led starting points, navigation, page structure and the illustrative UAR workflow diagram markup. |
| [features.html](features.html) | Proposed feature descriptions, the comparison form and labels, scope/privacy explanations, static example and the script reference. |
| [how-it-works.html](how-it-works.html) | The five-step explanation of the proposed review process. |
| [compatibility.html](compatibility.html) | Explanations of the illustrative Pass, Warning and Blocker labels and their limits. |
| [security.html](security.html) | Security, privacy and policy considerations, separate from a simple technical comparison. |
| [use-cases.html](use-cases.html) | Hypothetical examples written to explain possible audiences and situations, not tested UAR outcomes. |
| [about.html](about.html) | Project purpose, learning context and the limits of what this website implements. |
| [faq.html](faq.html) | Plain-language answers and terminology, including the native HTML disclosure controls. |
| [404.html](404.html) | Branded missing-page content and links back to useful pages. |
| [assets/css/style.css](assets/css/style.css) | The shared colour, spacing and font tokens; page layouts; mobile and tablet reflow; comparison form and result cards; keyboard focus; and reduced-motion behavior. |
| [assets/js/compatibility-comparison.js](assets/js/compatibility-comparison.js) | The comparison rules, input validation, fictional preset, result rendering, reset/edit handling and live announcements. |
| [scripts/build_netlify_release.py](scripts/build_netlify_release.py) | A small Python standard-library build script that copies only the nine pages and two public assets into `build/netlify/`. |
| [netlify.toml](netlify.toml) | Netlify's build command, Python version and publish directory. |
| [docs/](docs/) and [testing.md](testing.md) | My design rationale, research notes, content claims, assessment mapping, manual test record and evidence index. |

The shared navigation and footer are repeated in the individual HTML pages; I kept the site framework-free rather than introducing a templating dependency. The CSS uses breakpoints at 1180px, 840px and 520px, chosen to let the diagram, columns, navigation and form reflow as space becomes limited.

### How the comparison works

The visitor enters or selects an application's stated operating-system, memory and storage requirements and values for a hypothetical environment. The JavaScript compares only those values:

- A matching known operating-system value or sufficient entered memory/storage is shown as **Pass**.
- A known operating-system mismatch or insufficient entered memory/storage is shown as **Blocker**.
- Missing information is shown as **Warning** so it is not silently treated as a match.
- “No OS-specific requirement” is an explicit option and does not require an environment operating system.

The native form limits numeric entries to 0–1024 GB and accepts decimal amounts. The form checks browser validity before comparing. Result text is inserted with DOM text nodes, and the script neither sends values over the network nor stores them. The result is a simple demonstration of the entered information, not a real compatibility decision.

## Running it on my computer

I can preview the source pages with Python's built-in web server. From the project folder, I run:

```powershell
python -m http.server 8000
```

Then I open [http://localhost:8000/](http://localhost:8000/) in a browser. I press `Ctrl+C` in that terminal to stop the server. This serves the source files; it does not create a Netlify release. No packages need to be installed.

To build the same allow-listed static folder that Netlify publishes, I run:

```powershell
python scripts/build_netlify_release.py
```

The output is `build/netlify/`. I can serve that folder separately from the project root with:

```powershell
python -m http.server 8000 --directory build/netlify
```

I check the files in the release before deploying; the release should have nine HTML files, `assets/css/style.css` and `assets/js/compatibility-comparison.js`.

## Testing

I built the Netlify release and checked that it contains the nine HTML pages, stylesheet and comparison script, with no project documentation. On 28 October 2026, the W3C Nu checker returned zero messages for all nine HTML pages, and `node --check assets/js/compatibility-comparison.js` passed. The updated CSS loaded in the browser, but the Jigsaw service returned HTTP 500 when I tried to validate it, so I cannot claim a fresh CSS validator result.

I tested the local release build of the interactive version on 28 October 2026. All nine routes were checked at 320px, 390px, 768px, 1024px and 1440px (45 checks), with no horizontal overflow. At 640 CSS pixels, every route reflowed without overflow or overlapping navigation. I tested the comparison's example, matching, missing-value, no-OS-specific-requirement, invalid-value and reset behavior. I also checked keyboard access, the no-JavaScript fallback, and that editing values clears an old result. Full details and checks still open are in [testing.md](testing.md) and the [manual test sheet](docs/manual-test-sheet.md).

I checked HTML by submitting all nine pages to Nu; the recorded run returned zero messages and zero errors. I checked the JavaScript syntax with `node --check`, and ran the Python release builder successfully. I also manually checked the CSS in the browser by viewing the page layout, navigation, form controls, status cards, focus styling and reflow at the recorded widths and at 200% zoom. This visual inspection is separate from the CSS validator: Jigsaw returned HTTP 500 on two attempts (28 and 29 October), so I do not describe the stylesheet as validator-passed.

After pushing the changes, I checked the published site on 28 October 2026. All nine page routes and the CSS and JavaScript files returned HTTP 200; an unknown route returned HTTP 404 and showed the branded not-found page. I ran the fictional comparison on the live Features page and confirmed its three results, then checked that the form fitted a 320px CSS viewport without horizontal overflow. Netlify's dashboard was not available to me, so I could not confirm the deployment commit shown there.

I also checked the published site in the shared Windows browser at actual 200% page zoom. All nine routes were usable at the resulting 640 CSS-pixel viewport, with no horizontal scrolling or overlapping navigation. I compared the published pages with the website-code revision in GitHub (`f381702`): their structure and content matched after accounting for Netlify's badge comment and clean-URL link rewrites, and the CSS and JavaScript matched exactly. Later commits updated documentation, not the published site files. I could not access the Netlify dashboard, so this is a source-to-deployment comparison rather than a dashboard check.

I captured the live Features comparison at [200% browser zoom](docs/evidence/features-interactive-live-zoom-200.png), as well as local screenshots at [320px](docs/evidence/features-interactive-320.png) and [1440px](docs/evidence/features-interactive-1440.png). Earlier local captures at [320px](docs/evidence/features-current-320.png), [390px](docs/evidence/features-current-390.png), [768px](docs/evidence/features-current-768.png), [1024px](docs/evidence/features-current-1024.png), and [1440px](docs/evidence/features-current-1440.png) show the former fixed example before I added the comparison. The floating Netlify badge appears on the published site; it is not part of my HTML or CSS, and I have not changed Netlify settings.

I asked a first-time visitor to try the current comparison and explain what its results meant. They understood that a Pass only reflects the entered values and does not guarantee safety or real-world compatibility. This is useful formative feedback, not a broad user study. I also received a report that the live Features comparison was tested with VoiceOver on a physical iPhone 16 in portrait and landscape and that it succeeded. The iOS and Chrome versions and the exact announcements and actions were not recorded, so this is user-reported evidence rather than a fully reproducible screen-reader test. More detail is in [testing.md](testing.md) and the [manual test sheet](docs/manual-test-sheet.md).

## Publishing

The source is in the public GitHub repository [dikenna-dotcom/Front-end-project-1](https://github.com/dikenna-dotcom/Front-end-project-1), and the site is published at [uar-project.netlify.app](https://uar-project.netlify.app/). The earlier [zesty-croissant-e95ed9.netlify.app](https://zesty-croissant-e95ed9.netlify.app/) address is no longer the current published link.

Netlify reads [netlify.toml](netlify.toml), runs the release script, and publishes `build/netlify/`. To rebuild that folder locally, I run:

```powershell
python scripts/build_netlify_release.py
```

The release script copies only the site pages, stylesheet and comparison script. It leaves out the project notes and evidence.

The source is maintained on the `main` branch in the [GitHub repository](https://github.com/dikenna-dotcom/Front-end-project-1). The published website code was compared with commit `f381702`; subsequent commits added documentation and test evidence rather than changing the page files, stylesheet or comparison script. I could not check the Netlify dashboard's deployment record. I never put passwords or access tokens in the project.

### Development stages in Git

These are a few key points in the version history; they are not a replacement for the full [commit history](https://github.com/dikenna-dotcom/Front-end-project-1/commits/main/):

| Commit | What changed |
|---|---|
| [`5c80a2d`](https://github.com/dikenna-dotcom/Front-end-project-1/commit/5c80a2d) | Re-aligned the project with its information-led static-site brief. |
| [`22b5c4a`](https://github.com/dikenna-dotcom/Front-end-project-1/commit/22b5c4a) | Improved the homepage's question-led starting points. |
| [`062dc10`](https://github.com/dikenna-dotcom/Front-end-project-1/commit/062dc10) | Added the scoped, browser-only comparison. |
| [`2961772`](https://github.com/dikenna-dotcom/Front-end-project-1/commit/2961772) | Documented the interaction and its initial local testing evidence. |
| [`f381702`](https://github.com/dikenna-dotcom/Front-end-project-1/commit/f381702) | Recorded the published-site and interactive checks. |
| [`e9ec337`](https://github.com/dikenna-dotcom/Front-end-project-1/commit/e9ec337) | Added the actual 200% browser-zoom evidence and test notes. |
| [`2d8e752`](https://github.com/dikenna-dotcom/Front-end-project-1/commit/2d8e752) | Recorded the reported phone/VoiceOver test and first-time visitor feedback. |

The [development notes](testing.md#development-and-evidence-trail) describe the stages and the limitations of their supporting evidence.

### How I save and publish later changes

The repository is connected to Netlify. Pushing a commit to `main` makes the configured Netlify build run; I do not need to upload `build/netlify/` manually. Before committing, I review what changed:

```powershell
git status
git diff --check
git diff
```

After checking the changes and running the relevant tests, I stage the files I intend to include, commit with a useful description, and push:

```powershell
git add README.md docs testing.md
git commit -m "Describe the documentation update"
git push origin main
```

I replace the example `git add` paths and commit message with the actual files and change. For HTML, CSS, JavaScript or build-script changes, I stage those files as well. After pushing, I check the GitHub commit and open the live Netlify site to confirm the published result. Netlify's dashboard can confirm the deploy record; I did not have dashboard access for the last check. Never add `.env` files, passwords, access tokens or other secrets to Git.

## Research and websites I used

| Website or source | How I used it | Boundary |
|---|---|---|
| [The project brief and assessment guidance supplied with the project](docs/content-register.md) | Set the educational purpose, UAR concept and assessment goals for the site's wording and structure. | Supplied course material, not proof that a separate UAR runtime exists. |
| [Google Search](https://www.google.com/) | I searched for font options while considering the visual design. | I did not keep exact search queries or result URLs. I chose the system-font stack in the final CSS; no external font is loaded. |
| [Public Code Institute milestone examples](docs/research.md) | Looked at five public projects for README organization, audience descriptions and CSS organization. | I did not reuse their code, text or images. Specific repositories and files are in the research notes. |
| [W3C Nu HTML Checker](https://validator.w3.org/nu/) | Checked all nine current HTML pages. | It reported zero messages for the recorded check on 28 October 2026. |
| [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) | Attempted to validate the current stylesheet. | The recorded attempt returned HTTP 500, so I do not claim a passing CSS-validator result. |
| [GitHub repository](https://github.com/dikenna-dotcom/Front-end-project-1) | Stored the source and version history. | The current branch is `main`. |
| [Netlify site](https://uar-project.netlify.app/) | Publishes and serves the static site through the repository-connected build. | I verified the live pages against source content, but did not have access to the Netlify dashboard's deploy record. |

I did not add stock photos, downloaded fonts, third-party UI libraries, or external JavaScript. My research links and limits are recorded in [docs/research.md](docs/research.md).

## Project boundaries

The comparison only checks three values supplied by the visitor: operating system, memory and free storage. Missing information is shown as a warning; an entered mismatch is shown as a blocker. It does not discover a device's specifications, validate application requirements, run the application, or review security and policy. A real decision needs trustworthy evidence and human review.

## Credits

- I based the UAR concept and its scope on the project brief supplied to me. I did not inspect a separate UAR runtime repository, so I have not claimed that the runtime exists or works.
- I looked at public Code Institute milestone examples for general ideas about README structure, user stories, and organising CSS. I did not reuse their code, wording, or assets. I recorded the sources and limits in [docs/research.md](docs/research.md).
- I wrote the page wording, HTML, CSS and comparison JavaScript, and made the workflow diagram from HTML and CSS. I considered type choices after searching Google but chose a system font stack. I have not included downloaded media, third-party UI libraries, or external fonts.
- I used AI assistance while developing the project and writing some of the documentation.
