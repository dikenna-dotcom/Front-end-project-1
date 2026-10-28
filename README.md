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

I organised the pages around the questions I thought a first-time visitor might ask. The home page also has three question-led starting points to help visitors choose where to go next:

- What is UAR, and does this website actually run it?
- What might a UAR review involve?
- What do Pass, Warning, and Blocker mean?
- What are the security and policy boundaries?
- Where can I find an example or a quick answer?

I kept the same navigation and footer across the site so visitors can move between topics without having to find their way again on every page. On the home page, I added three question-led routes to the workflow, compatibility labels, and security and privacy information so visitors can start with the topic they need. The layout uses responsive CSS Grid and Flexbox, a simple colour palette, and a diagram made with HTML and CSS. The diagram and comparison are labelled as examples, not screenshots or results from a working product.

I included skip links, semantic page landmarks, visible keyboard focus, clear headings, and native FAQ disclosures. The navigation remains visible and wraps on smaller screens.

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

## Running it on my computer

I can preview the pages with Python's built-in web server. From the project folder, I run:

```powershell
python -m http.server 8000
```

Then I open [http://localhost:8000/](http://localhost:8000/). I press `Ctrl+C` in the terminal when I am finished. There are no packages to install.

## Testing

I built the Netlify release and checked that it contains the nine HTML pages, stylesheet and comparison script, with no project documentation. On 28 October 2026, the W3C Nu checker returned zero messages for all nine HTML pages, and `node --check assets/js/compatibility-comparison.js` passed. The updated CSS loaded in the browser, but the Jigsaw service returned HTTP 500 when I tried to validate it, so I cannot claim a fresh CSS validator result.

I tested the local release build of the interactive version on 28 October 2026. All nine routes were checked at 320px, 390px, 768px, 1024px and 1440px (45 checks), with no horizontal overflow. At 640 CSS pixels, every route reflowed without overflow or overlapping navigation. I tested the comparison's example, matching, missing-value, no-OS-specific-requirement, invalid-value and reset behavior. I also checked keyboard access, the no-JavaScript fallback, and that editing values clears an old result. Full details and checks still open are in [testing.md](testing.md) and the [manual test sheet](docs/manual-test-sheet.md).

After pushing the changes, I checked the published site on 28 October 2026. All nine page routes and the CSS and JavaScript files returned HTTP 200; an unknown route returned HTTP 404 and showed the branded not-found page. I ran the fictional comparison on the live Features page and confirmed its three results, then checked that the form fitted a 320px CSS viewport without horizontal overflow. Netlify's dashboard was not available to me, so I could not confirm the deployment commit shown there.

I also checked the published site in the shared Windows browser at actual 200% page zoom. All nine routes were usable at the resulting 640 CSS-pixel viewport, with no horizontal scrolling or overlapping navigation. I compared the published pages with the latest GitHub source (`f381702`): their structure and content matched after accounting for Netlify's badge comment and clean-URL link rewrites, and the CSS and JavaScript matched exactly. I could not access the Netlify dashboard, so this is a source-to-deployment comparison rather than a dashboard check.

I captured the live Features comparison at [200% browser zoom](docs/evidence/features-interactive-live-zoom-200.png), as well as local screenshots at [320px](docs/evidence/features-interactive-320.png) and [1440px](docs/evidence/features-interactive-1440.png). Earlier local captures at [320px](docs/evidence/features-current-320.png), [390px](docs/evidence/features-current-390.png), [768px](docs/evidence/features-current-768.png), [1024px](docs/evidence/features-current-1024.png), and [1440px](docs/evidence/features-current-1440.png) show the former fixed example before I added the comparison. The floating Netlify badge appears on the published site; it is not part of my HTML or CSS, and I have not changed Netlify settings.

I asked one first-time visitor to explain the site and its Features example. They understood UAR as a concept for considering whether an application might suit an environment, and understood that the example was not a real assessment. They also found the site straightforward to navigate. This is useful formative feedback, not a broad user study. I received user-reported results for an iPhone 16/Chrome check and an iOS VoiceOver check with no concerns, but the exact versions, routes, orientation, and actions were not recorded. Earlier screenshots and notes refer to previous versions and are kept only as historical records. More detail is in [testing.md](testing.md), the [manual test sheet](docs/manual-test-sheet.md), and the [evidence index](docs/evidence/README.md).

## Publishing

The source is in the public GitHub repository [dikenna-dotcom/Front-end-project-1](https://github.com/dikenna-dotcom/Front-end-project-1), and the site is published at [uar-project.netlify.app](https://uar-project.netlify.app/). The earlier [zesty-croissant-e95ed9.netlify.app](https://zesty-croissant-e95ed9.netlify.app/) address is no longer the current published link.

Netlify reads [netlify.toml](netlify.toml), runs the release script, and publishes `build/netlify/`. To rebuild that folder locally, I run:

```powershell
python scripts/build_netlify_release.py
```

The release script copies only the site pages, stylesheet and comparison script. It leaves out the project notes and evidence.

The source changes are on `main` at commit `f381702`. I confirmed that the published site content and assets match that GitHub revision, though I could not check the Netlify dashboard's deployment record. I never put passwords or access tokens in the project.

## Project boundaries

The comparison only checks three values supplied by the visitor: operating system, memory and free storage. Missing information is shown as a warning; an entered mismatch is shown as a blocker. It does not discover a device's specifications, validate application requirements, run the application, or review security and policy. A real decision needs trustworthy evidence and human review.

## Credits

- I based the UAR concept and its scope on the project brief supplied to me. I did not inspect a separate UAR runtime repository, so I have not claimed that the runtime exists or works.
- I looked at public Code Institute milestone examples for general ideas about README structure, user stories, and organising CSS. I did not reuse their code, wording, or assets. I recorded the sources and limits in [docs/research.md](docs/research.md).
- I wrote the HTML, CSS and JavaScript for this site and made the diagram for it. I have not included downloaded media, third-party UI libraries, or external fonts.
- I used AI assistance while developing the project and writing some of the documentation.
