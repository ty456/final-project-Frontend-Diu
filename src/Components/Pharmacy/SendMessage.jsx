import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const SendMessage = ({ show, setShow, modalType }) => {
  const handleClose = () => {
    setShow(false);
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      {modalType === "message" && (
        <>
          <Modal.Header closeButton>
            <Modal.Title>
              <h5>SEND US A MESSAGE</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <>Message Box</>
                </Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  name="message"
                  placeholder="Type Your message..."
                  // onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-primary" onClick={handleClose}>
              SEND
            </Button>
          </Modal.Footer>
        </>
      )}
      {modalType === "call" && (
        <>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5 className="my-5 text-center">Call Feature Coming Soon...</h5>
          </Modal.Body>
        </>
      )}
      {modalType === "collection" && (
        <>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5 className="my-5 text-center">
              Collection Feature Coming Soon...
            </h5>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default SendMessage;
