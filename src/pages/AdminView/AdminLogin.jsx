import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { adminApi } from "../../libs/api/adminServices";
import { getAdminState } from "../../store/actions";
import { setAdmin } from "../../store/admin/admin.action";
import { revokeAuthUser } from "../../store/user/user.action";

const AdminLogin = () => {
  const [adminDetails, setAdminDetails] = useState({});
  const { adminProfile } = useSelector(getAdminState);
  const [error, setError] = useState(null);
  const router = useHistory();
  useEffect(() => {
    if (adminProfile?.email) {
      router.push("/admin/doctor-list");
      return;
    }
  }, [adminProfile?.email, router]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    revokeAuthUser();
    try {
      const { success, data, message } = await adminApi.adminSignIn(
        adminDetails?.email,
        adminDetails?.password
      );
      console.log("from no where", data);
      if (success) {
        // alert("shei");
        setAdmin(data);
        router.push("/admin/doctor-list");
      } else {
        setError(message);
      }
    } catch (error) {
      alert(error);
    }
  };
  const handleChange = (e) => {
    setAdminDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Card style={{ maxWidth: "380px" }} className="p-4 mx-auto my-5">
        <h5 className="mb-3 text-center">Admin Login</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </Form.Group>
          {error && <p className="text-danger">{error}</p>}
          <Button type="submit" className="mt-3 w-100">
            Login
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default AdminLogin;
