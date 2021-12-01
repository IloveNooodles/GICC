import "./footer.css";
import GiccImage from "./assets/gicc.png";
import Line from "./assets/line.png";
import Linkedin from "./assets/linkedin.png";
import Instagram from "./assets/instagram.png";

const Footer = () => {
  return (
    <div>
      <div className="upperFooter1"></div>
      <div className="upperFooter2">
        <div className="upperFooter2-GICC">
          <img src={GiccImage} alt="Gambar GICC" />
        </div>
        <div className="upperFooter2-Contact">
          <div className="contact-component">
            <img src={Line} alt="Line" />
            <p>@672xydvh</p>
          </div>
          <div className="contact-component">
            <img src={Linkedin} alt="Linkedin" />
            <p>Ganesha Integration Case Competition (GICC)</p>
          </div>
          <div className="contact-component">
            <img src={Instagram} alt="instagram" />
            <p>@ganesha.icc</p>
          </div>
        </div>
      </div>
      <div className="sponsor">
        <p>ini sponsor</p>
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
