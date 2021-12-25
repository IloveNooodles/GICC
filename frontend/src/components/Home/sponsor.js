import React from "react";
import Placeholder from "../assets/placeholder.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  useCss: true,
};

const Sponsor = () => {
  return (
    <div className="sponsor-container">
      <div className="sponsor-title">Our Sponsors</div>
      {/* <Slider {...settings}>
        <img src={Placeholder} alt="GICC Image1" />
        <img src={Placeholder} alt="GICC Image2" />
        <img src={Placeholder} alt="GICC Image6" />
        <img src={Placeholder} alt="GICC Image3" />
        <img src={Placeholder} alt="GICC Image4" />
        <img src={Placeholder} alt="GICC Image5" />
      </Slider> */}
    </div>
  );
};

export default Sponsor;
