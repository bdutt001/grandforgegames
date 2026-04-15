import { useState, useEffect, useLayoutEffect } from "react";

import Bullet from "../assets/logos/gfg-icon-gold.svg";

import Map from "../components/Map.tsx";
import Member from "../components/Member.tsx";
import SectionHeader from "../components/SectionHeader.tsx";

import Placeholder from "../assets/logos/gfg-icon-gold-black.svg";

import linkedinLogo from "../assets/icons/linkedin.svg";
import linkedinLogoHover from "../assets/icons/linkedin-hover.svg";
import youtubeLogo from "../assets/icons/youtube.svg";
import youtubeLogoHover from "../assets/icons/youtube-hover.svg";
import emailIcon from "../assets/icons/email.svg";
import emailIconHover from "../assets/icons/email-hover.svg";

import Nick from "../assets/photos/Nick_S.jpg";
import Nate from "../assets/photos/Nathan_Y.jpg";
import Ben from "../assets/photos/Ben_D.PNG";
import Alex from "../assets/photos/Alexander_H.jpg";
import Col from "../assets/photos/Col_R.jpg";
import Billiam from "../assets/photos/Billy_L.jpg";
import Leo from "../assets/photos/Leo_E.jpg";
import Hazel from "../assets/photos/Olivia_B.jpg";
import Tavier from "../assets/photos/Tavier_F.jpg";
import Elhadg from "../assets/photos/Elhadg.jpg";
import Avery from "../assets/photos/Avery_B.jpg";

export default function Team() {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const members = [
    {
      id: 1,
      name: "Nick Scherer",
      photoUrl: Nick,
      roles: ["CEO",
        "Programmer"
      ],
      projects: ["Forsaken", "Temporal Urgency"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/nicholas-scherer-6273a62aa/" }
      ]
    },
    {
      id: 5,
      name: "William Latimer",
      photoUrl: Billiam,
      roles: ["Creative Director", "Lead Composer"],
      projects: ["Forsaken", "Temporal Urgency"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/wiliam-latimer-08687a395/" }
      ]
    },
    {
      id: 2,
      name: "Nathan Young",
      photoUrl: Nate,
      roles: ["Lead Programmer"],
      projects: ["Forsaken"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/nathan-young-799965293/" }
      ]
    },
    {
      id: 4,
      name: "Cole Reese",
      photoUrl: Col,
      roles: ["Lead Artist", "Visual Design"],
      projects: ["Forsaken", "Temporal Urgency"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/colereese/" },
        { type: "artstation", url: "https://relocsart.artstation.com/" }
      ]
    },
    {
      id: 11,
      name: "Hazel Bradford",
      photoUrl: Hazel,
      roles: ["Lead Writer"],
      projects: ["Forsaken", "Temporal Urgency"],
      links: []
    },
    {
      id: 3,
      name: "Ben Dutton",
      photoUrl: Ben,
      roles: ["Programmer", "Web Designer"],
      projects: ["Forsaken"],
      bio: "Website designer and developer",
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/benjamin-dutton-a557343a5" },
        { type: "github", url: "https://github.com/bdutt001" }
      ]
    },
    {
      id: 6,
      name: "Elhadg Diouf",
      photoUrl: Elhadg,
      roles: ["Sound Designer", "Composer"],
      projects: ["Forsaken", "Temporal Urgency"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/elhadg-diouf/" }
      ]
    },
    {
      id: 7,
      name: "Tavier Futrell",
      photoUrl: Tavier,
      roles: ["Animator", "Visual Design"],
      projects: ["Forsaken", "Temporal Urgency"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/tavier-futrell-8a97442ba/" }
      ]
    },
    {
      id: 8,
      name: "Leonardo Evangelisti",
      photoUrl: Leo,
      roles: ["Visual Design"],
      projects: ["Forsaken"],
      links: [
        { type: "linkedin", url: "https://www.linkedin.com/in/leonardo-evangelisti-56677a15b/" }
      ]
    },
    {
      id: 9,
      name: "Avery Baker",
      photoUrl: Avery,
      roles: ["Programmer"],
      projects: ["Forsaken"],
      links: [
        { type: "linkedin", url: "https://www.linkedin.com/in/averybaker4519/" },
        { type: "googlesites", url: "https://sites.google.com/view/averybakerportfolio/games" }
      ]
    },
    {
      id: 13,
      name: "Alex Huang",
      photoUrl: Alex,
      roles: ["Writer"],
      projects: ["Forsaken"],
      links: []
    },
    {
      id: 10,
      name: "Shavon Taylor",
      photoUrl: Placeholder,
      roles: ["Visual Design"],
      projects: ["Forsaken", "Temporal Urgency"],
      links: []
    },
    {
      id: 12,
      name: "Jacob Carrasquillo",
      photoUrl: Placeholder,
      roles: ["Writer"],
      projects: ["Forsaken"],
      links: []
    },
  ];

  const roleGroups: Record<string, string[]> = {
    Leads: ["CEO", "Project Lead", "Creative Director", "Lead Programmer", "Lead Artist", "Lead Composer", "Lead Writer"],
    Programming: ["Lead Programmer", "Programmer", "Web Designer"],
    Art: ["Lead Artist", "Artist", "Visual Design", "Animator"],
    Audio: ["Sound Designer", "Music Producer", "Lead Composer"],
    Writing: ["Lead Writer", "Writer"]
  };

  const allProjects = ["Forsaken", "Temporal Urgency"];

  const allTags = Object.keys(roleGroups);

  const toggleRole = (role: string) => {
    setSelectedRoles(prev =>
      prev.includes(role)
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
  };

  const toggleProject = (project: string) => {
  setSelectedProjects(prev =>
    prev.includes(project)
      ? prev.filter(p => p !== project)
      : [...prev, project]
  );
};

  const filteredMembers = members.filter(member => {
    const roleMatch =
      selectedRoles.length === 0 ||
      selectedRoles.some(tag =>
        roleGroups[tag].some(role =>
          member.roles.includes(role)
        )
      );

    const projectMatch =
      selectedProjects.length === 0 ||
      selectedProjects.some(project =>
        member.projects.includes(project)
      );

    return roleMatch && projectMatch;
  });

  useLayoutEffect(() => {
    const syncWidths = () => {
      const cards = document.querySelectorAll(".team-member-card:not(.expanded)");

      let maxWidth = 0;

      cards.forEach((card) => {
        const el = card as HTMLElement;

        // reset first so we measure natural size
        el.style.width = "auto";

        const width = el.scrollWidth;
        if (width > maxWidth) maxWidth = width;
      });

      cards.forEach((card) => {
        (card as HTMLElement).style.width = `${maxWidth}px`;
      });
    };

    // run after render
    syncWidths();

    // also run on resize
    window.addEventListener("resize", syncWidths);

    return () => {
      window.removeEventListener("resize", syncWidths);
    };
  }, [filteredMembers]);

  return (
    <main className="main">
      <SectionHeader icon={Bullet}>
        About Us
      </SectionHeader>
      <p>
        Grand Forge Games is an independent game studio founded in 2025.
        We are based in Yorktown, Virginia.
      </p>
      <div className="about-headings">
        <div className="about-links">
          <h3>Explore</h3>
        </div>
        <h3>Location</h3>
      </div>
      <div className="about-top">
        <div className="about-links">
          <a href="mailto:business.contact@grandforgegames.com"
            className="icon-button">
            <span className="icon-wrapper">
              <img src={emailIcon} className="icon base" alt="LinkedIn" />
              <img src={emailIconHover} className="icon hover" alt="LinkedIn" />
            </span>
            Contact Us
          </a>
          <a
            href="https://www.linkedin.com/company/grand-forge-games/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
            title="LinkedIn"
          >
            <span className="icon-wrapper">
              <img src={linkedinLogo} className="icon base" alt="LinkedIn" />
              <img src={linkedinLogoHover} className="icon hover" alt="LinkedIn" />
            </span>
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@GrandForgeGames"
            className="icon-button"
            title="YouTube"
          >
            <span className="icon-wrapper">
              <img src={youtubeLogo} className="icon base" alt="YouTube" />
              <img src={youtubeLogoHover} className="icon hover" alt="YouTube" />
            </span>
            YouTube
          </a>
        </div>
        <div className="map-parent">
          <div className="map-wrapper">
            <Map />
          </div>
        </div>
      </div>

      <div id="team">
        <SectionHeader icon={Bullet}>
          Meet the Team
        </SectionHeader>

        <p>
          The Grand Forge Games team is comprised of twelve talented members from across the world.
          Members of our team have competed in several game jams, taking first prize in{" "}
          <a href="https://itch.io/jam/shadows-of-the-imagination-fall25/rate/3937613">
            "Shadows of the Imagination: A Game Jam"
          </a>, hosted by Old Dominion University in October of 2025.
        </p>
        <h3>Members</h3>
        <p className="tertiary-text">
          Filter based on departments and leadership positions.
        </p>
        <div className="role-filters">
          {allTags.map(tag => (
            <span
              key={tag}
              className={`filter-tag ${selectedRoles.includes(tag) ? "active" : ""}`}
              onClick={() => toggleRole(tag)}
            >
              {tag}
            </span>
          ))}

          <span className="filter-divider" />

          {allProjects.map(project => (
            <span
              key={project}
              className={`filter-tag project ${selectedProjects.includes(project) ? "active" : ""}`}
              onClick={() => toggleProject(project)}
            >
              {project}
            </span>
          ))}
        </div>

        <button
          onClick={() => {
            setSelectedRoles([]);
            setSelectedProjects([]);
          }}
          className="button clear"

        >
          Clear Filters
        </button>

      

        <div className={`members ${expandedId !== null ? "dim-active" : ""}`}>
          {filteredMembers.map(member => (
            <Member
              key={member.id}
              member={member}
              isExpanded={false}
              setExpandedId={setExpandedId}
            />
          ))}
        </div>
        {expandedId !== null && (
          <div
            className="member-overlay"
            onClick={() => setExpandedId(null)}
          >
            <div
              className="member-overlay-card"
              onClick={(e) => e.stopPropagation()}
            >
              <Member
                member={filteredMembers.find(m => m.id === expandedId)}
                isExpanded={true}
                setExpandedId={setExpandedId}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}