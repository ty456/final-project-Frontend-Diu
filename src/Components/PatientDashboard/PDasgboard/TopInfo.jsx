import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

const TopInfo = () => {
  return (
    <Row>
      <Col md={3}>
        <Card className="p-3 text-center">
          <Image
            src="/images/userprofile/heart.png"
            width={60}
            className="mx-auto mt-3"
          />
          <h5 className="mt-4">Heart Rate</h5>
          <h5>
            12 <sub>bpm</sub>
          </h5>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="p-3 text-center">
          <Image
            src="/images/userprofile/temp.png"
            width={60}
            className="mx-auto mt-3"
          />
          <h5 className="mt-4">Body Temperature</h5>
          <h5>
            18 <sub>c</sub>
          </h5>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="p-3 text-center">
          <Image
            src="/images/userprofile/glucose.png"
            width={60}
            className="mx-auto mt-3"
          />
          <h5 className="mt-4">Glucose Level</h5>
          <h5>50 -70</h5>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="p-3 text-center">
          <Image
            src="/images/userprofile/bloodp.png"
            width={60}
            className="mx-auto mt-3"
          />
          <h5 className="mt-4">Blood Pressure</h5>
          <h5>
            202/90 <sub>mg/di</sub>
          </h5>
        </Card>
      </Col>
    </Row>
  );
};

export default TopInfo;
