/**
 * Modify CHARTS to add or swap visualizations. Idioms are just description. 
 * 
 * - height: Space reserved prior to chart load.
 * - fixed: true: Enforces a fixed height for specs with "height": "container" to prevent layout growth loops.
 */
const CHARTS = {
  c1a: { file: "charts/C1_Chart_1_Overall_Subject.vl.json", idiom: "Lollipop chart", height: 440 },
  c1b: { file: "charts/C1_Chart_3_Subject_Diversify.vl.json", idiom: "Line chart", height: 440, fixed: true },
  c2a: { file: "charts/C2_Chart_1_Learning_Area_Change.vl.json", idiom: "Slope chart", height: 460, fixed: true },
  c2c: { file: "charts/C2_Chart_4_Languages_Change.vl.json", idiom: "Dumbbell chart", height: 460, fixed: true },
  c2b: { file: "charts/C2_Chart_2_National_Student_Population.vl.json", idiom: "Choropleth map", height: 460, fixed: true },
  c3a: { file: "charts/C3_Chart_1_Heatmap_State_Learning_Area_Choice.vl.json", idiom: "Heatmap", height: 460 },
  c3b: { file: "charts/C3_Chart_3_Change_in_Student.vl.json", idiom: "Waterfall chart", height: 440, fixed: true },
  c3c: { file: "charts/C3_Chart_4_National_Participation_Rate.vl.json", idiom: "Non-contiguous cartogram", height: 440 },
  c4a: { file: "charts/C4_Chart_1_Gender_Gap.vl.json", idiom: "Diverging bar chart", height: 420 },
  c4b: { file: "charts/C4_Chart_2_Gender_Trend.vl.json", idiom: "Heatmap", height: 460 },
  c4c: { file: "charts/C4_Chart_3_Change_in_Group.vl.json", idiom: "Scatter plot", height: 460 },
  c5a: { file: "charts/C5_Chart_1_Trend_Alignment.vl.json", idiom: "Dumbbell chart", height: 440 },
  c5b: { file: "charts/C5_Chart_2_Workforce_Trend.vl.json", idiom: "Graduated symbol map", height: 460 },
  c5c: { file: "charts/C5_Chart_3_Important_Pathway.vl.json", idiom: "Stacked bar chart", height: 380 },
  c5d: { file: "charts/C5_Chart_4_Average_Income.vl.json", idiom: "Choropleth map", height: 460 },
};

/* Default look for charts if not specified */
const CHART_CONFIG = {
  font: '"Source Sans 3", "Segoe UI", sans-serif',
  title: { font: 'Georgia, "Times New Roman", Times, serif', fontSize: 19, subtitleFontSize: 15, offset: 12 },
  axis: { labelFontSize: 14, titleFontSize: 13 },
  legend: { labelFontSize: 11, titleFontSize: 13 },
  text: { fontSize: 14 },
};

const Dashboard = {
  /* Embed one chart into `el` (an element with data-chart="c1a"). */
  embed(el) {
    const meta = CHARTS[el.dataset.chart];
    if (!meta) { el.textContent = "Unknown chart: " + el.dataset.chart; return Promise.resolve(); }
    if (el.dataset.embedded) return Promise.resolve();

    el.dataset.embedded = "1";
    el.classList.add("is-loading");
    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    return fontsReady.then(() => vegaEmbed(el, meta.file, { actions: false, renderer: "svg", config: CHART_CONFIG }))
      .then(() => {
        el.classList.remove("is-loading");

        /* Keep slider/menu controls outside a fixed-height box so they cannot overflow it */
        const controls = el.querySelector(".vega-bindings");
        if (controls && meta.fixed) el.parentElement.insertBefore(controls, el.nextSibling);
      })
      .catch((err) => {
        el.classList.remove("is-loading");
        el.innerHTML = '<p class="card__error">This chart could not be loaded (' + meta.file + ').</p>';
        console.error(meta.file, err);
      });
  },

  /* Embed every chart as soon as the page is ready */
  embedAll(root = document) {
    root.querySelectorAll("[data-chart]").forEach((el) => Dashboard.embed(el));
  },

  /* HTML for one chart card */
  cardHTML(id, caption, spanClass) {
    const meta = CHARTS[id];
    return `<figure class="card ${spanClass}" id="fig-${id}">
      <div class="card__chart" data-chart="${id}" style="${meta.fixed ? "height" : "min-height"}:${meta.height}px"></div>
      ${caption ? `<figcaption class="card__caption">${caption}</figcaption>` : ""}
    </figure>`;
  },
};
