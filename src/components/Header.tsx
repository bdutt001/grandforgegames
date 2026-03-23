import React from "react";
import Nav from "./Nav";
import logo from "../assets/logos/gfg-icon-gold-black.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src = {logo}
          className = "logo"
        />
        <h1>Grand Forge Games</h1>
        {/* <p className="tagline">Tempering the Fires of Imagination</p> */}
      </div>
      <div className="header-right">
        <Nav />
      </div>
    </header>
  );
}
