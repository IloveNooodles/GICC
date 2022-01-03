import React from "react";
import  Placeholder from "../assets/placeholder.png"
import "./sponsor.css";
import CarouselSponsor from "./carouselsponsor";
// import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="sponsor-slider-container">
        {/* <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Placeholder}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Placeholder}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Placeholder}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
        <CarouselSponsor />
      </div>
    </div>
  );
};

export default Sponsor;
