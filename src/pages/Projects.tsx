import React from "react";
import Forsaken from "../assets/slideshow/2-agismeyra.png";
import TemporalUrgency from "../assets/posters/project-tu.jpg";
import Bullet from "../assets/icons/hammer.svg";

export default function Projects() {
    return (
        <main className="main">
            <h2>
                <img src={Bullet} className="bullet"></img>
                Projects
            </h2>
            <p>
                All of our projects can be found below.
                <br></br><br></br>
                <h3>In Development:</h3>
                <div className="games-container">
                    <div className="game-card">
                    <a href= "./forsaken" >
                        <img src = {Forsaken}></img>
                    </a>
                    </div>
                    <div className="game-card">
                    <a href= "./temporal-urgency" >
                        <img src = {TemporalUrgency}></img>
                    </a>
                    </div>
                </div>
                {/* .
                Our most recently-published build of Forsaken can be downloaded <nbsp></nbsp>
                <a href= "./forsaken#builds" >here.</a> */}
            </p>
        </main>
    );
}

