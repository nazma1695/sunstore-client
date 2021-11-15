import { Alert, Button } from "react-bootstrap";
import React, { useState } from "react";
// import useAuth from "../../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  // const { register, handleAdminSubmit } = useForm();
  // const {} = useAuth();
  // const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://morning-journey-11676.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div className="my-3 w-25 m-auto">
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <input
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <br />
        <Button type="submit" variant="success">
          Make Admin
        </Button>
      </form>
      {/* <form onSubmit={handleAdminSubmit}>
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form> */}
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
