import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import { useState, useRef} from "react";
import {Navigate, useNavigate} from "react-router-dom";

import { scrollToElement } from "../utils/scrollHelpers";

export default function NavFunc() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const aboutTimeout = useRef<number | null>(null);
  const projectsTimeout = useRef<number | null>(null);

  const navigate = useNavigate();

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
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Collapse>
          <Nav>
            <a href="/" className="nav-item-link">Home</a>
            <a href="/about" className="nav-item-link">About</a>
            <a onClick={() => navigateToTeam()} className="nav-item-link">
              Members
            </a>
            
            <div className='nav-item-dropdown'
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

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}