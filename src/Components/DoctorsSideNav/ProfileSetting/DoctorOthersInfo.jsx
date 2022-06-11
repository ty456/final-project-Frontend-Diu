import React from "react";
import { Col, Form } from "react-bootstrap";

const DoctorOthersInfo = ({ handleInputChange, userInfo }) => {
  return (
    <>
      <Form.Group as={Col} md={6} className="mb-3" controlId="zip">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          type="text"
          name="zipCode"
          placeholder="Zip code"
          defaultValue={userInfo?.zipCode}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          name="country"
          placeholder="Country"
          defaultValue={userInfo?.country}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="designation">
        <Form.Label>Designation</Form.Label>
        <Form.Control
          type="text"
          name="designation"
          placeholder="MBBS"
          defaultValue={userInfo?.designation}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="designation">
        <Form.Label>Appointment Fee</Form.Label>
        <Form.Control
          type="text"
          name="appointmentFee"
          placeholder="500"
          defaultValue={userInfo?.appointmentFee}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="institutionName">
        <Form.Label>Institution Name</Form.Label>
        <Form.Control
          type="text"
          name="institutionName"
          placeholder="Dhaka Dental College"
          defaultValue={userInfo?.institutionName}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} md={3} className="mb-3" controlId="gradStart">
        <Form.Label>Grad Start</Form.Label>
        <Form.Control
          type="text"
          name="gradStart"
          placeholder="2018"
          defaultValue={userInfo?.gradStart}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} md={3} className="mb-3" controlId="gradEnd">
        <Form.Label>Grad End</Form.Label>
        <Form.Control
          type="text"
          name="gradEnd"
          placeholder="2022"
          defaultValue={userInfo?.gradEnd}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group as={Col} md={6} className="mb-3" controlId="specialty">
        <Form.Label>Specialty</Form.Label>
        <Form.Control
          type="text"
          name="specialty"
          placeholder="Brain Specialist"
          defaultValue={userInfo?.specialty}
          onChange={handleInputChange}
        />
      </Form.Group>
    </>
  );
};

export default DoctorOthersInfo;
