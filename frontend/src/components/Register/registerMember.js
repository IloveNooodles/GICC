import React from "react";
import Navbar from "../navbar";
import "./registerMember.css";

const registerMember = () => {
  return (
    <div className="register-member-container">
      <div className="register-member-background">
        <Navbar />
        <div className="register-member-title">Register as Team Member</div>
      </div>

      <div className="register-member-form">
        <div className="register-member-card">
          Email Address <br></br>
          <input
            className="email-input"
            placeholder="GICC2022@gmail.com"
          ></input>
        </div>

        <div className="register-member-card">
          Name <br></br>
          <input className="name-input" placeholder="Jane Doe"></input>
        </div>

        <div className="register-member-card">
          No. Handphone <br></br>
          <input className="handphone-input" placeholder="081234xxxx"></input>
        </div>

        <div className="register-member-card-2">
          <div className="institution-container">
            Institution <br></br>
            <input className="institution-input" placeholder="ITB"></input>
          </div>
          <div className="major-container">
            Major/Faculty <br></br>
            <input className="major-input" placeholder="Informatics"></input>
          </div>
        </div>

        <div className="register-member-card">
          Password <br></br>
          <input
            type="password"
            className="password-input"
            placeholder="password"
          ></input>
        </div>

        <div className="register-member-card">
          Confirm Password <br></br>
          <input
            type="password"
            className="confirm-password-input"
            placeholder="confirm password"
          ></input>
        </div>

        <div className="register-member-card">
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

        <div className="register-member-card">
          Scan of Student ID card <br></br>
          <input type={"file"} className="student-id-input"></input>
        </div>

        <div className="register-member-card">
          Screenshot of twibbon <br></br>
          <input type={"file"} className="twibbon-input"></input>
        </div>

        <div className="register-member-card">
          Payment receipt <br></br>
          <input type={"file"} className="payment-receipt-input"></input>
        </div>

        <div className="register-member-card">
          Team Code <br></br>
          <input className="team-name-input" placeholder="team code"></input>
          <div className="team-code-description">
            <div className="team-code-icon">i</div>
            Ask your team leader for your team's code
          </div>
        </div>

        <div className="register-member-card">
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

export default registerMember;
