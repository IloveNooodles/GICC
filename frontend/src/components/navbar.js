import React from "react";
import logoGicc from "./assets/gicc.png";
import logoKM from "./assets/km.png";
import logoKabinet from "./assets/kabinet.png";
import "./navbar.css";

function navbar() {
  return (
    <div className="navbar">
      <div className="right-section">
            <a>Home</a>
            <a>Competition</a>
            <div class="underbar"></div>
      </div>

      <div className="left-section">
        <img src={logoGicc} alt="Logo Gicc" style={{width: "15%",height: "auto"}}/>
        <img src={logoKM} alt="Logo KM ITB" style={{width: "5%",height: "auto"}}/>
        <img src={logoKabinet} alt="Logo Kabinet Akar Asa" style={{width: "10%",height: "auto"}} />
      </div>
    </div>
  );
}

export default navbar;
