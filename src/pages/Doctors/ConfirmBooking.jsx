import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUserState } from "../../store/actions";
import PaymentGetaway from "../Patient/PaymentGetaway";
import { useSelector } from "react-redux";
import InjectedCheckoutForm from "../Patient/InjectedCheckoutForm";
import { bookingApi } from "../../libs/api/bookingApi";

const ConfirmBooking = ({ bookingDetails, doctorData, bookingOrderId }) => {
  const { profile } = useSelector(getUserState);
  const [paymentUserInfo, setPaymentUserInfo] = useState({
    appointmentDate: bookingDetails.appointmentDate,
    bookingDate: bookingDetails.bookingDate,
    timeSlot: bookingDetails.timeSlot,
    patientName: bookingDetails.patientName,
    patientEmail: bookingDetails.patientEmail,
    doctorName: bookingDetails.doctorName,
    doctorId: bookingDetails.doctorId,
    patientId: bookingDetails.patientId,
    paymentMethod: "CARD",
    paymentStatus: "PAID",
    paymentBy: "",
    paymentUserEmail: "",
    paymentUserPhone: "",
    paidAmount: doctorData.appointmentFee ? doctorData.appointmentFee : null,
    patientPhotoUrl: profile.photoUrl,
    appointmentStatus: "PENDING",
  });

  const handleChange = (event) => {
    setPaymentUserInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    // console.log(paymentUserInfo);
    try {
      const { success, data, message } = await bookingApi.finalBooking(
        paymentUserInfo,
        bookingOrderId
      );
      if (success) {
        alert("Payment Successful!");
      } else {
        alert("Payment Failed");
      }
    } catch (error) {}
  };

  return (
    <div>
      <Row className="">
        <Form onSubmit={handleFinalSubmit}>
          <Col md={12} className="bg-light p-5 border rounded shadow-sm ">
            <h5 className="mb-3">Personal Information</h5>
            <Row>
              <Form.Group
                as={Col}
                md={6}
                className="mb-3"
                controlId="firstName"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  placeholder="First Name"
                  defaultValue={profile.firstName}
                />
              </Form.Group>
              <Form.Group as={Col} md={6} className="mb-3" controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  placeholder="Last Name"
                  defaultValue={profile.lastName}
                />
              </Form.Group>
              <Form.Group as={Col} md={6} className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  disabled
                  type="email"
                  placeholder="Enter Email"
                  defaultValue={profile.email}
                />
              </Form.Group>
              <Form.Group as={Col} md={6} className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  disabled
                  type="number"
                  placeholder="Phone Number"
                  defaultValue={profile.phoneNumber}
                />
              </Form.Group>
            </Row>

            <hr />
            <div>
              <h3 className="mb-3">Payment Method</h3>
              <Row>
                <Form.Group
                  as={Col}
                  md={6}
                  className="mb-3"
                  controlId="firstNameP"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="paymentBy"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} md={6} className="mb-3" controlId="emailP">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="paymentUserEmail"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  md={12}
                  className="mb-3"
                  controlId="phoneP"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="paymentUserPhone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} md={12} className="mb-3" controlId="cardP">
                  <Form.Label>Your Card Info</Form.Label>
                  <div className="border rounded p-3 mb-3">
                    <InjectedCheckoutForm />
                  </div>
                </Form.Group>
              </Row>
              <Button type="submit">Proceed</Button>
            </div>
          </Col>
        </Form>
        {/* <Col md={5} className="bg-light p-3  rounded shadow-sm">
          <h5 className="mb-3">Booking Summery</h5>
          <Link to="/booking-success">
            <Button>Proceed</Button>
          </Link>
        </Col> */}
      </Row>
    </div>
  );
};

export default ConfirmBooking;
