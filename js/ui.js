/* Small page UI elements. */
/* Each helper is optional, does nothing if its elements are absent. */
const PageUI = {
  /* Thin progress bar at the top of the window. */
  progress(selector = ".progress") {
    const bar = document.querySelector(selector);
    if (!bar) return;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
  },

  /* Highlight the navigation link of the chapter currently in view */
  activeChapter(linkSelector = "[data-target]", chapterSelector = ".chapter") {
    const links = document.querySelectorAll(linkSelector);
    const chapters = document.querySelectorAll(chapterSelector);
    if (!links.length || !chapters.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("is-active", a.dataset.target === e.target.id));
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    chapters.forEach((c) => io.observe(c));
  },
};
