import React from "react";

export const educationData = [
  {
    dateRange: "Aug 2023 - Present",
    school: "A University",
    degree: "M.Sc. in Computer Science",
    image: <img src="univ.png" width="50px" alt="univ" style={{ float: "right" }} />,
    description: [
      /* Add any item in the following format: { name: "...", detail: "..." }*/
      { name: "GPA", detail: "4.00/4.00" },
      {
        name: "Research Interests",
        detail:
          "Calculus of Variations, Partial Differential Equations, Optimal Control Theory, Machine Learning",
      },
    ],
    achievements: [
      {
        date: "Aug 2024",
        title: "XXX Fellowship",
      },
    ],  // you can remove this field if you don't want to display the achievements
    transcript: "transcript.pdf", // you can remove this field if you don't want to display the transcript
  },
  {
    dateRange: "Sep 2019 - Jun 2023",
    school: "B University",
    degree: "B.Sc. in Computer Science and Technology",
    image: <img src="univ.png" width="50px" alt="univ" style={{ float: "right" }} />,
    description: [
      { name: "GPA", detail: "4.0/4.0" },
      { name: "Ranking", detail: "10/200" },
      {
        name: "Core Modules",
        detail:
          "Data Structures, Algorithms, Operating Systems, Computer Networks, Machine Learning",
      },
    ],
    achievements: [
      {
        date: "Jun 2023",
        title: "XXX Scholarship",
      },
      {
        date: "Jun 2022",
        title: "XXX Scholarship",
      },
      {
        date: "Jun 2021",
        title: "XXX Scholarship",
      },
    ]
  },
];
