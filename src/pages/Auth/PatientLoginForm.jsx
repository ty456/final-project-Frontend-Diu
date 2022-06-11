import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { authAPI } from "../../libs/api/authServices";
import { revokeAuthAdmin } from "../../store/admin/admin.action";
import { revokeAuthDoctor } from "../../store/doctor/doctor.action";
import { setAuthUser } from "../../store/user/user.action";
const PatientLoginForm = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    userType: "patient",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e?.preventDefault();
    revokeAuthAdmin();
    revokeAuthDoctor();
    console.log(userInfo);
    try {
      const { success, data, message } = await authAPI.authSignin(
        userInfo.userType,
        userInfo.email,
        userInfo.password
      );
      if (success) {
        console.log(data);
        alert("User logged in successfully!");
        setAuthUser(data);
        history.push("/");
      } else {
        alert(message);
      }
    } catch (error) {
      alert("something went wrong!");
    }
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={handleSubmit} noValidate className="mt-5">
      <h5 className="mb-4">Login To Your Patient Account</h5>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleInputChange}
        />
      </Form.Group>
      <div>
        <Button type="submit">Login</Button>
        <Link className="ms-3" to="/register">
          New User? Create an account!
        </Link>
      </div>
    </Form>
  );
};

export default PatientLoginForm;
