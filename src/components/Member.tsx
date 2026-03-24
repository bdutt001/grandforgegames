import React from "react";

import linkedinIcon from "../assets/logos/linkedin.svg";
import githubIcon from "../assets/logos/github.svg";
import artstationIcon from "../assets/icons/artstation.svg";

interface Link {
    type: string;
    url: string;
}

interface TeamMemberProps {
  name: string;
  photoUrl: string;
  roles: string[];
  links: Link[];
}

const iconMap: Record<string, string> = {
  linkedin: linkedinIcon,
  github: githubIcon,
  artstation: artstationIcon,
};

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, photoUrl, roles, links }) => {
  return (
    <div className="team-member-card">
      <img src={photoUrl} alt={name} className="member-photo" />
      <h3 className="member-name">{name}</h3>
      <div className="member-roles">
        {roles.map((role) => (
          <span key={role} className="role-badge">
            {role}
          </span>
        ))}
      </div>
      <div className="member-links">
        {links.map((link) => (
            <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button-member"
            >
            <img src={iconMap[link.type]} alt={link.type} />
            </a>
        ))}
        </div>
    </div>
  );
};

export default TeamMemberCard;