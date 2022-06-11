import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { authAPI } from "../../libs/api/authServices";
import { revokeAuthAdmin } from "../../store/admin/admin.action";
import { setDoctor } from "../../store/doctor/doctor.action";
import { revokeAuthUser } from "../../store/user/user.action";

const DoctorLoginForm = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    userType: "doctor",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e?.preventDefault();
    revokeAuthAdmin();
    revokeAuthUser();
    // console.log(userInfo);
    try {
      const { success, data, message } = await authAPI.authSignin(
        userInfo.userType,
        userInfo.email,
        userInfo.password
      );
      if (success) {
        console.log(data);
        // alert("User logged in successfully!");
        setDoctor(data);
        history.push("/doctor-panel");
      } else {
        setError(message);
        // alert(message);
      }
    } catch (error) {
      setError(error);
      // alert("something went wrong!");
    }
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  return (
    <Form onSubmit={handleSubmit} noValidate className="mt-5">
      <h5 className="mb-4">Login To Your Doctor Account</h5>
      <Form.Group className="mb-3" controlId="doctorEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="doctorPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleInputChange}
        />
      </Form.Group>
      {error.length > 0 && <p className="text-danger mb-2">{error}</p>}
      <div>
        <Button type="submit">Login</Button>
        <Link className="ms-3" to="/register">
          Dont have account? Create your doctor account!
        </Link>
      </div>
    </Form>
  );
};

export default DoctorLoginForm;
