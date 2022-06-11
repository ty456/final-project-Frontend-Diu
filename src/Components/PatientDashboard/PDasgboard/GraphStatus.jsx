import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import styled from "styled-components";

const GraphStatus = () => {
  return (
    <Card className="mt-3 pb-3">
      <Wrapper className="w-100 mx-auto">
        <h6 className="border-bottom p-3 mb-2">Graph Status</h6>
        <Col md={3}>
          <Card className="p-3 text-center BmiCard mt-2">
            <h5>BMI Status</h5>
            <Image
              src="/images/userprofile/graph1.png"
              width={60}
              className="mx-auto"
            />
            <h6 className="my-3">Last Update 6d</h6>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center HeartCard mt-2">
            <h5>Heart Rate Status</h5>
            <Image
              src="/images/userprofile/rate.png"
              width={60}
              className="mx-auto"
            />
            <h6 className="my-3">Last Update 6d</h6>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center FbcCard mt-2">
            <h5>FBC Status</h5>
            <Image
              src="/images/userprofile/fbc.png"
              width={60}
              className="mx-auto"
            />
            <h6 className="my-3">Last Update 6d</h6>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center WeightCard mt-2">
            <h5>Weight Status</h5>
            <Image
              src="/images/userprofile/weight.png"
              width={60}
              className="mx-auto"
            />
            <h6 className="my-3">Last Update 6d</h6>
          </Card>
        </Col>
      </Wrapper>
    </Card>
  );
};

export default GraphStatus;

const Wrapper = styled(Row)`
  .BmiCard {
    background-color: #7289de;
    color: #ffffff;
    border-bottom: 0.825rem solid #6a5dee;
  }
  .HeartCard {
    background-color: #ffa69e;
    color: #ffffff;
    border-bottom: 0.825rem solid #fe9286;
  }
  .FbcCard {
    background-color: #a9d4ff;
    color: #ffffff;
    border-bottom: 0.825rem solid #8ec4ff;
  }
  .WeightCard {
    background-color: #ffb88e;
    color: #ffffff;
    border-bottom: 0.825rem solid #ffa775;
  }
`;
