import Footer from "../components/footer";
import GICC from "../components/Home/gicc";
import AboutUs from "../components/Home/aboutUs";
import Competition from "../components/Home/competition";
import Sponsor from "../components/Home/sponsor";
import AOS from "aos";
import "./Home.css";

//image
import Timeline from "../components/assets/timeline.png";

AOS.init();

const Home = () => {
  return (
    <div className="App" overflowX="hidden">
      <div className="first-section-container">
        <GICC />
      </div>
      <div className="about-us">
        <AboutUs />
      </div>
      <div className="competition">
        <Competition />
      </div>
      <div className="timeline">
        <img src={Timeline} id="timeline"></img>
      </div>
      {/* <div className="sponsor">
        <Sponsor />  
      </div> */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
