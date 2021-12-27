import "./ProfilePage.css";

import Navbar from "../components/navbar";

import { Link } from "react-router-dom";

const EditProfilePage = () => {
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
            <form action="submit">
              <div className="items-text-profile">
                <p>Username</p>
                <span>Username</span>
              </div>
              <div className="items-text-profile">
                <p>Full Name</p>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="items-text-profile">
                <p>Faculty/Major</p>
                <input type="text" placeholder="Username" />
              </div>
              <div className="items-text-profile">
                <p>Phone Number</p>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="items-text-profile">
                <p>Email</p>
                <span>Email</span>
              </div>
              <div className="items-text-profile">
                <p>Institution</p>
                <input type="text" placeholder="Institution" />
              </div>
              <div className="items-text-profile">
                <p>ID Line</p>
                <input type="text" placeholder="ID Line" />
              </div>
            </form>
          </div>
          <div className="right-buttons">
            <div className="right-buttons-horizontal">
              <Link to="/profile">
                <button className="buttons light-blue-button">Cancel</button>
              </Link>
              <Link to="/">
                <button className="buttons light-blue-button">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfilePage;
