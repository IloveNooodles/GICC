import "./App.css";
import Navbar from "./components/navbar";
import GICC from "./components/gicc";
import AboutUs from "./components/aboutUs";

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
    </div>
  );
}

export default App;
