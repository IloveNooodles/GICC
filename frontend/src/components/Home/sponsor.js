import React, { useEffect, useState } from "react";
import Placeholder from "../assets/placeholder.png";
import "./sponsor.css";

import SponsorModal from "./sponsormodal";

const Sponsor = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const l = [
      {
        url: Placeholder,
      },
      {
        url: Placeholder,
      },
      {
        url: Placeholder,
      },
      {
        url: Placeholder,
      },
      {
        url: Placeholder,
      },
      {
        url: Placeholder,
      },
      {
        url: Placeholder,
      },
      {
        url: Placeholder,
      },
    ];

    setImageList(l);
  });

  return (
    <div className="sponsor-container">
      <div className="sponsor-title">Our Sponsors</div>
      <div className="sponsor-card-container">
        <div className="sponsor-card">
          <img src={Placeholder} className="sponsor-exc-logo"></img>
          <SponsorModal />
        </div>
        <div className="sponsor-card">
          <img src={Placeholder} className="sponsor-exc-logo"></img>
          {/* <button className="sponsor-learn-more">Read More</button> */}
          <SponsorModal />
        </div>
        <div className="sponsor-card">
          <img src={Placeholder} className="sponsor-exc-logo"></img>
          {/* <button className="sponsor-learn-more">Read More</button> */}
          <SponsorModal />
        </div>
      </div>
      <div className="sponsor-card-container-2">
        {imageList.map((el) => {
          return (
            <div className="sponsor-card-2">
              <img src={el.url}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsor;
