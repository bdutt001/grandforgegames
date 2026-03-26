import React from "react";
import Bullet from "../assets/icons/hammer.svg";
import SlideshowTU from "../components/SlideshowTU";

import Star from "../assets/icons/star.svg";
import StarHover from "../assets/icons/star-gold.svg";
import Unreal from "../assets/icons/unreal.svg";
import UnrealHover from "../assets/icons/unreal-gold.svg";

export default function TemporalUrgency(){
    return (
        <main className="main">
          <div className="game-row">
            <h2>
              <img src={Bullet} className="bullet"></img>
              Project Temporal Urgency
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
              Directed by Elhadg Diouf 
            </a>
    
            <a
            
              href=""
              className="engine-button"
            >
              <span className="engine-wrapper">
                <img src={Unreal} className="icon base"/>
                <img src={UnrealHover} className="icon hover"/>
              </span>
              Built in Unreal Engine 5.6 
            </a>
          </div>
          <p>
            Temporal Urgency is a survival-horror puzzle game currently in development at Grand Forge Games, 
            <br></br>
            directed by Elhadg Diouf.
            <br></br>
            <br></br>
            Temporal Urgency is built in Unreal Engine 5.6.
          </p>
          <SlideshowTU></SlideshowTU>
          <p>
            Temporal Urgency is set in a steampunk victorian era,
            <br></br> 
            where a kidnapped scientist must escape a mysterious environment controlled by a time-manipulating curator.
            <br></br>
            <br></br>
            Navigate through corridors, peculiar rooms to uncover the mystery behind it all. 
          </p>
        </main>
    )
}