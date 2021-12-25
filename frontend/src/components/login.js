import "./login.css";
import GiccImage from "./assets/Logo GICC 2022 (On Dark) 2.png";
import Linkedin from "./assets/jam_linkedin-circle.png";
import Facebook from "./assets/jam_facebook-circle.png";
import { Link } from "react-router-dom";

const Login = () => {
  const hasLogin = false;
  return (
    <div className="login-container">
      <div className="left-login">
        <img src={GiccImage} alt="Gicc logo 2022" />
        <div className="login-text-content">
          <h1 className="login-title">
            Welcome to <br /> GICC.
          </h1>
          <p>
            We empowering youth through professional cooperation exerience in
            solving industrial problems
          </p>
          <Link to="/">
            <button>Go To Homepage</button>
          </Link>
        </div>
      </div>
      <div className="right-login">
        <h1>Log In</h1>
        <div className="login-form-container">
          <form>
            <div className="login-form-content">
              <p>Name</p>
              <input type="text" />
            </div>
            <div className="login-form-content">
              <p>Email</p>
              <input type="text" />
            </div>
            <div className="login-form-content">
              <p>Password</p>
              <input type="password" />
            </div>
          </form>
        </div>
        <div className="login-connectwith">
          <img src={Linkedin} alt="Logo Linkedin" />
          <img src={Facebook} alt="Logo Facebook" />
          <img src={Facebook} alt="Logo Facebook" />
        </div>
        <p style={{ marginLeft: "17%" }}>
          Don't have an account?
          <Link to="/register">
            <span>Sign Up</span>
          </Link>
        </p>
        <div className="login-button">
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
};
export default Login;