/* Description and chapter text are read from this file */
const DASHBOARD = {
  title: "DV2",
  headline: "Subject Choices in Senior Secondary School",
  deck: "Senior secondary subject choices have shifted over years. This page follows those choices across subjects, states and gender, then on to university study, jobs and pay.",
  period: "Unless stated otherwise, charts cover 2015-2024.",

  stats: [
    { value: "550k",     label: "Senior secondary students in 2024, up 14% since 2010" },
    { value: "29% → 21%", label: "Share of Year 12 students taking an Arts subject, 2010 to 2024" },
    { value: "+22% / −11%", label: "Change in senior students from 2010 to 2024: Victoria against Tasmania" },
    { value: "34% vs 22%", label: "Boys against girls taking a Technology subject in Year 12, 2024" },
  ],

  chapters: [
    {
      id: "big-picture", number: "01", title: "The big picture", accent: "var(--accent-1)",
      lead: "English is taken by about 8 in 10 Year 12 students and maths by about 7 in 10. Beyond those two, the mix of subjects has narrowed since 2015.",
      takeaway: "Students are not spreading out. They are crowding into fewer learning areas compared to 2015.",
      charts: {
        c1a: "Year 12 subjects show clear enrolment tiers. <strong>English and Mathematics dominate</strong> with over two-thirds participation, followed by <strong>Society and Environment and Science at around 50%</strong>. Specialised electives each capture <strong>under 30%</strong> of the cohort.",
        c1b: "Enrolment concentration rose sharply post-2020. Concentration had been steadily increasing after 2015, but accelerated to +89.1 HHI points by 2024 as students funneled into fewer core learning areas.",
      },
    },
    {
      id: "what-changed", number: "02", title: "What changed", accent: "var(--accent-2)",
      lead: "Between 2015 and 2024, five of the six main learning areas lost share of students, led by Technology and Arts. The only exception was English, which grew slightly. Student numbers grew overall, but not evenly.",
      takeaway: "Victoria led student growth (+16%) while South Australia saw slight contraction (1.2%), showing how local demographics shape subject demand differently by state.",
      charts: {
        c2a: "<strong>Enrolment rates fell across most major learning areas</strong>. The steepest declines occurred in Technology and Arts, while English maintained high participation.",
        c2b: "Student population growth diverged sharply by region. Victoria and Western Australia led national growth whereas South Australia and Tasmania experienced minor contractions.",
        c2c: "Student preferences shifted toward Japanese and Spanish at the expense of established programs. Japanese maintained its position as the top language share, while traditional European offerings like German and Italian continued to contract.",
      },
    },
    {
      id: "place-matters", number: "03", title: "Place matters", accent: "var(--accent-3)",
      lead: "Where a student lives shapes what is on offer. Some states lean towards maths and science, others towards technology and business. Regional priorities and course availability naturally create distinct subject profiles.",
      takeaway: "Subject popularity varies dramatically across Australia, making a discipline common in one state surprisingly rare in another.",
      charts: {
        c3a: "Subject choices vary significantly across states. Tasmania shows the greatest divergence, with higher Health and Physical Education, and lower English enrolment. Queensland (QLD) leads in Mathematics while Victoria (VIC) leads in Science.",
        c3b: "All states and territories expanded senior enrolments between 2021 and 2025, driving a net national addition of +57,202 students. Victoria (VIC) and New South Wales (NSW) led national growth, together accounting for over 52% of total expansion.",
        c3c: "Business study concentrates heavily in eastern commercial hubs. New South Wales (NSW) and Victoria (VIC) lead state participation with relative popularity well above average, whereas regional markets like the Northern Territory (NT) show considerably lower relative engagement.",
      },
    },
    {
      id: "girls-and-boys", number: "04", title: "Girls and boys", accent: "var(--accent-4)",
      lead: "Girls are over-represented in the Arts, Science, and Health and Physical Education, while boys lead in Technology and Mathematics. The participation gaps are large and are not all closing over time.",
      takeaway: "Arts shows the widest gender gap overall, taken by 26% of girls compared to 15% of boys.",
      charts: {
        c4a: "Girls lead participation in six of eight learning areas, with Arts (+11.4 pp) and Science (+9.4 pp) showing the largest female leads. Technology (+11.2 pp) and Mathematics (+6.0 pp) remain male-dominated exceptions.",
        c4b: "Subject gender gaps remained largely stable from 2015 to 2024. Arts (+14 pp) and Languages (+10 pp) maintained the largest female leads, while Technology and Business remained male-skewed (-11 pp).",
        c4c: "Female Engineering enrolments surged by 183% between 2015 and 2024, far outpacing male growth (+28%). Accounting and Business showed stronger male expansion, while Mathematics maintained nearly balanced trajectories between genders.",
      },
    },
    {
      id: "school-to-work", number: "05", title: "From school to work", accent: "var(--accent-5)",
      lead: "Do school choices match what universities teach? For Engineering, secondary engineering interest surged 35%, outstripping university growth of 16%.",
      takeaway: "University is not the only road. Vocational study makes up 97% of food and hospitality.",
      charts: {
        c5a: "University enrolments outpaced school participation in most fields, with the widest gap in Computing and IT (+171% versus −28%). Drama also diverged (−28% versus +6%), while Engineering showed the reverse (+35% versus +16%).",
        c5b: "Engineering vacancies grew in most states since 2019, led by Western Australia, Queensland, South Australia and Tasmania, while Victoria recorded a notable decline in monthly openings.",
        c5c: "Educational pathways reflect distinct sector specialisation. Food, hospitality and personal services is dominated by vocational qualifications (97%), while IT and physical sciences favour university study, with higher education shares reaching 95%.",
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
