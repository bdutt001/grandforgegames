import React from "react";

import Slideshow from "../components/Slideshow";
import SpriteSlideshow from "../components/SpriteSlideshow";

import Bullet from "../assets/icons/hammer.svg";
import Star from "../assets/icons/star.svg";
import StarHover from "../assets/icons/star-white.svg";
import Unreal from "../assets/icons/unreal.svg";
import UnrealHover from "../assets/icons/unreal-white.svg";

export default function Forsaken() {
  return (
    <main className="main">
      <div className="game-row">
        <h2>
          <img src={Bullet} className="bullet"></img>
          Project Forsaken
        </h2>
        <span className="status">In Development</span>
      </div>

      <div className="subheading">
        <a
          href=""
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
          
          Forsaken is currently still in development, <br></br>
          but you can find our latest builds and playtests  <a href= "./forsaken#builds" >below.</a>         
      </p>
      <Slideshow></Slideshow>
      
      
      {/* <p className="quote">
         We were born of change. It is our nature to change the world around us, holding on to what little we have left of ourselves. 
      </p> */}

      <p>
        The writers at Grand Forge Games have established a world rich with lore and stories to tell.
        <br></br>
        <br></br>
        Athyria contains ruins and relics of ancient civilizations, fallen for reasons lost to time.
        <br></br>
        Battling warped ideologies and powerful enemies, the player will traverse Athyria to uncover its history and decide its future. 
        
        <img className="map" src="/WorldMap.png"/>
        
        <br></br>
        Our artists are creating a wealth of unique weapons, armor, and items to collect.
        <SpriteSlideshow/>

        The sound team composes music and creates sound effects to bring the world of Forsaken to life. <br/>
      </p>
      
      
      <div id="builds">
        <h2>
          <img src={Bullet} className="bullet"></img>
          Builds
        </h2>
        <p>
          We are 
        </p>
        <p>
          To run the build:
        </p>
        <ol>
          <li>Download the most recent build using the button below.</li>
          <li>Unzip the download folder.</li>
          <li>Run the executable file (.exe) found within.</li>
        </ol>
        <h3>Playtest 1</h3>
        <p className="date">
          December 10th, 2025
        </p>
        <p>Our most complete version of Forsaken thus far, containing many of the game's core mechanics.</p>
        <a href= "https://drive.google.com/drive/folders/1UcGTUvGiI2ffJNeFSmC3CqwMZQCS4nq-"
        className="button">Download v1.3 (12GB)
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