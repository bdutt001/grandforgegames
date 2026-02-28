import React from "react";
import Nav from "./Nav";
import logo from "../assets/logos/logo-serif.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src = {logo}
          alt = "Grand Forge Games"
          className = "logo"
        />
        <p className="tagline">Tempering the Fires of Imagination</p>
      </div>
      <div className="header-right">
        <Nav />
      </div>
    </header>
  );
}
