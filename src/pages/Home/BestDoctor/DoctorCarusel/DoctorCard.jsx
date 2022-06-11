import { Button, Rating } from "@mui/material";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const DoctorCard = ({ data }) => {
  return (
    <Card className="px-3 py-4" style={{ maxWidth: "320px" }}>
      <div style={{ minHeight: "180px" }} className="text-center my-1">
        <Image src={data?.photoUrl} width={180} alt="Doctor Image" />
      </div>
      <Card.Title
        className="mt-3 text-black"
        style={{
          fontSize: "1.1rem",
          fontWeight: 500,
        }}
      >
        {data?.firstName + data?.lastName}
      </Card.Title>
      <p style={{ fontSize: "0.875rem" }}>
        {data?.designation + " " + data?.specialty}
      </p>
      <div className="my-2">
        <Rating name="read-only" value={5} size="medium" readOnly />
      </div>
      <div>
        <p style={{ fontSize: "0.875rem" }}>
          {data?.state + " " + data?.country}
        </p>
        <p style={{ fontSize: "0.875rem" }}>Available on Fri, 22 Mar</p>
        <p style={{ fontSize: "0.875rem" }}>$300 - $1000</p>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <Link
          to={`/doctordetails/${data?._id}`}
          className="text-decoration-none"
        >
          <Button variant="outlined">View Profile</Button>
        </Link>
        <Link to={`/doctor/booking/${data?._id}`}>
          {" "}
          <Button variant="contained">Book Now</Button>
        </Link>
      </div>
    </Card>
  );
};

export default DoctorCard;
