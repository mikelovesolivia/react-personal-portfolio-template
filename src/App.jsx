import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Footer from "./components/Footer";
import About from "./pages/about";
import { homeData } from "./data/homeData";

import "./App.css";

function App() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("Welcome to My Portfolio");
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/") {
      setPageTitle("Welcome to My Portfolio");
    } else {
      setPageTitle(homeData.name);
    }
  }, [pathname]);

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="favicon.ico" width="50" alt="brand-logo" /> {pageTitle}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/education">
                Education
              </Nav.Link>
              <Nav.Link as={Link} to="/experience">
                Experience
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              {/* Change to your blog site. If you don't have one, 
              you can build with Hexo, deploy on GitHub and paste 
              the link here. */}
              <Nav.Link
                href="https://mikelovesolivia.github.io/blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ScrollToTop />

      {/* Page Content */}
      <div className="page-contents">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
