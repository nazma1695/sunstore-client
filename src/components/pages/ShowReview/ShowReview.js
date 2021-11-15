import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const ShowReview = () => {
  const [review, setReview] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://morning-journey-11676.herokuapp.com/myReview/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
    // console.log(data);
  }, [user?.email]);

  return (
    <div>
      <div className="container text-center my-5">
        <h2 className="my-3">Our Review {review.length}</h2>

        <div className="w-80">
          {review?.map((review) => (
            <p>{review.email}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
