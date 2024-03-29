import React from "react";
import logoGicc from "./assets/gicc.png";
import logoKM from "./assets/km.png";
import logoKabinet from "./assets/kabinet.png";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const { pathname } = useLocation();
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("Token"));
  }, [token]);

  return (
    <div className="navbar">
      <div className="right-section">
        <div className="links-container">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={`link-style ${
              pathname === "/profile" || pathname === "/editprofile"
                ? "blue-text"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/competition"
            style={{ textDecoration: "none" }}
            className={`link-style ${
              pathname === "/profile" || pathname === "/editprofile"
                ? "blue-text"
                : ""
            }`}
          >
            Competition
          </Link>
          <Link
            to="/pre-event"
            style={{ textDecoration: "none" }}
            className={`link-style ${
              pathname === "/profile" || pathname === "/editprofile"
                ? "blue-text"
                : ""
            }`}
          >
            Pre-Event
          </Link>
          {token ? (
            <Link
              to="/profile"
              style={{ textDecoration: "none" }}
              className={`link-style ${
                pathname === "/profile" || pathname === "/editprofile"
                  ? "blue-text"
                  : ""
              }`}
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              className={`link-style ${
                pathname === "/competition"
                  ? "active-nav-competition"
                  : "active-nav"
              }`}
            >
              Log In/Register
            </Link>
          )}
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

export default Navbar;
