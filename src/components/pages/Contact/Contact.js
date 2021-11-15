import React from "react";
import login from "../../../images/login.jpg";
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
              <h2 className="text-center">Any Query Contact us</h2>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-6">
              <form className="g-3 mb-5 mt-3">
                <div className="">
                  <label for="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="">
                  <label for="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="">
                  <label className="form-label">Phone Number</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter Your Number"
                  />
                </div>
                <div class="form-floating mt-3">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea" style={{ height: " 200px" }}>
                    Your Massage...
                  </label>
                </div>

                <div className="">
                  <button
                    type="submit"
                    className="btn-home text-center my-3 w-50 m-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img className="img-fluid mx-5 px-5" src={login} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
