import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "./components.css";

function ProjectCard({
  title,
  time,
  brief,
  keywords,
  description,
  links,
  imageUrl,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        onClick={handleShow}
        className="project-card"
        style={{ cursor: "pointer" }}
      >
        <Card.Img variant="top" src={imageUrl} className="fixed-height-img" />
        <Card.Body>
          <Card.Title className="text-center title">
            {title}
          </Card.Title>
          {time && <Card.Text className="text-center subtitle">{time}</Card.Text>}
          <Card.Text className="text">{brief}</Card.Text>
          <Card.Text className="text-center" style={{ fontWeight: "bold" }}>
            Click For More Info
          </Card.Text>
          {keywords && (
            <div className="keywords-container" style={{ marginLeft: "1rem" }}>
              {keywords.map((keyword, index) => (
                <span key={index} className="keyword-capsule">
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            <p>{title}</p>
            {time && <p className="modal-time">{time}</p>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img src={imageUrl} alt={title} className="img-fluid mb-3" />
          </div>
          <p>{description}</p>
          {links && (
            <div className="d-flex justify-content-evenly">
              {links.map((link, index) => (
                <Button
                  key={index}
                  variant="primary"
                  onClick={() =>
                    window.open(link.url, "_blank", "noopener noreferrer")
                  }
                >
                  {link.title}
                </Button>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ProjectCard.defaultProps = {
  imageUrl: "project-placeholder.jpg",
};

export default ProjectCard;
