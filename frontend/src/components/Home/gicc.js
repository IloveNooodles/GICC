import React , {useEffect, useState} from "react";
import "./gicc.css";
import registerBoard from "../assets/register-board.png";
import Navbar from "../navbar";
import { Link } from "react-router-dom";

const ORIGINAL_LINES = ["Empowering youth through professional cooperation experience in solving industrial problems"];

const totalChars = ORIGINAL_LINES.reduce(
  (chars, line) => chars + line.length,
  0
);

function promiseDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getPartialLines(lines, charCount) {
  const copiedLines = [];
  let remainingChars = charCount;
  for (const line of lines) {
    if (remainingChars <= line.length) {
      copiedLines.push(line.slice(0, remainingChars));
      break;
    }
    remainingChars -= line.length;
    copiedLines.push(line);
  }
  return copiedLines;
}


function Gicc() {
  const [lines, setLines] = useState([""]);

  useEffect(() => {
    async function doTyping() {
      for (let typedChars = 0; typedChars <= totalChars; typedChars++) {
        await promiseDelay(20);
        setLines(getPartialLines(ORIGINAL_LINES, typedChars));
      }
    }
    doTyping();
  }, []);

  return (
    <div className="container">
      <Navbar />
      {/* <div className="GICC-big">GICC</div> */}
      <div className="GICC">
        Ganesha <br></br>Integration <br></br> Case Competition
      </div>
      <div style={{ color: "white" ,height : "30px" }} className="description-GICC">
        {lines.map((line, index) => (
            <p key={index} style={{ color: "white" }} className="description-GICC">
              {line}
            </p>
          ))}
      </div>
      <div className="GICC-card-container">
        <Link to="/register" className="GICC-card">
          <img
            src={registerBoard}
            alt="register-board"
            className="image-register-board"
          />
          <p style={{ color: "white" }}>Register Competition</p>
        </Link>
        <Link to="/pre-event" className="GICC-card">
          <img
            src={registerBoard}
            alt="register-board"
            className="image-register-board"
          />
          <p style={{ color: "white" }}>Register Pre-Event</p>
        </Link>
      </div>
    </div>
  );
}

export default Gicc;
