import "./CompetitionPage.css";

import Navbar from "../components/navbar";
import AboutUsCompetition from "../components/Competition/AboutUs";
import Footer from "../components/footer.js";
import Description from "../components/Competition/Description";
import Faq from "../components/Competition/Faq";

const CompetitionPage = () => {
  return (
    <div className="container-competition-page" overflowX="hidden">
      <Navbar />
      <div className="contentAU">
        <AboutUsCompetition />
      </div>
      <Description />
      <div className="Faq-section">
        <Faq />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default CompetitionPage;
