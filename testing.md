# How I tested the site

## Checking the static version

I wanted to make sure the version I am publishing really is a static site: the pages should be there, the links should work, and the Features example should just be fixed sample content.

### Build checks

I ran `python scripts/build_netlify_release.py` and checked the Netlify configuration against its output folder. The release contains nine HTML pages and `assets/css/style.css`. I also checked that no form, script, or old planner reference was included, and that the project documentation stays out of the publish folder.

### Browser checks on my computer

I opened the generated release in a browser and went through the eight content pages and `404.html` at 320px, 768px, and 1440px. I found no horizontal overflow in those checks. The fixed fictional comparison appeared on the Features page at each width, and the page had no form or script.

These are focused checks of the local build. They do not mean I have completed a full accessibility audit or a broad user study.

## Checking the live site

I checked the live [Netlify site](https://zesty-croissant-e95ed9.netlify.app/) on 27 October 2026. The Home and Features pages show the current static version, and Features has the fixed fictional comparison rather than the old planner. I have only checked those two live pages so far. The other routes, custom 404, responsive layouts, and accessibility still need a full live review.

## What I still need to check

Before I submit or share the site, I still need to:

1. Run the current HTML through the W3C Nu checker and validate the stylesheet.
2. Check keyboard navigation and use a screen reader, following the [manual test sheet](docs/manual-test-sheet.md).
3. If I can, check the pages on a physical phone and record the device, browser, and viewport.
4. Open every page on the live Netlify site and check the custom 404 page and its links.
5. Take new screenshots of the current Features page if I need current-version evidence.

## Earlier test records

Some screenshots and notes in the [evidence folder](docs/evidence/README.md) are from before I changed the project to a static site. They include the old planner and the former published version. I have kept them as a record of the earlier work, but they do not prove that the current version passed those tests.

The [manual test sheet](docs/manual-test-sheet.md) has the checks I have not finished yet.
