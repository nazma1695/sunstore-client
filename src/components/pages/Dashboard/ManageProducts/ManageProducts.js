import React, { useEffect, useState } from "react";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://morning-journey-11676.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    const url = `https://morning-journey-11676.herokuapp.com/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Deleted");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <h2>Manage Product</h2>
            <p>
              Here you can Delete your Product Which is not available right now
              !!
            </p>
          </div>
        </div>

        {services.map((service) => (
          <div className="row">
            <div className="col-md-12">
              <div className="pb-5">
                <div className="shadow d-flex">
                  <img
                    src={service.img}
                    alt=""
                    className="img-fluid"
                    style={{ height: "200px" }}
                  />
                  <h3 className="p-5">{service.name}</h3>
                  <p className="px-5 py-5">{service.description}</p>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-danger m-5"
                    style={{ height: "40px", marginTop: "20px" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
