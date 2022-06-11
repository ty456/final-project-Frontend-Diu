import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import AccountInfo from "./AccountInfo";
import BillInfo from "./BillInfo";
import OtherInfo from "./OtherInfo";

const Accounts = () => {
  return (
    <Row>
      <Col md={6}>
        <Card className="p-3">
          <AccountInfo />
        </Card>
      </Col>
      <Col md={6}>
        <Card className="py-2 px-3">
          <BillInfo />
        </Card>
      </Col>
      <Col md={12} className="my-3">
        <Card className="p-3">
          <OtherInfo />
        </Card>
      </Col>
    </Row>
  );
};

export default Accounts;
