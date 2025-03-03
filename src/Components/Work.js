import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import bootstrap from "../Assets/boot.png";
import sql from "../Assets/sql.png";
import tcss from "../Assets/tcss.png";
import php from "../Assets/php.png";
import mdb from "../Assets/mdb.png";
import react from "../Assets/react.png";
import java from "../Assets/java.png";
import AboutBackground from "../Assets/my.png";

const Work = () => {
  const workInfoData = [
    {
      image: html,
      title: "Expert",
    },
    {
      image: css,
      title: "Expert",
    },
    {
      image: bootstrap,
      title: "Expert",
    },
    {
      image: sql,
      title: "Expert",
    },
    {
      image: tcss,
      title: "Intermediate",
    },
    {
      image: mdb,
      title: "Beginer",
    },  
      {
      image: php,
      title: "Expert",
    },
    {
      image: react,
      title: "Beginer",
    },
    {
      image: java,
      title: "Intermediate",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 3, // Scroll 3 slides at a time
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    
    <div className="work-section-wrapper mb-0">
           <div className="about-background-image-container">
        <img className="abt-bg" src={AboutBackground} alt="" />
      </div>
      <div className="work-section-top">
        {/* <p className="primary-subheading">Work</p> */}
        <p className="primary-text mb-5">
        To be able to work in an encouraging and competitive environment where my knowledge, ability, and personal skills can be effectively utilized.
        </p>
        <h1 className="primary-heading mb-3">Coding Skills</h1>
       
      </div>

      <Slider {...sliderSettings}>
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            <div className="info-boxes-img-container">
              <img className="loogos" src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Work;
