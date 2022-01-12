import "./Login.css";
import GiccImage from "../components/assets/gicc.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [status, setStatus] = useState({status: null, errorMessage: "base"});
  const URL = "https://gicc2022-backend.azurewebsites.net/";
  const history = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      history("/");
    }
  }, []);

  const LoginUser = () => {
    console.log(status);
    const loginData = {
      email: email,
      password: pswd,
    };
    console.log(loginData);

    axios({
      method: "post",
      url: URL + "user/signin",
      data: loginData,
    })
      .then(function (res) {
        console.log(res);
        if (res.data.status === "SUCCESS") {
          setStatus({...status, status: "SUCCESS"});
          localStorage.setItem("Token", res.data.token);
          history("/");
        } else {
          setStatus({status: "FAILED", errorMessage: res.data.errorMessage})
        }
      })
      .catch(function (err) {
        console.log(err.message);
        setStatus({ status: "FAILED", errorMessage: "Login failed" });
      });
  };

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
              <input
                type="text"
                placeholder="gicc2021@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-form-content">
              <p>Password</p>
              <input
                type="password"
                placeholder="inipasswordnyakuatbangetloh"
                onChange={(e) => setPswd(e.target.value)}
              />
            </div>
          </form>
        </div>
        {status.status === "SUCCESS" ? (
          // ini tinggal redirect
          <div className="error-popup">berhasil</div>
        ) : status.status === "FAILED" ? (
          <div className="error-popup">{status.errorMessage}</div>
        ) : null}
        <div className="login-button">
          <button onClick={LoginUser}>Log In</button>
        </div>
        {/* <div className="login-connectwith">
          <img src={Linkedin} alt="Logo Linkedin" />
          <img src={Facebook} alt="Logo Facebook" />
          <img src={Facebook} alt="Logo Facebook" />
        </div> */}
        <div className="sign-up-container">
          <p>
            Don't have an account? <br />
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span>Sign Up Here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
