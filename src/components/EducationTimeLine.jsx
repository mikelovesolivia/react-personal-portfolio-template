import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import "./components.css";

function EducationTimelineItem({
  dateRange,
  school,
  degree,
  image,
  description,
  achievements,
  transcript,
}) {
  return (
    <div className="education-timeline-item">
      <div className="education-timeline-image">{image}</div>
      <div className="education-timeline-content">
        <div className="education-timeline-date">
          <span className="education-timeline-range">{dateRange}</span>
        </div>
        <div className="education-timeline-info">
          <h4>{school}</h4>
          <span className="education-timeline-degree">{degree}</span>
          <ul>
            {description.map((item, index) => (
              <li key={index}>
                <span style={{ fontWeight: "bold" }}>{item.name}:</span>{" "}
                {item.detail}
              </li>
            ))}
            {transcript && (
              <li>
                <span style={{ fontWeight: "bold" }}>Transcript: </span>
                <a href={transcript} rel="noreferrer">
                  <PictureAsPdfIcon className="transcript-icon-hover-effect" />
                </a>
              </li>
            )}
            {achievements && (
              <p style={{ fontWeight: "bold" }}>Achievements:</p>
            )}
            <ul>
              {achievements &&
                achievements.map((item, i) => (
                  <li key={i}>
                    {item.title}
                    <span className="right-align">{item.date}</span>
                  </li>
                ))}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationTimelineItem;