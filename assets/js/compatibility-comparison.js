// Compare only the values visitors enter; this does not inspect devices or run applications.
(() => {
  const form = document.querySelector("#comparison-form");
  const fallback = document.querySelector("#comparison-unavailable");
  const results = document.querySelector("#comparison-results");
  const overallResult = document.querySelector("#overall-result");
  const resultList = document.querySelector("#comparison-result-list");
  const announcement = document.querySelector("#comparison-announcement");
  const loadExampleButton = document.querySelector("#load-example");

  if (
    !(form instanceof HTMLFormElement) ||
    !(fallback instanceof HTMLElement) ||
    !(results instanceof HTMLElement) ||
    !(overallResult instanceof HTMLElement) ||
    !(resultList instanceof HTMLUListElement) ||
    !(announcement instanceof HTMLElement) ||
    !(loadExampleButton instanceof HTMLButtonElement)
  ) {
    throw new Error("The Features comparison form is missing a required element.");
  }

  const operatingSystems = {
    windows: "Windows",
    macos: "macOS",
    linux: "Linux",
  };

  const numericValue = (name) => {
    const field = form.elements.namedItem(name);
    if (!(field instanceof HTMLInputElement) || field.value === "") {
      return null;
    }

    return Number(field.value);
  };

  const makeResult = (title, status, detail) => {
    const item = document.createElement("li");
    const card = document.createElement("article");
    card.className = `decision-card decision-${status.toLowerCase()}`;

    const heading = document.createElement("h4");
    heading.textContent = title;

    const statusText = document.createElement("p");
    statusText.className = "decision-status";
    statusText.textContent = status;

    const explanation = document.createElement("p");
    explanation.textContent = detail;

    card.append(heading, statusText, explanation);
    item.append(card);
    return item;
  };

  const clearResults = (message) => {
    results.hidden = true;
    resultList.replaceChildren();
    overallResult.textContent = "";
    announcement.textContent = message;
  };

  const compareOperatingSystem = (required, available) => {
    if (required === "any") {
      return {
        status: "Pass",
        detail: "No OS-specific application requirement was entered.",
      };
    }

    if (!required || !available) {
      return {
        status: "Warning",
        detail: "The operating-system requirement or environment value is unknown, so this item needs review.",
      };
    }

    if (required === available) {
      return {
        status: "Pass",
        detail: `The entered application requirement and environment both list ${operatingSystems[required]}.`,
      };
    }

    return {
      status: "Blocker",
      detail: `The entered requirement lists ${operatingSystems[required]}, but the environment lists ${operatingSystems[available]}.`,
    };
  };

  const compareAmount = (required, available, label) => {
    if (required === null || available === null) {
      return {
        status: "Warning",
        detail: `A ${label.toLowerCase()} value is missing, so this item needs review.`,
      };
    }

    if (available < required) {
      return {
        status: "Blocker",
        detail: `The entered environment value (${available} GB) is below the entered requirement (${required} GB).`,
      };
    }

    return {
      status: "Pass",
      detail: `The entered environment value (${available} GB) meets the entered requirement (${required} GB).`,
    };
  };

  const renderComparison = () => {
    const requiredOs = form.elements.namedItem("requiredOs").value;
    const environmentOs = form.elements.namedItem("environmentOs").value;
    const checks = [
      {
        title: "Operating system",
        ...compareOperatingSystem(requiredOs, environmentOs),
      },
      {
        title: "Memory",
        ...compareAmount(
          numericValue("requiredMemory"),
          numericValue("environmentMemory"),
          "Memory",
        ),
      },
      {
        title: "Free storage",
        ...compareAmount(
          numericValue("requiredStorage"),
          numericValue("environmentStorage"),
          "Free storage",
        ),
      },
    ];

    resultList.replaceChildren(
      ...checks.map((check) =>
        makeResult(check.title, check.status, check.detail),
      ),
    );

    const hasBlocker = checks.some((check) => check.status === "Blocker");
    const hasWarning = checks.some((check) => check.status === "Warning");
    const overallStatus = hasBlocker
      ? "Blocker"
      : hasWarning
        ? "Needs review"
        : "No blocker found";
    const outcomeClass = hasBlocker
      ? "decision-blocker"
      : hasWarning
        ? "decision-warning"
        : "decision-pass";

    overallResult.className = `overall-result ${outcomeClass}`;
    overallResult.textContent = `${overallStatus}. This is a comparison of the values entered, not a real-world assessment.`;
    results.hidden = false;
    announcement.textContent = `Comparison complete. Overall result: ${overallStatus}.`;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) {
      announcement.textContent = "Correct the highlighted values before comparing.";
      return;
    }

    renderComparison();
  });

  form.addEventListener("reset", () => {
    clearResults("Comparison cleared.");
  });

  form.addEventListener("input", () => {
    if (!results.hidden) {
      clearResults("Values changed. Compare again to update the result.");
    }
  });

  form.addEventListener("change", () => {
    if (!results.hidden) {
      clearResults("Values changed. Compare again to update the result.");
    }
  });

  loadExampleButton.addEventListener("click", () => {
    form.elements.namedItem("requiredOs").value = "windows";
    form.elements.namedItem("environmentOs").value = "linux";
    form.elements.namedItem("requiredMemory").value = "8";
    form.elements.namedItem("environmentMemory").value = "4";
    form.elements.namedItem("requiredStorage").value = "10";
    form.elements.namedItem("environmentStorage").value = "20";
    clearResults(
      "Fictional example values loaded. Select Compare entered values to see the illustrative result.",
    );
  });

  fallback.hidden = true;
  form.hidden = false;
})();
