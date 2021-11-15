import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  // const { name, description, price, img } = order;
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:9000/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
    // console.log(data);
  }, [user?.email]);
  const handleDelete = (id) => {
    const url = `http://localhost:9000//myOrder/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Deleted");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });
  };
  return (
    <div>
      <div className="container text-center my-5">
        <h2 className="my-3">My Orders {orders.length}</h2>

        <div className="w-80">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Service Title</th>
                <th>Event description</th>
                <th>Image Link</th>
                <th>Action</th>
              </tr>
            </thead>
            {orders?.map((order, index) => (
              <tbody>
                <tr>
                  <td>{index}</td>
                  <td>{order.name}</td>
                  <td>{order.description}</td>
                  <td>{order.image}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
