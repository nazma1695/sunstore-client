import React from "react";
import banner from "../../../images/banner.jpg";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 m-0 p-0">
            <img src={banner} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
