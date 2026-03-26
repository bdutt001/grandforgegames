import { useNavigate } from "react-router-dom";
import { scrollToElement } from "../utils/scrollHelpers";

export default function Hero() {
  const navigate = useNavigate();

  const navigateToTeam = () => {
    navigate({
      pathname: "/about",
      hash: "#team"
    });

    setTimeout(() => {
      scrollToElement("team");
    }, 100);
  };

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Grand Forge Games
            </h1>
            <p className="hero-tagline">
              Tempering the Fires of Imagination
            </p>
          </div>
        <div className="hero-buttons">
          <a href="/projects" className="btn-primary">
            View Projects
          </a>
          <a onClick={() => navigateToTeam()} className="btn-primary">
              Meet the Team
          </a>
        </div>
      </div>
    </section>
  );
}