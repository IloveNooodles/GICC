import React, { useState } from "react";
import "./Register.css";
import Navbar from "../components/navbar";
import axios from "axios";

const Register = () => {
  const [studentId, setStudentId] = useState();
  const [twibbon, setTwibbon] = useState();
  const [payment, setPayment] = useState();
  const [pass, setPass] = useState("");
  const [passwordEqual, setPasswordEqual] = useState(false);
  const [textForm, setTextForm] = useState({
    email: "",
    password: "",
    fullName: "",
    institution: "",
    phoneNumber: "",
    faculty: "",
    competitionType: "",
    referralCode: "",
  });
  const URL = "https://salty-temple-74931.herokuapp.com/";

  const checkPassword = (tempPass) => {
    if (tempPass !== pass) {
      setPasswordEqual(false);
    } else {
      setPasswordEqual(true);
    }
  };

  const handleChange = (e) => {
    setTextForm({ ...textForm, [e.target.name]: e.target.value });
  };

  const SubmitRegister = (e) => {
    e.preventDefault()
    var bodyFormData = new FormData();
    bodyFormData.append("twibbon", twibbon);
    bodyFormData.append("student_id", studentId);
    bodyFormData.append("payment", payment);
    bodyFormData.append("form", JSON.stringify(textForm));
    console.log(textForm);

    axios({
      method: "post",
      url: URL + "user/register",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        // buat cek udah registrasi bener
        console.log(response.data);
      })
      .catch(function (error) {
        // buat cek udah registrasi salah
        console.log(error);
      });
  };

  return (
    <div className="register-leader-container">
      <div className="register-leader-background">
        <Navbar />
        <div className="register-leader-title">Register</div>
      </div>

      <form className="register-leader-form">
        <div className="register-leader-card">
          Email Address <br></br>
          <input
            className="email-input"
            placeholder="GICC2022@gmail.com"
            type="email"
            name="email"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </div>

        <div className="register-leader-card">
          Name <br></br>
          <input
            className="name-input"
            placeholder="Jane Doe"
            required
            name="fullName"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </div>

        <div className="register-leader-card">
          No. Handphone <br></br>
          <input
            name="phoneNumber"
            className="handphone-input"
            placeholder="081234xxxx"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </div>

        <div className="register-leader-card-2">
          <div className="institution-container">
            Institution <br></br>
            <input
              className="institution-input"
              placeholder="ITB"
              name="institution"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
          </div>
          <div className="major-container">
            Major/Faculty <br></br>
            <input
              className="major-input"
              placeholder="Informatics"
              name="faculty"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
          </div>
        </div>

        <div className="register-leader-card">
          Password <br></br>
          <input
            type="password"
            className="password-input"
            placeholder="password"
            name="password"
            onChange={(e) => {
              handleChange(e);
              setPass(e.target.value);
            }}
            required
          ></input>
        </div>

        <div className="register-leader-card">
          Confirm Password <br></br>
          <input
            type="password"
            className="confirm-password-input"
            placeholder="confirm password"
            onChange={(e) => {
              checkPassword(e.target.value);
            }}
            required
          ></input>
          {passwordEqual ? (
            <></>
          ) : (
            <>
              <div className="referral-code-description">
                <div className="referral-code-icon">i</div>
                password does not match
              </div>
            </>
          )}
        </div>

        <div className="register-leader-card">
          Competition Type <br></br>
          <div className="competition-container">
            <input
              className="competition-input"
              name="competitionType"
              type="radio"
              value="MARKETING"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            Marketing <br></br>
            <input
              className="competition-input"
              name="competitionType"
              type="radio"
              value="OPERATION"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            Operation <br></br>
            <input
              className="competition-input"
              name="competitionType"
              type="radio"
              value="EHS"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            EHS <br></br>
          </div>
        </div>

        <div className="register-leader-card">
          Scan of Student ID card <br></br>
          <input
            type={"file"}
            className="student-id-input"
            name="student_id"
            required
            onChange={(e) => {
              setStudentId(e.target.files[0]);
            }}
          />
        </div>

        <div className="register-leader-card">
          Screenshot of twibbon <br></br>
          <input
            type={"file"}
            className="twibbon-input"
            name="twibbon"
            required
            onChange={(e) => {
              setTwibbon(e.target.files[0]);
            }}
          />
        </div>

        <div className="register-leader-card">
          Payment receipt <br></br>
          <input
            type={"file"}
            className="payment-receipt-input"
            name="payment"
            required
            onChange={(e) => {
              setPayment(e.target.files[0]);
            }}
          />
        </div>

        <div className="register-leader-card">
          Referral Code <br></br>
          <input
            className="referral-code-input"
            placeholder="XXXXXX"
            name="referralCode"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <div className="referral-code-description">
            <div className="referral-code-icon">i</div>
            Referral code can obtained from a GICC Campus Ambassador, you can
            leave this field empty if you dont have any referral code
          </div>
        </div>

        <button
          type="submit"
          className="submit-button"
          onClick={SubmitRegister}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
