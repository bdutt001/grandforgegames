import React from "react";
import Forsaken from "../assets/posters/forsaken.jpg";
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
                        <a href="/forsaken">
                            <img src={Forsaken} alt="Forsaken" />

                            <div className="game-overlay">
                            <h3 className="game-title">Forsaken</h3>
                            <p className="game-status">In Development</p>
                            <p className="game-date">No Release Announced</p>
                            </div>
                        </a>
                    </div>
                    <div className="game-card">
                        <a href="/temporal-urgency">
                            <img src={TemporalUrgency} alt="Temporal Urgency" />

                            <div className="game-overlay">
                            <h3 className="game-title">Temporal Urgency</h3>
                            <p className="game-status">In Development</p>
                            <p className="game-date">No Release Announced</p>
                            </div>
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

