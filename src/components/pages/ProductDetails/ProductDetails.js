import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const ProductDetails = () => {
  const [service, setService] = useState({});
  const { user } = useAuth();
  const { serviceId } = useParams();
  console.log(serviceId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "pending";
    fetch("http://localhost:9000/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("Added successfully");
    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:9000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <div className="details-container">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-6">
              <img className="w-50" src={service.img} alt="" />
              <p>{service?.description}</p>
              <h1>{service?.name}</h1>
              <h1> {service?.price}</h1>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  defaultValue={service?.name}
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("description")}
                  defaultValue={service?.description}
                  placeholder="Description"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  defaultValue={service?.img}
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  defaultValue={service?.price}
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("number", { required: true })}
                  placeholder="Number"
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Order now"
                  className="btn btn-info w-50 p-2 m-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
