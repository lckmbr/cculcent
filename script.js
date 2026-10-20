/* ============================================================
   1) BANK DETAILS — donation account
   Addresses are written in internationally recognized format
   (recipient / street / city / country), and the RIB is grouped
   in the standard Bank–Branch–Account–Key format used for
   international transfers.
   ============================================================ */
const BANK_DETAILS = {
  bankName: "ACCESS BANK RDC SA",
  swift: "ABNGCDKI",
  beneficiary: "UJAMAA CULCENT BENI",
  // Standard RIB grouping: Bank code / Branch code / Account number / RIB key
  rib: { bank: "00021", branch: "00220", account: "30016235101", key: "62" },
  currency: "USD",
};
function formattedRib() {
  const r = BANK_DETAILS.rib;
  return `${r.bank} ${r.branch} ${r.account} ${r.key}`;
}

function renderBankDetails(lang) {
  const L = {
    en: {
      bank: "Bank",
      swift: "SWIFT / BIC",
      beneficiary: "Beneficiary",
      rib: "RIB (Bank / Branch / Account / Key)",
      currency: "Currency",
    },
    fr: {
      bank: "Banque",
      swift: "SWIFT / BIC",
      beneficiary: "Titulaire du compte",
      rib: "RIB (Banque / Agence / Compte / Clé)",
      currency: "Devise",
    },
  }[lang];
  const rows = [
    [L.beneficiary, BANK_DETAILS.beneficiary],
    [L.rib, formattedRib()],
    [L.currency, BANK_DETAILS.currency],
    [L.swift, BANK_DETAILS.swift],
    [L.bank, BANK_DETAILS.bankName],
  ];
  const html = rows
    .map(
      (r) => `<div class="row"><span>${r[0]}</span><span>${r[1]}</span></div>`,
    )
    .join("");
  ["bankBox", "donateBankBox"].forEach((id) => {
    const box = document.getElementById(id);
    if (box) box.innerHTML = html;
  });
}

/* ============================================================
   2) LOGOS — per-language header (wide/horizontal) and
   footer (monochrome/vertical) logo files.
   Replace each path below with the real exported file once you
   have it from the designer; the site swaps automatically when
   the visitor toggles EN/FR.
   ============================================================ */
const LOGOS = {
  header: {
    en: "assets/logo-header-en.svg",
    fr: "assets/logo-header-fr.svg",
  },
  footer: {
    en: "assets/logo-header-en.svg",
    fr: "assets/logo-header-fr.svg",
  },
};

function applyLogos(lang) {
  const headerLogo = document.getElementById("headerLogo");
  const footerLogo = document.getElementById("footerLogo");
  if (headerLogo) headerLogo.src = LOGOS.header[lang] || LOGOS.header.en;
  if (footerLogo) footerLogo.src = LOGOS.footer[lang] || LOGOS.footer.en;
}

/* ============================================================
   2b) ORG CONTACT INFO — phone, address, social links
   ============================================================ */
/* Brand icons: neither Lucide nor Heroicons ships brand logos, so these
   are inline SVG paths from Simple Icons (CC0 / public domain). `path` is the
   24x24 SVG path data. To add a network, copy its path from
   https://github.com/simple-icons/simple-icons/tree/develop/icons */
const ORG_INFO = {
  phone: "+243 812 299 551",
  address: "Beni, Democratic Republic Of Congo",
  social: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/19hSXpNBP6",
      path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/centre_culturel_ujamaa",
      path: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    },
  ],
};
function renderOrgInfo() {
  const phoneEl = document.getElementById("orgPhone");
  const addrEl = document.getElementById("orgAddress");
  const socialEl = document.getElementById("socialLinks");
  if (phoneEl) {
    phoneEl.textContent = ORG_INFO.phone;
    phoneEl.href = "tel:" + ORG_INFO.phone.replace(/\s+/g, "");
  }
  if (addrEl) addrEl.textContent = ORG_INFO.address;
  if (socialEl) {
    socialEl.innerHTML = ORG_INFO.social
      .map(
        (s) =>
          `<a href="${s.url}" aria-label="${s.name}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${s.path}"/></svg></a>`,
      )
      .join("");
    if (window.lucide) lucide.createIcons();
  }
}

/* ============================================================
   3) SLIDER IMAGES — 100vw program highlights.
   Edit this array freely: add, remove, or reorder slides.
   Each slide needs an image src plus an EN and FR caption.
   ============================================================ */
const SLIDER_IMAGES = [
  {
    src: "assets/Visite du Camps des Refugies_4.png",
    captionEn: "Psychosocial support in refugee camps",
    bodyEn:
      "The purpose is to encourage the communities living there to remain hopeful and continue believing in the future despite their circumstances.",
    captionFr: "Soutien psychosocial dans les camps de réfugiés",
    bodyFr:
      "L’objectif est d’encourager les communautés qui y vivent à garder espoir et à continuer de croire en l’avenir malgré les circonstances.",
  },
  {
    src: "assets/teenagers posing sitting with guitars.jpeg",
    captionEn: "Music Classes",
    bodyEn: "Weekly guitar lessons at the UJAMAA Center",
    captionFr: "Cours de musique",
    bodyFr: "Cours de guitare hebdomadaires au Centre UJAMAA",
  },
  {
    src: "assets/a group performing.webp",
    captionEn: "Live Performances",
    bodyEn:
      "Through our regularly organized live performance sessions, we celebrate our values, our differences, and our shared humanity that connects people across cultures, tribes, and races.",
    captionFr: "Spectacles en direct",
    bodyFr:
      "À travers nos spectacles régulièrement organisés, nous célébrons nos valeurs, nos différences et notre humanité commune, qui rassemble les peuples au-delà des cultures, des tribus et des origines.",
  },
];

/* ============================================================
   3b) PROGRAMS — one object per card. The TAG is its own field,
   independent of the title, so you can set any tag text/color.
   tagColor: "blue" | "terracotta" | "green" | "gold"
   ============================================================ */
const PROGRAMS = [
  {
    image: "/assets/people seat in a room during a film projection.jpg", // TODO: replace
    imageAlt: "Film program",
    titleEn: "Film Showcasing",
    titleFr: "Cinéma",
    descEn:
      "Showcasing locally produced films and stories that inspire coexistence and self-determination.",
    descFr:
      "Mettre en lumière des films et des récits produits localement qui inspirent la coexistence et l’autodétermination.",
    tagEn: "Film",
    tagFr: "Cinéma",
    tagColor: "blue",
  },
  {
    image:
      "assets/one kid playing the violin and a second kid seated playing piano.jpeg", // TODO: replace
    imageAlt: "Music program",
    titleEn: "Music Lessons",
    titleFr: "Musique",
    descEn:
      "Teaching young people to play musical instruments, nurturing their creativity, and empowering them to sing a different future for their communities.",
    descFr:
      "Apprendre aux jeunes à jouer d’instruments de musique, nourrir leur créativité et leur donner les moyens de chanter un avenir différent pour leurs communautés.",
    tagEn: "Music",
    tagFr: "Musique",
    tagColor: "terracotta",
  },
  {
    image: "assets/public concert.jpg",
    imageAlt: "Arts program",
    titleEn: "Arts & Performances",
    titleFr: "Les Arts",
    descEn:
      "Creative performances, poetry, and art that promote peace and bring communities together.",
    descFr:
      "Des spectacles créatifs, de la poésie et des œuvres artistiques qui promeuvent la paix et rassemblent les communautés.",
    tagEn: "Arts",
    tagFr: "Arts",
    tagColor: "green",
  },
  {
    image: "assets/a boy looks down cogitating.jpg",
    imageAlt: "Education program",
    titleEn: "Education",
    titleFr: "Éducation",
    descEn:
      "Supporting the education and development of young people to help them build better futures.",
    descFr:
      "Soutenir l’éducation et le développement des jeunes pour les aider à construire un avenir meilleur.",
    tagEn: "Education",
    tagFr: "Éducation",
    tagColor: "gold",
  },
];
function renderPrograms(lang) {
  const host = document.getElementById("programsList");
  if (!host) return;
  const fr = lang === "fr";
  host.innerHTML = PROGRAMS.map(
    (p) => `
    <div class="program-card is-visible">
      <div class="program-media"><img src="${p.image}" alt="${p.imageAlt}"></div>
      <div class="program-body">
        <span class="program-tag tag-${p.tagColor}">${fr ? p.tagFr : p.tagEn}</span>
        <h3>${fr ? p.titleFr : p.titleEn}</h3>
        <p>${fr ? p.descFr : p.descEn}</p>
      </div>
    </div>`,
  ).join("");
}

/* ============================================================
   4) FOUNDER VIDEO — YouTube embed
   ============================================================ */
const FOUNDER_VIDEO = {
  // Real YouTube video ID for the founder's vision video.
  // The player is cued (loaded, paused) on page load, so it starts
  // instantly on the first click — no separate thumbnail image needed.
  youtubeId: "OwjLZkggs-o",
};

/* ============================================================
   5) IMAGE PLACEHOLDERS (generic fallback generator)
   ============================================================ */
function placeholderDataURI(label, w, h) {
  const safeLabel = label.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const fontMain = Math.max(13, Math.min(w, h) * 0.06);
  const fontSub = Math.max(10, fontMain * 0.55);
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="100%" height="100%" fill="#DCD4C2"/>
    <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#1557A6" stroke-width="3"/>
    <line x1="0" y1="0" x2="${w}" y2="${h}" stroke="#1557A6" stroke-width="1" opacity="0.3"/>
    <line x1="${w}" y1="0" x2="0" y2="${h}" stroke="#1557A6" stroke-width="1" opacity="0.3"/>
    <text x="50%" y="47%" font-family="sans-serif" font-size="${fontMain}" fill="#17212B" text-anchor="middle" dominant-baseline="middle">${safeLabel}</text>
    <text x="50%" y="58%" font-family="sans-serif" font-size="${fontSub}" fill="#565F68" text-anchor="middle">REPLACE IMAGE — ${w}&#215;${h}px</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}
function applyPlaceholders() {
  document.querySelectorAll("img[data-placeholder]").forEach((img) => {
    const [label, w, h] = img.getAttribute("data-placeholder").split("|");
    img.src = placeholderDataURI(
      label,
      parseInt(w, 10) || 800,
      parseInt(h, 10) || 600,
    );
  });
}

/* ============================================================
   6) TRANSLATIONS (EN / FR)
   ============================================================ */
const I18N = {
  en: {
    "nav.who": "Who We Are",
    "nav.programs": "Our Programs",
    "nav.video": "Our Vision",
    "nav.region": "Region",
    "nav.donate": "Donate",
    "hero.headline": "Every dream deserves a chance to outshine violence.",
    "hero.place": "Beni · Eastern Democratic Republic Of Congo",
    "hero.scroll": "Scroll",
    "who.label": "Who We Are",
    "who.statement":
      "For decades, the city and territory of Beni in eastern Democratic Republic Of Congo have endured armed conflict, displacement, and violence that have deprived thousands of young people of the opportunities they deserve. <strong>But Beni is more than conflict.</strong> Beyond the hardships lies a generation of talented, creative, resilient, and ambitious young people eager to learn, create, innovate, serve their communities, and contribute to the future of their country.",
    "who.answer": "Our answer is culture.",
    "who.founder":
      "UJAMAA was founded by Rogatien Milord, a Congolese artist, cultural entrepreneur, and philanthropist from Beni.",
    "programs.label": "Our Programs",
    "programs.intro":
      "Several activities, one purpose: creating pathways that give young people purpose, direction, and the tools to become agents of change rather than being drawn into rebel groups.",

    "slider.label": "Program Highlights",
    "video.label": "Our Vision",
    "video.caption":
      "Rogatien Milord on why UJAMAA exists and where it's headed next.",
    "video.title": "Hear from our founder",
    "region.label": "Where We Work",
    "region.title": "Beni, North Kivu",
    "region.copy":
      "Beni lies in North Kivu, in eastern Democratic Republic Of Congo, immediately west of Virunga National Park and the Rwenzori Mountains, on the edge of the Ituri Forest. It is a region of striking natural beauty — and one that has carried the weight of conflict for decades. UJAMAA works from the heart of this territory.",
    "footer.about":
      "UJAMAA Cultural Center empowers the young people of Beni, DRC through culture, education, and opportunity.",
    "footer.linksTitle": "Explore",
    "footer.bankTitle": "Bank details",
    "footer.contactTitle": "Contact",
    "footer.email": "cculturel.ujamaa@gmail.com",
    "footer.rights": "All rights reserved.",
    "cta.headline":
      "Together, we create the space for young people in Beni to choose culture, opportunity and peace.",
    "donate.modalTitle": "Support UJAMAA",
    "donate.altLabel": "Or donate by bank transfer",
    "donate.modalIntro":
      "Your contribution helps young people in Beni choose culture, opportunity and peace.",
    "donate.button": "Donate now",
  },
  fr: {
    "nav.who": "Qui sommes-nous",
    "nav.programs": "Nos programmes",
    "nav.video": "Notre vision",
    "nav.region": "Région",
    "nav.donate": "Faire un don",
    "hero.headline":
      "Chaque rêve mérite une chance de briller au-delà de la violence.",
    "hero.place": "Beni · Est de la République démocratique du Congo",
    "hero.scroll": "Défiler",
    "who.label": "Qui sommes-nous",
    "who.statement":
      "Depuis des décennies, la ville et le territoire de Beni, dans l'est de la République démocratique du Congo, subissent les conséquences des conflits armés, des déplacements de population et de la violence, qui ont privé des milliers de jeunes des opportunités qu'ils méritent. <strong>Mais Beni ne se résume pas aux conflits.</strong> Au-delà des difficultés, une génération de jeunes talentueux, créatifs, résilients et ambitieux aspire à apprendre, à créer, à innover, à servir sa communauté et à contribuer à l'avenir de son pays.",
    "who.answer": "Notre réponse, c'est la culture.",
    "who.founder":
      "UJAMAA a été fondé par Rogatien Milord, un artiste congolais, entrepreneur culturel et philanthrope originaire de Beni.",
    "programs.label": "Nos programmes",
    "programs.intro":
      "Plusieurs activités, un seul objectif : créer des parcours qui donnent aux jeunes un but, une direction et les moyens de devenir des acteurs du changement, plutôt que de se laisser entraîner dans des groupes rebelles.",

    "slider.label": "Aperçu de nos programmes",
    "video.label": "Notre vision",
    "video.caption":
      "Rogatien Milord explique pourquoi UJAMAA existe et quelle direction le centre souhaite prendre.",
    "video.title": "Découvrez la vision de notre fondateur",
    "region.label": "Notre zone d'intervention",
    "region.title": "Beni, Nord-Kivu",
    "region.copy":
      "Beni se situe dans la province du Nord-Kivu, à l'est de la République démocratique du Congo, juste à l'ouest du parc national des Virunga et des monts Rwenzori, en bordure de la forêt de l'Ituri. C'est une région d'une beauté naturelle remarquable, qui porte pourtant le poids des conflits depuis des décennies. C'est au cœur de ce territoire qu'UJAMAA mène ses activités.",
    "footer.about":
      "Le Centre culturel UJAMAA accompagne les jeunes de Beni, en République démocratique du Congo, à travers la culture, l'éducation et l'accès aux opportunités.",
    "footer.linksTitle": "Explorer",
    "footer.bankTitle": "Coordonnées bancaires",
    "footer.contactTitle": "Contact",
    "footer.email": "cculturel.ujamaa@gmail.com",
    "footer.rights": "Tous droits réservés.",
    "cta.headline":
      "Ensemble, nous créons un espace où les jeunes de Beni peuvent choisir la culture, les opportunités et la paix.",
    "donate.modalTitle": "Soutenir UJAMAA",
    "donate.altLabel": "Ou faire un don par virement bancaire",
    "donate.modalIntro":
      "Votre contribution aide les jeunes de Beni à choisir la culture, les opportunités et la paix.",
    "donate.button": "Faire un don maintenant",
  },
};
const HTML_KEYS = new Set(["who.statement"]);

function setLanguage(lang) {
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] === undefined) return;
    if (HTML_KEYS.has(key)) el.innerHTML = dict[key];
    else el.textContent = dict[key];
  });
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
  });
  renderBankDetails(lang);
  renderPrograms(lang);
  applyLogos(lang);
  window.__ujamaaLang = lang;
  renderSlides(lang); // fixed: language must be set before slides render, not after
}

/* ============================================================
   7) 100VW SLIDER
   ============================================================ */
let sliderIndex = 0;
function renderSlides(lang) {
  const track = document.getElementById("sliderTrack");
  const dotsHost = document.getElementById("sliderDots");
  if (!track) return;
  lang = lang || window.__ujamaaLang || "en";
  track.innerHTML = SLIDER_IMAGES.map(
    (s, i) => `
    <div class="slide">
      <img src="${s.src}" alt="${lang === "fr" ? s.captionFr : s.captionEn}">
      <div class="slide-caption">
        <div class="cap-panel">
          <span class="cap-text">${lang === "fr" ? s.captionFr : s.captionEn}</span>
          <span class="cap-body">${lang === "fr" ? s.bodyFr : s.bodyEn}</span>
        </div>
      </div>
    </div>
  `,
  ).join("");
  if (dotsHost) {
    dotsHost.innerHTML = SLIDER_IMAGES.map(
      (s, i) =>
        `<button class="slider-dot" data-slide-index="${i}" aria-label="Go to slide ${i + 1}"><span class="dot-fill"></span></button>`,
    ).join("");
    dotsHost.querySelectorAll(".slider-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        goToSlide(parseInt(dot.dataset.slideIndex, 10));
        restartSliderTimer();
      });
    });
  }
  goToSlide(sliderIndex, false);
  if (sliderTimer) restartSliderTimer(); // keep dot fill and autoplay in sync after a re-render
}
function goToSlide(i, animate = true) {
  const track = document.getElementById("sliderTrack");
  if (!track) return;
  const total = SLIDER_IMAGES.length;
  sliderIndex = (i + total) % total;
  track.style.transition = animate ? "" : "none";
  track.style.transform = `translateX(-${sliderIndex * 100}vw)`;
  if (!animate)
    requestAnimationFrame(() => {
      track.style.transition = "";
    });
  document.querySelectorAll(".slider-dot").forEach((dot, idx) => {
    const fill = dot.querySelector(".dot-fill");
    dot.classList.remove("active");
    if (fill) {
      fill.style.transition = "none";
      fill.style.width = "0%";
    }
    if (idx === sliderIndex) {
      void dot.offsetWidth; // force reflow so the fill restarts from 0
      dot.classList.add("active");
      if (fill) {
        fill.style.transition = `width ${SLIDE_DURATION}ms linear`;
        fill.style.width = "100%";
      }
    }
  });
}
let sliderTimer = null;
const SLIDE_DURATION = 7500; // ms each slide stays; the active dot fills over exactly this time
function restartSliderTimer() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => goToSlide(sliderIndex + 1), SLIDE_DURATION);
}
function initSlider() {
  restartSliderTimer();
  // No pause-on-hover: the slider keeps auto-advancing regardless of mouse position.
}

/* ============================================================
   8) FOUNDER VIDEO — click-to-play YouTube w/ custom controls
   ============================================================ */
let ytPlayer = null;
let ytApiReady = false;
function loadYouTubeAPI() {
  if (window.YT && window.YT.Player) {
    ytApiReady = true;
    return;
  }
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
  window.onYouTubeIframeAPIReady = () => {
    ytApiReady = true;
  };
}
// Keeps #videoMount sized so the 16:9 iframe inside it always covers
// .video-bg-wrap completely (like background-size:cover), cropped by that
// wrapper's overflow:hidden, instead of behaving like a normal boxed embed.
function sizeVideoBackground() {
  const wrap = document.getElementById("videoBgWrap");
  if (!wrap) return;
  // YT.Player() swaps the original #videoMount <div> for a brand-new <iframe>,
  // so size whichever element is actually live in the wrapper right now.
  const mount =
    wrap.querySelector("iframe") || document.getElementById("videoMount");
  if (!mount) return;
  const cw = wrap.clientWidth,
    ch = wrap.clientHeight;
  if (!cw || !ch) return;
  const targetRatio = 16 / 9;
  const containerRatio = cw / ch;
  let w, h;
  if (containerRatio > targetRatio) {
    // container is wider than 16:9 -> match width, overshoot height
    w = cw;
    h = cw / targetRatio;
  } else {
    // container is taller than 16:9 -> match height, overshoot width
    h = ch;
    w = ch * targetRatio;
  }
  mount.style.width = w + "px";
  mount.style.height = h + "px";
}

function initVideoCard() {
  const card = document.getElementById("videoCard");
  const mount = document.getElementById("videoMount");
  if (!card || !mount) return;
  card.classList.add("is-paused"); // controls visible until first play
  sizeVideoBackground();
  window.addEventListener("resize", sizeVideoBackground);

  // While playing, controls stay hidden. They only come back when the visitor
  // genuinely moves the mouse / taps, and fade out again after 2s of stillness.
  let controlsTimer = null;
  let lastPlayStart = 0;
  const revealControls = () => {
    if (card.classList.contains("is-paused")) return;
    if (Date.now() - lastPlayStart < 700) return; // ignore the click that just started playback
    card.classList.add("show-controls");
    clearTimeout(controlsTimer);
    controlsTimer = setTimeout(
      () => card.classList.remove("show-controls"),
      2000,
    );
  };
  card.addEventListener("mousemove", revealControls);
  card.addEventListener("click", revealControls);

  loadYouTubeAPI();
  const start = () => {
    if (!(window.YT && window.YT.Player)) {
      setTimeout(start, 150);
      return;
    }
    ytPlayer = new YT.Player("videoMount", {
      width: "100%",
      height: "100%",
      videoId: FOUNDER_VIDEO.youtubeId,
      // autoplay:0 + cue on ready = the video is fully loaded and ready
      // the instant the person clicks play, with no buffering delay.
      playerVars: {
        autoplay: 0,
        controls: 0,
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
        cc_load_policy: 0,
        iv_load_policy: 3,
      },
      events: {
        onReady: (e) => {
          e.target.cueVideoById(FOUNDER_VIDEO.youtubeId);
          sizeVideoBackground();
        },
        onStateChange: (e) => {
          const playing = e.data === YT.PlayerState.PLAYING;
          card.classList.toggle("is-paused", !playing);
          // Controls vanish the instant playback starts, even if the mouse is still over the card.
          card.classList.remove("show-controls");
          clearTimeout(controlsTimer);
          if (playing) lastPlayStart = Date.now();
          updatePlayPauseIcon(playing);
        },
      },
    });
  };
  start();

  const muteBtn = document.getElementById("videoMuteBtn");
  const playPauseBtn = document.getElementById("videoPlayPauseBtn");
  const fsBtn = document.getElementById("videoFsBtn");

  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", () => {
      if (!ytPlayer) return;
      const state = ytPlayer.getPlayerState();
      if (state === YT.PlayerState.PLAYING) {
        ytPlayer.pauseVideo();
      } else {
        // First-ever play: start unmuted since this is a direct user click.
        ytPlayer.unMute();
        ytPlayer.setVolume(100);
        ytPlayer.playVideo();
      }
    });
  }
  if (muteBtn) {
    muteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!ytPlayer) return;
      if (ytPlayer.isMuted()) {
        ytPlayer.unMute();
        muteBtn.innerHTML = '<i data-lucide="volume-2"></i>';
      } else {
        ytPlayer.mute();
        muteBtn.innerHTML = '<i data-lucide="volume-x"></i>';
      }
      if (window.lucide) lucide.createIcons();
    });
  }
  if (fsBtn) {
    fsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      // BUG FIX: the old code called requestFullscreen() on the original
      // #videoMount <div>, but YT.Player() replaces that div with a fresh
      // <iframe> that does not keep the same element reference — the old
      // div was detached from the DOM, so fullscreen silently failed.
      // ytPlayer.getIframe() returns the actual live iframe element.
      if (!ytPlayer) return;
      const frame = ytPlayer.getIframe();
      if (!frame) return;
      if (frame.requestFullscreen) frame.requestFullscreen();
      else if (frame.webkitRequestFullscreen) frame.webkitRequestFullscreen();
      else if (frame.msRequestFullscreen) frame.msRequestFullscreen();
    });
  }
}
function updatePlayPauseIcon(isPlaying) {
  const btn = document.getElementById("videoPlayPauseBtn");
  if (!btn) return;
  btn.innerHTML = isPlaying
    ? '<i data-lucide="pause"></i>'
    : '<i data-lucide="play"></i>';
  if (window.lucide) lucide.createIcons();
}

/* ============================================================
   9) SCROLL REVEALS + HEADER STATE
   ============================================================ */
function initObservers() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.16 },
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  });
}

function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;
  const closeMenu = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  nav
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) closeMenu();
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  window.__ujamaaLang = "en";
  applyPlaceholders();
  setLanguage("en");
  initSlider();
  initVideoCard();
  initObservers();
  initMobileMenu();
  renderOrgInfo();
  if (window.lucide) lucide.createIcons();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () =>
      setLanguage(btn.getAttribute("data-lang-btn")),
    );
  });

  initDonateModal();
});

/* ============================================================
   DONATE MODAL
   ------------------------------------------------------------
   TODO (external donation platform): your platform gives you an
   EMBED CODE (an <iframe>, or a <script> + <div> widget), not a URL.
   Paste that code as a string into DONATION_EMBED_HTML below.
   - When it is set: the modal shows the embedded donation form first,
     with the bank details underneath as an alternative.
   - When it is null: the modal shows the bank details only.
   Tip: use a template literal (backticks) so the multi-line embed code
   can be pasted as-is.
   ============================================================ */
const DONATION_EMBED_HTML = null;
/* Example:
const DONATION_EMBED_HTML = `<iframe src="https://platform.example/embed/abc123" width="100%" height="600" frameborder="0"></iframe>`;
*/

// Injects embed markup and re-creates any <script> tags so they actually run
// (scripts added via innerHTML are ignored by browsers).
function injectEmbed(container, html) {
  container.innerHTML = "";
  const tpl = document.createElement("template");
  tpl.innerHTML = html;
  tpl.content.querySelectorAll("script").forEach((old) => {
    const fresh = document.createElement("script");
    [...old.attributes].forEach((a) => fresh.setAttribute(a.name, a.value));
    fresh.text = old.textContent;
    old.replaceWith(fresh);
  });
  container.appendChild(tpl.content);
}

function initDonateModal() {
  const modal = document.getElementById("donateModal");
  if (!modal) return;
  const closeBtn = document.getElementById("donateModalClose");
  const backdrop = document.getElementById("donateModalBackdrop");
  const embedHost = document.getElementById("donateEmbed");
  const altLabel = document.getElementById("donateAltLabel");
  let embedLoaded = false;

  const open = () => {
    if (DONATION_EMBED_HTML && embedHost && !embedLoaded) {
      injectEmbed(embedHost, DONATION_EMBED_HTML);
      embedLoaded = true;
    }
    modal.classList.toggle("has-embed", !!DONATION_EMBED_HTML);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".donate-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      open();
    });
  });
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
