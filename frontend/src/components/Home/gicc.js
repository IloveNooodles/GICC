import React from "react";
import "./gicc.css";

import registerBoard from "../assets/register-board.png";

function gicc() {
  return (
    <div className="container">
      <div className="top-border"></div>
      <div className="GICC">
        Ganesha <br></br>
        <div className="left-circle"></div>
        Integration<br></br>
        <div className="right-circle"></div>
        Case Competition <br></br>
      </div>
      <p className="description-GICC">
        We empower youth through professional cooperation experience in
        <br></br> solving industrial problems
      </p>
      <div className="bottom-border"></div>
      <div className="containerCard">
        <div className="card">
          <img
            src={registerBoard}
            alt="register-board"
            className="image-register-board"
          />
          <p className="whiteText">Register Competition</p>
        </div>
        <div className="card">
          <img
            src={registerBoard}
            alt="register-board"
            className="image-register-board"
          />
          <p className="whiteText">Register Pre-Event</p>
        </div>
      </div>
    </div>
  );
}

export default gicc;
