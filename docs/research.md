# Research notes and sources

## Public project examples

On 24 October 2026, I looked at five public Code Institute milestone repositories. I read the visible README files and checked selected home-page HTML and stylesheets through GitHub. I did not review their live websites in a browser. These are older student projects, so I have not treated them as evidence of the current rubric, grades, or accessibility standards.

I did not see a licence in the root listings I checked. That does not tell me whether a licence exists elsewhere in those repositories, and I have not reused their code, text, or images. I used the examples only to think about how I could organise and explain my own project.

| Project I looked at | Pages or files I checked | What I noticed | What I took from it | What did not suit my project | What I applied in my project |
| --- | --- | --- | --- | --- | --- |
| [damien-meere/frontend-milestone](https://github.com/damien-meere/frontend-milestone) | [README](https://github.com/damien-meere/frontend-milestone/blob/e8f27591be65602c6ed9ab026be65409fe296327/README.md), [index.html](https://github.com/damien-meere/frontend-milestone/blob/e8f27591be65602c6ed9ab026be65409fe296327/index.html), [style.css](https://github.com/damien-meere/frontend-milestone/blob/e8f27591be65602c6ed9ab026be65409fe296327/assets/css/style.css) | The README explains a training-company idea, and the stylesheet has clear sections for typography and navigation. | I liked that the README gave the project context and that the CSS was easy to scan. | I did not need Bootstrap or Font Awesome for my site. I also wanted the navigation to stay in normal layout flow and wrap on small screens. | I wrote a project overview and kept the navigation in a flexible layout. |
| [nealbrophy/GetHubby](https://github.com/nealbrophy/GetHubby) | [README](https://github.com/nealbrophy/GetHubby/blob/e10152d34fb88311baa912b3087052993b71e386/README.md), [index.html](https://github.com/nealbrophy/GetHubby/blob/e10152d34fb88311baa912b3087052993b71e386/index.html), [style.css](https://github.com/nealbrophy/GetHubby/blob/e10152d34fb88311baa912b3087052993b71e386/css/style.css) | The README describes an imagined service, and the CSS separates general styles from navigation and layout. | It reminded me that clear sections make a stylesheet easier to maintain. | Bootstrap and the project's more involved styling were unnecessary for my smaller static site. | I kept one shared stylesheet and used straightforward Grid and Flexbox rules. |
| [cynthiapinedoh79/Potato-P1-](https://github.com/cynthiapinedoh79/Potato-P1-/blob/5540881a647978376c3a70d367f2f2d22ac1d5c2) | [README](https://github.com/cynthiapinedoh79/Potato-P1-/blob/5540881a647978376c3a70d367f2f2d22ac1d5c2/README.md), [index.html](https://github.com/cynthiapinedoh79/Potato-P1-/blob/5540881a647978376c3a70d367f2f2d22ac1d5c2/index.html), [style.css](https://github.com/cynthiapinedoh79/Potato-P1-/blob/5540881a647978376c3a70d367f2f2d22ac1d5c2/assets/css/style.css) | The stylesheet uses custom properties for fonts and colours and imports web fonts. | I found the idea of keeping shared colours in variables useful. | I did not want extra font downloads or image assets for the UAR site. | I used a small set of CSS variables and system fonts; my homepage diagram is made with HTML and CSS. |
| [daisybutler/Fizzo-Bar-and-Lounge-project01](https://github.com/daisybutler/Fizzo-Bar-and-Lounge-project01) | [README](https://github.com/daisybutler/Fizzo-Bar-and-Lounge-project01/blob/63ea1f2f36ce64abd132fe043c48dd6a49de8f83/README.md), [index.html](https://github.com/daisybutler/Fizzo-Bar-and-Lounge-project01/blob/63ea1f2f36ce64abd132fe043c48dd6a49de8f83/index.html), [style.css](https://github.com/daisybutler/Fizzo-Bar-and-Lounge-project01/blob/63ea1f2f36ce64abd132fe043c48dd6a49de8f83/assets/css/style.css) | The README explains who the site is for, and the site separates its main topics into pages. | It showed me why the audience and purpose should guide the page structure. | Its booking goal and external libraries do not fit my informational project. | I gave the UAR pages distinct purposes and linked related information without adding booking or submission forms. |
| [S-Lowes/Code-Institute-MS1](https://github.com/S-Lowes/Code-Institute-MS1) | [README](https://github.com/S-Lowes/Code-Institute-MS1/blob/61d09f60aeb443a4ec56c7827d391fa6e8dfd1ca/README.md), [index.html](https://github.com/S-Lowes/Code-Institute-MS1/blob/61d09f60aeb443a4ec56c7827d391fa6e8dfd1ca/index.html), [style.css](https://github.com/S-Lowes/Code-Institute-MS1/blob/61d09f60aeb443a4ec56c7827d391fa6e8dfd1ca/assets/css/style.css) | The README includes user stories and a device image, and the stylesheet has responsive rules. | I took the idea of connecting visitor needs to the project explanation. | One composite image does not show how every page looks at different widths, and external dependencies add setup. | I wrote user needs for specific UAR pages and kept separate responsive screenshots in the earlier evidence folder. |

## Things I applied

1. I split the CSS into named sections so I can find shared styles and responsive rules more easily.
2. I use a few CSS custom properties for colours and spacing so I can keep the design consistent.
3. I wrote user needs around the questions people might have about UAR, then used those needs to organise the pages.

## Attribution

These projects helped me think about documentation, page purpose, and responsive CSS. I did not include their source code, wording, or assets in my site. I have not assumed that public access gives permission to reuse their work. The links above point to the files I reviewed; this is research context, not a claim that those projects meet my current course requirements.

## Typography research

I searched Google for font ideas while considering the visual style. The final project uses a local system font stack defined by `--font-sans` in `assets/css/style.css`, not a downloaded typeface or a Google Fonts embed. I did not keep the exact search queries, date-by-result notes, or URLs for individual font pages, so I cannot reliably list specific typefaces or claim that I compared formal specimens. The practical choice was to keep type readable without adding a remote font dependency.

## Project and implementation references

| Website or material | How I used it | What I can claim |
|---|---|---|
| Project brief and pass/merit/distinction guidance supplied with the project | Defined the educational topic, user-centred goals and assessment criteria. | This is owner-supplied course material. It informed my scope; it is not evidence that a separate UAR runtime has been built. |
| [Google Search](https://www.google.com/) | Looked for font ideas before choosing the final typography. | I did not retain the exact queries or result URLs. The final site uses system fonts and makes no external font request. |
| [W3C Nu HTML Checker](https://validator.w3.org/nu/) | Checked all nine current HTML pages on 28 and 29 October 2026. | Both recorded runs returned zero messages and zero errors for every page. |
| [W3C CSS Validation Service (Jigsaw)](https://jigsaw.w3.org/css-validator/) | Attempted to validate the current stylesheet and retried it. | The recorded attempts on 28 and 29 October returned HTTP 500. They are not CSS validation passes. |
| [GitHub](https://github.com/dikenna-dotcom/Front-end-project-1) | Hosted the source repository and commit history. I also used the five public examples listed above as inspiration for documentation and organization. | My project source, wording and assets are maintained separately. I did not copy code or assets from the cited examples. |
| [Netlify](https://www.netlify.com/) | Hosted the published static site from the GitHub-connected build configuration. | The public site was checked against the repository source, but I did not have dashboard access to inspect the deploy record. |
| Local Python and browser tools | Served the site, built the release folder, inspected responsive behavior and exercised the comparison. | `python -m http.server` and the standard-library build script run locally; they are not third-party site dependencies. |

## What I did not use

- I did not load a Google Font, remote stylesheet, image bank, third-party UI library or external JavaScript bundle into the site.
- I did not inspect a UAR runtime repository or claim that the proposed runtime exists.
- I did not use the example student projects as code, copy, asset or assessment evidence.

These notes distinguish what I actually viewed or tested from what I did not preserve. The exact font-search terms and result pages are unavailable, so the research record does not identify particular typefaces; it records the final system-font choice and why it suited this project.

## Research-to-design decisions

| What I considered | Decision I made | Evidence in my project |
|---|---|---|
| Examples of milestone project README files, user stories and stylesheet organization | I used those examples only to help organize my own explanation and CSS. I wrote original UAR copy and kept the project without a framework or copied assets. | My site files and the [research table above](#public-project-examples), which names the repositories and exact files I viewed. |
| Font options discovered with Google search | I selected a system font stack instead of loading a remote font. | `--font-sans` in `assets/css/style.css`; the release has no font asset or external font request. I did not retain the Google search queries or exact result pages. |
| The course brief and distinction guidance | I kept the explanatory pages and added a narrowly scoped comparison to demonstrate browser interaction, while making clear that the UAR runtime is not implemented. | `features.html`, `assets/js/compatibility-comparison.js`, the [design notes](design-decisions.md) and the [assessment matrix](assessment-matrix.md). |
| Current validation and deployment requirements | I documented which HTML checker passed, the CSS validator service failure, the local build and the live-site source comparison separately. | The [test log](../testing.md) and [manual test sheet](manual-test-sheet.md); a failed CSS-validation request is not counted as a pass. |

This table describes the decisions I can support with the files and records available. It does not claim that I ran a formal literature review, downloaded font specimens, carried out a quantitative font study, or followed a complete academic research method.
