import React, {useEffect, useState} from "react";
import Placeholder from "../assets/placeholder.png";
import Rectangle1 from "../assets/Rectangle1.png"
import Rectangle2 from "../assets/Rectangle2.png"
import AmarthaLogo from "../assets/amartha-logo.png"
import AmarthaLogoNoText from "../assets/amartha-logo-no-text.png"
import "./sponsor.css";

const Sponsor = () => {
    const [sponsor1, setSponsor1] = useState(false);
    const [sponsor2, setSponsor2] = useState(false);
    const [sponsor3, setSponsor3] = useState(false);
    const [sponsor4, setSponsor4] = useState(false);

    const showSponsor1 = () => {
        if (sponsor1) {setSponsor1(false)}
        else {setSponsor1(true)}
        setSponsor2(false);
        setSponsor3(false);
        setSponsor4(false);
    }

    const showSponsor2 = () => {
        if (sponsor2) {setSponsor2(false)}
        else {setSponsor2(true)}
        setSponsor1(false);
        setSponsor3(false);
        setSponsor4(false);
    }

    const showSponsor3 = () => {
        if (sponsor3) {setSponsor3(false)}
        else {setSponsor3(true)}
        setSponsor1(false);
        setSponsor2(false);
        setSponsor4(false);
    }

    const showSponsor4 = () => {
        if (sponsor4) {setSponsor4(false)}
        else {setSponsor4(true)}
        setSponsor1(false);
        setSponsor2(false);
        setSponsor3(false);
    }

    return (<div className="sponsor-container">
        <div className="sponsor-title">Our Sponsors</div>
        <div className="sponsor-card-container">
            <div className="sponsor-card">
                <img alt="sponsor-logo" src={AmarthaLogoNoText} className="sponsor-exc-logo" />
                <button onClick={showSponsor1} className="sponsor-learn-more">Read More</button>
            </div>
            {/* <div className="sponsor-card">
                <img alt="sponsor-logo" src={Placeholder} className="sponsor-exc-logo"/>
                <button onClick={showSponsor2} className="sponsor-learn-more">Read More</button>
            </div>
            <div className="sponsor-card">
                <img alt="sponsor-logo" src={Placeholder} className="sponsor-exc-logo"/>
                <button onClick={showSponsor3} className="sponsor-learn-more">Read More</button>
            </div>
            <div className="sponsor-card">
                <img alt="sponsor-logo" src={Placeholder} className="sponsor-exc-logo"/>
                <button onClick={showSponsor4} className="sponsor-learn-more">Read More</button>
            </div> */}
        </div>


        {sponsor1 ? <div className="sponsor-page-body">
            <div className="sponsor-page-video">
                <iframe className="sponsor-page-video-detailed"
                        src="https://www.youtube.com/embed/Nt6eATh50j0"
                        allow="autoplay"/>
            </div>
            <div className="sponsor-page-description">
                <img src={AmarthaLogo} alt="sponsor-logo" className="sponsor-page-logo" style={{width : 350}}/>
                <div className="sponsor-page-text">
                    <p>
                    <big><b>Amartha</b></big> (2010) adalah pionir fintech (financial technology) peer-to-peer (P2P) lending online di Indonesia, lembaga keuangan yang bergerak untuk memberikan pendanaan usaha kecil dan mikro (UKM). Amartha beroperasi dengan mengumpulkan dana masyarakat yang ingin berinvestasi. Kemudian Amartha akan menyalurkannya kepada UKM yang telah bekerja sama. Kesemuanya dilakukan melalui internet atau online.  berfokus pada pinjaman produktif dan menyasar peminjam dari kalangan perempuan pengusaha mikro dan kecil
                    </p>

                </div>
            </div>
        </div> : <></>}

        {sponsor2 ? <div className="sponsor-page-body">
            <div className="sponsor-page-video">
                <iframe className="sponsor-page-video-detailed"
                        src="https://drive.google.com/file/d/1I1tf6Auj3CJ30krtLrzkqzP2K8EYJLQ_/preview"
                        allow="autoplay"/>
            </div>
            <div className="sponsor-page-description">
                <img src={Placeholder} alt="sponsor-logo" className="sponsor-page-logo"/>
                <div className="sponsor-page-text">
                    2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac mollis turpis, eu sagittis diam.
                    Duis nunc dolor, imperdiet at efficitur id, pretium sit amet justo. Sed est nisi, fermentum laoreet
                    molestie sed, dignissim commodo eros. Morbi ac malesuada libero. Ut nec tellus cursus nunc volutpat
                    dignissim. Mauris sagittis sit amet elit ac ornare. Vestibulum ornare semper convallis. Sed
                    malesuada mauris ex, eu varius nunc fringilla vel. Praesent tincidunt tellus massa, in
                </div>
            </div>
        </div> : <></>}

        {sponsor3 ? <div className="sponsor-page-body">
            <div className="sponsor-page-video">
                <iframe className="sponsor-page-video-detailed"
                        src="https://drive.google.com/file/d/1I1tf6Auj3CJ30krtLrzkqzP2K8EYJLQ_/preview"
                        allow="autoplay"/>
            </div>
            <div className="sponsor-page-description">
                <img src={Placeholder} alt="sponsor-logo" className="sponsor-page-logo"/>
                <div className="sponsor-page-text">
                    3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac mollis turpis, eu sagittis diam.
                    Duis nunc dolor, imperdiet at efficitur id, pretium sit amet justo. Sed est nisi, fermentum laoreet
                    molestie sed, dignissim commodo eros. Morbi ac malesuada libero. Ut nec tellus cursus nunc volutpat
                    dignissim. Mauris sagittis sit amet elit ac ornare. Vestibulum ornare semper convallis. Sed
                    malesuada mauris ex, eu varius nunc fringilla vel. Praesent tincidunt tellus massa, in
                </div>
            </div>
        </div> : <></>}


        {sponsor4 ? <div className="sponsor-page-body">
            <div className="sponsor-page-video">
                <iframe className="sponsor-page-video-detailed"
                        src="https://drive.google.com/file/d/1I1tf6Auj3CJ30krtLrzkqzP2K8EYJLQ_/preview"
                        allow="autoplay"/>
            </div>
            <div className="sponsor-page-description">
                <img src={Placeholder} alt="sponsor-logo" className="sponsor-page-logo"/>
                <div className="sponsor-page-text">
                    4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac mollis turpis, eu sagittis diam.
                    Duis nunc dolor, imperdiet at efficitur id, pretium sit amet justo. Sed est nisi, fermentum laoreet
                    molestie sed, dignissim commodo eros. Morbi ac malesuada libero. Ut nec tellus cursus nunc volutpat
                    dignissim. Mauris sagittis sit amet elit ac ornare. Vestibulum ornare semper convallis. Sed
                    malesuada mauris ex, eu varius nunc fringilla vel. Praesent tincidunt tellus massa, in
                </div>
            </div>
        </div> : <></>}
    </div>);
};

export default Sponsor;
