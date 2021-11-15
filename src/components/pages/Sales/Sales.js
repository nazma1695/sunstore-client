import React from "react";
import sales from "../../../images/sales.jpg";
import "./Sales.css";
const Sales = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <img src={sales} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 text-start my-5 pt-5">
            <h2>Sale OFF 20% all products</h2>
            <p className="para">
              Our store is more than just another average online retailer. We
              sell not only top quality products, but give our customers a
              positive online shopping experience.
            </p>
            <button className="btn btn-dark btn-p">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
