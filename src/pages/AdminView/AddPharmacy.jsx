import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { imageApi } from "../../libs/api/imageApi";
import { pharmacyApi } from "../../libs/api/pharmacyService";

const AddPharmacy = () => {
  const [pharmacyDetails, setPharmacyDetails] = useState({});
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e?.preventDefault();
    try {
      const { success, data, message } = await pharmacyApi.addPharmacy({
        pharmacyDetails,
      });
      if (success) {
        alert("Pharmacy added successfully!");
      } else {
        setError(message);
        alert("Pharmacy add failed!");
      }
    } catch (error) {
      alert("something went wrong!");
    }
  };
  const handleUpload = async (e) => {
    const imageData = new FormData();
    imageData.set("key", process.env.REACT_APP_IMAGEBB_SECRET_KEY);
    imageData.append("image", e.target.files[0]);
    try {
      const { data } = await imageApi.uploadImageToBB(imageData);
      if (data) {
        setPharmacyDetails((prevState) => ({
          ...prevState,
          pharmacyImage: data?.url,
        }));
      } else {
        setError("Something wrong!");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to upload!");
    }
  };

  const handleInputChange = (e) => {
    setPharmacyDetails({ ...pharmacyDetails, [e.target.name]: e.target.value });
  };
  return (
    <Container className="my-4 mx-auto">
      <h5 className="mb-3">Add Pharmacy</h5>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Pharmacy Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="pharmacyName"
                placeholder="Pharmacy Name"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.Image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                required
                type="file"
                name="pharmacyImage"
                onChange={handleUpload}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.open">
              <Form.Label>Open Time</Form.Label>
              <Form.Control
                required
                type="time"
                name="openTime"
                placeholder="8:00 AM"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.type">
              <Form.Label>Pharmacy Type</Form.Label>
              <Form.Control
                required
                type="text"
                name="pharmacyType"
                onChange={handleInputChange}
                placeholder="Chemists, Surgical Equipment Dealer"
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="exampleForm.pharamcy">
              <Form.Label>Open Time</Form.Label>
              <Form.Control type="time" name="openTime" placeholder="8:00 AM" />
            </Form.Group> */}
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                name="phoneNumber"
                placeholder="017*****23"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                required
                type="text"
                name="location"
                onChange={handleInputChange}
                placeholder="Dhanmondi-27, Dhaka"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.close">
              <Form.Label>Close Time</Form.Label>
              <Form.Control
                required
                type="time"
                name="closeTime"
                placeholder="11:59 PM"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <div>{error && <p className="text-danger">{error}</p>}</div>
        <Button type="submit" className="my-3">
          SUBMIT
        </Button>
      </Form>
    </Container>
  );
};

export default AddPharmacy;
