import "./aboutUs.css";
import Circle from "../assets/Rectangle2.svg";
import Circle2 from "../assets/Rectangle.svg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="container-about">
      <img
        src={Circle2}
        alt="decoration1"
        className="left-circle-big"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <img
        src={Circle}
        alt="decoration2"
        className="right-circle-big"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      />
      <div className="container-aboutus">
        <div className="container-title-aboutus">
          <h1>
            About <br /> Us
          </h1>
        </div>
        <div className="container-text">
          <p>
            Ganesha Integration Case Competition 2022 is a unique simulation for
            undergraduate students about the real “How Working in Industry''
            that unfolds in the form of competition. The competition is about
            encouraging students to innovate and solve real industrial problems
            that exist from our Company Case Contributor
          </p>

          <p>
            and innovate an advancement that improves the key sectors of
            companies which are marketing, operation, and EHS (Environment,
            Health, and Safety). The Event would also make participants
            cooperate with people they have never met before, and push them to
            collaborate with colleagues from different backgrounds. <br />
            <br />{" "}
            <a>
              {" "}
              <Link
                to="/competition"
                style={{ textDecoration: "none" }}
              >
                see more
              </Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
