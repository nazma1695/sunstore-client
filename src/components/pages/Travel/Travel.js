import React from "react";

import service1 from "../../../images/service1.png";
import service2 from "../../../images/service2.png";
import service3 from "../../../images/service3.png";

const Travel = () => {
  return (
    <div>
      <div className="container clients">
        <div className="row">
          <div className="col-md-12 my-5">
            <h2>Top Travelling Destinations</h2>
            <p>Exquisite tours to the most popular cities on the planet.</p>
          </div>
        </div>
        <div className="row py-2 mb-5">
          <div className="col-md-4">
            <div className="travel-item shadow py-5">
              <img src={service1} alt="" className="img-fluid pb-4" />
              <h5>Reliable Booking System</h5>
              <p>Your booking system! We offer a booking, scheduling help.</p>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="travel-item shadow py-5">
              <img src={service2} alt="" className="img-fluid pb-4" />
              <h5>Get Travel Insurance</h5>
              <p>
                Travel insurance is intended to cover medical expenses, trip
                cancellation.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="travel-item shadow py-5">
              <img src={service3} alt="" className="img-fluid pb-4" />
              <h5>World Class Service</h5>
              <p>
                We all want it. If we run a business, we all want to give the
                impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
