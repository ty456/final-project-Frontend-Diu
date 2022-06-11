import React, { useRef, useState } from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { getUserState } from "../../../store/actions";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authAPI } from "../../../libs/api/authServices";
import { setAuthUser } from "../../../store/user/user.action";
import { imageApi } from "../../../libs/api/imageApi";
import styled from "styled-components";
import { convertToBase64 } from "../../../utils/helpers";

const PatientProfileSetting = () => {
  const {
    profile: {
      _id,
      firstName,
      lastName,
      email,
      gender,
      dateOfBirth,
      bloodGroup,
      phoneNumber,
      state,
      address,
      city,
      zipCode,
      country,
      photoUrl,
      userType,
    },
  } = useSelector(getUserState);
  // console.log(firstName, lastName, email, gender, dateOfBirth, bloodGroup);

  const [userInfo, setUserInfo] = useState({
    _id: _id,
    photoUrl: photoUrl,
    firstName: firstName,
    lastName: lastName,
    email: email,
    gender: gender,
    dateOfBirth: dateOfBirth,
    bloodGroup: bloodGroup,
    phoneNumber: phoneNumber,
    state: state,
    address: address,
    city: city,
    zipCode: zipCode,
    country: country,
    userType: userType,
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e?.preventDefault();
    try {
      const { success, data, message } = await authAPI.updateProfile(
        userInfo,
        _id
      );
      if (success) {
        setError("");
        alert("Profile Update successful!");
        try {
          const { success, data, message } = await authAPI.getUserDetails(
            email,
            userType
          );
          if (success) {
            // setUserInfo(null);
            setAuthUser(data);
          } else {
            setError(message);
          }
        } catch (error) {
          setError("Something went Wrong!");
        }
      } else {
        setError(message);
      }
    } catch (error) {
      setError("Cant update! Something went wrong!");
      // alert("something went wrong!");
    }
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleUpload = async (e) => {
    const imageData = new FormData();
    imageData.set("key", process.env.REACT_APP_IMAGEBB_SECRET_KEY);
    imageData.append("image", e.target.files[0]);
    try {
      const { data } = await imageApi.uploadImageToBB(imageData);
      if (data) {
        setUserInfo((prevState) => ({ ...prevState, photoUrl: data?.url }));
      }
    } catch (error) {
      console.log(error);
      alert("Failed to upload!");
    }
  };

  return (
    <Wrapper className="p-3">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group
            as={Col}
            md={12}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <div className="d-flex align-items-center">
              <div className="mx-2">
                <Image
                  src={
                    userInfo?.photoUrl ? userInfo?.photoUrl : "/images/user.jpg"
                  }
                  width={130}
                  roundedCircle
                />
              </div>
              <div>
                <div>
                  {/* <h3 htmlFor="upload_btn">uplaod</h3> */}
                  <Form.Group controlId="formFile" className="mb-3 ">
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
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleInputChange}
              defaultValue={firstName}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              defaultValue={lastName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Choose DOB"
              defaultValue={dateOfBirth}
              onChange={handleInputChange}
              name="dateOfBirth"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Blood Group</Form.Label>
            <Form.Select
              aria-label="Default select example"
              defaultValue={bloodGroup}
              onChange={handleInputChange}
              name="bloodGroup"
            >
              <option>Choose Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            defaultValue={gender}
            controlId="formBasicEmail"
          >
            <Form.Label>Gender</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={gender}
              onChange={handleInputChange}
              name="gender"
            >
              <option>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={email}
              disabled
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              name="phoneNumber"
              placeholder="Phone number"
              defaultValue={phoneNumber}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder="Your Address"
              defaultValue={address}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              defaultValue={city}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              placeholder="State"
              defaultValue={state}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              name="zipCode"
              placeholder="Zip code"
              defaultValue={zipCode}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="country"
              placeholder="Country"
              defaultValue={country}
              onChange={handleInputChange}
            />
          </Form.Group>
          <p className="text-danger mt-1 mb-3 px-3">
            {error.length > 0 && error}
          </p>
          <div>
            <Button type="submit">Update Profile</Button>
          </div>
        </Row>
      </Form>
    </Wrapper>
  );
};

export default PatientProfileSetting;

const Wrapper = styled(Card)`
  .uploadBtn {
    background-color: #0054f1;
    color: #ffffff;
    padding: 7px 18px;
    border-radius: 3px;
    font-weight: 550;
  }
`;
