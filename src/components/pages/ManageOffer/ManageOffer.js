import React, { useEffect, useState } from "react";
import "./ManageOffer.css";
const ManageOffer = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    const url = `http://localhost:9000/services/${id}`;
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
            <h2>Manage Offers</h2>
            <p>
              Here you can Delete your offer Which is not available right now !!
            </p>
          </div>
        </div>

        {services.map((service) => (
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <div className=" service-offer pb-5">
                <img src={service.img} alt="" className="img-fluid" />
                <div className="service-offer-text shadow">
                  <h3>{service.name}</h3>
                  <p className="px-3">{service.description}</p>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-danger"
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

export default ManageOffer;
