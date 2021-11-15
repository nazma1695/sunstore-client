import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="back text-end"></div>
      <div className="not-found">
        <h1>404</h1>
        <h3>Not Found</h3>
        <p>The resource requested could not be found on this server!</p>
        <Link to="/home">
          <p className="btn-home text-center w-25 m-auto">Back To Site</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
