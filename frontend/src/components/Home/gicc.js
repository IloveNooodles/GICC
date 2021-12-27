import React from "react";
import "./gicc.css";
import registerBoard from "../assets/register-board.png";
import Navbar from "../navbar";
import { Link } from "react-router-dom";

function gicc() {
  return (
    <div className="container">
      <Navbar />
      {/* <div className="GICC-big">GICC</div> */}
      <div className="GICC">
        Ganesha <br></br>Integration <br></br> Case Competition
      </div>
      <div style={{ color: "white" }} className="description-GICC">
        Empowering youth through professional cooperation experience in solving
        industrial problems
      </div>
      <div className="GICC-card-container">
        <Link to="/register" className="GICC-card">
          <img
            src={registerBoard}
            alt="register-board"
            className="image-register-board"
          />
          <p style={{ color: "white" }}>Register Competition</p>
        </Link>
        <Link to="/pre-event" className="GICC-card">
          <img
            src={registerBoard}
            alt="register-board"
            className="image-register-board"
          />
          <p style={{ color: "white" }}>Register Pre-Event</p>
        </Link>
      </div>
    </div>
  );
}

export default gicc;
