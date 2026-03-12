import React from "react";
import Slideshow from "../components/Slideshow";

export default function Home() {
  return (
    <main className="main">
      <h1>Welcome</h1>
      <p>
        Grand Forge Games is an independent game studio 
        based in Yorktown, Virginia. 
        <br></br><br></br>
          We are currently developing <nbsp></nbsp>
        <a href= "./Project" >Project Forsaken</a>
        , an open-world RPG for PC.
      </p>
      <Slideshow></Slideshow>
      {/* <p className="quote">
        Rise as a pillar in this forsaken land.
      </p> */}
      <p>
        Our most recently-published build of Forsaken can be downloaded <nbsp></nbsp>
        <a href= "./Project#builds" >here.</a>
      </p>
      <h2>About Us</h2>
      <p>Founded in 2025, 
        the Grand Forge Games team is comprised of eleven talented members from across the world. 
        <br></br> <br></br>       
        Members of our team have competed in game building competitions,
        winning the recent "Shadows of the Imagination: A Game Jam", hosted by Old Dominion University in October of 2025.
      </p>
    </main>
  );
}
