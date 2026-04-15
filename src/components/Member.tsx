import React from "react";

import linkedinIcon from "../assets/logos/linkedin.svg";
import githubIcon from "../assets/logos/github.svg";
import artstationIcon from "../assets/icons/artstation.svg";
import googlesitesIcon from "../assets/icons/googlesites.svg";

const iconMap: Record<string, string> = {
  linkedin: linkedinIcon,
  github: githubIcon,
  artstation: artstationIcon,
  googlesites: googlesitesIcon,
};

type MemberType = {
  id: number;
  name: string;
  photoUrl: string;
  roles: string[];
  projects: string[];
  bio?: string;
  links: {
    type: string;
    url: string;
  }[];
};

type Props = {
  member: MemberType;
  isExpanded: boolean;
  canHover: boolean;
  setExpandedId: React.Dispatch<React.SetStateAction<number | null>>;
};

const TeamMemberCard: React.FC<Props> = ({
  member,
  isExpanded,
  canHover,
  setExpandedId,
}) => {
  const handleClick = () => {
    if (!canHover) {
      setExpandedId(prev =>
        prev === member.id ? null : member.id
      );
    }
  };

  const handleMouseEnter = () => {
    if (canHover) {
      setExpandedId(member.id);
    }
  };

  const handleMouseLeave = () => {
    if (canHover) {
      setExpandedId(null);
    }
  };

  return (
    <div
      className={`team-member-card ${isExpanded ? "expanded" : ""}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="member-inner">

        <div className="member-info">
          <div className="member-name-and-photo">
            <img
              src={member.photoUrl}
              alt={member.name}
              className="member-photo"
            />
            <h3 className="member-name">{member.name}</h3>
          </div>
          <div className="member-subheading">
            <div className="member-roles">
                {member.roles.map((role) => (
                  <span key={role} className="role-badge">
                    {role}
                  </span>
                ))}
            </div>
            <p>
              Projects
            </p>
            <div className="member-projects">
                {member.projects.map((project) => (
                  <span key={project} className="project-badge">
                    {project}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className="member-extra">
          {member.bio && (
            <p className="member-bio">
              {member.bio}
            </p>
          )}

          <div className="member-links">
            {member.links.map((link) => (
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

      </div>
    </div>
  );
};

export default TeamMemberCard;