const siteVersion = {
  version: "v1.2.5",
  label: "Ajustes visuales",
};

function renderVersionBadge() {
  if (document.querySelector(".version-badge")) return;

  const badge = document.createElement("div");
  badge.className = "version-badge";
  badge.textContent = `${siteVersion.version} / ${siteVersion.label}`;
  document.body.appendChild(badge);
}

renderVersionBadge();
