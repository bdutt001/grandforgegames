import {Navigate, useNavigate} from "react-router-dom";

import { scrollToElement } from "../utils/scrollHelpers";

import Slideshow from "../components/Slideshow";
import SpriteSlideshow from "../components/SpriteSlideshow";

import Bullet from "../assets/icons/hammer.svg";
import Play from "../assets/icons/play.svg";
import PlayHover from "../assets/icons/play-gold.svg";
import Star from "../assets/icons/star.svg";
import StarHover from "../assets/icons/star-gold.svg";
import Unreal from "../assets/icons/unreal.svg";
import UnrealHover from "../assets/icons/unreal-gold.svg";

export default function Forsaken() {
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
    <main className="main">
      <div className="game-row">
        <h2>
          <img src={Bullet} className="bullet"></img>
          Project Forsaken
        </h2>
        <span className="status">In Development </span>
      </div>

      <div className="subheading">
        
        <a 
          href="/forsaken#builds"
          className="release-button"
        >
          <span className="release-wrapper available">
            <img src={Play} className="icon base"/>
            <img src={PlayHover} className="icon hover"/>
          </span>
          Playtest Available
        </a>

        <a
          onClick={() => navigateToTeam()}
          className="director-button"
        >
          <span className="director-wrapper">
            <img src={Star} className="icon base"/>
            <img src={StarHover} className="icon hover"/>
          </span>
          Directed by Nick Sherer 
        </a>

        <a
          href=""
          className="engine-button"
        >
          <span className="engine-wrapper">
            <img src={Unreal} className="icon base"/>
            <img src={UnrealHover} className="icon hover"/>
          </span>
          Built in Unreal Engine 5.7 
        </a>
      </div>
      <p>
          {/* Forsaken features:
          <ul>
            <li>a diverse, open-world map that rewards exploration.</li>
            <li>a wealth of weapons and armor to be acquired.</li>
            <li>a rich combat system including melee weapons, ranged weapons and spells.</li>
            <li>several NPCs whose stories are told through engaging questlines.</li>
          </ul> */}
          Forsaken is a single-player, open-world action RPG centered around visceral combat, exploration, and meaningful player choice.
          Development for Forsaken began in 2025 and is still ongoing,
          but you can download our latest build or playtest  <a href= "./forsaken#builds" >here.</a>
      </p>
      <h3>
        Screenshots
      </h3>
      <Slideshow></Slideshow>
      <p>
        All images were captured within Unreal Engine.
      </p>
      
      
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
      <h3> 
        More
      </h3>
      <p>
        Our artists are creating a wealth of unique weapons, armor, and items to collect.

        The sound team composes music and creates sound effects to bring the world of Forsaken to life. 
        <SpriteSlideshow/>
        <br/>
      </p>
      
      
      <div id="builds">
        <h2>
          <img src={Bullet} className="bullet"></img>
          Builds
        </h2>
        <p>
           
        </p>
        
        <h3>Playtest 1</h3>
        <p className="date">
          December 10th, 2025
        </p>
        <p>Our most complete version of Forsaken thus far, containing many of the game's core mechanics.</p>
        <a href= "https://drive.google.com/drive/folders/1UcGTUvGiI2ffJNeFSmC3CqwMZQCS4nq-"
        className="button">Download v1.3 (12GB)
        </a>
        <p>
          To run the build:
        </p>
        <ol>
          <li>Download the most recent build using the button below.</li>
          <li>Unzip the download folder.</li>
          <li>Run the executable file (.exe) found within.</li>
        </ol>
        <p>
          We would love to hear your feedback on Forsaken, let us know your thoughts in the form below. 
        </p>
        <a href= "https://docs.google.com/forms/d/e/1FAIpQLSeCGwhd3qtoiCS2CuMAAoW4p568fpfhe4mSgBBxk_AcxJ0QNQ/viewform"
        className="contact-button">Give Feedback
        </a>

        {/*
        <h3>Prototype 2</h3>
        <p className="date">
          August 30th, 2025
        </p>
        <p>
          Our second prototype of Forsaken, focusing on map exploration and core gameplay mechanics.
        </p>
          <a href= "https://drive.google.com/file/d/1y-ORNPIqT9Xp5XaA-VRYNi6pm-Rw080O/view?usp=drive_link"
        className="button">Download v1.2
        </a>

        <h3>Prototype 1</h3>
        <p className="date">
          May 30th, 2025
        </p>
        <p>
            Our first prototype of Forsaken, focusing on the game's combat systems.   
        </p>
          <a href= "https://drive.google.com/file/d/1Je6Rx7-yAIAkmJfXyS-wwtCdyJ4puBvf/view?usp=drive_link"
        className="button">Download v1.1
        </a>
        */}
      </div>
    </main>
  );
}