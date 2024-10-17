import React from "react";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

export const experienceData = [
  {
    title: "Research Assistant",
    subtitle: "A University",
    location: "City, State, Country",
    date: "Aug 2023 - Present",
    img: (
      <img
        src="placeholder.png"
        width="50px"
        alt="work"
        style={{ float: "right" }}
      />
    ),
    icon: (
      <SchoolIcon />
    ) /* You can change this to <WorkIcon /> if you want to display a work icon */,
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Magnis porttitor senectus quam viverra nulla purus. Molestie feugiat ultrices et porttitor tellus taciti lacus?`,
    keywords: ["Keyword1", "Keyword2", "Keyword3"],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "A Company",
    location: "City, State, Country",
    date: "May 2023 - Aug 2023",
    img: (
      <img
        src="placeholder.png"
        width="50px"
        alt="work"
        style={{ float: "right" }}
      />
    ),
    icon: <WorkIcon />,
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Magnis porttitor sen
      ectus quam viverra nulla purus. Molestie feugiat ultrices et porttitor tellus taciti lacus?`,
    keywords: ["Keyword1", "Keyword2", "Keyword3"],
  },
  {
    title: "Teaching Assistant",
    subtitle: "B University",
    location: "City, State, Country",
    date: "Aug 2022 - Dec 2022",
    img: (
      <img
        src="placeholder.png"
        width="50px"
        alt="work"
        style={{ float: "right" }}
      />
    ),
    icon: <SchoolIcon />,
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Magnis porttitor sen
      ectus quam viverra nulla purus. Molestie feugiat ultrices et porttitor tellus taciti lacus?`,
    keywords: ["Keyword1", "Keyword2", "Keyword3"],
  },
  {
    title: "Software Developer",
    subtitle: "B Company",
    location: "City, State, Country",
    date: "May 2022 - Aug 2022",
    img: (
      <img
        src="placeholder.png"
        width="50px"
        alt="work"
        style={{ float: "right" }}
      />
    ),
    icon: <WorkIcon />,
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Magnis porttitor sen
      ectus quam viverra nulla purus. Molestie feugiat ultrices et porttitor tellus taciti lacus?`,
    keywords: ["Keyword1", "Keyword2", "Keyword3"],
  },
];
