const contentBySection = {
  home: {
    media: ["Piedra, selva y red viva", "Memoria territorial en movimiento"],
    hero: {
      eyebrow: "Dos territorios - una red viva",
      title: "Memoria viva entre Teotihuacan y la zona maya",
      text:
        "Propuesta digital para presentar un ecosistema translocal formado por Memnosyne Institute, Centro Cultural Tolteca de Teotihuacan AC y el Centro Comunitario U Kuuchil K Ch'ilbalo'on.",
      buttons: ["Explorar la red", "Ver recorrido"],
    },
    routeTitle: "Una arquitectura visual para tres entidades conectadas",
    routeText:
      "La pagina organiza la historia como una red: una plataforma internacional, dos territorios culturales y una ruta clara hacia proyectos, evidencia y apoyo.",
    cards: [
      ["Fundacion e identidad", "Memnosyne como plataforma madre y puente institucional."],
      ["Centro Cultural Tolteca", "Teotihuacan: piedra, sol, danza, maiz, obsidiana y Tlashko."],
      ["Centro Cultural Maya", "Felipe Carrillo Puerto: ceiba, memoria oral, salud comunitaria y arte."],
      ["Proyectos", "Educacion, arte, salud, territorio, alianzas y evidencias."],
      ["Donativo", "Apoyo transparente con impacto explicado y datos por validar."],
    ],
    labLabel: "Inicio / sintesis",
    labTitle: "Dos territorios, una mision y una red viva",
  },
  fundacion: {
    media: ["Nodos, alianza y plataforma", "Mapa visual de colaboracion"],
    hero: {
      eyebrow: "Fundacion e identidad translocal",
      title: "Una red cultural, dos territorios y una mision compartida",
      text:
        "Las tres entidades funcionan como ecosistema translocal: Memnosyne articula colaboracion global, Tolteca concentra memoria ceremonial en Teotihuacan y U Kuuchil sostiene trabajo comunitario maya.",
    },
    summaryTitle: "No mexicanizar de forma generica",
    summaryText: [
      "La identidad debe partir de elementos documentados: piedra, sol, danza, maiz, obsidiana y juego de pelota en Teotihuacan; ceiba, bordado, plantas medicinales, selva, memoria oral y fotografia comunitaria en la zona maya.",
      "La voz debe ser calida, comunitaria y respetuosa: cuidar, aprender, tejer, compartir, defender y sembrar.",
    ],
    cards: [
      ["Memnosyne", "Dallas, Texas", "Colaboracion cultural global en siete areas de conocimiento."],
      ["Tolteca", "Teotihuacan", "Preservacion cultural, ceremonialidad, educacion y patrimonio."],
      ["U Kuuchil", "Felipe Carrillo Puerto", "Buen vivir, salud comunitaria, memoria y defensa territorial."],
    ],
    labLabel: "Fundacion / confianza",
    labTitle: "Ecosistema, alianzas y ficha comparativa",
  },
  tolteca: {
    media: ["Piedra, sol y cancha Tlashko", "Territorio ceremonial"],
    hero: {
      eyebrow: "Valle de Teotihuacan",
      title: "Centro Cultural Tolteca de Teotihuacan",
      text:
        "Organizacion enfocada en preservacion cultural; combina ceremonialidad, formacion artistica, pedagogia comunitaria y mediacion turistico-cultural en el Valle de Teotihuacan.",
    },
    summaryTitle: "Patrimonio vivo, ceremonia y aprendizaje",
    summaryText: [
      "La sede publica mas consistente apunta a San Sebastian Xolalpa / San Juan Teotihuacan, Estado de Mexico.",
      "Sus hitos documentados incluyen el Primer Museo Tolteca, la cancha monumental Tlashko inaugurada en 2018, ceremonias de bendicion de semillas, danza ritual y recorridos de conocimiento ecologico-cultural.",
    ],
    cards: [
      ["Tlashko", "Juego de pelota", "Cancha monumental inaugurada en 2018; pieza visual clave para la pagina."],
      ["Ceremonias", "Semillas y danza", "Bendicion de semillas, Dia de la Tierra, tambor, flauta y danza ritual."],
      ["Educacion", "Recorridos culturales", "Museo tolteca, juventudes, visitantes y conocimiento del territorio."],
    ],
    timeline: [
      ["2007-2008", "Fundacion reportada en fuentes publicas con variaciones de fecha."],
      ["2018", "Inauguracion de la cancha monumental Tlashko."],
      ["2024", "Ceremonia de semillas / Dia de la Tierra."],
      ["2026", "Presencia publica continua en Teotihuacan."],
    ],
    labLabel: "Tolteca / patrimonio",
    labTitle: "Ceremonia, Tlashko, museo y recorridos",
  },
  maya: {
    media: ["Ceiba, tejido y plantas medicinales", "Memoria comunitaria"],
    hero: {
      eyebrow: "Felipe Carrillo Puerto - Quintana Roo",
      title: "Centro Comunitario U Kuuchil K Ch'ilbalo'on",
      text:
        "Centro maya orientado al buen vivir y a la vida digna del pueblo maya, con intercambio intergeneracional, salud comunitaria, memoria, educacion, arte y defensa territorial.",
    },
    summaryTitle: "Buen vivir y saberes ancestrales",
    summaryText: [
      "El nombre significa 'el lugar de nuestros ancestros'. Su sede real se ubica en Felipe Carrillo Puerto, dentro de la zona maya masewal.",
      "Sus ejes visibles incluyen medicina tradicional, Escuelita Maya, literatura, fotografia, cine, festival comunitario y la exposicion Reflejos.",
    ],
    cards: [
      ["Salud", "Medicina tradicional", "Herbolaria y proyecto Las plantas que nos cuidan."],
      ["Educacion", "Escuelita Maya", "Trabajo intergeneracional activo desde 2020."],
      ["Arte", "Reflejos", "Exposicion fotografica presentada en 2016 y reactivada en 2026."],
    ],
    timeline: [
      ["2009", "Fundacion del Centro Comunitario U Kuuchil K Ch'ilbalo'on."],
      ["2016", "Primera presentacion de la exposicion fotografica Reflejos."],
      ["2020", "Inicio de Escuelita Maya y trabajo intergeneracional."],
      ["2026", "Exposicion en Chetumal y gira internacional."],
    ],
    labLabel: "Maya / buen vivir",
    labTitle: "Tejido comunitario, salud, memoria oral y arte",
  },
  proyectos: {
    media: ["Talleres, comunidad y evidencias", "Archivo visual"],
    hero: {
      eyebrow: "Proyectos por ejes",
      title: "Educacion, arte, salud, territorio y culturas indigenas",
      text:
        "Los proyectos reunen acciones visibles de ambos territorios: talleres, salud comunitaria, memoria ceremonial, fotografia, recorridos, alianzas y practicas de continuidad cultural.",
    },
    cards: [
      ["Educacion", "Aprendizaje comunitario", "Escuelita Maya, talleres con juventudes y recorridos patrimoniales."],
      ["Memoria", "Ceremonias y territorio", "Danza ritual, bendicion de semillas, oralidad y continuidad cultural."],
      ["Arte", "Fotografia y creacion", "Reflejos, literatura, audiovisual, murales, ceramica e iconografia."],
      ["Salud", "Plantas medicinales", "Medicina tradicional, herbolaria y salud comunitaria."],
      ["Patrimonio", "Tlashko y museo", "Juego de pelota, Museo Tolteca, arquitectura y recorridos."],
      ["Alianzas", "Redes de apoyo", "Memnosyne, CITSAC, Museo de la Cultura Maya y circuitos culturales."],
    ],
    labLabel: "Proyectos / evidencias",
    labTitle: "Matriz de ejes, alianzas y archivo demostrativo",
  },
  donativo: {
    media: ["Apoyo comunitario y transparencia", "Continuidad cultural"],
    hero: {
      eyebrow: "Donativo y apoyo",
      title: "Tu apoyo mantiene viva la memoria",
      text:
        "El apartado de donativo debe explicar que se apoya: educacion cultural, salud comunitaria, arte, patrimonio, memoria territorial y continuidad de actividades.",
    },
    summaryTitle: "Apoyar es cuidar, aprender, tejer y sembrar",
    summaryText: [
      "El informe identifica baja disponibilidad de metricas financieras comparables en Mexico; por eso la pagina debe comunicar necesidades, destino de recursos y resultados esperados con claridad.",
      "La recomendacion es usar un checkout externo seguro y una narrativa visual de impacto, sin procesar datos bancarios dentro del sitio estatico.",
    ],
    cards: [
      ["Educacion", "Becas y talleres", "Materiales, actividades, recorridos y espacios de aprendizaje."],
      ["Salud", "Medicina tradicional", "Apoyo a herbolaria, encuentros comunitarios y saberes locales."],
      ["Arte", "Memoria visual", "Exposiciones, documentacion, fotografia, literatura y audiovisual."],
    ],
    labLabel: "Donativo / transparencia",
    labTitle: "Impacto estimado, claridad y proceso de apoyo",
  },
};

function setText(selector, text, root = document) {
  const element = root.querySelector(selector);
  if (element && text) element.textContent = text;
}

function setAllText(selector, values, root = document) {
  root.querySelectorAll(selector).forEach((element, index) => {
    if (values[index]) element.textContent = values[index];
  });
}

function getWireframeSection() {
  if (document.body.classList.contains("fundacion-theme")) return "fundacion";
  if (document.body.classList.contains("tolteca-theme")) return "tolteca";
  if (document.body.classList.contains("maya-theme")) return "maya";
  if (document.body.classList.contains("proyectos-theme")) return "proyectos";
  if (document.body.classList.contains("donativo-theme")) return "donativo";
  return "home";
}

function currentContent() {
  return contentBySection[getWireframeSection()];
}

function labelMediaBlocks() {
  const content = currentContent();

  document.querySelectorAll(".visual span").forEach((label) => {
    label.textContent = content.media[0];
  });
}

function populateHero() {
  const content = currentContent();
  const hero = document.querySelector(".hero, .section-hero");
  if (!hero) return;

  setText(".eyebrow", content.hero.eyebrow, hero);
  setText("h1", content.hero.title, hero);
  setText("p:not(.eyebrow)", content.hero.text, hero);

  if (content.hero.buttons) {
    setAllText(".btn", content.hero.buttons, hero);
  }
}

function populateExistingSections() {
  const section = getWireframeSection();
  const content = currentContent();

  if (section === "home") {
    const intro = document.querySelector("#distribucion");
    if (intro) {
      setText(".eyebrow", "Ruta de navegacion", intro);
      setText("h2", content.routeTitle, intro);
      setText("p:not(.eyebrow)", content.routeText, intro);
      intro.querySelectorAll(".route-card").forEach((card, index) => {
        const item = content.cards[index];
        if (!item) return;
        setText("h3", item[0], card);
        setText("p", item[1], card);
      });
    }
    setAllText(".color-strip div", ["Fundacion", "Tolteca", "Maya", "Proyectos", "Donativo"]);
    return;
  }

  const summary = document.querySelector("main > section.grid-2");
  if (summary && content.summaryTitle) {
    setText(".eyebrow", "Resumen del informe", summary);
    setText("h2", content.summaryTitle, summary);
    summary.querySelectorAll("p:not(.eyebrow)").forEach((p, index) => {
      if (content.summaryText[index]) p.textContent = content.summaryText[index];
    });
  }

  const cardSection = document.querySelector("main > section .cards-grid");
  if (cardSection && content.cards) {
    cardSection.querySelectorAll(".card").forEach((card, index) => {
      const item = content.cards[index];
      if (!item) return;
      setText("strong", item[0], card);
      setText("h3", item[1], card);
      setText("p", item[2], card);
    });
  }

  if (content.timeline) {
    document.querySelectorAll(".time-item").forEach((item, index) => {
      const data = content.timeline[index];
      if (!data) return;
      setText("strong", data[0], item);
      setText("span", data[1], item);
    });
  }

  if (section === "fundacion") {
    setAllText(".palette-grid .swatch strong", ["Fundacion", "Tolteca", "Maya", "Proyectos", "Donativo"]);
    setAllText(".palette-grid .swatch p", [
      "Puente institucional entre Memnosyne y los territorios.",
      "Piedra, sol, danza, maiz, obsidiana y Tlashko.",
      "Ceiba, bordado, plantas medicinales y memoria oral.",
      "Ejes de educacion, arte, salud, territorio y alianzas.",
      "Transparencia, continuidad y apoyo comunitario.",
    ]);
    setAllText(".type-card .type-title, .type-card .type-sub, .type-card .type-body", [
      "Titulos editoriales",
      "UI clara y navegable",
      "Lectura calida",
    ]);
  }
}

function populateFooter() {
  setText(".footer h3", "Memoria Viva");
  const footerParagraph = document.querySelector(".footer p");
  if (footerParagraph) {
    footerParagraph.textContent =
      "Dos territorios, una red viva: Teotihuacan, zona maya y una plataforma global de colaboracion cultural.";
  }

  const footerGroups = document.querySelectorAll(".footer h4");
  if (footerGroups[0]) footerGroups[0].textContent = "Secciones";
  if (footerGroups[1]) footerGroups[1].textContent = "Territorios";
  if (footerGroups[2]) footerGroups[2].textContent = "Canales";
}

function customizeContentLab() {
  const lab = document.querySelector(".wireframe-lab");
  if (!lab) return;

  const section = getWireframeSection();
  const bodies = {
    home: `<div class="wf-idea-set"><article class="wf-idea wf-idea-wide"><span>Lectura 01</span><b>Dos territorios, una mision</b><div class="wf-territory-map"><div><span>Teotihuacan</span><b>Piedra y Tlashko</b><p>Centro Tolteca como eje ceremonial, educativo y patrimonial.</p></div><div><span>Dallas</span><b>Memnosyne</b><p>Plataforma madre de colaboracion global/local.</p></div><div><span>Zona maya</span><b>Buen vivir</b><p>U Kuuchil como centro de salud, memoria y educacion intergeneracional.</p></div></div></article><article class="wf-idea"><span>Lectura 02</span><b>Ruta de usuario</b><div class="wf-route-board"><article><b>Fundacion</b><p>Confianza y contexto.</p></article><article><b>Tolteca</b><p>Patrimonio vivo.</p></article><article><b>Maya</b><p>Memoria comunitaria.</p></article><article><b>Proyectos</b><p>Ejes y evidencias.</p></article><article><b>Donativo</b><p>Apoyo claro.</p></article></div></article><article class="wf-idea"><span>Lectura 03</span><b>Arquitectura narrativa</b><div class="wf-band-stack"><div>Contexto institucional</div><div>Territorios y voces</div><div>Acciones y continuidad</div></div></article></div>`,
    fundacion: `<div class="wf-idea-set"><article class="wf-idea wf-idea-wide"><span>Ecosistema</span><b>Memnosyne + Tolteca + U Kuuchil</b><div class="wf-ecosystem"><div class="wf-node-main"><span>Plataforma madre</span><b>Dallas / global-local</b></div><div><span>Nodo ceremonial</span><b>Teotihuacan</b><p>Preservacion cultural, Tlashko y recorridos.</p></div><div><span>Nodo comunitario</span><b>Felipe Carrillo Puerto</b><p>Buen vivir, salud y memoria.</p></div><div><span>Narrativa</span><b>Red viva</b><p>Menos folclor generico; mas territorio y continuidad.</p></div></div></article><article class="wf-idea"><span>Confianza</span><b>Ficha comparativa</b><div class="wf-document-row"><article><b>Memnosyne</b><p>ONG/plataforma con huella fiscal en EE. UU. y programas publicos.</p></article><article><b>Tolteca</b><p>Mayor visibilidad cultural que financiera; impacto formal no localizado.</p></article><article><b>U Kuuchil</b><p>Proyecto comunitario maya con presencia en CITSAC y Facebook.</p></article></div></article><article class="wf-idea"><span>Principios</span><b>Identidad responsable</b><div class="wf-principles"><div>No generico</div><div>Dos territorios</div><div>Voz local</div><div>Transparencia</div></div></article></div>`,
    tolteca: `<div class="wf-idea-set"><article class="wf-idea wf-idea-wide"><span>Territorio</span><b>Anillo ceremonial</b><div class="wf-ceremony-ring"><div>Sol</div><div>Piedra</div><div>Obsidiana</div><div>Maiz</div><div>Tlashko</div><div>Danza</div></div></article><article class="wf-idea"><span>Recorrido</span><b>Experiencia del visitante</b><div class="wf-process-lane"><article><span>01</span><b>Llegada</b><p>San Sebastian Xolalpa / San Juan Teotihuacan.</p></article><article><span>02</span><b>Ceremonia</b><p>Bendicion de semillas, danza, tambor y flauta.</p></article><article><span>03</span><b>Aprendizaje</b><p>Museo Tolteca y conocimiento ecologico-cultural.</p></article><article><span>04</span><b>Tlashko</b><p>Cancha monumental como hito visual.</p></article></div></article><article class="wf-idea"><span>Archivo</span><b>Objetos y practicas</b><div class="wf-object-grid"><div>Museo</div><div>Juego</div><div>Danza</div><div>Semillas</div><div>Recorrido</div><div>Juventudes</div></div></article></div>`,
    maya: `<div class="wf-idea-set"><article class="wf-idea wf-idea-wide"><span>Tejido</span><b>Buen vivir y memoria</b><div class="wf-weave-grid"><article><b>Abuelas/os</b><p>Saberes resguardados e intercambio generacional.</p></article><article><b>Juventudes</b><p>Escuelita Maya y procesos formativos.</p></article><article><b>Medicina</b><p>Plantas que nos cuidan y salud comunitaria.</p></article><article><b>Lengua</b><p>Maaya t'aan / maya yucateco.</p></article><article><b>Imagen</b><p>Reflejos, fotografia y memoria visual.</p></article><article><b>Territorio</b><p>Zona maya masewal y defensa territorial.</p></article></div></article><article class="wf-idea"><span>Relato</span><b>Memoria oral</b><div class="wf-oral-strip"><span>Voz guia</span><p>El centro busca contribuir a la vida digna del pueblo maya mediante saberes ancestrales, arte, salud y encuentro comunitario.</p></div></article><article class="wf-idea"><span>Programas</span><b>Palapa comunitaria</b><div class="wf-palapa-layout"><div>Salud</div><div>Escuela</div><div>Arte</div><div>Defensa</div></div></article></div>`,
    proyectos: `<div class="wf-idea-set"><article class="wf-idea wf-idea-wide"><span>Matriz</span><b>Ejes por territorio</b><div class="wf-axis-matrix"><div></div><b>Educacion</b><b>Arte</b><b>Salud</b><b>Territorio</b><span>Tolteca</span><article>Talleres</article><article>Danza</article><article></article><article>Tlashko</article><span>Maya</span><article>Escuelita</article><article>Reflejos</article><article>Herbolaria</article><article>Masewal</article><span>Alianzas</span><article>Memnosyne</article><article>Museo</article><article>CITSAC</article><article>Redes</article></div></article><article class="wf-idea"><span>Alianzas</span><b>Tira de aliados</b><div class="wf-partner-strip"><span>Memnosyne</span><span>CITSAC</span><span>Museo Maya</span><span>Comunidades</span></div></article><article class="wf-idea"><span>Evidencias</span><b>Galeria documental</b><div class="wf-proof-board"><div>Foto</div><div>Dato</div><div>Video</div><div>Testimonio</div><div>Archivo</div></div></article></div>`,
    donativo: `<div class="wf-idea-set"><article class="wf-idea wf-idea-wide"><span>Impacto</span><b>Escalera de apoyo</b><div class="wf-impact-steps"><article><span>1</span><b>Necesidad</b><p>Materiales, espacios y continuidad.</p></article><article><span>2</span><b>Programa</b><p>Educacion, salud, arte o patrimonio.</p></article><article><span>3</span><b>Comunidad</b><p>Beneficio estimado por validar.</p></article><article><span>4</span><b>Reporte</b><p>Transparencia posterior.</p></article></div></article><article class="wf-idea"><span>Claridad</span><b>Transparencia</b><div class="wf-transparency"><aside>Desglose</aside><div><b>Uso del apoyo</b><p>El sitio debe explicar destino, necesidades y resultados esperados.</p></div><div><b>Dato pendiente</b><p>No hay metricas mexicanas comparables suficientes; se deben validar con cliente.</p></div></div></article><article class="wf-idea"><span>CTA</span><b>Donativo seguro</b><div class="wf-donation-cta"><div>Apoya continuidad cultural</div><button>Donar con checkout externo</button><small>Modulo demostrativo pendiente de integracion.</small></div></article></div>`,
  };

  lab.className = `wireframe-lab section-pad wf-lab-${section}`;
  lab.innerHTML = `<div class="wf-layout-showcase">${bodies[section]}</div>`;
}

document.body.classList.add("final-page-mode", "content-preview-mode");
labelMediaBlocks();
populateHero();
populateExistingSections();
customizeContentLab();
populateFooter();

