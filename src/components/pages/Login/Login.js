import React, { useState } from "react";
import login from "../../../images/login.jpg";
import { useLocation, useHistory, NavLink } from "react-router-dom";
import { Alert, Button, Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div>
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col-md-6 shadow p-5">
            <h2 className="text-center text-success py-3">Please Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div class="mb-3">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Enter Your Email*"
                  onChange={handleOnChange}
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Enter Your Password*"
                  onChange={handleOnChange}
                />
              </div>
              <Button className="login-btn" type="submit" variant="text">
                Login
              </Button>
              <br />
              <NavLink to="/register">
                <Button variant="text">
                  New User? Please <span className="text-info">Register</span>
                </Button>
              </NavLink>
              {isLoading && <Spinner animation="border" variant="dark" />}
              {user?.email && (
                <Alert variant="success">Login successfully!</Alert>
              )}
              {authError && <Alert variant="danger">{authError}</Alert>}
            </form>
            <Button
              className="btn btn-success w-100"
              onClick={handleGoogleSignIn}
              variant="text"
            >
              Google Sign In
            </Button>
          </div>
          <div className="col-md-6 ">
            <img className="img-fluid px-5 mx-5" src={login} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
