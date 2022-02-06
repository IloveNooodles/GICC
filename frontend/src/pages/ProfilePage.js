import "./ProfilePage.css";

import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [dataProfile, setDataProfile] = useState({});
  const URL = "https://gicc2022-backend.azurewebsites.net/";
  const navigate = useNavigate();
  const [succesSubmit, setSuccessSubmit] = useState("NOTSUBMIT");
  const [fileName, setFileName] = useState();
  const [errorCode, setErrorCode] = useState();
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      navigate("/register");
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("Token");
  };

  const handleSubmit = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmitTrue = (e) => {
    e.preventDefault();
    var fileFormData = new FormData();
    fileFormData.append("submission", selectedFile);
    axios({
      method: "post",
      url: URL + "submission/submit",
      data: fileFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("Token"),
      },
    })
      .then(function (response) {
        setSuccessSubmit(response.data.status);
      })
      .catch(function (error) {
        setSuccessSubmit("ERROR");
      });
  };

  useEffect(() => {
    axios
      .get(URL + "user/profile", {
        headers: { Authorization: localStorage.getItem("Token") },
      })
      .then((res) => {
        setDataProfile(res.data.profile);
      }, []);
    axios
      .get(URL + "submission/status", {
        headers: { Authorization: localStorage.getItem("Token") },
      })
      .then((res) => {
        setSuccessSubmit(res.data.status);
        setFileName(res.data.message);
        setErrorCode(res.data.errorCodes);
      })
      .catch((error) => {
        setSuccessSubmit("ERROR");
      });
  }, [succesSubmit, errorCode]);

  return (
    <div className="profile-root">
      <div className="navbar-profile">
        <Navbar className="blue-text" />
      </div>
      <div className="profile-container">
        <div className="left-profile-container">
          <p className="display-none">Upload Preliminary Submission</p>
          <div className="form-container">
            {succesSubmit === "NOTSUBMIT" ||
            errorCode === "NO_SUBMISSION_FOUND" ? (
              <form>
                <div className="flex-container-form">
                  <label htmlFor="submit-button" className="buttons">
                    Upload Here
                  </label>
                  <input
                    type="file"
                    id="submit-button"
                    className="upload-input"
                    onChange={handleSubmit}
                  />
                  {selectedFile ? (
                    <div className="submit-container-name">
                      <p className="submit-name">{selectedFile.name}</p>
                    </div>
                  ) : null}
                </div>
                <input
                  type="submit"
                  id="submit-button-true"
                  className="buttons"
                  onClick={handleSubmitTrue}
                />
              </form>
            ) : succesSubmit === "SUCCESS" ? (
              <div className="success-submit-container">
                <p>Upload Success</p>
                <p>{fileName}</p>
              </div>
            ) : (
              <div className="success-submit-container">
                <p>Upload Failed, Please Refresh the Page</p>
              </div>
            )}
          </div>
          <br />
          <p style={{ fontWeight: 300, fontSize: 20, paddingTop: "2rem" }}>
            <b className="temp-style-annoucement">Announcement</b>
            <br />
            Technical Meeting
            <br />
            12 February 2022
            <br />
            Time : TBA
          </p>
        </div>
        <div className="right-profile-container">
          <h1>Profile</h1>
          <div className="right-text-content-profile">
            <div className="items-text-profile">
              <p>Full Name</p>
              {dataProfile.fullName ? (
                <span>{dataProfile.fullName}</span>
              ) : (
                <span>-</span>
              )}
            </div>
            <div className="items-text-profile">
              <p>Faculty/Major</p>
              {dataProfile.faculty ? (
                <span>{dataProfile.faculty}</span>
              ) : (
                <span>-</span>
              )}
            </div>
            <div className="items-text-profile">
              <p>Phone Number</p>
              {dataProfile.phoneNumber ? (
                <span>{dataProfile.phoneNumber}</span>
              ) : (
                <span>-</span>
              )}
            </div>
            <div className="items-text-profile">
              <p>Email</p>
              {dataProfile.email ? (
                <span>{dataProfile.email}</span>
              ) : (
                <span>-</span>
              )}
            </div>
            <div className="items-text-profile">
              <p>Institution</p>
              {dataProfile.institution ? (
                <span>{dataProfile.institution}</span>
              ) : (
                <span>-</span>
              )}
            </div>
            <div className="items-text-profile">
              <p>Team Name</p>
              {dataProfile.teamName ? (
                <span>{dataProfile.teamName}</span>
              ) : (
                <span>-</span>
              )}
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
