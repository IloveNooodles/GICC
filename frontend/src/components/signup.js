import "./login.css";
import GiccImage from "./assets/Logo GICC 2022 (On Dark) 2.png";
import Linkedin from "./assets/jam_linkedin-circle.png";
import Facebook from "./assets/jam_facebook-circle.png";

const Signup = () => {
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
        </div>
      </div>
      <div className="right-login">
        <h1>Sign Up</h1>
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
        <p>
          Already have an account? <span>Log in</span>
        </p>
        <div className="login-button">
          <button>Create Account</button>
        </div>
      </div>
    </div>
  );
};
export default Signup;
