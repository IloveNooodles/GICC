import React from "react";
import "./PreEventPage.css";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PlaceholderImage from "../components/assets/placeholder.png";
import { useState, useEffect } from "react";

const PreEventPage = () => {
  const [listClass, setListClass] = useState([]);

  useEffect(() => {
    const list = [
      {
        url: PlaceholderImage,
        redirect : "https://docs.google.com/forms/d/1CZDnlO3oezsnAmbVRJcCxqS2EPpVehcVHKVFUCCXdiU/edit",
        title: "GICClass 1",
        description:
          "Revealing the Secrets of Winning Business Competitions : Think Critically and Creatively for a Better Branding GICClass is an online workshop made for aspiring learners who are eager to ace in the professional world. This episode of GICClass will mainly talk about how students can utilize their ability to think critically and creatively in creating the best branding especially for business competitions and later on it can also be used in their aspiring careers.",
      },
      {
        url: PlaceholderImage,
        redirect : "https://docs.google.com/forms/d/1CZDnlO3oezsnAmbVRJcCxqS2EPpVehcVHKVFUCCXdiU/edit",
        title: "GICClass 2 - To be Announced",
        description:
          "GICClass is an online workshop that will value hands-on experience by  learning new skills via an online platform. Here participants will be guided by speakers to learn new skills such as problem-solving and data analytics.",
      },
    ];

    setListClass(list);
  });

  document.getElementsByClassName("pre-event-card").onclick = function () {
    window.location.href = "www.youtube.com";
  };

  return (
    <div className="pre-event-container">
      <Navbar />
      <div className="pre-event-title">Pre-Event</div>

      <div className="pre-event-card-container">
        {listClass.map((element) => {
          return (
            <a href={element.redirect} target="_blank" className="pre-event-card">
                <img src={element.url} className="pre-event-card-image" />
                <div className="pre-event-card-text">
                  <div className="pre-event-card-title">{element.title}</div>
                  <div className="pre-event-card-description">
                    {element.description}
                  </div>
                </div>
            </a>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default PreEventPage;
