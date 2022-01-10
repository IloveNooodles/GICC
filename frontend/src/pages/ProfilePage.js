import "./ProfilePage.css";

import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dataProfile, setDataProfile] = useState({});
  const URL = "https://salty-temple-74931.herokuapp.com/";
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      navigate("/register");
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("Token");
  };


  useEffect(() => {
    axios.get(URL + "user/profile",{headers: {Authorization: localStorage.getItem("Token")}})
      .then(res => {
        setDataProfile(res.data.profile);
        console.log(res.data.profile);
      }, []);
    console.log("halo")
  }, []);

  return (
    <div className="profile-root">
      <div className="navbar-profile">
        <Navbar className="blue-text" />
      </div>
      <div className="profile-container">
        <div className="left-profile-container">
          <p>Upload Preliminary Submission</p>
          <div className="form-container">
            <form method="POST">
              <label htmlFor="submit-button" className="buttons">
                Upload Here
              </label>
              <input
                type="file"
                id="submit-button"
                value={selectedFile}
                className="upload-input"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </form>
          </div>
          <br />
          <p style={{ fontWeight: 300, fontSize: 20 }}>
            <b>Announcement</b>
            <br />
            Technical Meeting
            <br />
            30 January 2022
            <br />
            Details : Coming soon
          </p>
        </div>
        {/* email: "mgarebaldhie80@gmail.com"
faculty: "Informatics"
fullName: "Gare"
institution: "ITB"
lineID: null
phoneNumber: "082216612992" */}
        <div className="right-profile-container">
          <h1>Profile</h1>
          <div className="right-text-content-profile">
            <div className="items-text-profile">
              <p>Full Name</p>
              { dataProfile.fullName ? (<span>{dataProfile.fullName}</span>) : (<span>-</span>) }
            </div>
            <div className="items-text-profile">
              <p>Faculty/Major</p>
              { dataProfile.faculty ? (<span>{dataProfile.faculty}</span>) : (<span>-</span>) }
            </div>
            <div className="items-text-profile">
              <p>Phone Number</p>
              { dataProfile.phoneNumber ? (<span>{dataProfile.phoneNumber}</span>) : (<span>-</span>) }
            </div>
            <div className="items-text-profile">
              <p>Email</p>
              { dataProfile.email ? (<span>{dataProfile.email}</span>) : (<span>-</span>) }
            </div>
            <div className="items-text-profile">
              <p>Institution</p>
              { dataProfile.institution ? (<span>{dataProfile.institution}</span>) : (<span>-</span>) }
            </div>
            <div className="items-text-profile">
              <p>ID Line</p>
              { dataProfile.lineID ? (<span>{dataProfile.lineID}</span>) : (<span>-</span>) }
            </div>
            <div className="items-text-profile">
              <p>Team Name</p>
              { dataProfile.teamName ? (<span>{dataProfile.teamName}</span>) : (<span>-</span>) }
            </div>
          </div>
          <div className="right-buttons">
            <div className="right-buttons-horizontal"></div>
            <Link to="/">
              <button onClick={handleLogout} className="buttons white-text">
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
