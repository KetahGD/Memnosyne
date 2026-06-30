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

const paletteSystemStorageKey = "memoria-viva-palette-system";

const paletteSystems = {
  actual: {
    label: "Paleta actual",
    note: "Colores vigentes por apartado",
  },
  raizTerritorial: {
    label: "01 Raiz Territorial",
    note: "Recomendada: tierra, cenote, jade y maiz",
    sections: {
      home: ["Fundacion", "#17110D", "#355070"],
      fundacion: ["Fundacion", "#17110D", "#355070"],
      tolteca: ["Tolteca", "#A65F2B", "#D6A646"],
      maya: ["Maya", "#0B7285", "#14B8A6"],
      proyectos: ["Proyectos", "#17876D", "#00A896"],
      donativo: ["Donacion", "#D6A646", "#F72585"],
    },
  },
  nocheTextil: {
    label: "02 Noche Textil",
    note: "Vibrante: indigo, tezontle, azul y rosa",
    sections: {
      home: ["Fundacion", "#3D348B", "#E9B44C"],
      fundacion: ["Fundacion", "#3D348B", "#E9B44C"],
      tolteca: ["Tolteca", "#C84B28", "#FFB703"],
      maya: ["Maya", "#0077B6", "#00B4D8"],
      proyectos: ["Proyectos", "#00A878", "#3A86FF"],
      donativo: ["Donacion", "#FF006E", "#FFBE0B"],
    },
  },
  nopalPenacho: {
    label: "03 Nopal y Penacho",
    note: "Mexicano fuerte: sobrio, verde y azul dinamico",
    sections: {
      home: ["Fundacion", "#061826", "#F9C74F"],
      fundacion: ["Fundacion", "#061826", "#F9C74F"],
      tolteca: ["Tolteca", "#8A4B2A", "#E76F35"],
      maya: ["Maya", "#052E2B", "#2DD4BF"],
      proyectos: ["Proyectos", "#0057B8", "#00A878"],
      donativo: ["Donacion", "#CE1126", "#F72585"],
    },
  },
  piedraCenote: {
    label: "04 Piedra y Cenote",
    note: "Mas institucional: piedra, cenote y semilla",
    sections: {
      home: ["Fundacion", "#2B1A12", "#0B7285"],
      fundacion: ["Fundacion", "#2B1A12", "#0B7285"],
      tolteca: ["Tolteca", "#A63A2D", "#D38A2E"],
      maya: ["Maya", "#073B4C", "#88D498"],
      proyectos: ["Proyectos", "#2D6A4F", "#1B998B"],
      donativo: ["Donacion", "#F4D35E", "#C84B28"],
    },
  },
  festivalVivo: {
    label: "05 Festival Vivo",
    note: "Joven y creativa: turquesa, rosa y azul",
    sections: {
      home: ["Fundacion", "#120A22", "#FFBE0B"],
      fundacion: ["Fundacion", "#120A22", "#FFBE0B"],
      tolteca: ["Tolteca", "#E76F35", "#FFB703"],
      maya: ["Maya", "#14B8A6", "#B7D36B"],
      proyectos: ["Proyectos", "#3A86FF", "#00A878"],
      donativo: ["Donacion", "#FF477E", "#F4D35E"],
    },
  },
  archivoCeremonial: {
    label: "06 Archivo Ceremonial",
    note: "Sobria con acentos: archivo, adobe y ceiba",
    sections: {
      home: ["Fundacion", "#10151F", "#D6A646"],
      fundacion: ["Fundacion", "#10151F", "#D6A646"],
      tolteca: ["Tolteca", "#6D3B1F", "#E98D36"],
      maya: ["Maya", "#096B5E", "#2DD4BF"],
      proyectos: ["Proyectos", "#004E89", "#88D498"],
      donativo: ["Donacion", "#B83B22", "#F2C166"],
    },
  },
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

function clampChannel(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const value = Number.parseInt(clean, 16);
  return {
    red: (value >> 16) & 255,
    green: (value >> 8) & 255,
    blue: value & 255,
  };
}

function rgbToHex({ red, green, blue }) {
  return `#${[red, green, blue]
    .map((channel) => clampChannel(channel).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;
}

function mix(hexA, hexB, weight = 0.5) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  return rgbToHex({
    red: a.red * (1 - weight) + b.red * weight,
    green: a.green * (1 - weight) + b.green * weight,
    blue: a.blue * (1 - weight) + b.blue * weight,
  });
}

function readableTextFor(hex) {
  return hexToHsl(hex).lightness < 0.48 ? "#FFF8EA" : "#211812";
}

function buildGeneratedScheme(label, primary, secondary, section) {
  const darkPrimary = hexToHsl(primary).lightness < 0.4;
  const bg = darkPrimary ? mix(primary, "#110A07", 0.4) : mix(primary, "#FFF3D6", 0.78);
  const panel = darkPrimary ? mix(primary, "#FFF8EA", 0.16) : mix(primary, "#FFF8EA", 0.88);
  const ink = darkPrimary ? "#090706" : mix(primary, "#1A100A", 0.12);
  const text = darkPrimary ? "#FFF3D6" : "#2B1A12";
  const hot =
    section === "donativo"
      ? primary
      : section === "maya"
        ? mix(secondary, "#00B4D8", 0.35)
        : mix(primary, "#FF006E", 0.22);

  return {
    label,
    bg,
    panel,
    ink,
    text,
    primary,
    secondary,
    hot,
    gold: secondary,
    stone: mix(primary, secondary, 0.52),
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

function applyPalette() {
  const section = detectSection();
  const systemKey = readPaletteSystem();
  const paletteSystem = paletteSystems[systemKey] || paletteSystems.actual;
  const systemSection = paletteSystem.sections?.[section];
  const schemeKey = sectionPalettes[section];
  const baseScheme = schemes[schemeKey];
  const scheme = systemSection
    ? buildGeneratedScheme(systemSection[0], systemSection[1], systemSection[2], section)
    : baseScheme;

  document.body.dataset.palette = systemSection ? systemKey : schemeKey;
  document.body.dataset.paletteSystem = systemKey;
  document.body.dataset.paletteLabel = systemSection
    ? `${paletteSystem.label} / ${systemSection[0]}`
    : baseScheme.label;
  document.body.dataset.colorMode = "fixed";

  Object.entries(buildVars(scheme, section)).forEach(([name, value]) => {
    document.documentElement.style.setProperty(name, value);
    document.body.style.setProperty(name, value);
  });

  syncPaletteSystemControl();
}

function readPaletteSystem() {
  try {
    return localStorage.getItem(paletteSystemStorageKey) || "actual";
  } catch {
    return "actual";
  }
}

function savePaletteSystem(key) {
  try {
    localStorage.setItem(paletteSystemStorageKey, key);
  } catch {
    /* The palette still changes when storage is unavailable. */
  }
}

function setPaletteSystem(key) {
  const normalizedKey = paletteSystems[key] ? key : "actual";
  savePaletteSystem(normalizedKey);
  applyPalette();
}

function syncPaletteSystemControl() {
  const select = document.querySelector(".palette-system-select");
  if (select) select.value = document.body.dataset.paletteSystem || "actual";

  const label = document.querySelector(".palette-system-current");
  if (label) label.textContent = document.body.dataset.paletteLabel || "Paleta actual";

  const note = document.querySelector(".palette-system-note");
  const paletteSystem = paletteSystems[document.body.dataset.paletteSystem] || paletteSystems.actual;
  if (note) note.textContent = paletteSystem.note;
}

function renderPaletteSystemControl() {
  if (document.querySelector(".palette-system-control")) return;

  const control = document.createElement("aside");
  control.className = "palette-system-control";
  control.setAttribute("aria-label", "Selector de paletas por seccion");
  control.innerHTML = `<label for="paletteSystemSelect">Paleta</label>
    <select id="paletteSystemSelect" class="palette-system-select">
      ${Object.entries(paletteSystems)
        .map(([key, system]) => `<option value="${key}">${system.label}</option>`)
        .join("")}
    </select>
    <span class="palette-system-current"></span>
    <small class="palette-system-note"></small>`;
  document.body.appendChild(control);

  control.querySelector("select").addEventListener("change", (event) => {
    setPaletteSystem(event.target.value);
  });
}

applyPalette();
renderPaletteSystemControl();
syncPaletteSystemControl();
document.querySelectorAll(".palette-control, .palette-switcher").forEach((element) => {
  element.remove();
});
