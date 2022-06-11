import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddDependentModal = ({ setShow, show }) => {
  console.log(show);
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new member</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="relationship">
            <Form.Label>Relationship</Form.Label>
            <Form.Control type="text" placeholder="Relationship" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <Form.Select aria-label="gender">
              <option disable>Choose Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Others</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddDependentModal;
