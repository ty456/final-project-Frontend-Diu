import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import PaymentRequest from "./PaymentRequest";

const BillInfo = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Wrapper>
        <Col md={6}>
          <div className="text-center ReceivedCard">
            <h4>$90.48</h4>
            <p>Received</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-center RequestCard">
            <h4>$0.48</h4>
            <p>Requested</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-center BalanceCard">
            <h4>$90.48</h4>
            <p>Balance</p>
          </div>
        </Col>
        <Col md={12} className="text-center">
          <Button className="mx-3" onClick={handleShow}>
            Request Refund
          </Button>
        </Col>
      </Wrapper>
      <PaymentRequest show={show} setShow={setShow} />
    </>
  );
};

export default BillInfo;

const Wrapper = styled(Row)`
  .ReceivedCard {
    background-color: #01ff012c;
    color: #3baa60;
    padding: 0.875rem;
    margin-bottom: 0.3rem;
    margin-top: 0.7rem;
    border-radius: 5px;
  }
  .RequestCard {
    background-color: #ffaa012c;
    color: #d8992b;
    padding: 0.875rem;
    margin-bottom: 0.3rem;
    margin-top: 0.7rem;
    border-radius: 5px;
  }
  .BalanceCard {
    background-color: #8001ff2c;
    color: #9359e2;
    padding: 0.875rem;
    margin-bottom: 0.7rem;
    margin-top: 0.7rem;
    border-radius: 5px;
  }
`;
