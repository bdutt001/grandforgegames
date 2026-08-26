import React from "react";
import Forsaken from "../assets/posters/forsaken.jpg";
import TemporalUrgency from "../assets/posters/tu.png";
import Bullet from "../assets/logos/gfg-icon-gold.svg";
import SectionHeader from "../components/SectionHeader";

import Play from "../assets/icons/play-gold.svg";
import PlayHover from "../assets/icons/play-white.svg";
import Steam from "../assets/icons/steam-gold.svg";
import SteamHover from "../assets/icons/steam-white.svg";

export default function Projects() {
    return (
        <main className="main">
            <SectionHeader icon={Bullet}>
                Projects
            </SectionHeader>
            <p>
                All of our projects can be found below.
                <br/>
                
                <div className="games-container">
                    <div className="game-card">
                        <a href="/forsaken">
                            <img src={Forsaken} alt="Forsaken" />

                            <div className="game-overlay">
                                <h3 className="game-title">Forsaken</h3>
                                <p className="game-status">In Development</p>
                                <div className="game-release">
                                    <a 
                                        href="/forsaken#builds"
                                        className="tag-button playtest"
                                    >
                                        <span className="icon-wrapper available">
                                            <img src={Play} className="icon base"/>
                                            <img src={PlayHover} className="icon hover"/>
                                        </span>
                                        Playtest Available
                                    </a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="game-card">
                        <a href="/temporal-urgency">
                            <img src={TemporalUrgency} alt="Temporal Urgency"/>

                            <div className="game-overlay">
                                <h3 className="game-title">Temporal Urgency</h3>
                                <p className="game-status">In Development</p>
                                {/* <p className="game-date unavailable">No Release Announced</p> */}
                                <div className="game-release">
                                    <a 
                                        href="https://store.steampowered.com/app/4757140/Temporal_Urgency/"
                                        className="tag-button playtest steam"
                                        target="blank"
                                    >
                                        <span className="icon-wrapper steam">
                                            <img src={Steam} className="icon base steam"/>
                                            <img src={SteamHover} className="icon hover"/>
                                        </span>
                                        Wishlist on Steam
                                    </a>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </p>
        </main>
    );
}

