const PageParts = {
  /* Conclusion */
  conclusion(c) {
    return `
      <section class="conclusion page" id="conclusion">
        <div class="conclusion__box">
          <span class="eyebrow">${c.label}</span>
          <h2 class="conclusion__title">${c.title}</h2>
          <p class="conclusion__lead">${c.lead}</p>
        </div>
      </section>`;
  },

  /* Footer */
  footer(f) {
    return `
      <footer class="footer">
        <div class="page">
          <div class="footer__grid">
            <div class="footer__block"><h3>${f.authorLabel}</h3><div class="footer__fill">${f.author.map((line) => `<p>${line}</p>`).join("")}</div></div>
            <div class="footer__block"><h3>${f.sourcesLabel}</h3><div class="footer__fill"><ol>${f.sources.map((line) => `<li>${line}</li>`).join("")}</ol></div></div>
          </div>
          <p class="footer__note">${f.note}</p>
        </div>
      </footer>`;
  },
};
