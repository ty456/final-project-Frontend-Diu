import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { authAPI } from "../../../libs/api/authServices";
import { revokeAuthAdmin } from "../../../store/admin/admin.action";
import { revokeAuthUser } from "../../../store/user/user.action";

const DoctorRegForm = () => {
  const [userInfo, setUserInfo] = useState({
    userType: "doctor",
  });

  const router = useHistory();

  const handleSubmit = async (e) => {
    e?.preventDefault();
    revokeAuthAdmin();
    revokeAuthUser();
    console.log(userInfo);
    try {
      const { success, data, message } = await authAPI.authRegister({
        ...userInfo,
        chatRoomId: userInfo.userType + userInfo.email,
      });
      if (success) {
        alert("User registration successful!");
        // console.log(data);
        // setUserInfo(null);

        router.push("/login");
      } else {
        alert("User registration failed!");
      }
    } catch (error) {
      alert("something went wrong!");
    }
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <Container className="my-5">
      <h5 className="mb-3">Create Your Doctor Account</h5>
      <Form onSubmit={handleSubmit}>
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
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                required
                type="text"
                name="designation"
                placeholder="Designation"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Specialty</Form.Label>
              <Form.Control
                required
                type="text"
                name="specialty"
                placeholder="Dental,Heart specialist,Brain Special"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Educational Institution (Medical)</Form.Label>
              <Form.Control
                required
                type="text"
                name="institutionName"
                placeholder="Dhaka Dental college"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Grad Start Year</Form.Label>
              <Form.Control
                required
                type="text"
                name="gradStart"
                placeholder="2013"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Grad End Year</Form.Label>
              <Form.Control
                required
                type="text"
                name="gradEnd"
                placeholder="2018"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Blood Group</Form.Label>
              <Form.Select
                name="bloodGroup"
                aria-label="Default select example"
                onChange={handleSelectChange}
                required
              >
                <option>Choose Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                required
                type="date"
                name="dateOfBirth"
                placeholder="Enter Date of Birth"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="gender"
                aria-label="Default select example"
                onChange={handleSelectChange}
                required
              >
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

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
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="confirmPassword"
            placeholder="Confirm password Password"
            onChange={handleInputChange}
          />
        </Form.Group>
        <div>
          <Button type="submit">Register</Button>
          <span className="ms-3">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </Form>
    </Container>
  );
};

export default DoctorRegForm;
