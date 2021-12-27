import "./footer.css";
import GiccImage from "./assets/gicc.png";
import Line from "./assets/line.png";
import Linkedin from "./assets/linkedin.png";
import Instagram from "./assets/instagram.png";
import Placeholder from "./assets/placeholder.png";

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

const Footer = () => {
  return (
    <div>
      {/* <div className="upperFooter1"></div> */}
      <div className="upperFooter2">
        <div className="upperFooter2-GICC">
          <img src={GiccImage} alt="Gambar GICC" />
        </div>
        <div className="upperFooter2-Contact">
          <div className="contact-component">
            <img src={Line} alt="Line" />
            <p>@672xydvh</p>
          </div>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/ganesha-icc/"
          >
            <div className="contact-component">
              <img src={Linkedin} alt="Linkedin" />
              <p>Ganesha Integration Case Competition (GICC)</p>
            </div>
          </a>
          <a
            target="_blank"
            style={{ height: "auto" }}
            href="https://www.instagram.com/ganesha.icc/"
          >
            <div className="contact-component">
              <img src={Instagram} alt="instagram" />
              <p>@ganesha.icc</p>
            </div>
          </a>
        </div>
      </div>
      <div className="footer">
        <div className="footer-backBtn">
          <button className="backBtn">
            <a href="">Back to Top ^</a>
          </button>
        </div>
        <div className="footer-copyright">
          <p>Copyright GICC 2022 | All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
