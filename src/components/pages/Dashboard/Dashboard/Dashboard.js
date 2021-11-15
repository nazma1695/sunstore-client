import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import MyOrder from "../../MyOrder/MyOrder";
import Pay from "../../Pay/Pay";
import ReviewItem from "../../ReviewItem/ReviewItem";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(
      `https://morning-journey-11676.herokuapp.com/checkAdmin/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row m-0 p-0">
          <div className="col-md-3">
            <div className="dashboard px-5">
              <h5 className="text-center py-3">Dashboard</h5>
              <div className="admin-dashboard my-5">
                {isAdmin && (
                  <Link to={`${url}/addCollection`}>
                    <li className="dashboard-menu">Add Collection</li>
                  </Link>
                )}
                {isAdmin && (
                  <Link to={`${url}/makeAdmin`}>
                    <li className="dashboard-menu">Make Admin</li>
                  </Link>
                )}
                {isAdmin && (
                  <Link to={`${url}/manageProduct`}>
                    <li className="dashboard-menu">Manage Product</li>
                  </Link>
                )}
                {isAdmin && (
                  <Link to={`${url}/manageAllOrder`}>
                    <li className="dashboard-menu">Manage All Orders</li>
                  </Link>
                )}
              </div>
              <div className="user-dashboard">
                {isAdmin || (
                  <Link to={`${url}`}>
                    <li className="dashboard-menu mt-5">My Order</li>
                  </Link>
                )}
                {isAdmin || (
                  <Link to={`${url}/pay`}>
                    <li className="dashboard-menu ">Pay</li>
                  </Link>
                )}
                {isAdmin || (
                  <Link to={`${url}/review`}>
                    <li className="dashboard-menu">Review</li>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route exact path={`${path}/myorder`}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/review`}>
                <ReviewItem></ReviewItem>
              </Route>
              <Route exact path={`${path}/manageAllOrder`}>
                <ManageAllOrders></ManageAllOrders>
              </Route>
              <Route exact path={`${path}/addCollection`}>
                <AddProduct></AddProduct>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>

              <Route exact path={`${path}/manageProduct`}>
                <ManageProducts></ManageProducts>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
