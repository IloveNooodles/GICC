import "./App.css";
import Navbar from "./components/navbar";
import GICC from "./components/gicc";

function App() {
  return (
    <div className="App">
      <div className="first-section-container">
        <Navbar />
        <GICC />
      </div>

      <div className="about-us"></div>
    </div>
  );
}

export default App;
