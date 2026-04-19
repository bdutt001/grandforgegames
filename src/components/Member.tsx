import React from "react";

import linkedinLogo from "../assets/icons/linkedin.svg";
import linkedinLogoHover from "../assets/icons/linkedin-hover.svg";
import githubLogo from "../assets/icons/github.svg";
import githubLogoHover from "../assets/icons/github-hover.svg";
import artstationLogo from "../assets/icons/artstation.svg";
import artstationLogoHover from "../assets/icons/artstation-hover.svg"
import googlesitesLogo from "../assets/icons/googlesites.svg";
import googlesitesLogoHover from "../assets/icons/googlesites-hover.svg";
import mailLogo from "../assets/icons/email.svg";
import mailLogoHover from "../assets/icons/email-hover.svg";


const iconMap: Record<string, string> = {
  Mail: mailLogo,
  LinkedIn: linkedinLogo,
  GitHub: githubLogo,
  ArtStation: artstationLogo,
  Portfolio: googlesitesLogo,
};

const hoverIconMap: Record<string, string> = {
  Mail: mailLogoHover,
  LinkedIn: linkedinLogoHover,
  GitHub: githubLogoHover,
  ArtStation: artstationLogoHover,
  Portfolio: googlesitesLogoHover,
};

type MemberType = {
  id: number;
  name: string;
  photoUrl: string;
  roles: string[];
  projects: {
    name: string;
    url: string;
  }[];
  bio?: string;
  links?: {
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
            <p className="member-extra">
              Projects
            </p>
            <div className="member-projects">
                {member.projects.map((project) => (
                  <a 
                    key={project.name}
                    href={project.url}
                    className="project-badge"
                  >
                    <span key={project.name}>
                      {project.name}
                    </span>
                  </a>
                ))}
            </div>
          </div>
        </div>
        
        
  
        <div className="member-extra">
          {(member.bio || member.links) && (
            <div className="member-divider"/>
          )}
          {member.bio && (
            <div>
              <p className="member-subheading">
                Bio
              </p>
              <p className="member-bio">
                {member.bio}
              </p>
            </div>
          )}

          {member.links && (
            <div className="member-links-wrapper">
              <p className="member-subheading">
                Links
              </p>
              <div className="member-links">

                {member.links.map((link) => (
                  <a
                    key={link.type}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-button member"
                  >
                    <span className="icon-wrapper">
                      <img src={iconMap[link.type]} className="icon base" alt={link.type} />
                      <img src={hoverIconMap[link.type]} className="icon hover" alt={link.type} />
                    </span>
                    {link.type}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;