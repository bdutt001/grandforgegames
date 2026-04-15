import {Navigate, useLocation, useNavigate} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { scrollToElement } from "../utils/scrollHelpers";

import SectionHeader from "../components/SectionHeader";

import Slideshow from "../components/Slideshow";
import SpriteSlideshow from "../components/SpriteSlideshow";

import Bullet from "../assets/logos/gfg-icon-gold.svg";

import Play from "../assets/icons/play.svg";
import PlayHover from "../assets/icons/play-gold.svg";
import Star from "../assets/icons/star.svg";
import StarHover from "../assets/icons/star-gold.svg";
import Unreal from "../assets/icons/unreal.svg";
import UnrealHover from "../assets/icons/unreal-gold.svg";


export default function Forsaken() {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const prevExpanded = useRef(false);
  const topRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const navigateToTeam = () => {
    navigate({
      pathname: "/about",
      hash: "#team"
    });

    setTimeout(() => {
      scrollToElement("team");
    }, 100);
  };

  const navigateToBuild = () => {
    setExpanded(true);
    navigate({
      pathname: "/forsaken",
      hash: "#builds"
    })
    setTimeout(() => {
      scrollToElement("builds");
    }, 100);
  }

  useEffect(() => {
    if (location.hash === "#builds") {
      setExpanded(true);

      setTimeout(() => {
        scrollToElement("builds");
      }, 300);
    }
  }, [location]);

  useEffect(() => {
    if (!expanded && prevExpanded.current) {
      setTimeout(() => {
        topRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 2000);
    }

    prevExpanded.current = expanded;
  }, [expanded]);


  return (
    <div className="game-page game-background forsaken">
      <main className="game-main">
        <section className="game-hero">
          <div className="game-hero-top">
            <div className="game-row">
              <h1 className="game-heading">Forsaken</h1>
              <span className="tag-indicator status">In Development </span>
            </div>
            
            <p>
              Forsaken is a single-player, open-world action RPG centered around visceral combat, exploration, and meaningful player choice.
              
            </p>

            <div className="subheading">
              <a
                // href="/forsaken#builds"
                onClick={navigateToBuild}
                className="tag-button release"
              >
                <span className="icon-wrapper available">
                  <img src={Play} className="icon base"/>
                  <img src={PlayHover} className="icon hover"/>
                </span>
                Playtest Available
              </a>
              <a
                onClick={() => navigateToTeam()}
                className="tag-button director"
              >
                <span className="icon-wrapper">
                  <img src={Star} className="icon base"/>
                  <img src={StarHover} className="icon hover"/>
                </span>
                Directed by Nick Sherer
              </a>
              <a
                href="https://unrealengine.com/en-US/news/unreal-engine-5-7-is-now-available"
                className="tag-button engine"
              >
                <span className="icon-wrapper">
                  <img src={Unreal} className="icon base"/>
                  <img src={UnrealHover} className="icon hover"/>
                </span>
                Built in Unreal Engine 5.7
              </a>
            </div>
          </div>
        </section>

        <div
          ref={topRef}
          className={`game-glass ${expanded ? "open" : ""}`}
        >
          <div 
            className="arrow-row"
            ref={contentRef} 
          >
            <button
              className={`expand-arrow ${expanded ? "open" : ""}`}
              onClick={() => {
                const next = !expanded;
                setExpanded(next);

                if (!expanded) {
                  setTimeout(() => {
                    contentRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 250);
                }
              }}
            >
              ›
            </button>
          </div>
          <section
            
            className={`game-content ${expanded ? "open" : ""}`}
          >
            <h3>Slideshow</h3>
            <p className="secondary-text">
              All images captured within Unreal Engine.
            </p>
            <Slideshow/>
            {/* <p className="quote">
               We were born of change. It is our nature to change the world around us, holding on to what little we have left of ourselves.
            </p> */}
            <h3>
              Athyria: The World of Forsaken
            </h3>
            <div className="athyria-section">
              <p className="athyria">
                {/* The writers at Grand Forge Games have established a world rich with lore and stories to tell.  */}
                Explore the continent of Athyria:
                uncover ancient ruins, descend into forgotten caverns, and discover the remnants of long-collapsed empires in a world tainted by their sins.
                Face powerful enemies and confront factions shaped by twisted ideologies. Encounter a plethora of NPCs with expansive storylines and quests whose fates will ultimately be determined by your actions.
                As the mysteries of this strange world unfold, decide how you will shape Athyria’s future. Will you stand against the ages… or become another ruin swallowed by them?
              </p>
              <img className="forsaken-map" src="/WorldMap.png"/>
            </div>
            <h3>Epic Grants Video Submission</h3>
            <div className="pitch-video">
              <iframe
                src="https://www.youtube.com/embed/88ctGLANEG0"
                title="Pitch Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>More</h3>
            <p>
              Our artists are creating a wealth of unique weapons, armor, and items to collect.
              The sound team composes music and creates sound effects to bring the world of Forsaken to life.
              <SpriteSlideshow/>
              <br/>
            </p>
            <div id="builds">
              <SectionHeader icon={Bullet}>
                Builds
              </SectionHeader>
              <p>
                To run the build:
              </p>
              <ol>
                <li>Download the most recent build using the button below.</li>
                <li>Unzip the download folder.</li>
                <li>Run the executable file (.exe) found within.</li>
              </ol>
              
              <div className="build-links">
                <div className="build-download">
                  <div className="build-heading">
                    <h3>Download</h3>
                    <p className="date">
                      December 10th, 2025
                    </p>
                  </div>
                  <p>Our most complete version of Forsaken thus far, containing many of the game's core mechanics.</p>
                  <a
                    href= "https://drive.google.com/drive/folders/1UcGTUvGiI2ffJNeFSmC3CqwMZQCS4nq-"
                    className="button"
                  >
                    Download v1.3 (12GB)
                  </a>
                </div>
                <div className="build-feedback">
                  <h3>
                    Feedback
                  </h3>
                  <p>
                    We would love to hear your feedback on Forsaken, let us know your thoughts in the form below.
                  </p>
                  <a
                    href= "https://docs.google.com/forms/d/e/1FAIpQLSeCGwhd3qtoiCS2CuMAAoW4p568fpfhe4mSgBBxk_AcxJ0QNQ/viewform"
                    className="button"
                  >
                    Give Feedback
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}