import "./CompetitionPage.css";

import Navbar from "../components/navbar";
import AboutUsCompetition from "../components/Competition/AboutUs";
import Footer from "../components/footer.js";

const CompetitionPage = () => {
  return (
    <div className="container-competition-page" overflowX="hidden">
      <Navbar />
      <div className="content">
        <AboutUsCompetition></AboutUsCompetition>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default CompetitionPage;
