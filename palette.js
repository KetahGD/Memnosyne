const sectionMap = [
  ["fundacion", "fundacion-theme"],
  ["tolteca", "tolteca-theme"],
  ["maya", "maya-theme"],
  ["proyectos", "proyectos-theme"],
  ["donativo", "donativo-theme"],
];

const schemes = {
  solObsidiana: {
    label: "Sol Obsidiana",
    bg: "#19100B",
    panel: "#271912",
    ink: "#060403",
    text: "#F7E6CE",
    primary: "#CA3D0C",
    secondary: "#35302A",
    hot: "#9B1D20",
    gold: "#E7AB1E",
    stone: "#9A8173",
  },
  fuegoRitual: {
    label: "Fuego Ritual",
    bg: "#2B0D08",
    panel: "#3C1710",
    ink: "#090302",
    text: "#FFEBD4",
    primary: "#F15A24",
    secondary: "#9C7A2D",
    hot: "#F01136",
    gold: "#FFC857",
    stone: "#B68C75",
  },
  piedraRoja: {
    label: "Piedra Roja",
    bg: "#D6C5AE",
    panel: "#F9EAD4",
    ink: "#241C18",
    text: "#4C372F",
    primary: "#A63A1E",
    secondary: "#6B6F44",
    hot: "#7A3428",
    gold: "#D6A646",
    stone: "#6E6257",
  },
  tlashkoVerde: {
    label: "Tlashko Verde",
    bg: "#E4E0AF",
    panel: "#FBF2C7",
    ink: "#171A0A",
    text: "#384018",
    primary: "#D24A0D",
    secondary: "#708A28",
    hot: "#AE0253",
    gold: "#E7AB1E",
    stone: "#5F6335",
  },
  maizCeremonial: {
    label: "Maiz Ceremonial",
    bg: "#F4D88B",
    panel: "#FFF4CF",
    ink: "#2A160C",
    text: "#573017",
    primary: "#C74610",
    secondary: "#68712C",
    hot: "#A90E32",
    gold: "#F7B928",
    stone: "#7A5C3D",
  },
  frogProyectos: {
    label: "Frog Proyectos",
    bg: "#F1F7F6",
    panel: "#FFFFFF",
    ink: "#032221",
    text: "#032221",
    primary: "#17876D",
    secondary: "#2FA98C",
    hot: "#00DF81",
    gold: "#AACBC4",
    stone: "#707D7D",
  },
  semillaDorada: {
    label: "Semilla Dorada",
    bg: "#F2DFA8",
    panel: "#FFF6D8",
    ink: "#261607",
    text: "#56351B",
    primary: "#D79A24",
    secondary: "#8A6F2A",
    hot: "#C74610",
    gold: "#F7B928",
    stone: "#8B744C",
  },
  semillaDoradaGlobal: {
    label: "Semilla Dorada + Indigo Textil",
    bg: "#E9D8A6",
    panel: "#F4E8D0",
    ink: "#1C1C1C",
    text: "#355070",
    primary: "#A64B2A",
    secondary: "#2F6F4F",
    hot: "#E76F51",
    gold: "#E6B650",
    stone: "#D8E2EC",
  },
};

const sectionPalettes = {
  home: "solObsidiana",
  fundacion: "fuegoRitual",
  tolteca: "piedraRoja",
  maya: "tlashkoVerde",
  proyectos: "frogProyectos",
  donativo: "semillaDorada",
};

const intenseOverrides = {
  donativo: "semillaDoradaGlobal",
};

function rgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const value = Number.parseInt(clean, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;

  return `rgba(${red},${green},${blue},${alpha})`;
}

function hexToHsl(hex) {
  const clean = hex.replace("#", "");
  const value = Number.parseInt(clean, 16);
  let red = ((value >> 16) & 255) / 255;
  let green = ((value >> 8) & 255) / 255;
  let blue = (value & 255) / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  let hue = 0;
  let saturation = 0;
  const lightness = (max + min) / 2;

  if (max !== min) {
    const delta = max - min;
    saturation =
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    if (max === red) hue = (green - blue) / delta + (green < blue ? 6 : 0);
    if (max === green) hue = (blue - red) / delta + 2;
    if (max === blue) hue = (red - green) / delta + 4;
    hue /= 6;
  }

  return { hue, saturation, lightness };
}

function hueToRgb(p, q, t) {
  let value = t;
  if (value < 0) value += 1;
  if (value > 1) value -= 1;
  if (value < 1 / 6) return p + (q - p) * 6 * value;
  if (value < 1 / 2) return q;
  if (value < 2 / 3) return p + (q - p) * (2 / 3 - value) * 6;
  return p;
}

function hslToHex({ hue, saturation, lightness }) {
  let red;
  let green;
  let blue;

  if (saturation === 0) {
    red = lightness;
    green = lightness;
    blue = lightness;
  } else {
    const q =
      lightness < 0.5
        ? lightness * (1 + saturation)
        : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }

  return `#${[red, green, blue]
    .map((channel) =>
      Math.round(channel * 255)
        .toString(16)
        .padStart(2, "0")
    )
    .join("")
    .toUpperCase()}`;
}

function intensifyColor(hex, amount = 0.18, lightnessShift = 0) {
  const hsl = hexToHsl(hex);
  return hslToHex({
    hue: hsl.hue,
    saturation: Math.min(1, hsl.saturation + amount),
    lightness: Math.min(0.92, Math.max(0.08, hsl.lightness + lightnessShift)),
  });
}

function intensifyScheme(scheme) {
  const darkBase = hexToHsl(scheme.bg).lightness < 0.35;

  return {
    ...scheme,
    bg: intensifyColor(scheme.bg, 0.1, darkBase ? -0.015 : 0.01),
    panel: intensifyColor(scheme.panel, 0.08, darkBase ? 0.01 : 0.005),
    primary: intensifyColor(scheme.primary, 0.24, 0.02),
    secondary: intensifyColor(scheme.secondary, 0.2, 0.015),
    hot: intensifyColor(scheme.hot, 0.26, 0.02),
    gold: intensifyColor(scheme.gold, 0.22, 0.025),
    stone: intensifyColor(scheme.stone, 0.12, 0),
  };
}

function detectSection() {
  const match = sectionMap.find(([, className]) =>
    document.body.classList.contains(className)
  );

  return match ? match[0] : "home";
}

function buildVars(scheme, section) {
  const footer = schemes.solObsidiana;
  const vars = {
    "--crema": scheme.bg,
    "--hueso": scheme.panel,
    "--negro": scheme.ink,
    "--cafe": scheme.text,
    "--fundacion": scheme.primary,
    "--fundacion2": scheme.gold,
    "--tolteca": scheme.primary,
    "--tolteca2": scheme.gold,
    "--maya": scheme.secondary,
    "--maya2": scheme.hot,
    "--proyectos": scheme.secondary,
    "--proyectos2": scheme.ink,
    "--donativo": scheme.hot,
    "--donativo2": scheme.primary,
    "--dorado": scheme.gold,
    "--piedra": scheme.stone,
    "--accent": scheme.primary,
    "--accent2": scheme.secondary,
    "--nav-bg": rgba(scheme.panel, 0.94),
    "--line": rgba(scheme.text, 0.2),
    "--shadow": rgba(scheme.ink, 0.22),
    "--hero-dark": rgba(scheme.ink, 0.93),
    "--hero-mid": rgba(scheme.primary, 0.5),
    "--hero-soft": rgba(scheme.hot, 0.2),
    "--hero-overlay": rgba(scheme.primary, 0.84),
    "--footer-bg": footer.bg,
    "--footer-panel": footer.panel,
    "--footer-ink": footer.ink,
    "--footer-text": footer.text,
    "--footer-accent": footer.primary,
    "--footer-gold": footer.gold,
  };

  if (section === "fundacion") {
    vars["--fundacion"] = scheme.primary;
    vars["--fundacion2"] = scheme.secondary;
  }

  if (section === "tolteca") {
    vars["--tolteca"] = scheme.primary;
    vars["--tolteca2"] = scheme.secondary;
  }

  if (section === "maya") {
    vars["--maya"] = scheme.primary;
    vars["--maya2"] = scheme.secondary;
  }

  if (section === "proyectos") {
    vars["--proyectos"] = scheme.primary;
    vars["--proyectos2"] = scheme.secondary;
  }

  if (section === "donativo") {
    vars["--donativo"] = scheme.primary;
    vars["--donativo2"] = scheme.secondary;
  }

  return vars;
}

function readColorMode() {
  try {
    return localStorage.getItem("memoria-viva-color-mode") || "original";
  } catch {
    return "original";
  }
}

function saveColorMode(mode) {
  try {
    localStorage.setItem("memoria-viva-color-mode", mode);
  } catch {
    /* Color still changes when storage is unavailable. */
  }
}

function applyPalette() {
  const section = detectSection();
  const schemeKey = sectionPalettes[section];
  const baseScheme = schemes[schemeKey];
  const mode = readColorMode();
  const intenseKey = intenseOverrides[section];
  const intenseBaseScheme = intenseKey ? schemes[intenseKey] : baseScheme;
  const scheme = mode === "intense" ? intensifyScheme(intenseBaseScheme) : baseScheme;

  document.body.dataset.palette = mode === "intense" && intenseKey ? intenseKey : schemeKey;
  document.body.dataset.paletteLabel =
    mode === "intense" && intenseKey ? intenseBaseScheme.label : baseScheme.label;
  document.body.dataset.colorMode = mode;

  Object.entries(buildVars(scheme, section)).forEach(([name, value]) => {
    document.body.style.setProperty(name, value);
  });
}

function setColorMode(mode) {
  saveColorMode(mode);
  applyPalette();
  syncColorSwitch();
}

function syncColorSwitch() {
  const mode = document.body.dataset.colorMode;

  document.querySelectorAll(".color-mode-option").forEach((button) => {
    const active = button.dataset.colorMode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const label = document.querySelector(".palette-control-label");
  if (label) {
    label.textContent = `${document.body.dataset.paletteLabel} / ${mode}`;
  }
}

function renderColorSwitch() {
  if (document.querySelector(".palette-control")) return;

  const switcher = document.createElement("aside");
  switcher.className = "palette-control palette-control-compact";
  switcher.setAttribute("aria-label", "Modo de color");
  switcher.innerHTML = `<p>Paleta</p><span class="palette-name">${document.body.dataset.paletteLabel}</span><p>Modo</p><div class="color-mode-grid">
    <button class="color-mode-option" type="button" data-color-mode="original">Original</button>
    <button class="color-mode-option" type="button" data-color-mode="intense">Intenso</button>
  </div><span class="palette-control-label"></span>`;
  document.body.appendChild(switcher);

  switcher.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-color-mode]");
    if (!button) return;
    setColorMode(button.dataset.colorMode);
  });

  syncColorSwitch();
}

applyPalette();
renderColorSwitch();
