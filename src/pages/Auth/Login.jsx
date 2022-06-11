import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Image, Container, Tab, Tabs } from "react-bootstrap";
import { authAPI } from "../../libs/api/authServices";
import PatientLoginForm from "./PatientLoginForm";
import DoctorLoginForm from "./DoctorLoginForm";
export const Login = () => {
  const [key, setKey] = useState("patient");
  return (
    <Wrapper className="my-5">
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
            <Tab eventKey="patient" title="Patient Login">
              <PatientLoginForm />
            </Tab>
            <Tab eventKey="doctor" title="Doctor Login">
              <DoctorLoginForm />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled(Container)``;
