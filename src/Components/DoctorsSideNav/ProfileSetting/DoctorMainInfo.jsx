import React from "react";
import { Col, Form } from "react-bootstrap";

const DoctorMainInfo = ({ handleInputChange, userInfo }) => {
  return (
    <>
      <Form.Group as={Col} md={6} className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleInputChange}
          defaultValue={userInfo?.firstName}
        />
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastName"
          defaultValue={userInfo?.lastName}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="datObBirth">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          placeholder="Choose DOB"
          defaultValue={userInfo?.dateOfBirth}
          onChange={handleInputChange}
          name="dateOfBirth"
        />
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="bloodGroup">
        <Form.Label>Blood Group</Form.Label>
        <Form.Select
          aria-label="Default select example"
          defaultValue={userInfo?.bloodGroup}
          onChange={handleInputChange}
          name="bloodGroup"
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
      <Form.Group
        as={Col}
        md={6}
        className="mb-3"
        defaultValue={userInfo?.gender}
        controlId="gender"
      >
        <Form.Label>Gender</Form.Label>
        <Form.Select
          aria-label="Default select example"
          defaultValue={userInfo?.gender}
          onChange={handleInputChange}
          name="gender"
        >
          <option>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={userInfo?.email}
          disabled
        />
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="number"
          name="phoneNumber"
          placeholder="Phone number"
          defaultValue={userInfo?.phoneNumber}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="Your Address"
          defaultValue={userInfo?.address}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          placeholder="City"
          defaultValue={userInfo?.city}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          name="state"
          placeholder="State"
          defaultValue={userInfo?.state}
          onChange={handleInputChange}
        />
      </Form.Group>
    </>
  );
};

export default DoctorMainInfo;
