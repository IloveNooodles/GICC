import "./AboutUs.css";
import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";

const AboutUsCompetition = () => {
  return (
    <div className="container-body">
      <div className="container-title-aboutus">
        <img
          src={Rectangle1}
          className="right-rectangle"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        />
        <img
          src={Rectangle2}
          className="left-rectangle"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        />
        <h1 data-aos="fade-right">
          About <br /> Us
        </h1>
      </div>
      <div className="container-text-competition">
        <p>
        Ganesha Integration Case Competition (GICC) 2022 is a program that strives to encourage university-level students to innovate and solve real industrial problems GICC will emulate work life in the business industry for undergraduate students by being deployed in the form of a case competition. Due to a general lack of proper knowledge and experience regarding real-world industrial problems and professionalism concepts (ethics and team management competence), GICC aims to help participants collaborate with new colleagues from various backgrounds to mimic innovation generation in true corporate fashion. Hence, GICC will serve as a platform for established companies to put their case studies to be solved by undergraduate students around Indonesia.
        </p>
        <p>
          <b>Vision & Mission</b> <br/>
          <p>
          -   To expose university students to real-world industrial problems, one that needs cooperation to be solved. <br/>
          -   To make participants collaborate with new faces from different backgrounds mimicking idea and innovation generation in a real-world situation<br/>
          -   To expose university students to industrial professionalism concepts
          </p>
        </p>
        Our events will be conducted online given the uncertainties surrounding the governmentͶs COVID-19 protocols for bigger occasions that will take place in the coming months.
      </div>
    </div>
  );
};

export default AboutUsCompetition;
