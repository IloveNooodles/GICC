import React from "react";
import "./PreEventPage.css";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PlaceholderImage from "../components/assets/placeholder.png";
import GICClass from "../components/assets/GICClass.png";
import DialoGICC from "../components/assets/DialoGICC.png";
import { useState, useEffect } from "react";

const PreEventPage = () => {
  const [listClass, setListClass] = useState([]);

  useEffect(() => {
    const list = [
      {
        url: DialoGICC,
        redirect : "https://www.instagram.com/ganesha.icc/",
        title: "DialoGICC",
        description:
          "Consulting means “engaged in the business of giving expert advice to people working in a specific field.” In other words, a consultant is somebody who gives advice to a specific group of people. You can find the statements easily on the internet, but how do we find out how it really is working as a consultant? Of course from this interesting live instagram under GICC called DialoGICC. Don't forget to book your seat and listen to our professional speakers carefully because it's free!",
      },
      {
        url: GICClass,
        redirect : "https://docs.google.com/forms/d/1CZDnlO3oezsnAmbVRJcCxqS2EPpVehcVHKVFUCCXdiU/edit",
        title: "GICClass",
        description:
          "Revealing the Secrets of Winning Business Competitions : Think Critically and Creatively for a Better Branding GICClass is an online workshop made for aspiring learners who are eager to ace in the professional world. This episode of GICClass will mainly talk about how students can utilize their ability to think critically and creatively in creating the best branding especially for business competitions and later on it can also be used in their aspiring careers.",
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
