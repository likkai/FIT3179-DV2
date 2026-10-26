const PageParts = {
  /* Footer */
  footer(f) {
    return `
      <footer class="footer">
        <div class="page">
          <div class="footer__grid">
            <div class="footer__block"><h3>${f.authorLabel}</h3><div class="footer__fill"><!-- author name, student ID --></div></div>
            <div class="footer__block"><h3>${f.sourcesLabel}</h3><div class="footer__fill"><!-- data sources, URLs, image credits --></div></div>
          </div>
          <p class="footer__note">${f.note}</p>
        </div>
      </footer>`;
  },
};
