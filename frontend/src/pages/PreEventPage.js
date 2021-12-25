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
        title: "GICClass 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Ut enim ad minim veniam.",
      },
      {
        url: PlaceholderImage,
        title: "GICClass 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Ut enim ad minim veniam.",
      },
      {
        url: PlaceholderImage,
        title: "GICClass 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Ut enim ad minim veniam.",
      },
    ];

    setListClass(list);
  });

  return (
    <div className="pre-event-container">
      <Navbar />
      <div className="pre-event-title">Pre-Event</div>

      <div className="pre-event-card-container">
        {listClass.map((element) => {
          return (
            <Link to="/" className="pre-event-card">
              <img src={element.url} className="pre-event-card-image" />
              <div className="pre-event-card-text">
                <div className="pre-event-card-title">{element.title}</div>
                <div className="pre-event-card-description">
                  {element.description}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default PreEventPage;
