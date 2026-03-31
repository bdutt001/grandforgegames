import React from "react";
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
    return (
        <main className="main">
          <div className="game-row">
            <SectionHeader icon={Bullet}>
              Temporal Urgency
            </SectionHeader>
            <span className="tag-indicator status">In Development</span>
          </div>
      
          <div className="subheading">
            <a
              href=""
              className="tag-button director"
            >
              <span className="icon-wrapper">
                <img src={Star} className="icon base"/>
                <img src={StarHover} className="icon hover"/>
              </span>
              Directed by Elhadg Diouf 
            </a>
    
            <a
            
              href=""
              className="tag-button engine"
            >
              <span className="icon-wrapper">
                <img src={Unreal} className="icon base"/>
                <img src={UnrealHover} className="icon hover"/>
              </span>
              Built in Unreal Engine 5.6 
            </a>
          </div>
          
          <p>
            Temporal Urgency is a survival-horror puzzle game currently in development at Grand Forge Games.
          </p>
          <h3>
            Screenshots
          </h3>
          <SlideshowTU></SlideshowTU>


          <h3>
            A Clockwork Conspiracy
          </h3>
          <div className="tu-description">
            <p>
            Temporal Urgency is set in a steampunk victorian era,
            where a kidnapped scientist must escape a mysterious environment controlled by a time-manipulating curator.
            Navigate through corridors, peculiar rooms to uncover the mystery behind it all. 
            </p>
            <div className="concept-art-wrapper">
              <img className="concept-art" src={ConceptArt1}/>
              <img className="concept-art" src={ConceptArt2}/>
            </div>
          </div>
          
        </main>
    )
}