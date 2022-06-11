import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PaymentGetaway from "./PaymentGetaway";

const PatientCheckout = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col md={7}>
          <h5 className="mb-3">Personal Information</h5>
          <Form>
            <Row>
              <Form.Group
                as={Col}
                md={6}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group
                as={Col}
                md={6}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group
                as={Col}
                md={6}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group
                as={Col}
                md={6}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Phone Number" />
              </Form.Group>
            </Row>
          </Form>
          <h6>
            Existing User?{" "}
            <span>
              <Link to="/login">Click Here To Login</Link>{" "}
            </span>
          </h6>
          <hr />
          <div>
            <h3>Payment Method</h3>
            <div>
              <Form>
                <Row>
                  <Form.Group
                    as={Col}
                    md={6}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md={6}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md={12}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md={12}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Phone Number" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md={12}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Your Card Info</Form.Label>
                    <div className="border rounded p-3 mb-3">
                      <PaymentGetaway />
                    </div>
                  </Form.Group>
                </Row>
                <Link to="/booking-success">
                  <Button>Proceed</Button>
                </Link>
              </Form>
            </div>
          </div>
        </Col>
        <Col md={5}>
          <h5 className="mb-3">Booking Summery</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientCheckout;
