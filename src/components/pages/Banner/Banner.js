import React from "react";
import bg from "../../../images/bg2.jpg";
import "./Banner.css";

const bannerBg = {
  background: `url(${bg})`,
  height: 500,
};

const Banner = () => {
  return (
    <div style={bannerBg}>
      <div className="bannerText text-start py-5">
        <h2>Designer frames 50% off</h2>
        <p>Save your eyes from sunbeams in summer!</p>
        <button className="btn-p">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
