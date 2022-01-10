import "./ProfilePage.css";

import Navbar from "../components/navbar";
import { useState } from "react";

import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="profile-root">
      <div className="navbar-profile">
        <Navbar className="blue-text" />
      </div>
      <div className="profile-container">
        <div className="left-profile-container">
          <p>Upload Preliminary Submission</p>
          <div className="form-container">
            <form>
              <label htmlFor="submit-button" className="buttons">Upload Here</label>
              <input
                type="file"
                id="submit-button"
                value={selectedFile}
                className="upload-input"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </form>
          </div>
          <br/>
          <p style={{fontWeight : 300, fontSize : 20}}>
            <b>Announcement</b><br/>
            Technical Meeting 
            <br/>30 January 2022<br/>
            Details : Coming soon
          </p>
        </div>
        <div className="right-profile-container">
          <h1>Profile</h1>
          <div className="right-text-content-profile">
            <div className="items-text-profile">
              <p>Username</p>
              <span>Username</span>
            </div>
            <div className="items-text-profile">
              <p>Full Name</p>
              <span>Full Name</span>
            </div>
            <div className="items-text-profile">
              <p>Faculty/Major</p>
              <span>Username</span>
            </div>
            <div className="items-text-profile">
              <p>Phone Number</p>
              <span>Phone Number</span>
            </div>
            <div className="items-text-profile">
              <p>Email</p>
              <span>Email</span>
            </div>
            <div className="items-text-profile">
              <p>Institution</p>
              <span>Institution</span>
            </div>
            <div className="items-text-profile">
              <p>ID Line</p>
              <span>ID Line</span>
            </div>
            <div className="items-text-profile">
              <p>Team Name</p>
              <span>-</span>
            </div>
          </div>
          <div className="right-buttons">
            <div className="right-buttons-horizontal">
              {/* <Link to="/editprofile">
                <button className="buttons light-blue-button">
                  Edit Profile
                </button>
              </Link>
              <button className="buttons light-blue-button">
                Change Password
              </button> */}
            </div>
            <Link to="/">
              <button className="buttons white-text">Log Out</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
