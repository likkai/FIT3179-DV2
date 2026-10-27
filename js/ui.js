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
};
