import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPaperPlane,
  faGlobe,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import "./Clients.css";
const Clients = () => {
  const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const fly = <FontAwesomeIcon icon={faPaperPlane} />;
  const globe = <FontAwesomeIcon icon={faGlobe} />;
  const comment = <FontAwesomeIcon icon={faComments} />;
  return (
    <div>
      <div className="container clients">
        <div className="row">
          <div className="col-md-12 mt-5 mb-3">
            <h2>Why Clients Choose Us</h2>
            <p>Travelling across the world is now much easier.</p>
          </div>
        </div>
        <div className="row py-2 mb-5">
          <div className="col-md-3">
            <div className="client-item">
              <h3>{map}</h3>
              <h5>Reliable Booking System</h5>
              <p>Your booking system! We offer a booking, scheduling help.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="client-item">
              <h3>{fly}</h3>
              <h5>Get Travel Insurance</h5>
              <p>
                Travel insurance is intended to cover medical expenses, trip
                cancellation.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="client-item">
              <h3>{globe}</h3>
              <h5>World Class Service</h5>
              <p>
                We all want it. If we run a business, we all want to give the
                impression.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="client-item">
              <h3>{comment}</h3>
              <h5>Perfect Clients Support</h5>
              <p>
                A wide range of services to assist customers in making trips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
