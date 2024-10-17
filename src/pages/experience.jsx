import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../data/experienceData";
import Badge from "react-bootstrap/Badge";

import "./styles.css";

function Experience() {
  return (
    <VerticalTimeline>
      {experienceData.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--education experiences"
          contentStyle={{
            background: "linear-gradient(135deg, #F0F8FF, #FFFAF0)",
            color: "#000",
          }}
          contentArrowStyle={{ borderRight: '15px solid  linear-gradient(135deg, #F0F8FF, #FFFAF0)'}}
          iconStyle={{ background: '#F0FFF0', color: '#708090' }}
          icon={item.icon}
          date={item.date}
        >
          <h4 className="vertical-timeline-element-title">{item.title}{item.img}</h4>
          <h4 className="vertical-timeline-element-subtitle">
            {item.subtitle}
          </h4>
          <h4 className="vertical-timeline-element-subtitle experience-location">
            {item.location}
          </h4>
          <p className="experience-description">{item.description}</p>
          {item.keywords.map((keyword, index) => (
            <Badge pill className="experience-badge mr-2 mb-2" key={index}>
              {keyword}
            </Badge>
          ))}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default Experience;
