export const aboutData = {
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. SedLorem ipsum odor amet, consectetuer adipiscing elit. Lectus eros dis class ridiculus habitant efficitur phasellus. Fusce ad placerat risus porta metus vitae blandit lacinia? Et scelerisque suspendisse posuere ridiculus sodales eleifend ac sed. Placerat sagittis massa ornare nisi netus nec.`,
  skills: [
    {
      type: "Programming Languages",
      list: ["C/C++", "Python", "JavaScript", "MATLAB"],
    },
    {
      type: "Languages",
      list: ["English", "Chinese", "Spanish", "French", "German"],
    },
    {
      type: "Mathematics",
      list: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
    },
    {
      type: "Databases",
      list: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis"],
    },
    {
      type: "Operating Systems",
      list: ["Windows", "Linux", "macOS"],
    },
  ],
  skillIcons: [
    'amazonaws',
  'android',
  'androidstudio',
  'antdesign',
  'typescript',
  'vercel',
  'visualstudiocode'
  ],
  research: {
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit:`,
    topics: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Incididunt ut labore",
    ],
  },
  publication: {
    /* 
      You can remove the publication section if you don't want.
      Typically, the last sentence in each publication is deemed as the publisher and will be italicized.
      If a publication entry ends with a publication status like 'Submitted.', 'Accepted.', 'Under review.', 
      'Published.', it will be displayed without italicization, and the previous sentence will be displayed 
      as the publisher. If you don't want to provide the code and paper link, you can remove the 'code' and 
      'paper' fields.
    */
    list: [
      {
        title: "John Doe, Jane Doe, et al. (2024). Lorem ipsum dolor sit amet. Consectetur adipiscing elit.",
        paper: "https://example.com",
        code: "https://example.com",
      },
      {
        title: "John Doe, Jane Doe, et al. (2023). Volutpat ipsum pellentesque iaculis porttitor eu imperdiet. Taciti tincidunt eu egestas tellus. Submitted.",
      },

    ],
    myName: "John Doe",
  },
  interests: [
    /* Title must be summarized as a single word for correct display. */
    {
      title: "Lorem",
      details: [
        "Dolor",
        "Consectetur",
        "Sed",
        "Incididunt",
      ]
    },
    {
      title: "Taciti",
      details: [
        "Ad litora torquent",
        "Per inceptos",
        "Suspendisse",
        "Nullam ac",
      ]
    }
  ],
};
