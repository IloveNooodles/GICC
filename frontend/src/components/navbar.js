import React from "react";
import logoGicc from "./assets/gicc.png";
import logoKM from "./assets/km.png";
import logoKabinet from "./assets/kabinet.png";
import "./navbar.css";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className="navbar">
      <div className="right-section">
        <div className="links-container">
          <Link to="/" className="link-style">
            Home
          </Link>
          <Link to="/competition" className="link-style">
            Competition
          </Link>
          <Link to="/preevent" className="link-style">
            Pre-Event
          </Link>
          <Link to="/profile" className="link-style">
            Profile
          </Link>
          <Link to="/register" className="link-style active-nav">
            Register/Signin
          </Link>
        </div>
        <div class="underbar"></div>
      </div>

      <div className="left-section">
        <img
          src={logoGicc}
          alt="Logo Gicc"
          style={{ width: "15%", height: "auto" }}
        />
        <img
          src={logoKM}
          alt="Logo KM ITB"
          style={{ width: "5%", height: "auto" }}
        />
        <img
          src={logoKabinet}
          alt="Logo Kabinet Akar Asa"
          style={{ width: "10%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default navbar;
