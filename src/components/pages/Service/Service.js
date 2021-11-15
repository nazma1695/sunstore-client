import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, description, price, img, _id } = service;
  return (
    <div className="service">
      <div className="service-card shadow">
        <img src={img} alt="" style={{ height: "250px" }} />
        <div className="service-text">
          <h3>{name}</h3>
          <p className="px-3">{description}</p>
          {/* <button onClick={() => service.handleAddToOrder(service.product)}>
            Add to Order
          </button> */}
          <p className="px-3" style={{ fontSize: "20px", marginTop: "-8px" }}>
            ${price}
          </p>
          <Link to={`/details/${_id}`}>
            <span>
              <button className="btn-p btn btn-dark mt-2">Shop Now</button>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
