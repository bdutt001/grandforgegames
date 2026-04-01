import React from "react";
import Logo from "../assets/logos/gfg-icon-steel.svg";

import linkedinLogo from "../assets/icons/linkedin.svg";
import linkedinLogoHover from "../assets/icons/linkedin-hover.svg";

import youtubeLogo from "../assets/icons/youtube.svg";
import youtubeLogoHover from "../assets/icons/youtube-hover.svg";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isMobile = window.innerWidth < 1000;
  
  if (isHome) return null;
  

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
          <a href="mailto:grandforgegames@gmail.com?subject=Website%20Inquiry"
            className="contact-button">
            Contact Us
          </a>

        </div>
        <a
          href="https://www.youtube.com/@GrandForgeGames"
          className="icon-button icon-button--youtube"
          title="YouTube"
        >
          <span className="icon-wrapper">
            <img src={youtubeLogo} className="icon base" alt="YouTube" />
            <img src={youtubeLogoHover} className="icon hover" alt="YouTube" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/company/grand-forge-games/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button icon-button--linkedin"
          title="LinkedIn"
        >
          <span className="icon-wrapper">
            <img src={linkedinLogo} className="icon base" alt="LinkedIn" />
            <img src={linkedinLogoHover} className="icon hover" alt="LinkedIn" />
          </span>
        </a>
      </footer>
    </div>
  );
}
