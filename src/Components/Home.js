import React from "react";
import BannerBackground from "../Assets/ban-bg2.png";
import BannerImage from "../Assets/ban.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Bringing Ideas to Life with Code
        
          </h1>
          <p className="primary-text">
          <b>Naveenvimal K K</b> - Web Developer
          </p>
          <button className="secondary-button">
            Know More <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;