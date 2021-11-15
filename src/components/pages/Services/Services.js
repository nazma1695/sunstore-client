import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://morning-journey-11676.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services py-5">
      <div className="text-center">
        <h2 className="">Our Best Collections</h2>
        <p className="service-para">
          Gentle Monster Silver Stripe Poxy Sunglasses
        </p>
      </div>
      <div className="container">
        <div className="service-container">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
