import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:9000/services", data).then((res) => {
      if (res.data.insertedId) {
        console.log(data);
        alert("Added successfully");
        reset();
      }
    });
  };
  return (
    <div className="add-offer text-center mt-5">
      <h2>Add New Collection</h2>
      <div className="my-3 w-25 m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Name"
            className="p-2 m-2 w-100 input-field"
          />
          <textarea
            {...register("description")}
            placeholder="Description"
            className="p-2 m-2 w-100 input-field"
          />
          <input
            {...register("img")}
            placeholder="Image Link"
            className="p-2 m-2 w-100 input-field"
          />

          <input
            {...register("price", { required: true })}
            placeholder="Price"
            type="number"
            className="p-2 m-2 w-100 input-field"
          />

          <select {...register("model")} className="p-2 m-2 w-100">
            <option value="premium">premium</option>
            <option value="classic">classic</option>
            <option value="business">business</option>
          </select>
          <br />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" value="Add" className="btn btn-info w-50" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
