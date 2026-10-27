/* Description / chapter text are read from this file */
const DASHBOARD = {
  title: "DV2",
  headline: "Subject Choices in Senior Secondary School",
  deck: "Senior secondary subject choices have shifted over years. This page follows those choices across subjects, states and gender, then on to university study, jobs and pay.",

  stats: [
    { value: "550k",     label: "Senior secondary students in 2024, up 14% since 2010" },
    { value: "29% → 21%", label: "Share of Year 12 students taking an Arts subject, 2010 to 2024" },
    { value: "+22% / −11%", label: "Change in senior students from 2010 to 2024: Victoria against Tasmania" },
    { value: "34% vs 22%", label: "Boys against girls taking a Technology subject in Year 12, 2024" },
  ],

  chapters: [
    {
      id: "big-picture", number: "01", title: "The big picture", accent: "var(--accent-1)",
      lead: "English is taken by about 8 in 10 Year 12 students and maths by about 7 in 10. Beyond those two, the mix of subjects has narrowed since 2010.",
      takeaway: "Students are not spreading out. They are crowding into fewer learning areas than fifteen years ago.",
      charts: {
        c1a: "Year 12 subjects show clear enrolment tiers. <strong>English and Mathematics dominate</strong> with over two-thirds participation, followed by <strong>Society and Sciences at around 50%</strong>. Specialised electives each capture <strong>under 30%</strong> of the cohort.",
        c1b: "Enrolment concentration <strong>rose sharply post-2020</strong>. Distribution remained relatively balanced through 2017, but accelerated to <strong>+77.2 HHI points</strong> by 2024 as students funneled into fewer core subjects.",
      },
    },
    {
      id: "what-changed", number: "02", title: "What changed", accent: "var(--accent-2)",
      lead: "Between 2010 and 2024 every one of the eight main learning areas lost share of students, led by the Arts, Society and Environment, and Technology. Student numbers grew, but not evenly.",
      takeaway: "Victoria added the most students (+22%) while Tasmania lost 11%, so the same subject can matter very differently from state to state.",
      charts: {
        c2a: "<strong>Enrolment rates fell across all major learning areas</strong>. The steepest declines occurred in Arts, Society and Environment, and Technology, while English, Mathematics and Science saw more moderate losses.",
        c2b: "Student population growth diverged sharply by region. Victoria led national growth while Tasmania contracted significantly. Most jurisdictions expanded above 10%, whereas South Australia experienced zero net growth.",
        c2c: "Student preferences shifted toward Japanese and Spanish at the expense of established programs. Japanese overtook Chinese as the top language share, while traditional European offerings like German and Italian continued to contract.",
      },
    },
    {
      id: "place-matters", number: "03", title: "Place matters", accent: "var(--accent-3)",
      lead: "Where a student lives shapes what is on offer. Some states lean towards maths and science, others towards technology, business or vocational courses. States also count subjects in different ways, so compare with care.",
      takeaway: "A subject that is common in one state can be rare in the next, even before students choose.",
      charts: {
        c3a: "Subject choices vary significantly across states. Tasmania shows the greatest divergence, with higher Health and Physical Education, and lower English enrolment. Queensland (QLC) leads in Mathematics while Victoria (VIC) leads in Science.",
        c3b: "Eastern seaboard growth drove almost the entire national expansion. Victoria (+9,963) and New South Wales (+4,939) alone accounted for over 85% of total gains, easily absorbing the net losses recorded in Tasmania and South Australia.",
        c3c: "Business study concentrates heavily in eastern commercial hubs. New South Wales and Victoria lead state participation with uptake indices well above average, whereas regional markets like the Northern Territory and Western Australia show considerably lower relative engagement.",
      },
    },
    {
      id: "girls-and-boys", number: "04", title: "Girls and boys", accent: "var(--accent-4)",
      lead: "Girls are over-represented in the Arts, Science and Health and PE; boys in Technology and Mathematics. The gaps are large, and they are not all closing.",
      takeaway: "Technology is the widest gap: 34% of boys take it, against 22% of girls.",
      charts: {
        c4a: "Girls lead participation in six of eight learning areas, with Technology the main male-dominated exception (+14.8 pp). Girls lead in Arts (+12.6 pp) and Society & Environment (+10.1 pp).",
        c4b: "Gender gaps remained largely stable, with Science shifting towards female participation. Arts (+14 pp) and Languages (+11 pp) maintained the largest female leads, while Technology & Business remained male-skewed (-11 pp). Science shifted from parity in 2012 to a female lead (+6 pp) in 2025.",
        c4c: "Female Engineering enrolments surged by 228%, far outpacing male growth (+28%). Business and Accounting showed stronger male growth, while other subjects followed more balanced growth patterns across genders.",
      },
    },
    {
      id: "school-to-work", number: "05", title: "From school to work", accent: "var(--accent-5)",
      lead: "Do school choices match what universities teach and what employers want? For IT the answer is no: school computing fell 28% while university IT grew 171% and online IT job ads dropped 39%.",
      takeaway: "University is not the only road. Vocational study makes up 97% of food and hospitality, 71% of architecture and building and 54% of engineering study.",
      charts: {
        c5a: "University enrolments outpaced school participation in most fields, with the widest gap in Computing and IT (+171% versus −28%). Drama also diverged (−28% versus +6%), while Engineering showed the reverse (+35% versus +16%).",
        c5b: "Engineering vacancies grew in most states since 2019, led by Western Australia, Queensland, South Australia and Tasmania, while Victoria recorded a notable decline in monthly openings.",
        c5c: "Educational pathways reflect distinct sector specialisation. Food, hospitality and personal services are dominated by vocational qualifications (97%), while IT and physical sciences favour university study, with higher education shares reaching 95%.",
        c5d: "Graduate incomes vary noticeably across states. Western Australia leads the nation at $157k, substantially outpacing eastern states such as New South Wales ($127k), Victoria ($120k) and South Australia ($120k).",
      },
    },
  ],

  footer: {
    authorLabel: "Author",
    author: [
      "Brand Chong Lik Kai",
      "Student ID: 35498846"
    ],
    sourcesLabel: "Sources and credits",
    sources: [
      "<a href=\"https://www.acara.edu.au/reporting/national-report-on-schooling-in-australia/year-12-subject-enrolments\">https://www.acara.edu.au/reporting/national-report-on-schooling-in-australia/year-12-subject-enrolments</a>",
    ],
    note: "",
  },
};
