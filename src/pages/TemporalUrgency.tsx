import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToElement } from "../utils/scrollHelpers";

import Bullet from "../assets/logos/gfg-icon-gold.svg";
import SlideshowTU from "../components/SlideshowTU";

import Star from "../assets/icons/star.svg";
import StarHover from "../assets/icons/star-gold.svg";
import Unreal from "../assets/icons/unreal.svg";
import UnrealHover from "../assets/icons/unreal-gold.svg";
import SectionHeader from "../components/SectionHeader";

import Pillars from "../assets/concept-art/pillars.png";
import Narrative from "../assets/concept-art/narrative.png";
import Enemy from "../assets/concept-art/enemy.png";
import FF from "../assets/concept-art/ff.png";
import Reverse from "../assets/concept-art/reverse.png";
import Art from "../assets/concept-art/art.png";


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
              Temporal Urgency is a psychological-horror puzzle-driven experience currently in development at Grand Forge Games.
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
            <div className="slideshow-wrapper">
              <SlideshowTU />
            </div>

            
            <div className="section">
              {/* <img src={Pillars}></img> */}
              <h3>Game Pillars</h3>
              <p className="secondary-text">
                The core experiences that define every moment of gameplay:
              </p>
              
              <div className="pillars">
                <div className="pillar">
                  <h4>Tension Through Time Manipulation</h4>
                  <p>
                    Time isn’t just a mechanic. It’s your greatest weapon and your greatest threat. Bend, pause, and distort time to survive… but every decision carries consequences that can trap you in ways you never expected.
                  </p>
                </div>
                <div className="pillar">
                  <h4>Environmental & Cinematic Storytelling</h4>
                  <p>
                    Every room tells a story. Through haunting environments, subtle details, and cinematic sequences, you’ll uncover a narrative that unfolds without hand-holding; Drawing you deeper into a world that feels alive, mysterious, and unsettling.
                  </p>
                </div>
                <div className="pillar">
                  <h4>True Psychological Horror</h4>
                  <p>
                    This is not just about scares. It’s about vulnerability. Constant danger, and psychological pressure force you to think, adapt, and survive against overwhelming odds.
                  </p>
                </div>
              </div>
            </div>

            
            <div className="section">
              <img src={Narrative}></img>
              <h3>Narrative</h3>
              <p>
                Viktor Andrews, a scientist in the late 1800s Steampunk world during the peak of the Industrial Revolution, wakes up in what looks like his lab. However, there is something more sinister lurking afoot. Kidnapped and locked within his own estate he must solve the puzzles and use newfound abilities to evade enemies if he wishes to uncover the reason why he is being kept and uncover the mastermind behind it all.
              </p>
            </div>
            
            <div className="section">
              <h3>Innovative Time-Based Mechanics</h3>
              <p>
                Solve intricate puzzles, escape relentless dangers, and harness the power to manipulate time itself. As you progress, unlock powerful temporal abilities that reshape the world around you, opening new paths, revealing hidden secrets, and creating innovative ways to overcome obstacles. Every encounter and puzzle encourages experimentation, rewarding creative thinking, precise timing, and strategic use of your ever-evolving powers. Mastering these abilities is the key to surviving the horrors that await.
              </p>

              <div className="pillars">
                <div className="pillar">
                  <img src={Reverse}></img>
                  <h4>Reverse Time</h4>
                  <p>
                    Turn back the clock to rewrite your decisions and overcome impossible situations. Reverse time to restore the environment, undo mistakes, avoid deadly traps, and rethink your approach to challenging puzzles. This ability encourages experimentation, allowing players to discover creative solutions and uncover hidden opportunities that would otherwise remain out of reach.
                  </p>
                </div>
                <div className="pillar">
                  <img src={FF}></img>
                  <h4>
                    Leap Through The Hours
                  </h4>
                  <p>
                    Accelerate time to transform the world around you. Fast forward to trigger environmental changes, speed up mechanisms, and manipulate objects to create new paths or solve complex puzzles. As you gain additional time-based abilities throughout the game, you'll learn to combine them strategically, making every challenge a test of timing, observation, and ingenuity.
                  </p>
                </div>
                <div className="pillar">
                  <img src={Enemy}></img>
                  <h4>Time-Fractured Enemies</h4>
                  <p>
                    Each enemy you face is uniquely designed for each environment in the world. Every encounter feels unpredictable, keeping tension high from start to finish.
                  </p>
                </div>
              </div>
            </div>

            <div className="section">
              <h4>Puzzle-Driven Horror Exploration</h4>
              <p>
                This is a thinking player’s horror experience. Progression is driven by puzzles seamlessly woven into the environment making every discovery feel earned and every breakthrough unforgettable.
              </p>
            </div>


            <div className="tu-art">
              
              <div>
                <h4>Art Style: Sepia Tone</h4>
                <p>
                  We chose a sepia-toned visual style to give the game a distinctive identity within the horror genre. While many horror games rely on cold blue palettes, desaturated grayscale, or heavy darkness, our warm sepia aesthetic creates an atmosphere that is both unsettling and memorable. The aged, weathered coloration evokes the feeling of decaying photographs, forgotten places, and deteriorating memories, reinforcing the game's themes of mystery and unease.
                </p>
                <p>
                  The sepia palette also enhances the contrast of key visual elements, allowing features such as the glowing doorway, deep shadows, and crimson accents to immediately draw the player's attention. This restrained use of color creates a unique visual language that makes important objects and areas stand out without relying on excessive visual effects. As a result, the game establishes a recognizable artistic identity that differentiates it from other horror titles while maintaining a consistently eerie and immersive atmosphere.
                </p>
              </div>
              <img src={Art}></img>
            </div>
           
            
            {/* <div className="tu-description">
              <p>
                Temporal Urgency is set in a steampunk victorian era,
                where a kidnapped scientist must escape a mysterious environment controlled by a time-manipulating curator.
                Navigate through corridors, peculiar rooms to uncover the mystery behind it all.
              </p>

              <div className="concept-art-wrapper">
                <img className="concept-art" src={ConceptArt1} />
                <img className="concept-art" src={ConceptArt2} />
              </div>
            </div> */}
          </section>
        </div>
      </main>
    </div>
  );
}
