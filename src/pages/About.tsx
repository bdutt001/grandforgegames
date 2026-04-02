import { useState } from "react";

import Bullet from "../assets/icons/hammer.svg";

import Map from "../components/Map.tsx";
import Member from "../components/Member.tsx";
import SectionHeader from "../components/SectionHeader.tsx";

import Placeholder from "../assets/logos/gfg-icon-gold-black.svg";

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
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const members = [
    {
      id: 1,
      name: "Nick Scherer",
      photoUrl: Nick,
      roles: ["CEO", "Programmer"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/nicholas-scherer-6273a62aa/" }
      ]
    },
    {
      id: 2,
      name: "Nathan Young",
      photoUrl: Nate,
      roles: ["Lead Programmer"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/nathan-young-799965293/" }
      ]
    },
    {
      id: 3,
      name: "Ben Dutton",
      photoUrl: Ben,
      roles: ["Programmer", "Web Designer"],
      bio: "Website designer and developer",
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/benjamin-dutton-a557343a5" },
        { type: "github", url: "https://github.com/bdutt001" }
      ]
    },
    {
      id: 4,
      name: "Cole Reese",
      photoUrl: Col,
      roles: ["Lead Artist", "Visual Design"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/colereese/" },
        { type: "artstation", url: "https://relocsart.artstation.com/" }
      ]
    },
    {
      id: 5,
      name: "William Latimer",
      photoUrl: Billiam,
      roles: ["Creative Director", "Lead Composer"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/wiliam-latimer-08687a395/" }
      ]
    },
    {
      id: 6,
      name: "Elhadg Diouf",
      photoUrl: Elhadg,
      roles: ["Sound Designer", "Composer"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/elhadg-diouf/" }
      ]
    },
    {
      id: 7,
      name: "Tavier Futrell",
      photoUrl: Tavier,
      roles: ["Animator", "Visual Design"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/tavier-futrell-8a97442ba/" }
      ]
    },
    {
      id: 8,
      name: "Leonardo Evangelisti",
      photoUrl: Leo,
      roles: ["Visual Design"],
      links: [
        { type: "linkedin", url: "https://www.linkedin.com/in/leonardo-evangelisti-56677a15b/" }
      ]
    },
    {
      id: 9,
      name: "Avery Baker",
      photoUrl: Avery,
      roles: ["Programmer"],
      links: [
        { type: "linkedin", url: "https://www.linkedin.com/in/averybaker4519/" },
        { type: "googlesites", url: "https://sites.google.com/view/averybakerportfolio/games" }
      ]
    },
    {
      id: 10,
      name: "Shavon Taylor",
      photoUrl: Placeholder,
      roles: ["Visual Design"],
      links: []
    },
    {
      id: 11,
      name: "Hazel Bradford",
      photoUrl: Hazel,
      roles: ["Lead Writer"],
      links: []
    },
    {
      id: 12,
      name: "Jacob Carrasquillo",
      photoUrl: Placeholder,
      roles: ["Writer"],
      links: []
    },
    {
      id: 13,
      name: "Alex",
      photoUrl: Alex,
      roles: ["Writer"],
      links: []
    }
  ];

  const roleGroups: Record<string, string[]> = {
    Leads: ["CEO", "Project Lead", "Creative Director", "Lead Programmer", "Lead Artist", "Lead Composer", "Lead Writer"],
    Programming: ["Lead Programmer", "Programmer", "Web Designer"],
    Art: ["Lead Artist", "Artist", "Visual Design", "Animator"],
    Audio: ["Sound Designer", "Music Producer", "Lead Composer"],
    Writing: ["Lead Writer", "Writer"]
  };

  const allTags = Object.keys(roleGroups);

  const toggleRole = (role: string) => {
    setSelectedRoles(prev =>
      prev.includes(role)
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
  };

  const filteredMembers = members.filter(member => {
    if (selectedRoles.length === 0) return true;

    return selectedRoles.some(tag =>
      roleGroups[tag].some(role =>
        member.roles.includes(role)
      )
    );
  });

  return (
    <main className="main">
      <SectionHeader icon={Bullet}>
        About Us
      </SectionHeader>

      <p>
        Grand Forge Games is an independent game studio founded in 2025.
        We are based in Yorktown, Virginia.
      </p>

      <h3>Location</h3>
      <div className="map-parent">
        <div className="map-wrapper">
          <Map />
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

        <h3>Roles</h3>

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
        </div>

        <button
          onClick={() => setSelectedRoles([])}
          className="button clear"
        >
          Clear Filters
        </button>

        <h3>Members</h3>

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