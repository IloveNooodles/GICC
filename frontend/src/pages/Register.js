import React, { useState, useEffect } from "react";
import "./Register.css";
import Navbar from "../components/navbar";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      navigate("/profile");
    }
  });

  const [passValid, setPassValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [studentId, setStudentId] = useState();
  const [twibbon, setTwibbon] = useState();
  const [payment, setPayment] = useState();
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState("");
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

  const [status, setStatus] = useState({});

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().min(8, "Too Short!").required("Required"),
    fullName: Yup.string().min(4, "Too Short!").required("Required"),
    institution: Yup.string().min(4, "Too Short!").required("Required"),
    phoneNumber: Yup.number().min(10, "Too Short!").required("Required"),
    faculty: Yup.string().min(4, "Too Short!").required("Required"),
    referralCode: "",
  });

  const URL = "https://gicc2022-backend.azurewebsites.net/";

  const checkPassword = (tempPass) => {
    if (tempPass !== pass) {
      setPasswordEqual(false);
    } else {
      setPasswordEqual(true);
    }
  };

  const passwordValidation = () => {
    if (pass.length === 0) return null;
    if (pass.length < 8) return "Too Short";
    if (pass.toLowerCase() === pass || pass.toUpperCase() === pass)
      return "Please use combination of lower and upper case letters";
    setPassValid(true);
    return null;
  };

  const emailValidation = () => {
    if (email.length === 0) return null;
    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      return "Wrong Email Format";
    }
    setEmailValid(true);
    return null;
  };

  const phoneValidation = () => {
    if (phone.length === 0) return null;
    if (
      !String(phone)
        .toLowerCase()
        .match(/^\d{10,13}$/)
    ) {
      return "Wrong Phone Number Format";
    }
    setPhoneValid(true);
    return null;
  };

  const handleChange = (e) => {
    setTextForm({ ...textForm, [e.target.name]: e.target.value });
  };
  const ISubmitRegister = () => {
    if (!passValid) return "Wrong Password Configuration!";
    if (!emailValid) return "Wrong Email Format!";
    if (!phoneValid) return "Wrong Phone Number Format!";
    return null;
  };
  const SubmitRegister = (e) => {
    if (!passValid) return;
    e.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.append("twibbon", twibbon);
    bodyFormData.append("student_id", studentId);
    bodyFormData.append("payment", payment);
    bodyFormData.append("form", JSON.stringify(textForm));

    axios({
      method: "post",
      url: URL + "user/register",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setStatus(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        setStatus(error);
        console.log(error);
      });

      setLoading("Loading...")
  };

  if (status.status === "SUCCESS") {
    window.alert(
      "Register Succesful. Please Wait For the admin to verify your identity"
    );
    navigate("/login");
  }

  return (
    <div className="register-leader-container">
      <div className="register-leader-background">
        <Navbar />
        <div className="register-leader-title">Register</div>
      </div>

      <div className="req-register-text">
        <b>What you need to do before continuing the registration process:</b>{" "}
        <br />
        &emsp;1. Complete the payment of the entry fee before registering and
        provide the payment receipt. <br />
        &emsp;2. Upload GICC 2022’s participation twibbon on A public Instagram
        feed and tag our IG @ganesha.icc. Instagram twibbon and caption can be
        accessed in <a href="https://bit.ly/GICC2022Registration">here</a>{" "}
        <br />
        <br />
        <b>Payment</b>
        <br />
        &emsp;- Early Bird Registration <br />
        &emsp;&emsp;Date: 13 January - 19 January 2022 <br />
        &emsp;&emsp;Entry Fee : Rp 35.000 <br />
        &emsp;- Regular Registration <br />
        &emsp;&emsp;Date: 20 January - 25 January 2022 <br />
        &emsp;&emsp;Entry Fee : Rp 45.000 <br />
        <br />
        Entry Fee Payment is transferred to the following account:
        <ul>
          <li>Bank BNI 0634360281 on behalf of Monica Andini</li>
          <li>Gopay 081316262145 on behalf of Monica Andini</li>
          <li>Ovo 081316262145 on behalf of Monica Andini</li>
        </ul>
        <br /> Please add the number 01 if you register in the marketing sector,
        02 for operations, and 03 for EHS behind your nominal registration fee.
        For Example: Rp45.001,00 (Marketing Sector)
      </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
          fullName: "",
          institution: "",
          phoneNumber: "",
          faculty: "",
          competitionType: "",
          referralCode: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="register-leader-form">
            <div className="register-leader-card">
              Email Address <br></br>
              <Field
                className="email-input"
                placeholder="GICC2022@gmail.com"
                type="email"
                name="email"
                required
                value={textForm.email}
                onChange={(e) => {
                  handleChange(e);
                  setEmail(e.target.value);
                }}
              />
              <p className="referral-code-description">{emailValidation()}</p>
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
                  setPhone(e.target.value);
                }}
              ></input>
              <p className="referral-code-description">{phoneValidation()}</p>
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
              <p className="referral-code-description">
                {passwordValidation()}
              </p>
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
                Referral code can obtained from a GICC Campus Ambassador, you
                can leave this field empty if you dont have any referral code
              </div>
            </div>

            <button
              type="submit"
              className="submit-button"
              onClick={SubmitRegister}
            >
              Register
            </button>
            {loading ? (
              <p className="center-text">Loading Please Wait...</p>
            ) : null}
            <p className="warning-bottom">{ISubmitRegister()}</p>
          </Form>
        )}
      </Formik>
      {status ? (
        <div className="register-status">
          <p>{status.status}</p>
          <p>{status.errorMessage}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Register;
