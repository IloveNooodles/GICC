import "./App.css";
import Navbar from "./components/navbar";
import GICC from "./components/gicc";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div className="first-section-container">
        <Navbar />
        <GICC />
      </div>

      <div className="about-us">
        <AboutUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
