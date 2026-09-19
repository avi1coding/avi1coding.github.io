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

  stats: [
    { num: "New Jersey", label: "Based in" },
    { num: "JavaScript", label: "Main language" },
    { num: "Java",       label: "Learning now" }
  ],

  contactLede: "Want a site built? Tell me what it's for. Just want to say hi? Same form.",
  contact: [
    {
      name: "Email",
      icon: "✉",
      label: "avimehta129@gmail.com",
      href: "mailto:avimehta129@gmail.com",
      note: "Best way to reach me"
    }
  ],

  about: [
    "I started coding in 2021 with Scratch and Code.org. In 2024 I moved to HTML, CSS and JavaScript, and in 2025 I picked up MySQL and Python. Now I'm currently learning Java.",
    "Other than coding, I also do robotics, band, and debate. I like table tennis and biking."
  ],





  servicesLede: "I also build sites for other people. No templates. I write the code, and it's yours.",
  pricingNote: "Half is paid upfront, the other half is paid before it goes live. Domain and hosting are not provided. <a href=\"terms.html\">Full terms</a>",
  services: [
    {
      icon: "◐",
      title: "One-page sites",
      price: "from $100",
      desc: "One page for a club, an event, a business, or yourself, with everything on it.",
      points: ["Custom design", "Mobile ready", "Contact form"]
    },
    {
      icon: "◑",
      title: "Multi-page websites",
      price: "from $250",
      desc: "Separate pages such as about, gallery and contact, that you can add to later.",
      points: ["Navigation", "Photo galleries", "Forms & email"]
    },
    {
      icon: "◈",
      title: "Web apps",
      price: "from $400",
      desc: "Logins, a database and a dashboard behind it.",
      points: ["Accounts & logins", "Databases", "Dashboards"]
    },
    {
      icon: "◷",
      title: "Fixes & redesigns",
      price: "from $75",
      desc: "If your site already exists, I rebuild the front end and keep your text.",
      points: ["Speed", "Mobile layout", "Fresh design"]
    }
  ],

  processLede: "From the first message to a live site.",
  processNote: "Payment, changes, domains and who owns the code at the end are all written out on the <a href=\"terms.html\">terms page</a>.",
  process: [
    { step: "01", title: "Tell me what you need", desc: "Message me what the site is for and what you want on it. I'll reply with what I would build." },
    { step: "02", title: "I design it", desc: "You'll see the layout before I build anything, so changes are quick to make at this stage." },
    { step: "03", title: "I build it", desc: "I write it in HTML, CSS and JavaScript, or React if it needs accounts. You get a live link while it is being built." },
    { step: "04", title: "You get the code", desc: "I test it on multiple devices and browsers, then send you the complete code." }
  ],




  
  learning: [
    { icon: "◇", title: "Machine Learning",
      desc: "How models learn from data, starting with the basics in Python." },
    { icon: "◆", title: "Java",
      desc: "A new language for me. Stricter than JavaScript, and used for bigger apps." },
    { icon: "◈", title: "Sorting Algorithms",
      desc: "How the classic sorts work, and why one beats another on different data." }
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
          { name: "React",      note: "building UI" },
          { name: "TypeScript", note: "type-safe JS" },
          { name: "Bootstrap",  note: "layout & components" }
        ]
      },
      {
        name: "Back End & Data",
        color: "var(--mm-2)",
        skills: [
          { name: "Node.js", note: "servers & tooling" },
          { name: "Python",  note: "since 2025" },
          { name: "MySQL",   note: "storing data" }
        ]
      },
      {
        name: "AI",
        color: "var(--mm-3)",
        skills: [
          { name: "Claude",         note: "building & debugging" },
          { name: "AI integration", note: "connecting APIs" },
          { name: "Prompting",      note: "getting better output" }
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
  el("heroName").textContent = d.headline;
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
                  class="mm-spoke" style="stroke:${esc(color)}" />`;
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
                      class="mm-node mm-node-leaf" style="stroke:${esc(b.color)}" />
              ${circleLabel(leaf.x, leaf.y, leaf.name, R_LEAF, 11.5, "mm-label mm-label-leaf")}
            </g>`;
    });

    g += `<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="${R_BR}"
                  class="mm-node mm-node-branch" style="fill:${esc(b.color)}" />`;
    g += circleLabel(b.x, b.y, b.name, R_BR, 12.5, "mm-label mm-label-branch");

    g += `</g>`;
    svg += g;
  });

  svg += `<circle cx="${C}" cy="${C}" r="${R_ROOT}" class="mm-node mm-node-root" />`;
  svg += circleLabel(C, C, map.root, R_ROOT, 19, "mm-label mm-label-root");

  const list = map.branches.map((b) => `
    <li class="mm-item">
      <h3 style="color:${esc(b.color)}">${esc(b.name)}</h3>
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
      ${sv.price ? `<span class="service-price">${fmt(sv.price)}</span>` : ""}
      <span class="service-icon" aria-hidden="true">${esc(sv.icon)}</span>
      <h3>${fmt(sv.title)}</h3>
      <p class="service-desc">${fmt(sv.desc)}</p>
      <ul class="service-points">
        ${sv.points.map((pt) => `<li>${fmt(pt)}</li>`).join("")}
      </ul>
    </article>`).join("");

  const note = el("pricingNote");
  /* This one string carries a link, so it is written by hand rather than
     escaped. Nothing here comes from a visitor. */
  if (note && d.pricingNote) note.innerHTML = d.pricingNote;
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

  const note = el("processNote");
  if (note && d.processNote) note.innerHTML = d.processNote;
}

function renderAll(d) {
  renderIdentity(d);
  renderStats(d.stats);
  renderAbout(d);
  renderServices(d);
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

  apply(stored === "dark" ? "dark" : "light");

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

  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = pct + "%";
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

/** Splits each section title into words so they settle in one at a time.
 *  The hero name is left whole so its settle-in animation isn't broken
 *  up by per-word transforms. */
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
    if (e.target.closest && e.target.closest(".select-list")) return;
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

    /* Native anchor navigation moves keyboard focus to the destination;
       our custom scroller was skipping that. Without it, the skip link
       visually moves the page but never actually lets a keyboard user
       past the header. preventScroll avoids fighting our own animation,
       and focus() is a harmless no-op on a target with no tabindex. */
    dest.focus({ preventScroll: true });
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
});
