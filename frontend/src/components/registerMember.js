import React from 'react'
import Navbar from './navbar'
import "./registerMember.css"

const registerMember = () => {
  return (
    <div className="register-member-container">
      <div className="register-member-background">
        <Navbar />
        <div className="register-member-title">Register as Team Member</div>
      </div>
      <div className="register-member-form">
        <div className="register-member-card">
          Address <br></br>
          <input className="address-input"></input>
        </div>
        <div className="register-member-card">
          Date of Birth <br></br>
          <input className="dob-input"></input>
        </div>
        <div className="register-member-card">
          Gender <br></br>
          <div className="gender-container">
            <input className="male-input" type={"checkbox"}></input> Male
            <input className="female-input" type={"checkbox"}></input> Female
          </div>
        </div>
        <div className="register-member-card-2">
          <div className="institution-container">
            Institution <br></br>
            <input className="institution-input"></input>
          </div>
          <div className="major-container">
            Major/Faculty <br></br>
            <input className="major-input"></input>
          </div>
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
          Team Name <br></br>
          <input className="team-name-input"></input>
        </div>

        <div className="register-member-card">
          Referral Code <br></br>
          <input className="referral-code-input"></input>
          <div className="referral-code-description">
            <div className="referral-code-icon">i</div>
            Referral code can obtained from a GICC Campus Ambassador, you can
            leave this field empty if you dont have any referral code
          </div>
        </div>

        <button className="submit-button">Register</button>
      </div>
    </div>
  )
}

export default registerMember
