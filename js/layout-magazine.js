/* Layout of the page */
const ARRANGEMENT_MAGAZINE = {
  "big-picture":    [[["c1a", 12]], [["c1b", 12]]],
  "what-changed":   [[["c2a", 12]], [["c2c", 12]], [["c2b", 12]]],
  "place-matters":  [[["c3a", 12]], [["c3b", 12]], [["c3c", 12]]],
  "girls-and-boys": [[["c4a", 12]], [["c4b", 12]], [["c4c", 12]]],
  "school-to-work": [[["c5a", 12]], [["c5c", 12]], [["c5b", 12]], [["c5d", 12]]],
};

const MagazineLayout = {
  render(root) {
    const d = DASHBOARD;
    root.innerHTML = `
      <div class="progress"></div>
      <header class="page mag-hero-wrap" id="top">
        <div class="mag-hero">
          <span class="eyebrow">FIT3179 Data Visualisation 2 &middot; Australia</span>
          <h1 class="mag-hero__title">${d.headline}</h1>
          <p class="mag-hero__deck">${d.deck}</p>
          <div class="mag-stats">
            ${d.stats.map((s) => `<div class="mag-stat"><div class="mag-stat__value">${s.value}</div><div class="mag-stat__label">${s.label}</div></div>`).join("")}
          </div>
        </div>
        <nav class="ribbon" aria-label="Chapters">
          ${d.chapters.map((c) => `<a href="#${c.id}" style="--accent:${c.accent}"><span>${c.number}</span>${c.title}</a>`).join("")}
        </nav>
      </header>

      <main class="page">
        ${d.chapters.map((c, i) => MagazineLayout.chapter(c, i)).join("")}
      </main>

      ${PageParts.footer(d.footer)}`;
  },

  chapter(c, index) {
    const rows = ARRANGEMENT_MAGAZINE[c.id] || [];
    return `
      <section class="mag-chapter ${index % 2 ? "is-flipped" : ""}" id="${c.id}" style="--accent:${c.accent}">
        <aside class="mag-tile">
          <div class="mag-tile__inner">
            <span class="mag-tile__num">${c.number}</span>
            <h2 class="mag-tile__title">${c.title}</h2>
            <p class="mag-tile__lead">${c.lead}</p>
            <p class="mag-tile__takeaway"><span>The takeaway</span>${c.takeaway}</p>
          </div>
        </aside>
        <div class="mag-body">
          ${rows.map((row) => `<div class="grid mag-row">${row.map(([id, span]) => Dashboard.cardHTML(id, c.charts[id], "span-" + span)).join("")}</div>`).join("")}
        </div>
      </section>`;
  },
};
