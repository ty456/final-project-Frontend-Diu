import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { authAPI } from "../../../libs/api/authServices";
import { imageApi } from "../../../libs/api/imageApi";
import { getDoctorState } from "../../../store/actions";
import { setDoctor } from "../../../store/doctor/doctor.action";
import DoctorMainInfo from "./DoctorMainInfo";
import DoctorOthersInfo from "./DoctorOthersInfo";
import DoctorProfilePicture from "./DoctorProfilePicture";
import UserProfilePicture from "./DoctorProfilePicture";

const ProfileSetting = ({ userInfo }) => {
  const {
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
    designation,
    institutionName,
    gradStart,
    gradEnd,
    specialty,
    isVerified,
    userType,
    appointmentFee,
  } = userInfo;

  const [userData, setUserData] = useState({
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
    designation: designation,
    institutionName: institutionName,
    gradStart: gradStart,
    gradEnd: gradEnd,
    specialty: specialty,
    isVerified: isVerified,
    userType: userType,
    appointmentFee: appointmentFee,
  });
  const [error, setError] = useState("");

  const handleUpload = async (e) => {
    const imageData = new FormData();
    imageData.set("key", process.env.REACT_APP_IMAGEBB_SECRET_KEY);
    imageData.append("image", e.target.files[0]);
    try {
      const { data } = await imageApi.uploadImageToBB(imageData);
      if (data) {
        setUserData((prevState) => ({ ...prevState, photoUrl: data?.url }));
      }
    } catch (error) {
      console.log(error);
      alert("Failed to upload!");
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    try {
      const { success, data, message } = await authAPI.updateProfile(
        userData,
        _id
      );
      if (success) {
        setError("");
        alert("Profile Update successful!");
        try {
          const { success, data, message } = await authAPI.getUserDetails(
            email,
            userInfo.userType
          );
          if (success) {
            // setUserInfo(null);
            setDoctor(data);
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
    setUserData({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper className="bg-white p-4 rounded">
      <Form onSubmit={handleSubmit}>
        <Row>
          <DoctorProfilePicture
            handleUpload={handleUpload}
            userData={userData}
          />
          <DoctorMainInfo
            userInfo={userInfo}
            handleInputChange={handleInputChange}
          />
          <DoctorOthersInfo
            userInfo={userInfo}
            handleInputChange={handleInputChange}
          />
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

export default ProfileSetting;

const Wrapper = styled.div`
  .uploadBtn {
    background-color: #0054f1;
    color: #ffffff;
    padding: 7px 18px;
    border-radius: 3px;
    font-weight: 550;
  }
`;
