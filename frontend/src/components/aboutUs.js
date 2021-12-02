import "./aboutUs.css";
import Circle from "./assets/Rectangle2.svg";
import Circle2 from "./assets/Rectangle.svg";

const AboutUs = () => { 
  return (
    <div className="container-about">
      <div className="svg-container">
        <img src={Circle2} alt="decoration1" className="left-circle-big" />
      </div>
      <div className="svg=container2">
        <img src={Circle} alt="decotartion2" className="right-circle-big" />
      </div>
      <div className="container-aboutus">
        <div className="container-title-aboutus">
          <h1>
            About <br /> Us
          </h1>
        </div>
        <div className="container-text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            ducimus sapiente quas deserunt doloribus sint? Nostrum incidunt,
            quo, nisi enim impedit perspiciatis exercitationem distinctio id
            quia, suscipit asperiores vitae libero.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            ducimus sapiente quas deserunt doloribus sint? Nostrum incidunt,
            quo, nisi enim impedit perspiciatis exercitationem distinctio id
            quia, suscipit asperiores vitae libero. <br />
            <br /> <a href="#">see more &gt; </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
