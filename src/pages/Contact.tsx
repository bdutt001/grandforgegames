import linkedinLogo from "../assets/icons/linkedin.svg";
import linkedinLogoHover from "../assets/icons/linkedin-hover.svg";
import youtubeLogo from "../assets/icons/youtube.svg";
import youtubeLogoHover from "../assets/icons/youtube-hover.svg";
import emailIcon from "../assets/icons/email.svg";
import emailIconHover from "../assets/icons/email-hover.svg";
import discordIcon from "../assets/icons/discord.svg";
import discordIconHover from "../assets/icons/discord-hover.svg";
import patreonIcon from "../assets/icons/patreon.svg";
import patreonIconHover from "../assets/icons/patreon-hover.svg";

export default function Contact () {
    return (
        <main className="main">
            <div className="contact">
              <div className="mail">
                <h3>Contact</h3>
                <p>For business inquiries, please contact {` `}
                  <a href="mailto:business.contact@grandforgegames.com">
                      business.contact@grandforgegames.com
                  </a>.
                </p>
              </div>
              <div className="community">
                <h3>Community</h3>
                <p>
                  Join the Grand Forge Games community to stay up to date on development progress, 
                  announcements, and upcoming releases. Connect with other players, participate in discussions, 
                  support ongoing projects, and gain access to exclusive content through our community platforms.
                </p>
                <div className="contact-links">
                  <a href="https://discord.gg/armZ46mjAh"
                    className="footer-button">
                    <span className="icon-wrapper">
                      <img src={discordIcon} className="icon base" alt="Discord" />
                      <img src={discordIconHover} className="icon hover" alt="Discord" />
                    </span>
                    Discord
                  </a>
                  <a
                    href="https://www.youtube.com/@GrandForgeGames"
                    className="footer-button"
                    title="Patreon"
                  >
                    <span className="icon-wrapper">
                      <img src={patreonIcon} className="icon base" alt="Patreon" />
                      <img src={patreonIconHover} className="icon hover" alt="Patreon" />
                    </span>
                    Patreon
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

                  
                </div>
              </div>
              <div>
                <h3>Support Us</h3>
                <a
                    href="https://buymeacoffee.com/grandforgegames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-button"
                    title="BuyMeACoffee"
                  >
                    Support Us
                  </a>
              </div>
            </div>
        </main>
    )
}