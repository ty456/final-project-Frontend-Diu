import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import DoctorRegForm from "./DoctorRegForm";
import PatientRegForm from "./PatientRegForm";
import RegForm from "./PatientRegForm";

const Register = () => {
  const [key, setKey] = useState("patient");
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="">
          <Image src="/images/loginBg.png" width={600} />
        </Col>
        <Col md={6}>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="patient" title="Patient Registration">
              <PatientRegForm />
            </Tab>
            <Tab eventKey="doctor" title="Doctor Registration">
              <DoctorRegForm />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
