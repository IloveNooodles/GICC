import React from 'react'
import "./SponsorPage.css"
import Rectangle1 from "../components/assets/Rectangle1.png"
import Rectangle2 from "../components/assets/Rectangle1.png"

const SponsorPage = (text, imageUrl) => {
  const list = []

  return (
    <div className="sponsor-page-body">
      <div className="sponsor-page-title-aboutus">
        <img
          src={Rectangle1}
          className="right-rectangle"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        />
        <img
          src={Rectangle2}
          className="left-rectangle"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        />
        <h1 data-aos="fade-right">
          <img src={imageUrl} />
        </h1>
      </div>
      <div className="sponsor-page-text">
        {text}
      </div>
    </div>
  )
}

export default SponsorPage
