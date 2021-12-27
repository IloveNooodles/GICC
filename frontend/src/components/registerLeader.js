import React from "react";
import "./registerLeader.css";
import Navbar from "./navbar";
import Footer from "./footer";

const registerLeader = () => {
  return (
    <div className="register-leader-container">
      <div className="register-leader-background">
        <Navbar />
        <div className="register-leader-title">Register as Team Leader</div>
      </div>

      <div className="register-leader-form">
        <div className="register-leader-card">
          Email Address <br></br>
          <input
            className="email-input"
            placeholder="GICC2022@gmail.com"
          ></input>
        </div>

        <div className="register-leader-card">
          Name <br></br>
          <input className="name-input" placeholder="Jane Doe"></input>
        </div>

        <div className="register-leader-card">
          No. Handphone <br></br>
          <input className="handphone-input" placeholder="081234xxxx"></input>
        </div>

        <div className="register-leader-card-2">
          <div className="institution-container">
            Institution <br></br>
            <input className="institution-input" placeholder="ITB"></input>
          </div>
          <div className="major-container">
            Major/Faculty <br></br>
            <input className="major-input" placeholder="Informatics"></input>
          </div>
        </div>

        <div className="register-leader-card">
          Password <br></br>
          <input
            type="password"
            className="password-input"
            placeholder="password"
          ></input>
        </div>

        <div className="register-leader-card">
          Confirm Password <br></br>
          <input
            type="password"
            className="confirm-password-input"
            placeholder="confirm password"
          ></input>
        </div>

        <div className="register-leader-card">
          Competition Type <br></br>
          <div className="competition-container">
            <input className="competition-input" type={"checkbox"}></input>
            Marketing <br></br>
            <input className="competition-input" type={"checkbox"}></input>
            Operation <br></br>
            <input className="competition-input" type={"checkbox"}></input>
            EHS <br></br>
          </div>
        </div>

        <div className="register-leader-card">
          Scan of Student ID card <br></br>
          <input type={"file"} className="student-id-input"></input>
        </div>

        <div className="register-leader-card">
          Screenshot of twibbon <br></br>
          <input type={"file"} className="twibbon-input"></input>
        </div>

        <div className="register-leader-card">
          Payment receipt <br></br>
          <input type={"file"} className="payment-receipt-input"></input>
        </div>

        <div className="register-leader-card">
          Team Name <br></br>
          <input className="team-name-input" placeholder="team name"></input>
        </div>

        <div className="register-leader-card">
          Referral Code <br></br>
          <input className="referral-code-input" placeholder="XXXXXX"></input>
          <div className="referral-code-description">
            <div className="referral-code-icon">i</div>
            Referral code can obtained from a GICC Campus Ambassador, you can
            leave this field empty if you dont have any referral code
          </div>
        </div>

        <button className="submit-button">Register</button>
      </div>
    </div>
  );
};

export default registerLeader;
