# UAR — Universal Application Runtime

**By Dikenna Okose**

## Project overview

For this milestone, I built a static website to explain the idea behind Universal Application Runtime (UAR). I wanted someone who had never heard of UAR to be able to understand the proposal, follow the suggested review process, and see what this website can and cannot tell them.

The site presents information; it is not the UAR product. It does not run applications, inspect devices, accept user input, or make real compatibility or safety decisions. The example on the Features page uses fictional information and is there to show how a comparison might be explained.

This fits the milestone purpose of presenting static data in a useful way: visitors can learn about the concept, while the site gives a clear and honest introduction to the idea.

## UX and design

I organised the pages around the questions I thought a first-time visitor might ask:

- What is UAR, and does this website actually run it?
- What might a UAR review involve?
- What do Pass, Warning, and Blocker mean?
- What are the security and policy boundaries?
- Where can I find an example or a quick answer?

I kept the same navigation and footer across the site so visitors can move between topics without having to find their way again on every page. The layout uses responsive CSS Grid and Flexbox, a simple colour palette, and a diagram made with HTML and CSS. The diagram and comparison are labelled as examples, not screenshots or results from a working product.

I included skip links, semantic page landmarks, visible keyboard focus, clear headings, and native FAQ disclosures. The navigation remains visible and wraps on smaller screens.

## Pages and content

| Page | What I included |
|---|---|
| [Home](index.html) | The UAR idea, the limits of this website, and links to the main topics |
| [Features](features.html) | Four proposed review areas and a fixed comparison using fictional data |
| [How It Works](how-it-works.html) | Five ordered stages in the proposed process |
| [Compatibility](compatibility.html) | Explanations of the illustrative Pass, Warning, and Blocker labels |
| [Security](security.html) | Security, privacy, and policy questions, kept separate from technical compatibility |
| [Use Cases](use-cases.html) | Hypothetical situations to help explain the idea |
| [About](about.html) | Why I made the site and what it does not claim |
| [FAQ](faq.html) | Answers to common questions and a glossary |
| [404](404.html) | A branded page for visitors who follow a missing link |

The project also includes 24 SVG wireframes. I reconstructed them after the initial pages were implemented, so they are useful layout references, but they are not original pre-coding plans. I updated the three Features wireframes to show the current static example.

## Technologies

1. **HTML5** — page content, navigation, headings, and page structure.
2. **CSS3** — responsive layouts, typography, colours, and the homepage illustration.
3. **Python 3 standard library** — builds the small Netlify publish folder; it does not run the published website.
4. **Git and GitHub** — version history and source repository.
5. **Netlify** — static hosting.

The published pages use HTML and CSS only. There is no JavaScript, framework, backend, third-party UI library, or externally hosted font.

## Running it on my computer

I can preview the pages with Python's built-in web server. From the project folder, I run:

```powershell
python -m http.server 8000
```

Then I open [http://localhost:8000/](http://localhost:8000/). I press `Ctrl+C` in the terminal when I am finished. There are no packages to install.

## Testing

I built the Netlify release and checked that it contains the nine HTML pages and the stylesheet, without forms, scripts, or project documentation. I opened the release in a browser and checked all nine routes at 320px, 768px, and 1440px. Those checks found no horizontal overflow.

I also checked the published [Netlify site](https://zesty-croissant-e95ed9.netlify.app/). I confirmed that its Home and Features pages show the current static version. I have not yet completed a full live review of every route, the custom 404 response, keyboard navigation, screen-reader use, or a physical phone.

Earlier screenshots, visitor feedback, and validation notes refer to previous versions. I have kept them for reference, but they are not evidence that the current version passed those same checks. More detail is in [testing.md](testing.md), the [manual test sheet](docs/manual-test-sheet.md), and the [evidence index](docs/evidence/README.md).

## Publishing

The source is in the public GitHub repository [dikenna-dotcom/Front-end-project-1](https://github.com/dikenna-dotcom/Front-end-project-1), and the site is published at [zesty-croissant-e95ed9.netlify.app](https://zesty-croissant-e95ed9.netlify.app/).

Netlify reads [netlify.toml](netlify.toml), runs the release script, and publishes `build/netlify/`. To rebuild that folder locally, I run:

```powershell
python scripts/build_netlify_release.py
```

The release script copies only the site pages and stylesheet. It leaves out the project notes and evidence.

Netlify is connected to the GitHub repository, so a push to `main` should trigger a new deploy. After a change, I check that the deploy succeeds and look at the live pages. I never put passwords or access tokens in the project.

## A note about the assessment brief

I have followed the static-information purpose for this project. An earlier brief in the workspace describes a different, interaction-based assessment that requires JavaScript. This version does not meet those interaction-specific requirements. If that is the brief being assessed, I need to check with my course provider which requirement takes priority before submitting.

## Credits

- I based the UAR concept and its scope on the project brief supplied to me. I did not inspect a separate UAR runtime repository, so I have not claimed that the runtime exists or works.
- I looked at public Code Institute milestone examples for general ideas about README structure, user stories, and organising CSS. I did not reuse their code, wording, or assets. I recorded the sources and limits in [docs/research.md](docs/research.md).
- I wrote the HTML and CSS for this site and made the diagram for it. I have not included downloaded media, third-party UI libraries, or external fonts.
- I used AI assistance while developing the project and writing some of the documentation.
