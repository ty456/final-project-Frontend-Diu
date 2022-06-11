import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const TabContent = () => {
  return (
    <Wrapper className="w-100 mx-auto overflow-hidden">
      <Col md={10}>
        <Row className="fw-bold m-2 p-3 text-start">
          <Col md={3}>Patient Name</Col>
          <Col md={2}>Appt Date</Col>
          <Col md={2}>Purpose</Col>
          <Col md={2}>Type</Col>
          <Col md={3} className="text-center">
            Paid Amount
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center border m-1 p-3">
          <Col md={3}>
            <div>
              <h6>Richard WIlson</h6>
              <small>#PT0016</small>
            </div>
          </Col>
          <Col md={2}>
            <p>11 NOV 2022</p>
            <small className="text-info">10.10 AM</small>
          </Col>
          <Col md={2}>General</Col>
          <Col md={2}>New Patient</Col>
          <Col md={3}>
            <p className="text-center">$150</p>
          </Col>
        </Row>
      </Col>
      <Col md={2} className="d-flex justify-content-center align-items-center">
        <Row>
          <Col md={12}></Col>
          <Col md={12} className="mt-md-4">
            <div className="d-flex justify-content-center align-items-center mt-md-5">
              <p className="text-info p-2">View</p>

              <p className="text-info p-2">Accept</p>

              <p className="text-danger p-2">Cancel</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};

const Wrapper = styled(Row)`
  p {
    font-size: 0.885rem;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export default TabContent;
