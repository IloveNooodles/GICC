import React, { useEffect, useState } from "react";
import Placeholder from "../assets/placeholder.png";
import Rectangle1 from "../assets/Rectangle1.png"
import Rectangle2 from "../assets/Rectangle2.png"
import "./sponsor.css";

const Sponsor = () => {
  // const [sponsorList, setSponsorList] = useState([]);
  // const [showSponsor, setShowSponsor] = useState(false);

  // useEffect(() => {
  //   const l = {url: Placeholder, text: "HAHAHA"}
  //   setSponsorList(l);
  // });

  // const sponsorShow = (imageUrl, text) => {
  //   const l2 = {url: imageUrl, text: text}
  //   setSponsorList(l2);
  //   setShowSponsor(true);
  // }

  return (
    <div className="sponsor-container">
      <div className="sponsor-title">Our Sponsors</div>
      <div className="sponsor-card-container">
        <div className="sponsor-card">
          <img src={Placeholder} className="sponsor-exc-logo"></img>
            <button className="sponsor-learn-more">Read More</button>
        </div>
        <div className="sponsor-card">
          <img src={Placeholder} className="sponsor-exc-logo"></img>
          <button className="sponsor-learn-more">Read More</button>
        </div>
        <div className="sponsor-card">
          <img src={Placeholder} className="sponsor-exc-logo"></img>
          <button className="sponsor-learn-more">Read More</button>
        </div>
        <div className="sponsor-card">
          <img src={Placeholder} className="sponsor-exc-logo"></img>
          <button className="sponsor-learn-more">Read More</button>
        </div>
        <div className="sponsor-card">
          <img src={Placeholder} className="sponsor-exc-logo"></img>
          <button className="sponsor-learn-more">Read More</button>
        </div>
        <div className="sponsor-card">
          <img src={Placeholder} className="sponsor-exc-logo"></img>
          <button className="sponsor-learn-more">Read More</button>
        </div>
        <div className="sponsor-card">
          <img src={Placeholder} className="sponsor-exc-logo"></img>
          <button className="sponsor-learn-more">Read More</button>
        </div>
        <div className="sponsor-card">
          <img src={Placeholder} className="sponsor-exc-logo"></img>
          <button className="sponsor-learn-more">Read More</button>
        </div>
        
      </div>

      
      <div className="sponsor-page-body">
        <div className="sponsor-page-title-aboutus">
          <h1 data-aos="fade-right">
            <img className="sponsor-logo-detailed" src={Placeholder} />
          </h1>
        </div>
        <div className="sponsor-page-text">
          FJDKASLFJDSKALFJDSA
        </div>
      </div>
     
      
    </div>
  );
};

export default Sponsor;
