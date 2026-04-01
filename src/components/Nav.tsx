import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import { useState, useRef} from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";

import { scrollToElement } from "../utils/scrollHelpers";

export default function NavFunc() {

  const navigate = useNavigate();

  const location = useLocation();
  const isHome = location.pathname === "/";

  const isMobile = window.innerWidth < 1000;

  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const aboutTimeout = useRef<number | null>(null);
  const projectsTimeout = useRef<number | null>(null);

  const [expanded, setExpanded] = useState(false);
  
  const navigateToTeam = () => {
    navigate({
      pathname: "/about",
      hash: "#team"
    });

    // wait for the page to render
    setTimeout(() => {
      scrollToElement("team");
    }, 100); // 100ms delay is usually enough
  };

  return (
    <Navbar expanded={expanded} onToggle={setExpanded} variant="dark" expand="lg" className={isHome ? "navbar-home" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="main-nav"/>
        <Navbar.Collapse id="main-nav"> 
          <button
            className="nav-close"
            onClick={() => setExpanded(false)}
          >
            ✕
          </button>
          <Nav className="ms-auto">
            <a href="/" className="nav-item-link">Home</a>
            <a href="/about" className="nav-item-link">About</a>
            <a onClick={() => navigateToTeam()} className="nav-item-link">
              Members
            </a>
            
            {isMobile ? (
              /* ================= MOBILE VERSION ================= */
              <div className="mobile-dropdown">
                <div
                  className="nav-item-link mobile-toggle"
                  onClick={() => setProjectsOpen(!projectsOpen)}
                >
                  Projects
                  <span className={`arrow ${projectsOpen ? "open" : ""}`}>▾</span>
                </div>

                <div className={`mobile-submenu ${projectsOpen ? "open" : ""}`}>
                  <a href="/forsaken" className="dropdown-item">Forsaken</a>
                  <a href="/temporal-urgency" className="dropdown-item">Temporal Urgency</a>
                  <a href="/projects" className="dropdown-item">All</a>
                </div>
              </div>

            ) : (
              /* ================= DESKTOP VERSION ================= */
              <div
                className='nav-item-dropdown'
                onMouseEnter={() => {
                  if (projectsTimeout.current !== null) {
                    clearTimeout(projectsTimeout.current);
                  }
                  setProjectsOpen(true);
                }}
                onMouseLeave={() => {
                  projectsTimeout.current = setTimeout(() => {
                    setProjectsOpen(false);
                  }, 150);
                }}
              >
                <NavDropdown
                  id="projects-dropdown"
                  show={projectsOpen}
                  title={
                    <span
                      className="nav-dropdown-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/projects");
                      }}
                    >
                      Projects
                    </span>
                  }
                >
                  <NavDropdown.Item href="/forsaken">Forsaken</NavDropdown.Item>
                  <NavDropdown.Item href="/temporal-urgency">Temporal Urgency</NavDropdown.Item>
                </NavDropdown>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}