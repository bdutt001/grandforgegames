import React from "react";
import linkedinLogo from "../assets/logos/linkedin.png"
import youtubeLogo from "../assets/logos/youtube.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="mailto:grandforgegames@gmail.com?subject=Website%20Inquiry"
          className="contact-button">
          Contact Us
        </a>

      </div>
      <a
        href="https://www.linkedin.com/company/grand-forge-games/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-button icon-button--linkedin"
        title="LinkedIn"
      >
        <img
          src={linkedinLogo}
          alt="LinkedIn"
        />
      </a>
      <a
        href=""
        className="icon-button icon-button--youtube"
        title="YouTube"
      >
        <img
          src={youtubeLogo}
        />
      </a>

    </footer>
  );
}
