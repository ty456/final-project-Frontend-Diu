import React from "react";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import EditDetail from "./EditDetail";

const AccountInfo = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  return (
    <>
      <Row>
        <Col
          md={12}
          className="d-flex justify-content-between align-items-center mb-3 mt-2"
        >
          <h4>Account</h4>
          <Button onClick={handleShow}>Edit Details</Button>
        </Col>
        <hr />
        <Col md={6} className="p-4">
          <h6>Bank Name</h6>
          <p>Wells Fargo & Co</p>
          <h6 className="mt-2">Account Number</h6>
          <p>5396 5250 1908 3838</p>
        </Col>
        <Col md={6} className="p-4">
          <h6>Branch Name</h6>
          <p>Lenexa</p>
          <h6 className="mt-2">Account Name</h6>
          <p>Dr. Darren Elder</p>
        </Col>
      </Row>
      <EditDetail show={show} setShow={setShow} />
    </>
  );
};

export default AccountInfo;
