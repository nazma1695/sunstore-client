import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className=" mt-3 pb-5">
        <div className="banner-content">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="container">
        <div className="offset-md-1 col-md-10">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center"> Book Your Destination</h2>
            </div>
          </div>
          <form className="row g-3 mb-5 mt-3">
            <div className="col-md-6">
              <label for="inputName" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="col-md-6">
              <label for="inputEmail" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter Your Number"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label"> Destinetion</label>
              <select
                class="form-select form-control"
                aria-label="Select Your Destinetion"
              >
                <option selected>Select Your Destinetion</option>
                <option value="Mexican Holiday Tour">
                  Mexican Holiday Tour
                </option>
                <option value="Paris Vacation Tour">Paris Vacation Tour</option>
                <option value="Hot Days Venice Tour">
                  Hot Days Venice Tour
                </option>
              </select>
            </div>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea" style={{ height: " 200px" }}>
                Your Massage...
              </label>
            </div>

            <div className="col-md-12">
              <button type="submit" className="col-md-12 btn-style">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
