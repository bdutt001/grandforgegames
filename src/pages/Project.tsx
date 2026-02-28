import React from "react";
import Slideshow from "../components/Slideshow";

export default function Project() {
  return (
    <main className="main">
      <h1>Project Forsaken</h1>
      <p>
          Built in Unreal Engine 5, Project Forsaken is an RPG made for PC.
          <br></br><br></br>
          Forsaken features:
          <ul>
            <li>a diverse, open-world map that rewards exploration.</li>
            <li>a wealth of weapons and armor to be acquired.</li>
            <li>a rich combat system including melee weapons, ranged weapons and spells.</li>
            <li>several NPCs whose stories are told through engaging questlines.</li>
          </ul>
      </p>
      <Slideshow></Slideshow>
      <p className="quote">
        Rise as a pillar in this forsaken land.
      </p>
      <p>
          The world of Athyria contains ruins and relics of ancient civilizations, fallen for reasons lost to time.
          <br></br>
          Battling warped ideologies and powerful enemies, the player will traverse Athyria to uncover its history and decide its future.
      </p>
      <img src="/src/assets/WorldMap.png" />
      <p className="quote">
         We were born of change. It is our nature to change the world around us, holding on to what little we have left of ourselves. 
      </p>
      
      <div id="builds">
        <h2>Builds</h2>
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