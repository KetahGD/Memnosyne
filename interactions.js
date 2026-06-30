const sectionProfiles = {
  home: {
    label: "Inicio",
    title: "Recorrido de la red viva",
    timeline: [
      ["Memnosyne", "Plataforma madre con sede en Dallas y narrativa global/local."],
      ["Tolteca", "Territorio ceremonial, patrimonial y educativo en Teotihuacan."],
      ["Maya", "Buen vivir, salud comunitaria y memoria en Felipe Carrillo Puerto."],
      ["Apoyo", "Transparencia, proyectos y continuidad cultural por validar con cliente."],
    ],
    recommendations: [
      ["Fundacion", "Entender la arquitectura de las tres entidades.", "fundacion-identidad.html"],
      ["Tolteca", "Explorar piedra, sol, Tlashko y memoria ceremonial.", "centro-tolteca.html"],
      ["Proyectos", "Ver ejes, alianzas y evidencias documentables.", "proyectos.html"],
    ],
  },
  fundacion: {
    label: "Fundacion",
    title: "Ecosistema y confianza",
    timeline: [
      ["Memnosyne", "Plataforma internacional de colaboracion cultural en siete areas."],
      ["Tolteca", "Centro de preservacion cultural y pedagogia comunitaria."],
      ["U Kuuchil", "Centro maya de buen vivir, salud y memoria intergeneracional."],
      ["Transparencia", "Impacto mexicano visible, pero con metricas publicas incompletas."],
    ],
    recommendations: [
      ["Tolteca", "Pasar del mapa institucional al territorio ceremonial.", "centro-tolteca.html"],
      ["Maya", "Comparar la capa comunitaria y de buen vivir.", "centro-maya.html"],
      ["Donativo", "Conectar confianza con apoyo transparente.", "donativo.html"],
    ],
  },
  tolteca: {
    label: "Tolteca",
    title: "Territorio ceremonial",
    timeline: [
      ["2007-2008", "Fundacion reportada en fuentes publicas con variacion de fecha."],
      ["2018", "Inauguracion de la cancha monumental Tlashko."],
      ["2024", "Ceremonia de semillas y Dia de la Tierra."],
      ["2026", "Presencia publica continua en Teotihuacan."],
    ],
    recommendations: [
      ["Proyectos", "Convertir practicas en ejes explorables.", "proyectos.html"],
      ["Maya", "Cruzar territorio con buen vivir.", "centro-maya.html"],
      ["Fundacion", "Volver a la lectura institucional.", "fundacion-identidad.html"],
    ],
  },
  maya: {
    label: "Maya",
    title: "Tejido y buen vivir",
    timeline: [
      ["2009", "Fundacion del centro comunitario maya."],
      ["2016", "Primera presentacion de la exposicion fotografica Reflejos."],
      ["2020", "Escuelita Maya y trabajo intergeneracional."],
      ["2026", "Exposicion en Chetumal y gira internacional."],
    ],
    recommendations: [
      ["Proyectos", "Ordenar acciones por educacion, arte y salud.", "proyectos.html"],
      ["Donativo", "Mostrar impacto comunitario posible.", "donativo.html"],
      ["Tolteca", "Comparar lenguajes territoriales.", "centro-tolteca.html"],
    ],
  },
  proyectos: {
    label: "Proyectos",
    title: "Ejes y evidencias",
    timeline: [
      ["Educacion", "Escuelita Maya, talleres con juventudes y recorridos culturales."],
      ["Salud", "Medicina tradicional, herbolaria y salud comunitaria."],
      ["Arte", "Reflejos, poesia, audiovisual, fotografia y memoria visual."],
      ["Territorio", "Tlashko, defensa territorial, alianzas y archivo documental."],
    ],
    recommendations: [
      ["Donativo", "Llevar cada eje a impacto estimado.", "donativo.html"],
      ["Fundacion", "Revisar alianzas y confianza.", "fundacion-identidad.html"],
      ["Maya", "Ver programas de buen vivir.", "centro-maya.html"],
    ],
  },
  donativo: {
    label: "Donativo",
    title: "Apoyo transparente",
    timeline: [
      ["Necesidad", "Explicar materiales, talleres, espacios y continuidad de actividades."],
      ["Aporte", "Usar checkout externo seguro; no procesar tarjetas en el sitio estatico."],
      ["Destino", "Relacionar cada apoyo con educacion, salud, arte o patrimonio."],
      ["Reporte", "Mostrar resultados esperados y datos validados por la organizacion."],
    ],
    recommendations: [
      ["Proyectos", "Ver a que puede dirigirse el apoyo.", "proyectos.html"],
      ["Fundacion", "Reforzar confianza antes de donar.", "fundacion-identidad.html"],
      ["Inicio", "Regresar a la vision general.", "index.html"],
    ],
  },
};

const axisData = [
  ["educacion", "Educacion", "Escuelita Maya, talleres y recorridos culturales."],
  ["salud", "Salud", "Herbolaria, medicina tradicional y cuidado comunitario."],
  ["arte", "Arte", "Fotografia, literatura, audiovisual, murales y memoria visual."],
  ["territorio", "Territorio", "Tlashko, museo, defensa territorial y alianzas."],
];

function getSectionKey() {
  const body = document.body;
  if (body.classList.contains("fundacion-theme")) return "fundacion";
  if (body.classList.contains("tolteca-theme")) return "tolteca";
  if (body.classList.contains("maya-theme")) return "maya";
  if (body.classList.contains("proyectos-theme")) return "proyectos";
  if (body.classList.contains("donativo-theme")) return "donativo";
  return "home";
}

function createElementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function insertBeforeLab(section) {
  const lab = document.querySelector(".wireframe-lab");
  const main = document.querySelector("main");
  if (!main) return;

  if (lab) {
    main.insertBefore(section, lab);
    return;
  }

  main.appendChild(section);
}

function insertAfterHero(section) {
  const main = document.querySelector("main");
  const hero = document.querySelector(".hero, .section-hero");
  if (!main) return;

  if (hero && hero.nextSibling) {
    main.insertBefore(section, hero.nextSibling);
    return;
  }

  main.prepend(section);
}

function addVideoReadyBanner() {
  document.querySelectorAll(".hero, .section-hero").forEach((hero) => {
    if (hero.querySelector(".wireframe-video-layer")) return;

    const layer = document.createElement("div");
    layer.className = "wireframe-video-layer";
    layer.innerHTML = "";
    hero.prepend(layer);
  });
}

function renderScrollProgress() {
  if (document.querySelector(".scroll-progress")) return;

  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);

  const sync = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? window.scrollY / max : 0;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, percent))})`;
    document.body.style.setProperty("--scroll-shift", `${Math.round(window.scrollY * 0.035)}px`);
  };

  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

function renderHomeCompass(sectionKey) {
  if (sectionKey !== "home" || document.querySelector(".home-compass")) return;

  const compass = createElementFromHtml(`<section class="home-compass motion-module section-pad">
    <div class="motion-module-inner">
      <p class="eyebrow">Recorrido visual</p>
      <h2>Brujula de la red viva</h2>
      <div class="compass-map">
        <article class="compass-node compass-main"><span>Centro</span><b>Memnosyne</b><p>Plataforma madre de colaboracion global/local.</p></article>
        <article class="compass-node compass-left"><span>Rama A</span><b>Tolteca</b><p>Teotihuacan: piedra, sol, danza, maiz y Tlashko.</p></article>
        <article class="compass-node compass-right"><span>Rama B</span><b>Maya</b><p>Felipe Carrillo Puerto: ceiba, salud y memoria oral.</p></article>
        <article class="compass-node compass-bottom"><span>Continuidad</span><b>Proyectos / apoyo</b><p>Educacion, arte, salud, territorio y donativo transparente.</p></article>
        <div class="compass-thread"></div>
      </div>
    </div>
  </section>`);

  insertAfterHero(compass);
}

function renderFoundationBridge(sectionKey) {
  if (sectionKey !== "fundacion" || document.querySelector(".foundation-bridge")) return;

  const bridge = createElementFromHtml(`<section class="foundation-bridge motion-module section-pad">
    <div class="motion-module-inner">
      <p class="eyebrow">Organigrama / ecosistema</p>
      <h2>Capa puente entre territorios</h2>
      <div class="bridge-network">
        <article class="bridge-node bridge-center"><span>Nodo central</span><b>Memnosyne</b><p>ONG/plataforma con sede publica en Dallas y programas global/local.</p></article>
        <article class="bridge-node bridge-left"><span>Territorio</span><b>Tolteca</b><p>Centro de preservacion cultural en el Valle de Teotihuacan.</p></article>
        <article class="bridge-node bridge-right"><span>Territorio</span><b>U Kuuchil</b><p>Centro maya en Felipe Carrillo Puerto, Quintana Roo.</p></article>
        <i class="bridge-line bridge-line-left"></i>
        <i class="bridge-line bridge-line-right"></i>
      </div>
      <div class="trust-table" role="table" aria-label="Ficha comparativa">
        <div role="row"><b role="cell">Entidad</b><b role="cell">Sede</b><b role="cell">Foco</b><b role="cell">Publico</b></div>
        <div role="row"><span role="cell">Memnosyne</span><span role="cell">Dallas</span><span role="cell">Colaboracion cultural</span><span role="cell">Publico global</span></div>
        <div role="row"><span role="cell">Tolteca</span><span role="cell">Teotihuacan</span><span role="cell">Patrimonio y ceremonia</span><span role="cell">Juventudes / visitantes</span></div>
        <div role="row"><span role="cell">Maya</span><span role="cell">Felipe Carrillo Puerto</span><span role="cell">Buen vivir y salud</span><span role="cell">Comunidades mayas</span></div>
      </div>
    </div>
  </section>`);

  insertBeforeLab(bridge);
}

function renderToltecaCourt(sectionKey) {
  if (sectionKey !== "tolteca" || document.querySelector(".tolteca-court")) return;

  const court = createElementFromHtml(`<section class="tolteca-court motion-module section-pad">
    <div class="motion-module-inner">
      <p class="eyebrow">Cancha / recorrido ceremonial</p>
      <h2>Acomodo inspirado en Tlashko</h2>
      <div class="court-layout">
        <article><span>Bloque lateral</span><b>Ceremonia</b><p>Bendicion de semillas, danza ritual, tambor y flauta.</p></article>
        <article class="court-center"><span>Centro</span><b>Tlashko</b><p>Cancha monumental de juego de pelota inaugurada en 2018.</p></article>
        <article><span>Bloque lateral</span><b>Recorridos</b><p>Museo Tolteca y conocimiento ecologico-cultural.</p></article>
      </div>
      <div class="ceremony-ring">
        <button type="button">Sol</button><button type="button">Piedra</button><button type="button">Maiz</button><button type="button">Danza</button>
      </div>
    </div>
  </section>`);

  insertBeforeLab(court);
}

function renderMayaWeave(sectionKey) {
  if (sectionKey !== "maya" || document.querySelector(".maya-weave")) return;

  const weave = createElementFromHtml(`<section class="maya-weave motion-module section-pad">
    <div class="motion-module-inner">
      <p class="eyebrow">Tejido / palapa</p>
      <h2>Organizacion organica de programas</h2>
      <div class="weave-grid">
        <article><span>Comunidad</span><b>Buen vivir</b><p>Vida digna, encuentro intergeneracional y territorio.</p></article>
        <article><span>Salud</span><b>Herbolaria</b><p>Medicina tradicional y plantas que nos cuidan.</p></article>
        <article><span>Educacion</span><b>Escuelita Maya</b><p>Trabajo formativo con ninas, ninos y juventudes.</p></article>
        <article><span>Arte</span><b>Reflejos</b><p>Fotografia comunitaria, literatura, cine y memoria visual.</p></article>
      </div>
      <div class="palapa-programs"><span>Centro</span><i>Salud</i><i>Escuela</i><i>Arte</i><i>Memoria</i></div>
    </div>
  </section>`);

  insertBeforeLab(weave);
}

function renderProjectsMatrix(sectionKey) {
  if (sectionKey !== "proyectos" || document.querySelector(".projects-matrix")) return;

  const matrix = createElementFromHtml(`<section class="projects-matrix motion-module section-pad">
    <div class="motion-module-inner">
      <p class="eyebrow">Matriz de ejes</p>
      <h2>Cruzar territorio, tema y evidencia</h2>
      <div class="axis-matrix-v2">
        <b></b><b>Educacion</b><b>Salud</b><b>Arte</b><b>Territorio</b>
        <span>Tolteca</span><i>Recorridos</i><i></i><i>Danza</i><i>Tlashko</i>
        <span>Maya</span><i>Escuelita</i><i>Herbolaria</i><i>Reflejos</i><i>Defensa</i>
        <span>Alianzas</span><i>Memnosyne</i><i>CITSAC</i><i>Museo Maya</i><i>Comunidades</i>
      </div>
      <div class="alliance-rail" tabindex="0" aria-label="Tira horizontal de alianzas">
        <article>Memnosyne</article><article>CITSAC</article><article>Museo Maya</article><article>Comunidad</article><article>Archivo</article>
      </div>
    </div>
  </section>`);

  insertBeforeLab(matrix);
}

function renderDonationFlow(sectionKey) {
  if (sectionKey !== "donativo" || document.querySelector(".donation-flow")) return;

  const flow = createElementFromHtml(`<section class="donation-flow motion-module section-pad">
    <div class="motion-module-inner">
      <p class="eyebrow">Flujo de apoyo</p>
      <h2>Escalera de impacto demostrativa</h2>
      <div class="amount-selector" aria-label="Selector de monto demostrativo">
        <button type="button" data-amount="100">$100</button>
        <button type="button" data-amount="250">$250</button>
        <button type="button" data-amount="500">$500</button>
        <button type="button" data-amount="1000">$1000</button>
      </div>
      <div class="impact-meter"><span></span></div>
      <div class="impact-ladder">
        <article><span>Nivel 1</span><b data-count="100">000</b><p>Materiales para talleres y recorridos.</p></article>
        <article><span>Nivel 2</span><b data-count="250">000</b><p>Apoyo a actividades educativas o de salud.</p></article>
        <article><span>Nivel 3</span><b data-count="500">000</b><p>Continuidad de archivo, arte o memoria visual.</p></article>
        <article><span>Nivel 4</span><b data-count="1000">000</b><p>Apoyo mayor a programas por validar con cliente.</p></article>
      </div>
      <a class="btn btn-primary donation-final-cta" href="#">Dona ahora</a>
      <small>Cifras ilustrativas; las metricas finales deben validarse con informacion oficial.</small>
    </div>
  </section>`);

  insertBeforeLab(flow);

  const buttons = flow.querySelectorAll(".amount-selector button");
  const meter = flow.querySelector(".impact-meter span");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      meter.style.width = `${25 * (index + 1)}%`;
    });
  });
  buttons[1].click();
}

function axisFromText(text) {
  const lower = text.toLowerCase();
  if (lower.includes("salud") || lower.includes("medicina") || lower.includes("plantas")) return "salud";
  if (lower.includes("arte") || lower.includes("foto") || lower.includes("visual") || lower.includes("mural")) return "arte";
  if (
    lower.includes("territorio") ||
    lower.includes("patrimonio") ||
    lower.includes("alianza") ||
    lower.includes("tlashko") ||
    lower.includes("memoria")
  ) {
    return "territorio";
  }
  return "educacion";
}

function makeCardsExpandable() {
  document.querySelectorAll(".card, .wf-idea").forEach((card, index) => {
    if (card.classList.contains("expandable-card")) return;

    card.classList.add("expandable-card");
    card.dataset.axis = card.dataset.axis || axisFromText(card.textContent || "");
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-expanded", "false");

    const extra = document.createElement("div");
    extra.className = "expandable-extra";
    extra.innerHTML = `<div class="expandable-media-slot">Archivo documental ${index + 1}</div><p>Fotografia, testimonio, dato verificado o archivo de apoyo segun la informacion oficial del cliente.</p>`;
    card.appendChild(extra);

    const toggle = () => {
      const expanded = card.classList.toggle("is-expanded");
      card.setAttribute("aria-expanded", String(expanded));
    };

    card.addEventListener("click", (event) => {
      if (event.target.closest("a") && !card.classList.contains("is-expanded")) return;
      toggle();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggle();
    });
  });
}

function renderAxisFilters(sectionKey) {
  if (sectionKey !== "proyectos" || document.querySelector(".axis-filter-panel")) return;

  const panel = createElementFromHtml(`<section class="axis-filter-panel section-pad">
    <div class="axis-filter-inner">
      <p class="eyebrow">Filtros visuales por eje</p>
      <h2>Explorar proyectos por enfoque</h2>
      <div class="axis-filter-grid">
        ${axisData
          .map(
            ([key, label, text]) =>
              `<button class="axis-filter-option" type="button" data-axis="${key}"><strong>${label}</strong><span>${text}</span></button>`
          )
          .join("")}
      </div>
    </div>
  </section>`);

  insertBeforeLab(panel);

  panel.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-axis]");
    if (!button) return;

    const nextAxis = document.body.dataset.axisFilter === button.dataset.axis ? "" : button.dataset.axis;
    document.body.dataset.axisFilter = nextAxis;
    panel.querySelectorAll(".axis-filter-option").forEach((item) => {
      item.classList.toggle("is-active", item.dataset.axis === nextAxis);
    });
  });
}

function renderTimeline(sectionKey) {
  if (document.querySelector(".interactive-timeline")) return;

  const profile = sectionProfiles[sectionKey] || sectionProfiles.home;
  const nodes = profile.timeline
    .map(
      ([label, text], index) =>
        `<button class="timeline-node${index === 0 ? " is-active" : ""}" type="button" data-index="${index}"><strong>${label}</strong><span>${text}</span></button>`
    )
    .join("");

  const timeline = createElementFromHtml(`<section class="interactive-timeline section-pad">
    <div class="timeline-inner">
      <p class="eyebrow">Linea del tiempo interactiva</p>
      <h2>${profile.title}</h2>
      <div class="timeline-track">${nodes}</div>
      <div class="timeline-detail" aria-live="polite"><b>${profile.timeline[0][0]}</b><p>${profile.timeline[0][1]}</p></div>
    </div>
  </section>`);

  insertBeforeLab(timeline);

  timeline.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-index]");
    if (!button) return;

    const index = Number(button.dataset.index);
    const item = profile.timeline[index];
    timeline.querySelectorAll(".timeline-node").forEach((node) => {
      node.classList.toggle("is-active", node === button);
    });
    timeline.querySelector(".timeline-detail").innerHTML = `<b>${item[0]}</b><p>${item[1]}</p>`;
  });
}

function renderPaymentRecommendation(sectionKey) {
  if (sectionKey !== "donativo" || document.querySelector(".payment-recommendation")) return;

  const payment = createElementFromHtml(`<section class="payment-recommendation section-pad">
    <div class="payment-inner">
      <p class="eyebrow">Recomendacion de pagos</p>
      <h2>Donativo claro, seguro y medible</h2>
      <div class="payment-grid">
        <article class="payment-card"><span>Impacto</span><b>Simular destino</b><p>Mostrar educacion, salud, arte o patrimonio como rutas de apoyo.</p></article>
        <article class="payment-card"><span>Pago real</span><b>Usar checkout externo</b><p>Mercado Pago, Stripe Payment Links o PayPal para no procesar tarjetas en HTML estatico.</p></article>
        <article class="payment-card"><span>Transparencia</span><b>Reporte posterior</b><p>Publicar resultados y evidencias cuando el cliente valide datos oficiales.</p></article>
      </div>
    </div>
  </section>`);

  insertBeforeLab(payment);
}

function renderRecommendations(sectionKey) {
  if (document.querySelector(".section-recommendations")) return;

  const profile = sectionProfiles[sectionKey] || sectionProfiles.home;
  const section = createElementFromHtml(`<section class="section-recommendations section-pad">
    <div class="recommendations-inner">
      <p class="eyebrow">Navegacion recomendada</p>
      <h2>Siguiente lectura sugerida</h2>
      <div class="recommendation-grid">
        ${profile.recommendations
          .map(
            ([label, text, href]) =>
              `<a class="recommendation-card" href="${href}"><span>${profile.label}</span><b>${label}</b><p>${text}</p></a>`
          )
          .join("")}
      </div>
    </div>
  </section>`);

  insertBeforeLab(section);
}

function markRevealItems() {
  const selectors = [
    ".hero-content",
    ".wireframe-media-label",
    ".route-card",
    ".card",
    ".visual",
    ".time-item",
    ".interactive-timeline",
    ".axis-filter-panel",
    ".payment-recommendation",
    ".section-recommendations",
    ".motion-module",
    ".wf-idea",
  ];

  document.querySelectorAll(selectors.join(",")).forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
  });
}

function initRevealObserver() {
  const items = document.querySelectorAll(".reveal-on-scroll");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((item) => observer.observe(item));
}

function animateCounts() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const run = (counter) => {
    const target = Number(counter.dataset.count || 0);
    let current = 0;
    const step = Math.max(1, Math.round(target / 32));
    const tick = () => {
      current = Math.min(target, current + step);
      counter.textContent = `$${current}`;
      if (current < target) requestAnimationFrame(tick);
    };
    tick();
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(run);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.dataset.counted) return;
      entry.target.dataset.counted = "true";
      run(entry.target);
      observer.unobserve(entry.target);
    });
  });

  counters.forEach((counter) => observer.observe(counter));
}

function initInteractions() {
  document.body.classList.add("motion-ready", "motion-v122");
  const sectionKey = getSectionKey();

  renderScrollProgress();
  addVideoReadyBanner();
  renderHomeCompass(sectionKey);
  renderFoundationBridge(sectionKey);
  renderToltecaCourt(sectionKey);
  renderMayaWeave(sectionKey);
  renderProjectsMatrix(sectionKey);
  renderDonationFlow(sectionKey);
  renderAxisFilters(sectionKey);
  renderTimeline(sectionKey);
  renderPaymentRecommendation(sectionKey);
  renderRecommendations(sectionKey);
  makeCardsExpandable();
  markRevealItems();
  initRevealObserver();
  animateCounts();
}

initInteractions();

