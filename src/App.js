import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./shared/Header/Header";
import Home from "./components/pages/Home/Home";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import ServiceDetails from "./components/pages/ServiceDetails/ServicDetails";
import Services from "./components/pages/Services/Services";
import Blog from "./components/pages/Blog/blog";
import Contact from "./components/pages/Contact/Contact";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./shared/Footer/Footer";
import MyOrder from "./components/pages/MyOrder/MyOrder";
import AddServices from "./components/pages/Dashboard/AddServices/AddServices";
import Dashboard from "./components/pages/Dashboard/Dashboard/Dashboard";
import Register from "./components/pages/Register/Register";
import ManageProducts from "./components/pages/Dashboard/ManageProducts/ManageProducts";
import ProductDetails from "./components/pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/collections">
              <Services></Services>
            </Route>
            <Route path="/addservices">
              <AddServices></AddServices>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/offer">
              <ManageProducts></ManageProducts>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog></Blog>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path={"/details/:serviceId"}>
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
