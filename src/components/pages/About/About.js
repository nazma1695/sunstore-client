import React from "react";
import aboutImg from "../../../images/img_hotspot.png";
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 my-5 pt-5">
            <h1>Weekend in Europe, London</h1>
            <p>Spain, Barcelona Villa de Bago</p>
            <span>
              For a long time, London was a small city. All its people lived
              inside the walls that were built by the Romans. This area is still
              called the City of London. There were many villages around it and
              gradually they joined.
            </span>
            <button className="btn-style mt-3">View All Tour</button>
          </div>
          <div className="col-md-6">
            <img src={aboutImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
