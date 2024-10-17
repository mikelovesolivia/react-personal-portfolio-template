import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import ProjectCard from "../components/ProjectCard";

import { projectData } from "../data/projectData";

function Projects() {
  return (
    <Container>
    <Row className="g-5">
      {projectData.map((project, index) => (
        <Col key={index} xs={12} md={4} lg={3} className="mb-4">
          <ProjectCard
            title={project.title}
            time={project.time}
            brief={project.brief}
            keywords={project.keywords}
            description={project.description}
            links={project.links}
            imageUrl={project.imageUrl}
          />
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default Projects;
