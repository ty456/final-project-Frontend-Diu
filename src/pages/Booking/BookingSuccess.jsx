import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookingSuccess = () => {
  return (
    <Container className="my-5 text-center">
      <Card className="p-5 bg-white">
        <h3>Appointment booked Successfully!</h3>
        <p>
          Appointment booked with <b> Dr. Darren Elder</b>
        </p>
        <p>
          on <b> 11 Apr 2022 5:00PM to 6:00PM</b>
        </p>
        <Link to="/">
          {" "}
          <Button className=" py-2 mt-4 w-25 mx-auto">Got To Home</Button>
        </Link>
      </Card>
    </Container>
  );
};

export default BookingSuccess;
