# How this project fits the milestone

## Scope

I used the project purpose supplied for this milestone to check whether the site is doing what it is meant to do: present static information that helps visitors and supports the owner's goal. This is my evidence map, not an assessor's grade or a replacement for the full course rubric.

There is a possible mismatch I need to flag. An earlier document in the workspace quoted a different assessment extract for an interactive front-end unit, including significant JavaScript interaction. My current project follows the static-site direction and intentionally has no project JavaScript. If the interactive-unit extract is the one I am being assessed against, this version does not meet those interaction requirements. I should confirm which brief applies with my course provider.

## Project-purpose mapping

| Project purpose | What I have done | Evidence / status |
|---|---|---|
| Present static data in a useful way | Eight connected informational pages explain the UAR concept, proposed review process, compatibility terminology, security boundaries, hypothetical examples, and common questions. The Features page includes one fixed comparison using explicitly fictional data. | Implemented in the HTML pages. The comparison does not accept or generate visitor input. |
| Help users achieve a goal | Visitors can learn what UAR proposes, follow its process, interpret illustrative labels, and find related examples and definitions. Shared navigation, page headings, contextual links, and a responsive layout support those tasks. | Browser checks cover five widths from 320px to 1440px and 200% zoom on all nine routes. One first-time visitor correctly described the site's purpose and understood that the Features example was not a real assessment. This is useful formative feedback, but broader independent user testing remains limited. |
| Advance the site owner's goal | The site explains the proposed idea while clearly stating that this website is not a working runtime and does not assess applications or devices. | Scope boundaries appear on the home, Features, Security, About, Compatibility, and FAQ pages. |
| Build and publish a static front end | HTML and CSS are packaged by the standard-library release script. Netlify publishes the generated folder from the GitHub repository. | The local build is verified. The updated homepage and routes are live at [uar-project.netlify.app](https://uar-project.netlify.app/). Route checks, 45 responsive layout checks, a 200% zoom check, and focused keyboard checks passed. The stylesheet text matches the local source after line-ending normalization. I have not confirmed the deployed commit in the Netlify dashboard, and this is not a full accessibility audit. |

## What this evidence does and does not show

- I describe UAR as a proposal; this website does not verify whether a separate product is operating.
- The sample requirements, environments, use cases, and outcomes are fictional.
- Some screenshots, test notes, validator responses, and the first Netlify review come from earlier versions. I do not treat them as proof that the current pages passed those checks.
- I made the wireframes after implementation. They show layout ideas, not a pre-coding design process.
- The [GitHub repository](https://github.com/dikenna-dotcom/Front-end-project-1) and [current Netlify site](https://uar-project.netlify.app/) are available. The deployment was checked across routes and viewport sizes, but I have not verified the deployed commit or completed a full accessibility review.

## Earlier assessment notes

I removed the detailed pass, merit, and distinction tables from the earlier matrix because they came from the separate interactive-unit extract, not the static-information purpose I am following here. I have not assumed which document is the final rubric. If there is still uncertainty, I will ask the course provider before submission.
