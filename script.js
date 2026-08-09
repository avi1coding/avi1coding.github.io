const CONTACT_FORM = {
  accessKey: "6b724172-8296-4699-8e9a-fc9d77329035",
  endpoint: "https://api.web3forms.com/submit",
  subject: "New message from your portfolio site",
  mailto: "avimehta129@gmail.com"
};

const resumeData = {

  name: "Avi Mehta",
  initials: "AM",
  eyebrow: "Student Developer · Debater",
  tagline: "I'm an 8th grader at Crossroads North Middle School. I've been coding since 2021 — I started in Scratch, moved to HTML, CSS and JavaScript, and picked up MySQL and Python last year. I also debate, which is the same skill without the semicolons.",

  stats: [
    { num: "5",    label: "Years coding" },
    { num: "7",    label: "Languages & tools" }
  ],

  contactLede: "I'm always up for talking about a project, a bug, or something you're building. Email is the fastest way to reach me.",
  contact: [
    {
      name: "Email",
      icon: "✉",
      label: "avimehta129@gmail.com",
      href: "mailto:avimehta129@gmail.com",
      note: "Best way to reach me"
    },
    {
      name: "GitHub",
      icon: "⌥",
      label: "github.com/avi1coding",
      href: "https://github.com/avi1coding",
      note: "Everything I've built"
    }
  ],

  about: [
    "I've been writing code since 2021. I started the way a lot of people do — dragging blocks around in Scratch and working through Code.org — but I stuck with it, and in 2024 I moved into real code: HTML, CSS, and JavaScript. In 2025 I went past the front end and picked up MySQL and Python, so I could store and query data instead of just displaying it, and write programs that run outside a browser.",
    "Right now I'm building Blazes, a tool for students like me that turns studying into a game. You put in your notes, it turns them into seven different kinds of questions, and then you answer them as a game — collecting skins, opening packs, and unlocking achievements as you go. So far that's 71 skins and 103 achievements, plus a teacher side with classes, question kits, and analytics. I'm building it because studying from notes is boring, and the parts of games that keep you playing are exactly the parts studying is missing."
  ],

  aboutHighlights: [
    { icon: "◆", text: "Coding since 2021 — started with Scratch and Code.org" },
    { icon: "◆", text: "Front-end stack: HTML, CSS, and JavaScript since 2024" },
    { icon: "◆", text: "Added MySQL and Python in 2025 — data and back-end logic" },
    { icon: "◆", text: "Building Blazes in React — 7 question types, 71 skins, 103 achievements" }
  ],

  projects: [
    {
      featured: true,
      badge: "Currently building",
      year: "In progress · started [2025]",
      title: "Blazes",
      desc: "Blazes turns studying into a game. Students turn their own notes into questions, and answering those questions becomes the game itself — with skins to collect, packs to open, and achievements to unlock along the way. Teachers get the other half: classes, question kits, live hosted games, and an analytics dashboard.",
      tags: ["React", "JavaScript", "MySQL", "HTML/CSS"]
    },
    {
      icon: "◷",
      year: "2026",
      title: "Lockin",
      desc: "A tool for when you need to lock in for a certain period of time. Set a timer in any style you like, and keep it in the background as you focus. Your time gets tracked, so you can see your day-to-day progress.",
      tags: ["HTML/CSS", "JavaScript", "GitHub Pages"],
      url: "https://avi1coding.github.io/Lockin/",
      repo: "https://github.com/avi1coding/Lockin"
    },
    {
      icon: "◈",
      year: "2025",
      title: "AIC",
      desc: "An AI checker and humanizer. Log in and you can accurately check whether a piece of text was created by AI or not. If you have AI text you'd like to sound human, plug it into the humanizer and it'll look like you just wrote it.",
      tags: ["TypeScript", "AI", "Accounts", "Render"],
      url: "https://aic-egy7.onrender.com/",
      repo: "https://github.com/avi1coding/AIC"
    },
    {
      icon: "◧",
      year: "[2022 – 2023]",
      title: "[Scratch Project Name]",
      desc: "[An early Scratch game or animation — say what it taught you about logic or game design.]",
      tags: ["Scratch", "[Game design]"]
    }
  ],

  gallery: [
    {
      src: "images/blazes-game.png",
      alt: "A Blazes game in progress, showing a multiple choice question with four answer options, a score counter and a countdown timer.",
      caption: "The game itself — a question from a kit, four options, a live timer and score. Studying and playing are the same action."
    },
    {
      src: "images/blazes-home.png",
      alt: "The Blazes home screen with quick action cards for starting a game, building a kit, managing classes and viewing stats.",
      caption: "Home: start a game, build a question kit, manage classes, or check stats. Level and BlazesBucks sit in the header."
    },
    {
      src: "images/blazes-achievements.png",
      alt: "The Blazes achievements screen showing unlock progress across categories including Getting Started, Answer Milestones, Streaks and Accuracy.",
      caption: "103 achievements across tracks like Getting Started, Answer Milestones, Streaks and Accuracy — each one a separate unlock path."
    },
    {
      src: "images/blazes-level.png",
      alt: "A Blazes player profile showing level 3, an XP progress ring, a daily XP goal and a BlazesBucks balance.",
      caption: "The progression screen: XP toward the next level, a daily XP goal that resets at midnight, and the BlazesBucks balance."
    },
    {
      src: "images/blazes-stats.png",
      alt: "The Blazes analytics dashboard showing student count, average accuracy, total questions, an accuracy distribution chart and performance by category.",
      caption: "Teacher analytics: average accuracy, question volume, an accuracy distribution chart, and a per-subject breakdown."
    },
    {
      src: "images/blazes-pricing.png",
      alt: "The Blazes plans and pricing page showing the Blazes Plus subscription tier and a BlazesBucks store.",
      caption: "Plans: Blazes Plus adds AI quiz generation from notes and PDFs, flashcards, and bigger lobbies. The store is cosmetic-only by design."
    }
  ],

  journeyLede: "Five years of steadily moving down the stack — from blocks, to real front-end code, to the database and back-end logic underneath it.",
  journey: [
    {
      meta: "2021",
      title: "Started with Scratch & Code.org",
      org: "Block-based programming",
      points: [
        "Learned loops, conditionals, variables, and event handling by building games and animations",
        "[Name a Scratch project you were proud of and what it did]"
      ],
      tags: ["Scratch", "Code.org"]
    },
    {
      meta: "2024",
      title: "Moved up to real code",
      org: "HTML · CSS · JavaScript",
      points: [
        "Made the jump from blocks to typed syntax — building and styling pages from scratch",
        "Learned how the browser actually works: structure in HTML, design in CSS, behavior in JavaScript",
        "[Name the first site or app you built this way]"
      ],
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      meta: "2025",
      title: "Went past the front end",
      org: "MySQL · Python",
      points: [
        "Learned MySQL — tables, queries, and storing data that outlives the page refresh",
        "Picked up Python, moving from browser-only scripts to programs that run on their own",
        "[Name something you built with Python or MySQL this year]"
      ],
      tags: ["MySQL", "Python"]
    },
    {
      meta: "2026 — now",
      title: "8th grade — where I am now",
      org: "Crossroads North Middle School",
      points: [
        "Moved from plain JavaScript into React, and built Blazes on it",
        "Working across the whole stack: React on the front, MySQL behind it",
        "[What you want to learn next]"
      ],
      tags: ["React", "JavaScript", "MySQL", "Python"]
    }
  ],

  
  skillMap: {
    root: "Languages and more",
    branches: [
      {
        name: "Front End",
        color: "var(--mm-1)",
        skills: [
          { name: "HTML",       note: "since 2024" },
          { name: "CSS",        note: "since 2024" },
          { name: "JavaScript", note: "main language" },
          { name: "React",      note: "Blazes" },
          { name: "TypeScript", note: "Kaptra, AIC" },
          { name: "Bootstrap",  note: "layout & components" }
        ]
      },
      {
        name: "Back End & Data",
        color: "var(--mm-2)",
        skills: [
          { name: "Node.js", note: "servers & tooling" },
          { name: "Python",  note: "since 2025" },
          { name: "MySQL",   note: "Blazes database" }
        ]
      },
      {
        name: "AI",
        color: "var(--mm-3)",
        skills: [
          { name: "Claude",         note: "building & debugging" },
          { name: "AI integration", note: "quiz generation, captioning" },
          { name: "Prompting",      note: "built into Kaptra & Blazes" }
        ]
      },
      {
        name: "Tools",
        color: "var(--mm-4)",
        skills: [
          { name: "Git & GitHub",     note: "16 repositories" },
          { name: "VS Code",          note: "daily driver" },
          { name: "Chrome DevTools",  note: "debugging" }
        ]
      },
      {
        name: "Foundations",
        color: "var(--mm-5)",
        skills: [
          { name: "Scratch",  note: "2021 — where I started" },
          { name: "Code.org", note: "2021" }
        ]
      }
    ]
  },

  learning: [
    {
      icon: "◈",
      title: "Advanced Python",
      desc: "Going past the basics I picked up in 2025 — writing real programs instead of scripts, and learning the parts of the language I skipped the first time through."
    },
    {
      icon: "◇",
      title: "Sorting Algorithms",
      desc: "How the classic sorts actually work under the hood, and why one beats another depending on the data you hand it."
    },
    {
      icon: "◆",
      title: "Ship Blazes",
      desc: "Finish Blazes by the end of 2026 — the whole thing working end to end, student side and teacher side, not just the parts that are built today."
    }
  ],

};


function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

function fmt(str) {
  return esc(str).replace(/\[[^\]]+\]/g, (m) => `<span class="ph">${m}</span>`);
}

function el(id) { return document.getElementById(id); }

function isPlaceholder(str) { return /^\s*\[/.test(String(str)); }

function slotClass(title) { return isPlaceholder(title) ? " is-slot" : ""; }

function renderIdentity(d) {
  document.title = `${d.name} — Resume`;
  el("markInitials").textContent = d.initials;
  el("markName").textContent = d.name;
  el("heroEyebrow").textContent = d.eyebrow;
  el("heroName").textContent = d.name;
  el("heroTagline").innerHTML = fmt(d.tagline);
  el("footerName").innerHTML = `© ${new Date().getFullYear()} ${esc(d.name)}`;
}

function renderStats(stats) {
  el("statStrip").innerHTML = stats.map((s) => `
    <li class="stat">
      <span class="stat-num">${fmt(s.num)}</span>
      <span class="stat-label">${esc(s.label)}</span>
    </li>`).join("");
}

function renderContact(items) {
  el("contactList").innerHTML = items.map((c) => {
    const inner = c.href ? `<a href="${esc(c.href)}">${fmt(c.label)}</a>` : fmt(c.label);
    return `<li><span class="ci" aria-hidden="true">${esc(c.icon)}</span>${inner}</li>`;
  }).join("");
}

function renderAbout(d) {
  el("aboutText").innerHTML = d.about.map((p) => `<p>${fmt(p)}</p>`).join("");
  el("aboutHighlights").innerHTML = d.aboutHighlights.map((h) => `
    <li><span class="hi" aria-hidden="true">${esc(h.icon)}</span><span>${fmt(h.text)}</span></li>
  `).join("");
}

function galleryMarkup() {
  return `
    <section class="gallery" id="gallery" aria-roledescription="carousel" aria-label="Screenshots of Blazes">
      <div class="browser">
        <div class="browser-bar">
          <span class="browser-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="browser-url">blazes.app</span>
          <span class="gallery-counter" id="galleryCounter"></span>
        </div>

        <div class="gallery-frame">
          <button class="gallery-nav prev" id="galleryPrev" type="button" aria-label="Previous screenshot">
            <span aria-hidden="true">‹</span>
          </button>

          <div class="gallery-viewport" id="galleryViewport" tabindex="0"
               aria-label="Screenshot viewer, use arrow keys to navigate">
            <div class="gallery-track" id="galleryTrack"></div>
          </div>

          <button class="gallery-nav next" id="galleryNext" type="button" aria-label="Next screenshot">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>

      <p class="gallery-caption" id="galleryCaption" aria-live="polite"></p>
      <div class="gallery-dots" id="galleryDots" role="tablist" aria-label="Choose screenshot"></div>
    </section>`;
}

function projectLinks(p) {
  const link = (href, label) =>
    `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer">
       ${label} <span aria-hidden="true">↗</span>
     </a>`;

  const links = [
    p.url && link(p.url, "Live"),
    p.repo && link(p.repo, "Code")
  ].filter(Boolean);

  return links.length ? `<div class="project-links">${links.join("")}</div>` : "";
}

function renderProjects(projects) {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => p !== featured);

  el("featuredProject").innerHTML = featured ? `
    <article class="featured reveal">
      <div>
        <span class="featured-badge">${esc(featured.badge || "Featured build")}</span>
        <h3>${fmt(featured.title)}</h3>
        <p class="featured-year">${fmt(featured.year)}</p>
        <p class="featured-desc">${fmt(featured.desc)}</p>
        ${featured.points && featured.points.length
          ? `<ul class="featured-points">${featured.points.map((pt) => `<li>${fmt(pt)}</li>`).join("")}</ul>`
          : ""}
        <div class="tag-row">${featured.tags.map((t) => `<span class="tag">${fmt(t)}</span>`).join("")}</div>
      </div>
      ${galleryMarkup()}
    </article>` : "";

  el("moreProjectsHead").style.display = rest.length ? "" : "none";

  el("projectGrid").innerHTML = rest.map((p) => `
    <article class="project-card reveal${slotClass(p.title)}">
      <div class="project-top">
        <span class="project-icon" aria-hidden="true">${esc(p.icon || "◆")}</span>
        <span class="project-year">${fmt(p.year)}</span>
      </div>
      <h3>${fmt(p.title)}</h3>
      <p class="project-desc">${fmt(p.desc)}</p>
      <div class="tag-row">${p.tags.map((t) => `<span class="tag">${fmt(t)}</span>`).join("")}</div>
      ${projectLinks(p)}
    </article>`).join("");
}

function initGallery(slides) {
  const root = el("gallery");
  if (!root) return;

  const track = el("galleryTrack");
  const viewport = el("galleryViewport");
  const prev = el("galleryPrev");
  const next = el("galleryNext");
  const dots = el("galleryDots");
  const caption = el("galleryCaption");
  const counter = el("galleryCounter");

  if (!slides || !slides.length) {
    root.style.display = "none";
    return;
  }

  track.innerHTML = slides.map((s, i) => `
    <div class="gallery-slide" role="group" aria-roledescription="slide"
         aria-label="${i + 1} of ${slides.length}">
      <img src="${esc(s.src)}" alt="${esc(s.alt)}" ${i === 0 ? "" : 'loading="lazy"'} draggable="false">
      <div class="gallery-missing">
        <div class="gm-icon" aria-hidden="true">🖼</div>
        <p class="gm-title">Screenshot not found</p>
        <p>Save it as <code>${esc(s.src)}</code></p>
      </div>
    </div>`).join("");

  track.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => img.closest(".gallery-slide").classList.add("img-missing"));
  });

  dots.innerHTML = slides.map((_, i) => `
    <button class="gallery-dot" type="button" role="tab"
            data-index="${i}" aria-label="Screenshot ${i + 1}"></button>`).join("");

  const dotEls = Array.from(dots.children);
  let index = 0;

  function go(next_, { focusViewport = false } = {}) {
    index = Math.max(0, Math.min(slides.length - 1, next_));
    track.style.transform = `translateX(-${index * 100}%)`;

    dotEls.forEach((d, i) => {
      d.classList.toggle("active", i === index);
      d.setAttribute("aria-selected", String(i === index));
    });

    caption.textContent = slides[index].caption;
    counter.textContent = `${index + 1} / ${slides.length}`;
    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;

    if (focusViewport) viewport.focus({ preventScroll: true });
  }

  prev.addEventListener("click", () => go(index - 1));
  next.addEventListener("click", () => go(index + 1));
  dots.addEventListener("click", (e) => {
    const dot = e.target.closest(".gallery-dot");
    if (dot) go(Number(dot.dataset.index));
  });

  viewport.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1); }
    if (e.key === "Home") { e.preventDefault(); go(0); }
    if (e.key === "End") { e.preventDefault(); go(slides.length - 1); }
  });

  let startX = 0, delta = 0, dragging = false;

  viewport.addEventListener("pointerdown", (e) => {
    dragging = true;
    startX = e.clientX;
    delta = 0;
    viewport.classList.add("dragging");
    viewport.setPointerCapture(e.pointerId);
  });

  viewport.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    delta = e.clientX - startX;
    const offset = -index * viewport.clientWidth + delta;
    track.style.transform = `translateX(${offset}px)`;
  });

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove("dragging");

    const threshold = Math.min(80, viewport.clientWidth * 0.15);
    if (delta > threshold) go(index - 1);
    else if (delta < -threshold) go(index + 1);
    else go(index);
  }

  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);
  viewport.addEventListener("pointerleave", endDrag);

  window.addEventListener("resize", () => go(index), { passive: true });

  go(0);
}

function renderTimeline(targetId, items) {
  el(targetId).innerHTML = items.map((it) => `
    <article class="tl-item reveal${slotClass(it.title)}">
      <p class="tl-meta">${fmt(it.meta)}</p>
      <h3>${fmt(it.title)}</h3>
      <p class="tl-org">${fmt(it.org)}</p>
      <ul class="tl-points">
        ${it.points.map((pt) => `<li>${fmt(pt)}</li>`).join("")}
      </ul>
      ${it.tags ? `<div class="tag-row">${it.tags.map((t) => `<span class="tag">${fmt(t)}</span>`).join("")}</div>` : ""}
    </article>`).join("");
}

function wrapToCircle(text, radius, fontSize) {
  const maxChars = Math.max(5, Math.floor((radius * 2 * 0.84) / (fontSize * 0.55)));
  const lines = [];
  let line = "";

  text.split(" ").forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function circleLabel(cx, cy, text, radius, fontSize, cls, style = "") {
  const lines = wrapToCircle(text, radius, fontSize);
  const lead = fontSize * 1.15;
  const startY = cy - ((lines.length - 1) * lead) / 2;

  const spans = lines
    .map((l, i) => `<tspan x="${cx}" y="${startY + i * lead}">${esc(l)}</tspan>`)
    .join("");

  return `<text class="${cls}" style="${style}" text-anchor="middle">${spans}</text>`;
}

function renderSkills(map) {
  const R_ROOT = 94;    
  const R_BR   = 55;    
  const R_LEAF = 45;    
  const D_BR   = 178;    
  const D_LEAF = 322;  
  const PAD    = 16;

  const SIZE = (D_LEAF + R_LEAF + PAD) * 2;
  const C = SIZE / 2;

  const totalLeaves = map.branches.reduce((n, b) => n + b.skills.length, 0);
  const at = (angle, dist) => [C + Math.cos(angle) * dist, C + Math.sin(angle) * dist];

  let cursor = -Math.PI / 2;   // start at 12 o'clock
  const branches = map.branches.map((b) => {
    const span = (b.skills.length / totalLeaves) * Math.PI * 2;
    const leaves = b.skills.map((s, i) => {
      const a = cursor + span * ((i + 0.5) / b.skills.length);
      const [x, y] = at(a, D_LEAF);
      return { ...s, x, y };
    });
    const mid = cursor + span / 2;
    const [bx, by] = at(mid, D_BR);
    cursor += span;
    return { ...b, leaves, x: bx, y: by };
  });

  const spoke = (x1, y1, r1, x2, y2, r2, color) => {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len, uy = dy / len;
    return `<line x1="${(x1 + ux * r1).toFixed(1)}" y1="${(y1 + uy * r1).toFixed(1)}"
                  x2="${(x2 - ux * r2).toFixed(1)}" y2="${(y2 - uy * r2).toFixed(1)}"
                  class="mm-spoke" style="stroke:${color}" />`;
  };

  let svg = "";

  branches.forEach((b) => {
    let g = `<g class="mm-group">`;

    g += spoke(C, C, R_ROOT, b.x, b.y, R_BR, b.color);
    b.leaves.forEach((leaf) => {
      g += spoke(b.x, b.y, R_BR, leaf.x, leaf.y, R_LEAF, b.color);
    });

    b.leaves.forEach((leaf) => {
      g += `<g class="mm-leaf">
              ${leaf.note ? `<title>${esc(leaf.name)} — ${esc(leaf.note)}</title>` : ""}
              <circle cx="${leaf.x.toFixed(1)}" cy="${leaf.y.toFixed(1)}" r="${R_LEAF}"
                      class="mm-node mm-node-leaf" style="stroke:${b.color}" />
              ${circleLabel(leaf.x, leaf.y, leaf.name, R_LEAF, 11.5, "mm-label mm-label-leaf")}
            </g>`;
    });

    g += `<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="${R_BR}"
                  class="mm-node mm-node-branch" style="fill:${b.color}" />`;
    g += circleLabel(b.x, b.y, b.name, R_BR, 12.5, "mm-label mm-label-branch");

    g += `</g>`;
    svg += g;
  });

  svg += `<circle cx="${C}" cy="${C}" r="${R_ROOT}" class="mm-node mm-node-root" />`;
  svg += circleLabel(C, C, map.root, R_ROOT, 19, "mm-label mm-label-root");

  const list = map.branches.map((b) => `
    <li class="mm-item">
      <h3 style="color:${b.color}">${esc(b.name)}</h3>
      <div class="tag-row">
        ${b.skills.map((s) => `<span class="tag">${esc(s.name)}</span>`).join("")}
      </div>
    </li>`).join("");

  el("skillsGrid").innerHTML = `
    <div class="mindmap reveal">
      <svg class="mm-svg" viewBox="0 0 ${SIZE} ${SIZE}" width="100%"
           preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true"
           focusable="false">${svg}</svg>
      <ul class="mm-list">${list}</ul>
    </div>`;
}

function renderLearning(items) {
  el("learningGrid").innerHTML = items.map((l) => `
    <article class="learn-card reveal${slotClass(l.title)}">
      <div class="learn-icon" aria-hidden="true">${esc(l.icon)}</div>
      <h3>${fmt(l.title)}</h3>
      <p>${fmt(l.desc)}</p>
    </article>`).join("");
}

function renderContactSection(d) {
  el("contactLede").innerHTML = fmt(d.contactLede);

  el("contactGrid").innerHTML = d.contact.map((c) => {
    const inner = `
      <div class="contact-icon" aria-hidden="true">${esc(c.icon)}</div>
      <h3>${esc(c.name)}</h3>
      <p class="contact-value">${fmt(c.label)}${c.href ? ' <span class="contact-arrow" aria-hidden="true">↗</span>' : ""}</p>
      ${c.note ? `<p class="contact-note">${fmt(c.note)}</p>` : ""}`;

    return c.href
      ? `<a class="contact-card reveal" href="${esc(c.href)}"
            ${c.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
           ${inner}
         </a>`
      : `<div class="contact-card reveal is-static">${inner}</div>`;
  }).join("");
}

function renderAll(d) {
  renderIdentity(d);
  renderStats(d.stats);
  renderContact(d.contact);
  renderAbout(d);
  renderProjects(d.projects);
  initGallery(d.gallery);

  el("journeyLede").innerHTML = fmt(d.journeyLede);
  renderTimeline("journeyTimeline", d.journey);

  renderSkills(d.skillMap);
  renderLearning(d.learning);
  renderContactSection(d);
}


function initTheme() {
  const root = document.documentElement;
  const btn = el("themeToggle");
  const icon = el("themeIcon");
  const stored = localStorage.getItem("avi-resume-theme");

  function apply(mode) {
    root.setAttribute("data-theme", mode);
    icon.textContent = mode === "dark" ? "☀" : "☾";
    btn.setAttribute("aria-label", mode === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  apply(stored === "light" ? "light" : "dark");

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem("avi-resume-theme", next);
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((n) => n.classList.add("visible"));
    fillBars(document);
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.filter((e) => e.isIntersecting).forEach((entry, i) => {
      const node = entry.target;
      setTimeout(() => {
        node.classList.add("visible");
        fillBars(node);
      }, Math.min(i, 5) * 70);
      io.unobserve(node);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" });

  items.forEach((n) => io.observe(n));
}

function fillBars(scope) {
  scope.querySelectorAll(".bar-fill").forEach((bar) => {
    const level = Math.max(0, Math.min(100, Number(bar.dataset.level) || 0));
    requestAnimationFrame(() => { bar.style.width = level + "%"; });
  });
}

function initScrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav a"));
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach((s) => io.observe(s));
}

function initScrollProgress() {
  const bar = el("scrollProgress");
  const topbar = document.querySelector(".topbar");
  let ticking = false;

  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    topbar.classList.toggle("scrolled", window.scrollY > 8);
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });

  update();
}

function initNavToggle() {
  const toggle = el("navToggle");
  const nav = el("nav");

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.addEventListener("click", (e) => {
    if (e.target.tagName !== "A") return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  });
}


const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function initContactForm() {
  const form = el("contactForm");
  if (!form) return;

  const submit = el("cfSubmit");
  const status = el("cfStatus");

  const fields = [
    { input: el("cfName"),    error: el("cfNameErr"),
      validate: (v) => (v.trim() ? "" : "Please enter your name.") },
    { input: el("cfEmail"),   error: el("cfEmailErr"),
      validate: (v) => (!v.trim() ? "Please enter your email."
                      : EMAIL_RE.test(v.trim()) ? "" : "That doesn't look like an email address.") },
    { input: el("cfMessage"), error: el("cfMessageErr"),
      validate: (v) => (v.trim().length >= 10 ? "" : "Please write at least a sentence.") }
  ];

  function showError(field, message) {
    field.error.textContent = message;
    field.input.classList.toggle("invalid", Boolean(message));
    field.input.setAttribute("aria-invalid", message ? "true" : "false");
    return !message;
  }

  fields.forEach((field) => {
    field.input.addEventListener("input", () => {
      if (field.input.classList.contains("invalid")) {
        showError(field, field.validate(field.input.value));
      }
    });
  });

  function setStatus(message, kind) {
    status.textContent = message;
    status.className = `form-status${kind ? ` is-${kind}` : ""}`;
  }

  function mailtoFallback({ name, email, message }) {
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href =
      `mailto:${CONTACT_FORM.mailto}` +
      `?subject=${encodeURIComponent(`${CONTACT_FORM.subject} — ${name}`)}` +
      `&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app so you can send it.", "ok");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    /* Honeypot tripped: pretend it worked, send nothing. */
    const bot = form.elements.botcheck;
    if (bot && bot.checked) {
      setStatus("Thanks — your message is on its way.", "ok");
      form.reset();
      return;
    }

    const ok = fields.map((f) => showError(f, f.validate(f.input.value))).every(Boolean);
    if (!ok) {
      setStatus("Please fix the fields above.", "error");
      fields.find((f) => f.input.classList.contains("invalid")).input.focus();
      return;
    }

    /* Read from the inputs directly. `form.name` would return the form's
       name attribute, not the name field — HTMLFormElement's own IDL
       properties shadow named-element access. */
    const [nameField, emailField, messageField] = fields;
    const payload = {
      name: nameField.input.value.trim(),
      email: emailField.input.value.trim(),
      message: messageField.input.value.trim()
    };

    if (CONTACT_FORM.accessKey === "PASTE_YOUR_ACCESS_KEY_HERE") {
      mailtoFallback(payload);
      return;
    }

    submit.disabled = true;
    submit.textContent = "Sending…";
    setStatus("");

    try {
      const res = await fetch(CONTACT_FORM.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: CONTACT_FORM.accessKey,
          subject: CONTACT_FORM.subject,
          from_name: "Portfolio contact form",
          ...payload
        })
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        form.reset();
        setStatus("Thanks — your message is on its way. I'll reply to that address.", "ok");
      } else {
        throw new Error(data.message || "The form service rejected that.");
      }
    } catch (err) {
      setStatus(
        `Something went wrong sending that. You can email me directly at ${CONTACT_FORM.mailto}.`,
        "error"
      );
    } finally {
      submit.disabled = false;
      submit.textContent = "Send message";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll(resumeData);
  initTheme();
  initReveal();
  initScrollSpy();
  initScrollProgress();
  initNavToggle();
  initContactForm();
});
