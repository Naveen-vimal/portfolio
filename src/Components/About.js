import React from "react";
import AboutBackground from "../Assets/my.png";
import AboutBackgroundImage from "../Assets/my1.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <img className="abt-bg" src={AboutBackground} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        <img className="my1" src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        {/* <p className="primary-subheading">About</p> */}
        <h1 className="primary-heading">
        About Me
        </h1>
        <p className="primary-text">
        Hi, I'm Naveen, a passionate Web Developer with expertise in creating responsive and visually appealing websites. I love coding, problem-solving, and collaborating with teams to build amazing digital experiences.
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button">View &nbsp;&nbsp; CV</button>
        
        </div>
      </div>
    </div>
  );
};

export default About;
