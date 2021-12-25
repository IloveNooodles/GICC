import "./AboutUs.css";
import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";

const AboutUsCompetition = () => {
  return (
    <div className="container-body">
      <div className="container-title-aboutus">
        <img src={Rectangle1} className="right-rectangle" />
        <img src={Rectangle2} className="left-rectangle" />
        <h1>
          About <br /> Us
        </h1>
      </div>
      <div className="container-text-competition">
        <p>
          Ganesha Integration Case Competition 2022 is a simulation for
          undergraduate students about the real “how working in Industry” that
          deploys in the form of competition. This program encourages students
          to innovate and solve real industrial problems that really exist from
          our Company Case Contributor and innovate an advancement that improves
          the key sectors of companies which are marketing, operation, and EHS
          (Environment, Health, and Safety).
        </p>
        <p>
          Ganesha Integration Case Competition 2022 is a simulation for
          undergraduate students about the real “how working in Industry” that
          deploys in the form of competition. This program encourages students
          to innovate and solve real industrial problems that really exist from
          our Company Case Contributor and innovate an advancement that improves
          the key sectors of companies which are marketing, operation, and EHS
          (Environment, Health, and Safety).
        </p>
      </div>
    </div>
  );
};

export default AboutUsCompetition;
