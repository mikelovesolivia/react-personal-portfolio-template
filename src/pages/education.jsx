import React from "react";
import { educationData } from "../data/educationData";
import EducationTimelineItem from "../components/EducationTimeLine";
import "./styles.css";

function Education() {
  return (
    <div className="education-timeline-container">
        {educationData.map((item, index) => (
          <EducationTimelineItem
            key={index}
            dateRange={item.dateRange}
            school={item.school}
            degree={item.degree}
            description={item.description}
            image={item.image}
            achievements={item.achievements}
            transcript={item.transcript}
          />
        ))}
    </div>
  );
}

export default Education;
