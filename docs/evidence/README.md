# Project evidence and how to read it

## Evidence status

This folder contains evidence from several stages of the project, so I label each item as current or historical. An older screenshot or validation record does not show the current interactive comparison and should not be used to claim it passed a current test. The browser-only comparison was added later; the site remains an information-led static website with a small client-side interaction.

The main test log is [testing.md](../../testing.md), and the detailed case-by-case record is the [manual test sheet](../manual-test-sheet.md). My written account of the research and design is in [the project research notes](../research.md) and [design decisions](../design-decisions.md).

## Current interactive comparison screenshots

I captured the Features page after loading and running the fictional example. The local screenshots show the interactive release; the 200% capture is from the published site in the shared Windows browser. The example contains fictional data and is not an assessment of an actual application or device.

| Capture | Screenshot |
|---|---|
| Local browser at 320 CSS px | [features-interactive-320.png](features-interactive-320.png) |
| Local browser at 1440 CSS px | [features-interactive-1440.png](features-interactive-1440.png) |
| Published Features page at 200% browser zoom; 640 CSS px on a 1280px-wide display | [features-interactive-live-zoom-200.png](features-interactive-live-zoom-200.png) |

## Historical layout screenshots

These captures show earlier iterations. `features-current-*` is the Features page with the fixed example before the interactive form; `features-planner-*` and `zoom400-features-planner.png` show a planner that I later removed. Neither set is evidence of the current comparison:

| Viewport | Screenshot |
|---|---|
| 320px | [features-current-320.png](features-current-320.png) |
| 390px | [features-current-390.png](features-current-390.png) |
| 768px | [features-current-768.png](features-current-768.png) |
| 1024px | [features-current-1024.png](features-current-1024.png) |
| 1440px | [features-current-1440.png](features-current-1440.png) |

I used local previews for those images so the floating Netlify badge would not cover page content. The badge is injected by Netlify rather than included in my HTML or CSS; I have not changed the Netlify setting.

The older [Features at 200% zoom](features-zoom-200.png) screenshot shows a previous static page, not the current interactive release. Older screenshots and text records predate the final form unless explicitly listed under current evidence above.

## Historical home-page starting-point screenshots

I captured the home page after adding question-led starting points. These images predate the current comparison link:

| Viewport | Screenshot |
|---|---|
| 320px | [home-starting-points-320.png](home-starting-points-320.png) |
| 768px | [home-starting-points-768.png](home-starting-points-768.png) |
| 1440px | [home-starting-points-1440.png](home-starting-points-1440.png) |

## Other historical page screenshots

These sets show earlier page versions at CSS viewport widths of 320px, 390px, 768px, 1024px and 1440px:

| Page | Capture set |
|---|---|
| Home | [320](home-320.png) · [390](home-390.png) · [768](home-768.png) · [1024](home-1024.png) · [1440](home-1440.png) |
| Features | [320](features-planner-320.png) · [390](features-planner-390.png) · [768](features-planner-768.png) · [1024](features-planner-1024.png) · [1440](features-planner-1440.png) |
| How It Works | [320](workflow-320.png) · [390](workflow-390.png) · [768](workflow-768.png) · [1024](workflow-1024.png) · [1440](workflow-1440.png) |
| Compatibility | [320](compatibility-320.png) · [390](compatibility-390.png) · [768](compatibility-768.png) · [1024](compatibility-1024.png) · [1440](compatibility-1440.png) |
| Security | [320](security-320.png) · [390](security-390.png) · [768](security-768.png) · [1024](security-1024.png) · [1440](security-1440.png) |
| Use Cases | [320](use-cases-320.png) · [390](use-cases-390.png) · [768](use-cases-768.png) · [1024](use-cases-1024.png) · [1440](use-cases-1440.png) |
| About | [320](about-320.png) · [390](about-390.png) · [768](about-768.png) · [1024](about-1024.png) · [1440](about-1440.png) |
| FAQ | [320](faq-320.png) · [390](faq-390.png) · [768](faq-768.png) · [1024](faq-1024.png) · [1440](faq-1440.png) |

The Features images in this table show an old planner, not the current comparison. I also kept earlier 400%-zoom captures for [Home](zoom400-home.png), [Features](zoom400-features.png), [How It Works](zoom400-workflow.png), [Compatibility](zoom400-compatibility.png), [Security](zoom400-security.png), [Use Cases](zoom400-use-cases.png), [About](zoom400-about.png) and [FAQ](zoom400-faq.png). The old planner zoom capture is [here](zoom400-features-planner.png). Those captures are historical visual records, not a current accessibility pass.

## Validation and hosting records

- HTML validation records from earlier versions: [Features](features-w3c-validation.txt), [later former Features](features-current-w3c-validation.txt) and [404](404-w3c-validation.txt). The current release's nine-page result is summarized in [testing.md](../../testing.md).
- CSS validation attempt records: [Jigsaw attempt](jigsaw-attempt.txt), [validation text](jigsaw-validation.txt) and [validation JSON](jigsaw-validation.json). The current CSS attempt returned HTTP 500; it is not a pass.
- Historical zoom test summary: [400%-zoom notes](zoom400-results.txt), [local Netlify test](netlify-local-test.txt) and [404 test](404-test.txt).
- Earlier published-site review: [live review notes](netlify-live-review.txt), [Features screenshot](netlify-live-features-pass.png) and [404 screenshot](netlify-live-404.png).
- Contrast tool record: [contrast results](contrast-results.txt). It is from an earlier check; re-run it if the palette changes.
- I kept the local record from a brief, discontinued Heroku exploration: [Heroku local test](heroku-local-test.txt). Netlify is the actual host.

## Wireframes

The SVGs in [my wireframe folder](../wireframes/README.md) are retrospective layout references. I made them after starting the implementation; they are not original pre-coding evidence.
