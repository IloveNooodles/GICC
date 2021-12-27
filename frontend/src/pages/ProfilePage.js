import "./ProfilePage.css";

import Navbar from "../components/navbar";

import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="profile-root">
      <div className="navbar-profile">
        <Navbar className="blue-text" />
      </div>
      <div className="profile-container">
        <div className="left-profile-container"></div>
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
          </div>
          <div className="right-buttons">
            <div className="right-buttons-horizontal">
              <Link to="/editprofile">
                <button className="buttons light-blue-button">
                  Edit Profile
                </button>
              </Link>
              <button className="buttons light-blue-button">
                Change Password
              </button>
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
