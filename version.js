const siteVersion = {
  version: "v1.2.4",
  label: "Vista final",
};

function renderVersionBadge() {
  if (document.querySelector(".version-badge")) return;

  const badge = document.createElement("div");
  badge.className = "version-badge";
  badge.textContent = `${siteVersion.version} / ${siteVersion.label}`;
  document.body.appendChild(badge);
}

renderVersionBadge();
