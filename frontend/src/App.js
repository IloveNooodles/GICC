import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="top-border"></div>
      <div className="GICC">
        Ganesha <br></br>
        Integration<br></br>
        Case Competition <br></br>
      </div>
        <p className="description-GICC">
        We empower youth through professional cooperation experience in <br></br> solving industrial problems
        </p>
      <div className="bottom-border"></div>
      
    </div>
  );
}

export default App;
