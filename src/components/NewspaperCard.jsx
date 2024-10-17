import React from "react";
import { Card } from "react-bootstrap";
import DOMPurify from "dompurify";

import "./components.css";

const NewspaperCard = ({ publications }) => {
  const combinedContent = publications.join("");

  return (
    <Card className="newspaper-card">
      <Card.Title className="newspaper-title">Publication</Card.Title>
      <Card.Body>
        <div
          className="newspaper-content"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(combinedContent),
          }}
        />
      </Card.Body>
    </Card>
  );
};

export default NewspaperCard;
