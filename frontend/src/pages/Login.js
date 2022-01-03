import "./Login.css";
import GiccImage from "../components/assets/gicc.png"
import Linkedin from "../components/assets/jam_linkedin-circle.png";
import Facebook from "../components/assets/jam_facebook-circle.png";
import { Link } from "react-router-dom";

const Login = () => {
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
              <p>Email</p>
              <input type="text" placeholder="gicc2021@gmail.com" />
            </div>
            <div className="login-form-content">
              <p>Password</p>
              <input
                type="password"
                placeholder="inipasswordnyakuatbangetloh"
              />
            </div>
          </form>
        </div>
        <div className="login-button">
          <button>Log In</button>
        </div>
        <div className="login-connectwith">
          <img src={Linkedin} alt="Logo Linkedin" />
          <img src={Facebook} alt="Logo Facebook" />
          <img src={Facebook} alt="Logo Facebook" />
        </div>
        <div className="sign-up-container">
          <p>
            Don't have an account? <br />
            <Link to="/register" style = {{textDecoration : 'none'}}>
              <span>Sign Up Here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
