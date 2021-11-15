import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const ReviewItem = (service) => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    fetch("https://morning-journey-11676.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
  };
  return (
    <div className="my-3 w-25 m-auto">
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-success mt-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default ReviewItem;
