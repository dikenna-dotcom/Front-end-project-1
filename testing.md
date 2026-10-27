# How I tested the site

I checked that the project builds as a static site, that the published pages load, and that the fixed Features example stays informational rather than interactive. I recorded the checks I could complete below and left the checks that need a physical device or assistive technology open.

## Build and validation

- I ran `python scripts/build_netlify_release.py`. The Netlify release contains nine HTML pages and `assets/css/style.css`; it excludes forms, scripts, the removed planner, and project documentation.
- I submitted all nine source HTML files to the W3C Nu checker. Each returned zero messages and zero errors.
- An earlier stylesheet passed the W3C Jigsaw CSS validator with zero errors and one informational warning: CSS custom properties are not checked statically. After I added styles for the new home-page starting points, the browser loaded the current stylesheet and parsed 117 CSS rules, including the new card styles. My attempt to re-run Jigsaw returned HTTP 500, so the current stylesheet does not yet have a fresh external CSS-validator result.

## Live-site checks

I checked the live [Netlify site](https://zesty-croissant-e95ed9.netlify.app/) on 27 October 2026.

- All nine page routes, including `/404.html`, returned HTTP 200.
- I checked those routes at browser viewport widths of 320px, 390px, 768px, 1024px, and 1440px: 45 route-and-width checks in total. The stylesheet loaded, the main content was present, and I found no horizontal overflow, forms, or project JavaScript.
- I also used Microsoft Edge at 200% browser zoom (Edge 156.0.4314.50). The resulting CSS viewport was 640px wide. On all nine routes, the stylesheet loaded, the navigation links stayed inside the viewport without overlapping, and I found no horizontal overflow. I saved a full-page Features screenshot at [200% zoom](docs/evidence/features-zoom-200.png).
- Internal links on the pages returned successfully. A deliberately nonexistent route returned HTTP 404 and showed the branded not-found page; its Home, FAQ, and How It Works links worked.
- On all nine routes, the first Tab reached the skip link, its focus was visible, and Enter moved focus to the main content. On the FAQ page, Enter closed and reopened a native disclosure.
- I captured the current Features page from a local preview at [320px](docs/evidence/features-current-320.png), [390px](docs/evidence/features-current-390.png), [768px](docs/evidence/features-current-768.png), [1024px](docs/evidence/features-current-1024.png), and [1440px](docs/evidence/features-current-1440.png). The local version uses the project files and does not include the injected Netlify badge.
- I added three question-led starting points to the home page and checked their links to the workflow, compatibility and security pages at 320px, 768px and 1440px. All three destinations loaded and the cards had no horizontal overflow. I saved local screenshots at [320px](docs/evidence/home-starting-points-320.png), [768px](docs/evidence/home-starting-points-768.png), and [1440px](docs/evidence/home-starting-points-1440.png).

## GitHub and Netlify deployment check

I checked the GitHub repository and live site after the latest push on 27 October 2026.

- GitHub repository: [dikenna-dotcom/Front-end-project-1](https://github.com/dikenna-dotcom/Front-end-project-1).
- Latest GitHub `main` commit checked: `22b5c4a` (`Improve home page guidance for static visitors`). Local and remote `main` matched.
- Published site: [zesty-croissant-e95ed9.netlify.app](https://zesty-croissant-e95ed9.netlify.app/).
- The site responds, but after the latest push the new home-page question-led links were not present in the published HTML. The live stylesheet SHA-256 also differs from the current `assets/css/style.css`.
- The source release script succeeds locally and creates the expected ten public static files. I have not confirmed the cause of the stale live deployment or seen the corresponding deployment record in the Netlify dashboard.
- The previous route, link, 404, and responsive checks describe the version Netlify was serving before this latest site-code change. They should not be treated as verification of the new homepage until its deploy completes.

The floating Netlify badge remains visible on the published site. It is injected outside my source HTML and CSS; I left it enabled and used a local preview for clean screenshots.

## First-time visitor feedback

On 27 October 2026, I received feedback from one person who had not used the site before. They understood UAR as a concept for considering whether an application might work in a particular environment and what should be considered before running it. They understood that the site explains the proposal, its features, and its suggested stages. They described the Features content as an example of questions someone might consider, not a real check of a device or application. They also found the site straightforward to navigate and said the explanations helped them understand the concept.

This feedback supports the current explanations and the clear distinction between a proposal and a working assessment. I did not make a change based on this single response. It is one formative test, not evidence from a broad user study. The visitor's description of a “review planner” refers to the illustrative Features example; the current page has no interactive planner.

These are focused checks, not a full accessibility audit or a broad user study. The keyboard checks cover the skip link and the FAQ disclosure, not every link in a full keyboard-only walkthrough.

## Checks still open

1. Check the Netlify dashboard's latest deploy for branch, commit and build result; resolve the deployment if it has failed or is not tracking `main`. Then repeat the live-page and stylesheet checks against the new release.
2. If available, add the iOS and Chrome versions, orientation, pages, and actions to the user's already reported iPhone 16 and VoiceOver results. The user reported no issues or VoiceOver concerns, but those test details were not recorded.
3. A larger or more varied set of first-time visitors could provide broader evidence than this single formative test.

The [manual test sheet](docs/manual-test-sheet.md) has the current status for each check. Screenshots and notes from before the static-site change are listed in the [evidence index](docs/evidence/README.md) as historical records, not evidence for the current release.
