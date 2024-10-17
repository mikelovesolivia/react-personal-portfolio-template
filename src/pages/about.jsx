import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { aboutData } from "../data/aboutData";
import Card from "react-bootstrap/Card";

import AnyChart from "anychart-react/dist/anychart-react.min.js";

import SkillCloud from "../components/SkillCloud";
import NewspaperCard from "../components/NewspaperCard";
import ChalkboardCard from "../components/ChalkboardCard";

function About() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const researchRef = useRef(null);
  const interestsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const processPublicationList = (publication) => {
    const boldName = `<strong>${publication.myName}</strong>`;
    const regex = new RegExp(publication.myName, "g");

    return publication.list.map((item) => {
      let updatedItem = item.title.replace(regex, boldName);

      let links = "";
      if (item.paper) {
        links += ` <a href="${item.paper}" target="_blank">[paper]</a>`;
      }
      if (item.code) {
        links += ` <a href="${item.code}" target="_blank">[code]</a>`;
      }

      const sentences = updatedItem.split(". ");
      const lastSentence = sentences[sentences.length - 1];

      if (
        lastSentence.toLowerCase().includes("under review") ||
        lastSentence.toLowerCase().includes("accepted") ||
        lastSentence.toLowerCase().includes("submitted") ||
        lastSentence.toLowerCase().includes("published")
      ) {
        if (sentences.length > 1) {
          sentences[sentences.length - 2] = `<em>${
            sentences[sentences.length - 2]
          }</em>`;
        }
      } else {
        sentences[sentences.length - 1] = `<em>${lastSentence}</em>`;
      }

      updatedItem = sentences.join(". ") + links;
      return `<p>${updatedItem}</p>`;
    });
  };

  let publicationList = [];
  if (aboutData.publication) {
    publicationList = processPublicationList(aboutData.publication);
  }

  return (
    <div className="container-fluid">
      <div
        ref={aboutRef}
        className="d-flex align-items-center justify-content-center"
        style={{ height: "calc(100vh - 120px)", scrollMarginTop: "200px" }}
      >
        <div className="row text-center">
          <div className="col-2"></div>
          <div className="col-8 text-center about-border">
            <div className="row">
              <h3 style={{ fontFamily: "Lora" }}>About Me</h3>
              <p>{aboutData.description}</p>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row d-flex justify-content-between">
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <Button
                      variant="outline-primary"
                      className="w-75"
                      onClick={() => scrollToSection(skillsRef)}
                    >
                      Skills
                    </Button>
                  </div>
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <Button
                      variant="outline-primary"
                      className="w-75"
                      onClick={() => scrollToSection(researchRef)}
                    >
                      Research
                    </Button>
                  </div>
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <Button
                      variant="outline-primary"
                      className="w-75"
                      onClick={() => scrollToSection(interestsRef)}
                    >
                      Interests
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={skillsRef}
        className="d-flex wood-texture mb-2" //align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          scrollMarginTop: "80px",
        }}
      >
        <div className="row d-flex align-items-center w-100 mt-2">
          {/* Left side content (skills and skill cloud) */}
          <div className="col-12 col-md-10 d-flex flex-column flex-md-row justify-content-center align-items-center order-1 order-md-1">
            {/* Skills Card */}
            <div className="col-12 col-md-6">
              <Card className="about-skills-card w-75 mx-auto">
                <Card.Header>Skills</Card.Header>
                <Card.Body>
                  {aboutData.skills.map((skill, index) => (
                    <div key={index}>
                      <Card.Title>{skill.type}</Card.Title>
                      <Card.Text>{skill.list.join(", ")}</Card.Text>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </div>

            {/* Skill Cloud */}
            <div className="col-12 col-md-6 text-center mt-3 mt-md-0">
              <SkillCloud slugs={aboutData.skillIcons} />
            </div>
          </div>

          {/* Prev and Next buttons (stacked vertically on small screens) */}
          <div className="col-12 col-md-2 d-flex flex-column justify-content-between align-items-center text-center order-2 order-md-2">
            <Button
              variant="outline-primary"
              className="mb-3 w-75"
              onClick={() => scrollToSection(aboutRef)}
            >
              Prev: About
            </Button>
            <Button
              variant="outline-primary"
              className="w-75 mb-2"
              onClick={() => scrollToSection(researchRef)}
            >
              Next: Research
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={researchRef}
        className="d-flex align-items-center justify-content-center paper-texture mb-2"
        style={{
          minHeight: "100vh",
          scrollMarginTop: "80px",
        }}
      >
        <div className="row d-flex align-items-center w-100">
          <div className="col-12 col-md-10">
            <div className="col-md-12">
              <ChalkboardCard
                title="Research Topics"
                description={aboutData.research.description}
                items={aboutData.research.topics}
              />
              <div className="col-md-2 mt-3 mt-md-0"></div>
            </div>
            {publicationList.length > 0 && (
              <div className="col-md-12">
                <NewspaperCard publications={publicationList} />
              </div>
            )}
          </div>
          <div className="col-12 col-md-2 d-flex flex-column justify-content-between align-items-center text-center order-2 order-md-2">
            <Button
              variant="outline-primary"
              className="mb-3 w-75"
              onClick={() => scrollToSection(skillsRef)}
            >
              Prev: Skills
            </Button>
            <Button
              variant="outline-primary"
              className="w-75 mb-2"
              onClick={() => scrollToSection(interestsRef)}
            >
              Next: Interests
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={interestsRef}
        className="d-flex align-items-center justify-content-center mixture-texture"
        style={{
          minHeight: "100vh",
          backgroundColor: "#eeeeee",
          scrollMarginTop: "80px",
        }}
      >
        <div className="row d-flex align-items-center w-100">
        <div className="col-12 col-md-3 justify-content-center align-items-center order-1 order-md-1">
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-center align-items-center order-1 order-md-1 notebook-background" >
            <AnyChart
              type="wordtree"
              height="400px"
              width="100%"
              data={aboutData.interests.flatMap((interest, index) => {
                const title = interest.title;
                return interest.details.map((item) => [
                  "Interests" + " " + title + " " + item,
                ]);
              })}
              maxFontSize="20"
              fontFamily="EB Garamond"
              fontStyle="italic"
              fontWeight="bold"
              background="none"
            />
          </div>
          <div className="col-12 col-md-2 justify-content-center align-items-center order-1 order-md-1 mb-3">
            </div>

          <div className="col-12 col-md-2 d-flex flex-column justify-content-between align-items-center text-center order-2 order-md-2">
            <Button
              variant="outline-primary"
              className="mb-3 w-75"
              onClick={() => scrollToSection(researchRef)}
            >
              Prev: Research
            </Button>
            <Button
              variant="outline-primary"
              className="w-75 mb-2"
              onClick={() => scrollToSection(aboutRef)}
            >
              Top: About
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
