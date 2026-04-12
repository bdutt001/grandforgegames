import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToElement } from "../utils/scrollHelpers";

import Bullet from "../assets/icons/hammer.svg";
import SlideshowTU from "../components/SlideshowTU";

import Star from "../assets/icons/star.svg";
import StarHover from "../assets/icons/star-gold.svg";
import Unreal from "../assets/icons/unreal.svg";
import UnrealHover from "../assets/icons/unreal-gold.svg";
import SectionHeader from "../components/SectionHeader";

import ConceptArt1 from "../assets/concept-art/tu-1.jpg";
import ConceptArt2 from "../assets/concept-art/tu-2.jpg";

export default function TemporalUrgency(){
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

  const contentRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const prevExpanded = useRef(false);

  const topRef = useRef<HTMLDivElement | null>(null);

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
    <div className="game-page game-background tu">
      <main className="game-main">
        <section className="game-hero">
          <div className="game-hero-top">
            <div className="game-row">
              <h1 className="game-heading">Temporal Urgency</h1>
              <span className="tag-indicator status">In Development</span>
            </div>

            <p>
              Temporal Urgency is a survival-horror puzzle game currently in development at Grand Forge Games.
            </p>

            <div className="subheading">
              <a onClick={navigateToTeam} className="tag-button director">
                <span className="icon-wrapper">
                  <img src={Star} className="icon base" />
                  <img src={StarHover} className="icon hover" />
                </span>
                Directed by Elhadg Diouf
              </a>

              <a
                href="https://unrealengine.com/en-US/news/unreal-engine-5-6-is-now-available"
                className="tag-button engine"
              >
                <span className="icon-wrapper">
                  <img src={Unreal} className="icon base" />
                  <img src={UnrealHover} className="icon hover" />
                </span>
                Built in Unreal Engine 5.6
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

            <div className="slideshow-wrapper">
              <SlideshowTU />
            </div>

            <h3>A Clockwork Conspiracy</h3>

            <div className="tu-description">
              <p>
                Temporal Urgency is set in a steampunk victorian era,
                where a kidnapped scientist must escape a mysterious environment controlled by a time-manipulating curator.
                Navigate through corridors, peculiar rooms to uncover the mystery behind it all.
              </p>

              <div className="concept-art-wrapper">
                <img className="concept-art" src={ConceptArt1} />
                <img className="concept-art" src={ConceptArt2} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
