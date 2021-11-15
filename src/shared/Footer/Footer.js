import React from "react";
import logo from "../../images/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      {/* Footer area  */}

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5 className="mb-3">ABOUT OUR COMPANY</h5>
              <div className="footer-item">
                <p className="footer-para">
                  We are offering you the unique goods because our product is
                  the real treasure. If you are a true fan, you’ll love it. We
                  have a tremendous variety in comparison to all of our
                  competitors. Our collection is like a sea pearl among simple
                  stones.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="mb-3">INFORMATION</h5>
              <div className="footer-item">
                <ul>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Catalog</li>
                  <li>Collections</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="mb-3">ABOUT US</h5>
              <div className="footer-item">
                <ul>
                  <li>Term of use</li>
                  <li>Code of conduct</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="mb-3">
                <img src={logo} alt="" />
              </h4>
              <p className="footer-para">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="footer-copyright">
              <p className="mt-3">
                Sunglass Mart &copy; 2021. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
