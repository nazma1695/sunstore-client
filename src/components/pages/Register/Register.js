import login from "../../../images/login.jpg";
import { useHistory, NavLink } from "react-router-dom";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    console.log(loginData);
    if (loginData.password !== loginData.password1) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col-md-6 shadow p-5">
            <h2 className="text-center text-success py-3">Please Register</h2>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <div class="mb-3">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Enter Your Name*"
                    onBlur={handleOnBlur}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Your Email*"
                    onBlur={handleOnBlur}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter Your Password*"
                    onBlur={handleOnBlur}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    name="password1"
                    class="form-control"
                    placeholder="ReType Your Password*"
                    onBlur={handleOnBlur}
                  />
                </div>
                <Button className="register-btn" type="submit" variant="text">
                  Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">
                    Already Registered? Please{" "}
                    <span className="text-info">Login</span>
                  </Button>
                </NavLink>
              </form>
            )}
            {isLoading && <Spinner animation="border" variant="dark" />}
            {user?.email && (
              <Alert variant="success">User Created successfully!</Alert>
            )}
            {authError && <Alert variant="danger">{authError}</Alert>}
          </div>
          <div className="col-md-6">
            <img className="img-fluid mx-5 px-5" src={login} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
