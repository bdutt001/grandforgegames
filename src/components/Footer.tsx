import React from "react";
import Logo from "../assets/logos/gfg-icon-steel.svg";

import linkedinLogo from "../assets/icons/linkedin.svg";
import linkedinLogoHover from "../assets/icons/linkedin-hover.svg";
import youtubeLogo from "../assets/icons/youtube.svg";
import youtubeLogoHover from "../assets/icons/youtube-hover.svg";
import emailIcon from "../assets/icons/email.svg";
import emailIconHover from "../assets/icons/email-hover.svg";

import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isMobile = window.innerWidth < 1000;
  

  return (
    <div className={`footer ${isMobile ? "footer-mobile" : ""}`}>
      <div className="footer-left">
        <div className="footer-logo">
          <img src={Logo}></img>
        </div>
        <p className="copyright">
          © 2026 Grand Forge Games. All rights reserved.
        </p>
      </div>

      <footer className="footer-right">
        <div>
          <a href="mailto:business.contact@grandforgegames.com"
            className="footer-button">
            <span className="icon-wrapper">
              <img src={emailIcon} className="icon base" alt="LinkedIn" />
              <img src={emailIconHover} className="icon hover" alt="LinkedIn" />
            </span>
            Contact Us
          </a>

        </div>
        <a
          href="https://www.linkedin.com/company/grand-forge-games/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-button"
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
          className="footer-button"
          title="YouTube"
        >
          <span className="icon-wrapper">
            <img src={youtubeLogo} className="icon base" alt="YouTube" />
            <img src={youtubeLogoHover} className="icon hover" alt="YouTube" />
          </span>
          YouTube
        </a>
      </footer>
    </div>
  );
}
