const CONTACT_FORM = {
  accessKey: "6b724172-8296-4699-8e9a-fc9d77329035",
  endpoint: "https://api.web3forms.com/submit",
  subject: "New message from your portfolio site",
  mailto: "avimehta129@gmail.com"
};

const resumeData = {

  name: "Avi Mehta",
  initials: "AM",
  headline: "Avi Mehta",
  tagline: "I'm in 8th grade and I've been coding since 2021. I've built two study tools, a focus timer, and an AI checker. I also build websites for other people.",

  stats: [
    { num: "5",  label: "Years coding" },
    { num: "4",  label: "Projects built" },
    { num: "3",  label: "Live on the web" }
  ],

  contactLede: "Want a site built? Tell me what it's for. Just want to say hi? Same form.",
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
    "I started coding in 2021 with Scratch and Code.org. In 2024 I moved to HTML, CSS and JavaScript, and in 2025 I picked up MySQL and Python so I could store data instead of just showing it.",
    "Right now I'm building Blazes. I started it because studying from notes is boring, and I wanted to see if the parts of a game that keep you playing would work for studying too."
  ],

  aboutHighlights: [
    { icon: "◆", text: "8th grader at Crossroads North Middle School" },
    { icon: "◆", text: "JavaScript is my main language" },
    { icon: "◆", text: "On a New Jersey debate team" }
  ],


  servicesLede: "I also build sites for other people. No templates. I write the code, and it's yours.",
  services: [
    {
      icon: "◐",
      title: "One-page sites",
      desc: "One page for a club, an event, a business, or yourself, with everything on it.",
      points: ["Custom design", "Mobile ready", "Contact form"]
    },
    {
      icon: "◑",
      title: "Multi-page websites",
      desc: "Separate pages such as about, gallery and contact, that you can add to later.",
      points: ["Navigation", "Photo galleries", "Forms & email"]
    },
    {
      icon: "◈",
      title: "Web apps",
      desc: "Logins, a database and a dashboard behind it, like Blazes and Grove.",
      points: ["Accounts & logins", "Databases", "Dashboards"]
    },
    {
      icon: "◷",
      title: "Fixes & redesigns",
      desc: "If your site already exists, I rebuild the front end and keep your text.",
      points: ["Speed", "Mobile layout", "Fresh design"]
    }
  ],

  processLede: "From the first message to a live site.",
  process: [
    { step: "01", title: "Tell me what you need", desc: "Message me what the site is for and what you want on it. I'll reply with what I would build." },
    { step: "02", title: "I design it", desc: "You'll see the layout before I build anything, so changes are quick to make at this stage." },
    { step: "03", title: "I build it", desc: "I write it in HTML, CSS and JavaScript, or React if it needs accounts. You get a live link while it is being built." },
    { step: "04", title: "You get the code", desc: "I test it on multiple devices and browsers, then send you the complete code." }
  ],

  projects: [
    {
      featured: true,
      badge: "Currently building",
      year: "",
      title: "Blazes",
      desc: "Blazes turns studying into a game. You put your notes in, it makes questions out of them, and answering them earns skins, packs and achievements. Teachers get classes, question kits, live games, and analytics.",
      tags: ["React", "JavaScript", "MySQL", "HTML/CSS"]
    },
    {
      icon: "❖",
      year: "2026",
      title: "Grove",
      desc: "Your notes as a skill tree: split a topic into subtopics, split those again, and quiz yourself branch by branch.",
      tags: ["JavaScript", "Render"],
      url: "https://grove-dj26.onrender.com",
      repo: "https://github.com/avi1coding/Grove"
    },
    {
      icon: "◉",
      year: "2026",
      title: "Imposter",
      desc: "A party game for 3 to 99 players on one phone. Everyone gets a secret word except the imposters, and you talk and vote to work out who is faking it. Four modes to play.",
      tags: ["HTML/CSS", "JavaScript", "GitHub Pages"],
      url: "https://avi1coding.github.io/imposter/",
      repo: "https://github.com/avi1coding/imposter"
    },
    {
      icon: "◈",
      year: "2025",
      title: "AIC",
      desc: "An AI checker and humanizer. Log in, paste text, and it tells you whether it was written by AI. The humanizer rewrites AI text to sound human.",
      tags: ["TypeScript", "AI", "Accounts", "Render"],
      url: "https://aic-egy7.onrender.com/",
      repo: "https://github.com/avi1coding/AIC"
    }
  ],

  gallery: [
    {
      src: "images/blazes-game.png",
      alt: "A Blazes game in progress, showing a multiple choice question with four answer options, a score counter and a countdown timer.",
      caption: "A question mid-game: four options, a timer, a score."
    },
    {
      src: "images/blazes-home.png",
      alt: "The Blazes home screen with quick action cards for starting a game, building a kit, managing classes and viewing stats.",
      caption: "Home: start a game, build a question kit, manage classes, or check stats. Level and BlazesBucks sit in the header."
    },
    {
      src: "images/blazes-achievements.png",
      alt: "The Blazes achievements screen showing unlock progress across categories including Getting Started, Answer Milestones, Streaks and Accuracy.",
      caption: "103 achievements across streaks, accuracy and milestones."
    },
    {
      src: "images/blazes-level.png",
      alt: "A Blazes player profile showing level 3, an XP progress ring, a daily XP goal and a BlazesBucks balance.",
      caption: "Levels, a daily XP goal, and your BlazesBucks."
    },
    {
      src: "images/blazes-stats.png",
      alt: "The Blazes analytics dashboard showing student count, average accuracy, total questions, an accuracy distribution chart and performance by category.",
      caption: "Teacher analytics: accuracy and scores, broken down by subject."
    },
    {
      src: "images/blazes-pricing.png",
      alt: "The Blazes plans and pricing page showing the Blazes Plus subscription tier and a BlazesBucks store.",
      caption: "Plans and the BlazesBucks store. Cosmetics only, nothing pay-to-win."
    }
  ],


  
  learning: [
    { icon: "◇", title: "Machine Learning",
      desc: "How models learn from data, starting with the basics in Python." },
    { icon: "◆", title: "Java",
      desc: "A new language for me. Stricter than JavaScript, and used for bigger apps." },
    { icon: "◈", title: "Sorting Algorithms",
      desc: "How the classic sorts work, and why one beats another on different data." },
    { icon: "◇", title: "Ship Blazes",
      desc: "Finish it by the end of 2026. Student side and teacher side, working end to end." }
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
          { name: "TypeScript", note: "AIC" },
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
          { name: "Prompting",      note: "built into Blazes" }
        ]
      },
      {
        name: "Tools",
        color: "var(--mm-4)",
        skills: [
          { name: "Git & GitHub",     note: "version control" },
          { name: "VS Code",          note: "daily driver" },
          { name: "Chrome DevTools",  note: "debugging" }
        ]
      },
      {
        name: "Foundations",
        color: "var(--mm-5)",
        skills: [
          { name: "Scratch",  note: "where I started, 2021" },
          { name: "Code.org", note: "2021" }
        ]
      }
    ]
  },


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
  document.title = `${d.name}, Portfolio`;
  el("markInitials").textContent = d.initials;
  el("markName").textContent = d.name;
  el("heroName").textContent = d.headline;
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
        ${featured.year ? `<p class="featured-year">${fmt(featured.year)}</p>` : ""}
        <p class="featured-desc">${fmt(featured.desc)}</p>
        ${featured.points && featured.points.length
          ? `<ul class="featured-points">${featured.points.map((pt) => `<li>${fmt(pt)}</li>`).join("")}</ul>`
          : ""}
        <div class="tag-row">${featured.tags.map((t) => `<span class="tag">${fmt(t)}</span>`).join("")}</div>
      </div>
      ${galleryMarkup()}
    </article>` : "";

  el("moreProjectsHead").style.display = rest.length ? "" : "none";

  /* Laid out like a menu board: name, dotted leader, year. */
el("projectGrid").innerHTML = rest.map((p) => `
    <article class="side-item reveal">
      <span class="side-icon" aria-hidden="true">${esc(p.icon || "\u25c6")}</span>
      <h3 class="side-name">${fmt(p.title)}</h3>
      <span class="side-dots" aria-hidden="true"></span>
      <span class="side-year">${fmt(p.year)}</span>
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
              ${leaf.note ? `<title>${esc(leaf.name)}: ${esc(leaf.note)}</title>` : ""}
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


function renderLearning(items) {
  el("learningGrid").innerHTML = items.map((l) => `
    <article class="learn-card reveal${slotClass(l.title)}">
      <div class="learn-icon" aria-hidden="true">${esc(l.icon)}</div>
      <h3>${fmt(l.title)}</h3>
      <p>${fmt(l.desc)}</p>
    </article>`).join("");
}

function renderServices(d) {
  const lede = el("servicesLede");
  if (lede) lede.innerHTML = fmt(d.servicesLede);

  const grid = el("servicesGrid");
  if (!grid) return;

  grid.innerHTML = d.services.map((sv) => `
    <article class="service reveal">
      <span class="service-icon" aria-hidden="true">${esc(sv.icon)}</span>
      <h3>${fmt(sv.title)}</h3>
      <p class="service-desc">${fmt(sv.desc)}</p>
      <ul class="service-points">
        ${sv.points.map((pt) => `<li>${fmt(pt)}</li>`).join("")}
      </ul>
    </article>`).join("");
}

function renderProcess(d) {
  const lede = el("processLede");
  if (lede) lede.innerHTML = fmt(d.processLede);

  const list = el("processList");
  if (!list) return;

  list.innerHTML = d.process.map((st) => `
    <li class="step reveal">
      <span class="step-num">${esc(st.step)}</span>
      <div class="step-body">
        <h3>${fmt(st.title)}</h3>
        <p>${fmt(st.desc)}</p>
      </div>
    </li>`).join("");
}

function renderAll(d) {
  renderIdentity(d);
  renderStats(d.stats);
  renderAbout(d);
  renderServices(d);
  renderProjects(d.projects);
  initGallery(d.gallery);
  renderProcess(d);


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
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.filter((e) => e.isIntersecting).forEach((entry, i) => {
      const node = entry.target;
      setTimeout(() => {
        node.classList.add("visible");
      }, Math.min(i, 6) * 160);
      io.unobserve(node);
    });
  }, { threshold: 0.05, rootMargin: "0px 0px -12% 0px" });

  items.forEach((n) => io.observe(n));
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

  const brew = el("brewFill");

  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = pct + "%";
    /* The cup fills as you read. */
    if (brew) brew.style.height = pct + "%";
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

  function mailtoFallback({ name, email, message, project_type }) {
    const body = `${message}\n\nProject type: ${project_type || "not specified"}\n\nFrom ${name} (${email})`;
    window.location.href =
      `mailto:${CONTACT_FORM.mailto}` +
      `?subject=${encodeURIComponent(`${CONTACT_FORM.subject}: ${name}`)}` +
      `&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app so you can send it.", "ok");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    /* Honeypot tripped: pretend it worked, send nothing. */
    const bot = form.elements.botcheck;
    if (bot && bot.checked) {
      setStatus("Thanks, your message is on its way.", "ok");
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
    const type = form.elements.project_type;
    const payload = {
      name: nameField.input.value.trim(),
      email: emailField.input.value.trim(),
      project_type: type ? type.value : "",
      message: messageField.input.value.trim()
    };

    if (!CONTACT_FORM.accessKey || CONTACT_FORM.accessKey.startsWith("PASTE_")) {
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
        setStatus("Thanks, your message is on its way. I'll reply to that address.", "ok");
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


/* ============================================================
   Cafe ambience
   ------------------------------------------------------------
   Everything you hear is synthesised in the browser with the Web
   Audio API — there is no audio file and nothing is downloaded.
   Four layers: room tone, vinyl crackle, a slow Rhodes-ish chord
   pad, and the occasional cup clink.

   It is on by default. Browsers block audio until the visitor interacts,
   so if that happens it starts on their first move and says so via #soundHint.
   ============================================================ */
const Ambience = (() => {
  let ctx = null, master = null;
  let timers = [], sources = [], playing = false;

  const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);

  /* A slow loop in F. Warm, and it never resolves hard. */
  const CHORDS = [
    [53, 57, 60, 64],  // Fmaj7
    [50, 53, 57, 60],  // Dm7
    [55, 58, 62, 65],  // Gm7
    [48, 52, 55, 58]   // C7
  ];

  function noiseBuffer(seconds, kind) {
    const len = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);

    if (kind === "white") {
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    } else if (kind === "brown") {
      /* Brown noise sits low and reads as room rumble rather than hiss. */
      let last = 0;
      for (let i = 0; i < len; i++) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.02 * white) / 1.02;
        d[i] = last * 3.5;
      }
    } else {
      /* Sparse decaying pops — vinyl surface noise. */
      const pops = Math.floor(seconds * 20);
      for (let p = 0; p < pops; p++) {
        const at = Math.floor(Math.random() * (len - 40));
        const amp = (0.2 + Math.random() * 0.5) * (Math.random() < 0.5 ? -1 : 1);
        for (let k = 0; k < 30; k++) {
          d[at + k] += amp * Math.exp(-k / 4) * (0.4 + Math.random() * 0.6);
        }
      }
    }
    return buf;
  }

  function loopNoise(kind, filterType, cutoff, level) {
    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer(4, kind);
    src.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.value = cutoff;

    const gain = ctx.createGain();
    gain.gain.value = level;

    src.connect(filter).connect(gain).connect(master);
    src.start();
    sources.push(src);
    return filter;
  }

  function playChord(notes, when) {
    notes.forEach((n, i) => {
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, when);
      gain.gain.exponentialRampToValueAtTime(0.055 / (i + 1.4), when + 1.8);
      gain.gain.exponentialRampToValueAtTime(0.0001, when + 5.2);
      gain.connect(master);

      /* Two slightly detuned sines per note gives a soft chorus. */
      [0, 6].forEach((cents) => {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = midi(n);
        osc.detune.value = cents;
        osc.connect(gain);
        osc.start(when);
        osc.stop(when + 5.4);
        sources.push(osc);
      });
    });
  }

  function clink() {
    const when = ctx.currentTime + 0.05;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(0.028, when + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.4);
    gain.connect(master);

    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = 1500 + Math.random() * 700;
    osc.connect(gain);
    osc.start(when);
    osc.stop(when + 0.45);
    sources.push(osc);
  }

  /* Rain: broadband hiss shaped to the 0.9-5kHz band, with a slow LFO on
     the gain so it gusts instead of sitting flat. */
  function rain() {
    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer(4, "white");
    src.loop = true;

    const hp = ctx.createBiquadFilter();
    hp.type = "highpass"; hp.frequency.value = 900;

    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass"; lp.frequency.value = 5200;

    const gain = ctx.createGain();
    gain.gain.value = 0.021;

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.07;
    lfoGain.gain.value = 0.008;
    lfo.connect(lfoGain).connect(gain.gain);
    lfo.start();

    src.connect(hp).connect(lp).connect(gain).connect(master);
    src.start();
    sources.push(src, lfo);
  }

  /* A single drop: a sine whose pitch falls away fast. */
  function drip() {
    const t = ctx.currentTime + 0.02;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.018, t + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    gain.connect(master);

    const osc = ctx.createOscillator();
    osc.type = "sine";
    const f = 850 + Math.random() * 950;
    osc.frequency.setValueAtTime(f, t);
    osc.frequency.exponentialRampToValueAtTime(f * 0.45, t + 0.18);
    osc.connect(gain);
    osc.start(t);
    osc.stop(t + 0.26);
    sources.push(osc);
  }

  /* The shop door: two partials, the higher one decaying first. */
  function chime() {
    const t = ctx.currentTime + 0.03;
    [[988, 0.030, 1.5], [1319, 0.020, 1.1]].forEach(([hz, peak, dur], i) => {
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, t + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(peak, t + i * 0.06 + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.06 + dur);
      gain.connect(master);

      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = hz;
      osc.connect(gain);
      osc.start(t + i * 0.06);
      osc.stop(t + i * 0.06 + dur + 0.05);
      sources.push(osc);
    });
  }

  function schedule(fn, ms) { timers.push(setTimeout(fn, ms)); }

  async function start() {
    if (playing) return false;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;

    ctx = ctx || new AC();
    if (ctx.state !== "running") {
      /* Do NOT simply await resume(). While autoplay is blocked the promise
         can hang forever, which would strand us before arming the fallback.
         Race it against a short timeout instead. */
      await Promise.race([
        ctx.resume().catch(() => {}),
        new Promise((r) => setTimeout(r, 250))
      ]);
    }
    /* If it is still not running, the browser is holding audio until the
       visitor interacts. Report failure so the caller can arm a gesture. */
    if (ctx.state !== "running") return false;

    master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, ctx.currentTime);
    master.gain.exponentialRampToValueAtTime(0.34, ctx.currentTime + 6);
    master.connect(ctx.destination);

    /* Room tone, with a slow filter drift so it never sits still. */
    const roomFilter = loopNoise("brown", "lowpass", 420, 0.038);
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.05;
    lfoGain.gain.value = 120;
    lfo.connect(lfoGain).connect(roomFilter.frequency);
    lfo.start();
    sources.push(lfo);

    loopNoise("crackle", "highpass", 1800, 0.017);
    rain();

    playing = true;

    (function nextDrip() {
      schedule(() => { if (playing) { drip(); nextDrip(); } },
               1400 + Math.random() * 3800);
    })();

    let step = 0;
    (function nextChord() {
      if (!playing) return;
      playChord(CHORDS[step % CHORDS.length], ctx.currentTime + 0.1);
      step++;
      schedule(nextChord, 6200);
    })();

    (function nextClink() {
      schedule(() => { if (playing) { clink(); nextClink(); } },
               12000 + Math.random() * 22000);
    })();

    chime();
    return true;
  }

  function stop() {
    if (!playing) return;
    playing = false;

    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    timers.forEach(clearTimeout);
    timers = [];

    const dying = sources;
    sources = [];
    setTimeout(() => {
      dying.forEach((s) => { try { s.stop(); } catch (e) { /* already stopped */ } });
    }, 900);
  }

  return {
    async toggle() { if (playing) { stop(); return false; } return start(); },
    /* A spoon against a cup, for anything the visitor clicks. */
    tap() { if (playing) clink(); },
    get playing() { return playing; }
  };
})();

function initAmbience() {
  const btn = el("ambienceToggle");
  if (!btn) return;

  const KEY = "avi-ambience";
  const hint = el("soundHint");

  function reflect(on) {
    btn.setAttribute("aria-pressed", String(on));
    btn.setAttribute("aria-label", on ? "Stop cafe ambience" : "Play cafe ambience");
    btn.title = on ? "Ambience on" : "Cafe ambience";
    document.body.classList.toggle("ambience-on", on);
    if (on) hideHint();
  }

  function showHint() { if (hint) hint.classList.add("show"); }
  function hideHint() { if (hint) hint.classList.remove("show"); }

  btn.addEventListener("click", async () => {
    const on = await Ambience.toggle();
    reflect(on);
    try { localStorage.setItem(KEY, on ? "on" : "off"); } catch (e) { /* private mode */ }
  });

  let stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) { /* private mode */ }

  /* Ambience is ON by default. Anyone who turns it off stays off. */
  if (stored === "off") return;

  Ambience.toggle().then((on) => {
    if (on) { reflect(true); return; }

    /* Blocked by the browser's autoplay policy — every major browser
       refuses sound before the visitor interacts. Start on whatever
       they do first, and say so quietly in the meantime. */
    showHint();

    const events = ["pointermove", "pointerdown", "click", "keydown", "scroll", "touchstart", "wheel", "focus"];
    let starting = false;

    /* Only tear down once it actually starts. An untrusted or early event
       can fail, and stranding the visitor with no sound and no retry
       would be worse than trying again on their next move. */
    const wake = async () => {
      if (starting || Ambience.playing) return;
      starting = true;
      const on = await Ambience.toggle();
      starting = false;

      if (!on) return;
      events.forEach((ev) => window.removeEventListener(ev, wake));
      reflect(true);
      hideHint();
    };
    events.forEach((ev) => window.addEventListener(ev, wake, { passive: true }));

    /* Stop showing the hint after a while, but keep listening. */
    setTimeout(hideHint, 14000);
  });
}


/** Splits each section title into words so they settle in one at a time.
 *  The hero name is left whole — its gradient is clipped to the text, and
 *  transformed children would break that clip. */
function initTextReveal() {
  document.querySelectorAll(".section-title").forEach((h) => {
    const words = h.textContent.trim().split(/\s+/);
    h.innerHTML = words
      .map((w, i) => `<span class="w"><i style="transition-delay:${i * 90}ms">${esc(w)}</i></span>`)
      .join(" ");
  });

  /* The header triggers them, so it needs to be observed. */
  document.querySelectorAll(".section-head").forEach((n) => n.classList.add("reveal", "reveal-title"));
}


/** Builds the sticky left panel from the sections on the right, so the two
 *  sides can never drift out of sync — the chapter list is derived, not
 *  duplicated. Each chapter cross-fades as its section takes the viewport. */
function initChapters() {
  const deck = el("chapterDeck");
  const rail = el("chapterRail");
  if (!deck || !rail) return;

  const sections = [...document.querySelectorAll(".split-right .section")];
  if (!sections.length) return;

  const chapters = sections.map((sec) => {
    const num = sec.querySelector(".section-num");
    const title = sec.querySelector(".section-title");
    const lede = sec.querySelector(".section-lede");
    return {
      id: sec.id,
      num: num ? num.textContent.trim() : "",
      /* Titles are word-split by now, so read the flattened text. */
      title: title ? title.textContent.replace(/\s+/g, " ").trim() : "",
      lede: lede ? lede.textContent.trim() : "",
      el: sec
    };
  });

  deck.innerHTML = chapters.map((c, i) => `
    <article class="chapter${i === 0 ? " active" : ""}" data-chapter="${esc(c.id)}">
      <p class="chapter-num">${esc(c.num)} <span>/ ${String(chapters.length).padStart(2, "0")}</span></p>
      <h2 class="chapter-title">${esc(c.title)}</h2>
      ${c.lede ? `<p class="chapter-lede">${esc(c.lede)}</p>` : ""}
    </article>`).join("");

  rail.innerHTML = chapters.map((c, i) => `
    <li class="rail-item${i === 0 ? " on" : ""}" data-rail="${esc(c.id)}">
      <a href="#${esc(c.id)}">${esc(c.title)}</a>
    </li>`).join("");

  const panels = [...deck.querySelectorAll(".chapter")];
  const rails = [...rail.querySelectorAll(".rail-item")];

  function setActive(id) {
    panels.forEach((p) => p.classList.toggle("active", p.dataset.chapter === id));
    rails.forEach((r) => r.classList.toggle("on", r.dataset.rail === id));
  }

  /* Whichever section owns the middle band of the viewport is the chapter. */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
  }, { rootMargin: "-45% 0px -45% 0px" });

  sections.forEach((sec) => io.observe(sec));
}


/** A custom dropdown: styled panel, keyboard support, and a hidden input so
 *  the form submits exactly like a native select did. */
const PROJECT_TYPES = [
  "Just saying hi",
  "Not sure yet",
  "One page",
  "Multi-page site",
  "Web app",
  "Fix or redesign"
];

function initSelect() {
  const root = el("cfType");
  const btn = el("cfTypeBtn");
  const list = el("cfTypeList");
  const value = el("cfTypeValue");
  const input = el("cfTypeInput");
  if (!root || !btn || !list || !input) return;

  let open = false;
  let active = 0;

  list.innerHTML = PROJECT_TYPES.map((t, i) => `
    <li class="select-option${i === 0 ? " selected" : ""}" role="option"
        id="cfType-opt-${i}" data-value="${esc(t)}"
        aria-selected="${i === 0 ? "true" : "false"}">${esc(t)}</li>`).join("");

  const options = [...list.querySelectorAll(".select-option")];

  function choose(i) {
    active = i;
    options.forEach((o, n) => {
      o.classList.toggle("selected", n === i);
      o.setAttribute("aria-selected", n === i ? "true" : "false");
    });
    value.textContent = PROJECT_TYPES[i];
    input.value = PROJECT_TYPES[i];
  }

  function highlight(i) {
    active = (i + options.length) % options.length;
    options.forEach((o, n) => o.classList.toggle("active", n === active));
    list.setAttribute("aria-activedescendant", options[active].id);
    options[active].scrollIntoView({ block: "nearest" });
  }

  function setOpen(next) {
    open = next;
    root.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    if (open) { highlight(active); list.focus(); }
  }

  btn.addEventListener("click", () => setOpen(!open));

  list.addEventListener("click", (e) => {
    const opt = e.target.closest(".select-option");
    if (!opt) return;
    choose(options.indexOf(opt));
    setOpen(false);
    btn.focus();
  });

  list.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); highlight(active + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); highlight(active - 1); }
    else if (e.key === "Home") { e.preventDefault(); highlight(0); }
    else if (e.key === "End") { e.preventDefault(); highlight(options.length - 1); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(active); setOpen(false); btn.focus(); }
    else if (e.key === "Escape") { e.preventDefault(); setOpen(false); btn.focus(); }
  });

  btn.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(true); }
  });

  document.addEventListener("click", (e) => {
    if (open && !root.contains(e.target)) setOpen(false);
  });
}


/** Damped scrolling.
 *
 *  The browser moves the page instantly with each wheel tick. This takes the
 *  wheel over and eases the page toward a target instead, so a flick drifts to
 *  a stop rather than jumping.
 *
 *  WHEEL_STEP  how far one tick asks for (lower = slower)
 *  EASE        how fast it closes the gap each frame (lower = longer glide)
 *
 *  It stays out of the way of: touch, reduced-motion, pinch zoom, and any
 *  element that does its own scrolling.
 */
const SCROLL = { WHEEL_STEP: 0.42, EASE: 0.055 };

/** A soft clink when you press something. Only while the ambience is on,
 *  so the page is never noisy for someone who did not ask for sound. */
function initTapSounds() {
  document.addEventListener("click", (e) => {
    if (!e.target.closest) return;
    const hit = e.target.closest(
      '.rail-item a, .nav a, .btn, .icon-btn, .select-option, ' +
      '.select-btn, .gallery-nav, .gallery-dot, .project-links a, .contact-card'
    );
    if (hit) Ambience.tap();
  }, { passive: true });
}

function initSmoothScroll() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer: fine)").matches;
  if (reduce || !fine) return;

  /* Tell CSS to stop doing its own scrolling, or the two fight each other. */
  document.documentElement.classList.add("js-scroll");

  let target = window.scrollY;
  let current = target;
  let running = false;

  const maxScroll = () =>
    document.documentElement.scrollHeight - window.innerHeight;

  function frame() {
    const gap = target - current;

    if (Math.abs(gap) < 0.5) {
      current = target;
      window.scrollTo(0, current);
      running = false;
      return;
    }

    current += gap * SCROLL.EASE;
    window.scrollTo(0, current);
    requestAnimationFrame(frame);
  }

  function run() {
    if (running) return;
    running = true;
    requestAnimationFrame(frame);
  }

  function scrollToY(y) {
    target = Math.max(0, Math.min(maxScroll(), y));
    run();
  }

  window.addEventListener("wheel", (e) => {
    if (e.ctrlKey) return;                                  // pinch zoom
    if (e.target.closest && e.target.closest(".gallery-viewport, .select-list")) return;
    e.preventDefault();
    scrollToY(target + e.deltaY * SCROLL.WHEEL_STEP);
  }, { passive: false });

  /* Anything that is not the wheel (keyboard, scrollbar drag, find-in-page)
     scrolls natively; re-sync so the next tick starts from where we are. */
  window.addEventListener("scroll", () => {
    if (!running) { target = current = window.scrollY; }
  }, { passive: true });

  window.addEventListener("resize", () => { target = current = window.scrollY; });

  /* Anchor links glide at the same pace instead of snapping. */
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute("href").slice(1);
    const dest = id ? document.getElementById(id) : null;
    if (!dest) return;
    e.preventDefault();

    /* Sections are taller than the screen with their content centred, so
       aim for the middle of the section, not its top edge. */
    const top = dest.getBoundingClientRect().top + window.scrollY;
    const centred = dest.classList.contains("section")
      ? top + (dest.offsetHeight - window.innerHeight) / 2
      : top;
    scrollToY(centred);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll(resumeData);
  initTextReveal();
  initChapters();
  initTheme();
  initReveal();
  initScrollSpy();
  initScrollProgress();
  initNavToggle();
  initContactForm();
  initSelect();
  initSmoothScroll();
  initTapSounds();
  initAmbience();
});
