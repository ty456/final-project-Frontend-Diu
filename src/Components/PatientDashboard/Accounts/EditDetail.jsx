import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditDetail = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Account Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="bankName">
            <Form.Label>Bank Name</Form.Label>
            <Form.Control type="text" placeholder="Bank Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="BranchName">
            <Form.Label>Branch Name</Form.Label>
            <Form.Control type="text" placeholder="Branch Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="accountNumber">
            <Form.Label>Account Number</Form.Label>
            <Form.Control type="text" placeholder="Account Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="accountName">
            <Form.Label>Account Name</Form.Label>
            <Form.Control type="text" placeholder="Account Name" />
          </Form.Group>
          <div className="text-center">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditDetail;
