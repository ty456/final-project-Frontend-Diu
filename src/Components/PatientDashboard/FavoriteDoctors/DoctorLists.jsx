import React from "react";
import { Col, Row } from "react-bootstrap";
import DoctorCard from "../../../pages/Home/BestDoctor/DoctorCarusel/DoctorCard";
import DoctorCarusel from "../../../pages/Home/BestDoctor/DoctorCarusel/DoctorCarusel";

const DoctorLists = () => {
  return (
    <Row>
      <Col md={3}>
        <DoctorCard />
      </Col>
      <Col md={3}>
        <DoctorCard />
      </Col>
    </Row>
  );
};

export default DoctorLists;
