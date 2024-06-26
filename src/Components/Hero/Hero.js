import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import profile_img from "../../Assets/profile_img.png";
import resume_pdf from "../../Assets/resume.pdf";

const Hero = () => {
  const openResume = () => {
    window.open(resume_pdf, "_blank");
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Rucha Tekade,</span> Web developer based in India.
      </h1>
      <p>
        Passionate web developer based in India, dedicated to creating
        responsive and visually captivating websites that elevate user
        engagement.
      </p>

      <div className="hero-section">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={openResume}>
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
