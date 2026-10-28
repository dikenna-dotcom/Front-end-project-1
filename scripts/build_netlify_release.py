"""Copy only the public site files for a Netlify deployment."""

from pathlib import Path
import shutil


ROOT = Path(__file__).resolve().parents[1]
RELEASE = ROOT / "build" / "netlify"
PUBLIC_FILES = (
    "index.html",
    "features.html",
    "how-it-works.html",
    "compatibility.html",
    "security.html",
    "use-cases.html",
    "about.html",
    "faq.html",
    "404.html",
    "assets/css/style.css",
    "assets/js/compatibility-comparison.js",
)


def build_release():
    """Create or refresh the publish folder without project documentation."""
    allowed_files = set(PUBLIC_FILES)
    if RELEASE.exists():
        existing_files = {
            path.relative_to(RELEASE).as_posix()
            for path in RELEASE.rglob("*")
            if path.is_file()
        }
        unexpected_files = existing_files - allowed_files
        if unexpected_files:
            raise RuntimeError(
                "Unexpected files in Netlify release folder; inspect before publishing: %s"
                % ", ".join(sorted(unexpected_files))
            )

    RELEASE.mkdir(parents=True, exist_ok=True)
    for relative_path in PUBLIC_FILES:
        source = ROOT / relative_path
        destination = RELEASE / relative_path
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)

    print("Prepared Netlify static release at %s" % RELEASE)
    print("Copied %s public files." % len(PUBLIC_FILES))


if __name__ == "__main__":
    build_release()
