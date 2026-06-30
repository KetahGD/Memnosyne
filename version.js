const siteVersion = {
  version: "v1.2.13",
  label: "Documentacion del proyecto",
};

const viewModeStorageKey = "memoria-viva-view-mode";

function readViewMode() {
  try {
    return localStorage.getItem(viewModeStorageKey) || "final";
  } catch {
    return "final";
  }
}

function saveViewMode(mode) {
  try {
    localStorage.setItem(viewModeStorageKey, mode);
  } catch {
    /* The view still changes when storage is unavailable. */
  }
}

function applyViewMode(mode) {
  const normalizedMode = mode === "wireframe" ? "wireframe" : "final";
  document.body.classList.toggle("wireframe-mode", normalizedMode === "wireframe");
  document.body.classList.toggle("final-view-mode", normalizedMode === "final");
  document.body.dataset.viewMode = normalizedMode;
  document.documentElement.dataset.viewMode = normalizedMode;

  document.querySelectorAll(".view-mode-option").forEach((button) => {
    const isActive = button.dataset.viewMode === normalizedMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderViewModeControl() {
  if (document.querySelector(".view-mode-control")) return;

  const control = document.createElement("aside");
  control.className = "view-mode-control";
  control.setAttribute("aria-label", "Cambiar vista de la pagina");
  control.dataset.version = siteVersion.version;
  control.innerHTML = `<button class="view-mode-option" type="button" data-view-mode="final">Vista final</button><button class="view-mode-option" type="button" data-view-mode="wireframe">Wireframe</button>`;
  document.body.appendChild(control);

  control.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-view-mode]");
    if (!button) return;
    saveViewMode(button.dataset.viewMode);
    applyViewMode(button.dataset.viewMode);
  });
}

renderViewModeControl();
applyViewMode(readViewMode());
