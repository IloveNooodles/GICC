import "./register.css";
import GiccImage from "./assets/Logo GICC 2022 (On Dark) 2.png";
import Linkedin from "./assets/jam_linkedin-circle.png";
import Facebook from "./assets/jam_facebook-circle.png";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import RegisterCard1 from "./assets/register-card-1.png";
import RegisterCard2 from "./assets/register-card-2.png";

const Signup = () => {
  return (
    <div className="register-container">
      <Navbar />
      <div className="register-title">Register to Competition</div>

      <div className="register-card-container">
        <Link to="/register-leader" className="register-card">
          <img src={RegisterCard1} className="register-card-image" />
          Register as Team Leader
        </Link>
        <Link to="/register-member" className="register-card">
          <img src={RegisterCard2} className="register-card-image-2" />
          Register as Team Member
        </Link>
      </div>
      <div className="to-login-container">
        <div className="to-login-title">
          Already have an account? <br></br>
        </div>
        <Link to="/login">
          <button className="to-login">Log In</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default Signup;
