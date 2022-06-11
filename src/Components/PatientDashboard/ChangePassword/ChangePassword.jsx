import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const ChangePassword = () => {
  return (
    <Card className="p-3">
      <Form noValidate>
        <Row>
          <Form.Group
            className="mb-3"
            as={Col}
            md="12"
            controlId="validationCustom01"
          >
            <Form.Label>Old Password</Form.Label>
            <Form.Control required type="password" placeholder="Old Password" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            as={Col}
            md="12"
            controlId="validationCustom02"
          >
            <Form.Label>New password</Form.Label>
            <Form.Control required type="password" placeholder="New password" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            as={Col}
            md="12"
            controlId="validationCustom02"
          >
            <Form.Label>Confirm New password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirm New password"
            />
          </Form.Group>
        </Row>

        <Button type="submit">Change Password</Button>
      </Form>
    </Card>
  );
};

export default ChangePassword;
