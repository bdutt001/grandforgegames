import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import logo from "../assets/logos/gfg-icon-gold-black.svg";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`header ${isHome ? "header-home" : "header-other"}`}>
      <div className="header-left">
        <img src={logo} className="logo" />
        <h1>Grand Forge Games</h1>
      </div>
      <h1 className="mobile-title">GFG</h1>
      <div className="header-right">
        <Nav />
      </div>
    </header>
  );
}