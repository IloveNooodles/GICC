import "./App.css";
import Navbar from "./components/navbar";
import GICC from "./components/gicc";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";
import Competition from "./components/competition";


function App() {
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
}

export default App;
