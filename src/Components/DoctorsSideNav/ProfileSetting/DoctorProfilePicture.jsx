import React from "react";
import { Col, Form, Image } from "react-bootstrap";

const DoctorProfilePicture = ({ userData, handleUpload }) => {
  return (
    <Form.Group as={Col} md={12} className="mb-3" controlId="image">
      <div className="d-flex align-items-center">
        <div className="mx-2">
          <Image
            src={userData?.photoUrl ? userData?.photoUrl : "/images/user.jpg"}
            width={130}
            roundedCircle
          />
        </div>
        <div>
          <div>
            {/* <h3 htmlFor="upload_btn">uplaod</h3> */}
            <Form.Group controlId="formImage" className="mb-3 ">
              <label htmlFor="upload_button">
                <h6 className="uploadBtn">upload photo</h6>
              </label>
              <Form.Control
                className="d-none "
                onChange={handleUpload}
                type="file"
                id="upload_button"
                accept="image/png, image/gif, image/jpeg"
              />
            </Form.Group>
          </div>
          <p className="text-muted mt-2">
            Allowed JPG, GIF or PNG. Max size of 2MB
          </p>
        </div>
      </div>
    </Form.Group>
  );
};

export default DoctorProfilePicture;
