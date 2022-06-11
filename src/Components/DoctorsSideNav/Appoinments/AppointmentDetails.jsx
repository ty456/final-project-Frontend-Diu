import React from "react";
import { Button, Image, Offcanvas } from "react-bootstrap";
import styled from "styled-components";

const AppointmentDetails = ({ show, setShow, appointmentData, clickedId }) => {
  const handleClose = () => setShow(false);
  // console.log(appointmentData);
  // console.log(clickedId);
  const currentAppointmentData = appointmentData.filter(
    (appointment) => appointment._id === clickedId
  );
  console.log(currentAppointmentData);
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Appointment Information</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="text-start">
          <Image src={currentAppointmentData[0]?.patientPhotoUrl} width={120} />
        </div>
        <Wrapper className="my-3 text-start">
          <p>PatientId : {currentAppointmentData[0]?.patientId}</p>
          <p>Name : {currentAppointmentData[0]?.patientName}</p>
          <p>Email : {currentAppointmentData[0]?.patientEmail}</p>
          <p>Appointment Date : {currentAppointmentData[0]?.appointmentDate}</p>
          <p>Time Slot : {currentAppointmentData[0]?.timeSlot}</p>
          <p>
            Appointment Status : {currentAppointmentData[0]?.appointmentStatus}
          </p>
          <p>Booking Date : {currentAppointmentData[0]?.bookingDate}</p>
          <p>Payment Status : {currentAppointmentData[0]?.paymentStatus}</p>
          <p>Payment Method : {currentAppointmentData[0]?.paymentMethod}</p>
          <p>Paid Amount : {currentAppointmentData[0]?.paidAmount}</p>
        </Wrapper>
      </Offcanvas.Body>
      <Footer className="p-3 text-center">
        <Button
          variant="dark"
          className="px-4"
          disabled={currentAppointmentData[0]?.appointmentStatus === "ACCEPTED"}
        >
          {currentAppointmentData[0]?.appointmentStatus === "ACCEPTED"
            ? "ACCEPTED"
            : "ACCEPT"}
        </Button>
      </Footer>
    </Offcanvas>
  );
};

export default AppointmentDetails;

const Wrapper = styled.div`
  p {
    font-size: 0.885rem;
    font-weight: 590;
    margin-bottom: 6px !important;
  }
`;

const Footer = styled.div``;
