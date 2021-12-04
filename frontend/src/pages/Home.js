import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GICC from "../components/Home/gicc";
import AboutUs from "../components/Home/aboutUs";
import Competition from "../components/Home/competition";
import AOS from "aos";

AOS.init();

const Home = () => {
  return (
    <div className="App" overflowX="hidden">
      <div className="first-section-container">
        <Navbar />
        <GICC />
      </div>
      <div className="about-us">
        <AboutUs />
      </div>
      <div className="competition">
        <Competition />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;