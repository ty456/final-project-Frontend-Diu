import React from "react";
import { Col, Form, Nav, Overlay, Row, Tab } from "react-bootstrap";

const ScheduleTiming = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="">
          <h4>Schedule Timings</h4>
          <Form.Label>Timing Slot Duration</Form.Label>
          <Form.Select size="lg">
            <option> - </option>
            <option>15 mins</option>
            <option>30 mins</option>
            <option>1 Hour</option>
          </Form.Select>
        </Form.Group>
      </Form>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Col>
          <Row className="p-3 border">
              <Nav style={{cursor:'pointer'}} variant="pills" className="flex-row">
                <Nav.Item style={{ width: '6rem', textAlign: 'center'}}>
                  <Nav.Link eventKey="first">Sat</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ width: '6rem', textAlign: 'center'}}>
                  <Nav.Link eventKey="second">Sun</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ width: '6rem', textAlign: 'center'}}>
                  <Nav.Link eventKey="third">Mon</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ width: '6rem', textAlign: 'center'}}>
                  <Nav.Link eventKey="fourth">Tue</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ width: '6rem', textAlign: 'center'}}>
                  <Nav.Link eventKey="fifth">Wen</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ width: '6rem', textAlign: 'center'}}>
                  <Nav.Link eventKey="sixth">Thur</Nav.Link>
                </Nav.Item>
              </Nav>
          </Row>

          <Row>
            <Tab.Content>
                
              <Tab.Pane eventKey="first">
                <h5>Time Slots</h5>
                <p>Not Available</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <h5>Time Slots</h5>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h5>Time Slots</h5>
                <p>Not Available</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <h5>Time Slots</h5>
                <p>Not Available</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <h5>Time Slots</h5>
                <p>Not Available</p>
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <h5>Time Slots</h5>
                <p>Not Available</p>
              </Tab.Pane>

            </Tab.Content>
          </Row>
        </Col>
      </Tab.Container>
    </div>
  );
};

export default ScheduleTiming;
