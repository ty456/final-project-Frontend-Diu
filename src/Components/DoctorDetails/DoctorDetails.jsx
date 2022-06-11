import React, { useState } from "react";
import DoctorImage from "../../images/doctor-03.jpg";

import RoomIcon from "@material-ui/icons/Room";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import GradeIcon from "@mui/icons-material/Grade";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { doctorApi } from "../../libs/api/doctorApi";
import DoctorsMainTabs from "../DoctorDetailsTabs/DoctorsMainTabs";
import { Col, Container, Row } from "react-bootstrap";

const DoctorDetails = () => {
  const [doctorData, setDoctorData] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    (async () => {
      const { success, data, message } = await doctorApi.getSingleDoctor(id);
      if (success) {
        setDoctorData(data);
      } else {
        console.log(message);
      }
    })();
  }, [id]);
  // const [name, setName] = useState(doctorData?.firstName);
  // const [room, setRoom] = useState("");

  return (
    <main style={{ backgroundColor: "#F8F9FA" }}>
      <div className="text-start p-3 text-white ps-5 mb-4 fw-bold bg-primary ">
        <div>
          <p> Home / Doctor Profile </p>{" "}
        </div>{" "}
        <h3> Doctor Profile </h3>{" "}
      </div>
      {/* <container> */}
      <Container>
        <Row className=" bg-white   rounded shadow-sm">
          <Col md={8} className=" text-start p-3 d-flex ">
            <div className="p-4">
              <img
                style={{ width: "160px" }}
                src={doctorData?.photoUrl}
                alt=""
              />
            </div>{" "}
            <div>
              <h2> {doctorData?.firstName + " " + doctorData?.lastName} </h2>
              <p>
                {" "}
                {doctorData?.designation + ", " + doctorData?.specialty}{" "}
              </p>{" "}
              <div className="d-flex">
                <div className="text-warning">
                  <GradeIcon />
                  <GradeIcon />
                  <GradeIcon />
                  <GradeIcon />
                </div>{" "}
                <div style={{ Color: "#E0E0E0" }}>
                  <GradeIcon />
                </div>{" "}
              </div>{" "}
              <div className="d-flex mt-2">
                <RoomIcon />
                <p>
                  {" "}
                  {doctorData?.state}, {doctorData?.country}{" "}
                </p>{" "}
              </div>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <div className="">
                <button class="btn btn-primary me-3"> Dental Filling </button>{" "}
                <button class="btn btn-primary"> Teeth Whitneing </button>{" "}
              </div>{" "}
            </div>{" "}
          </Col>

          <Col md={4} className="text-start p-3">
            <div className="d-flex">
              <ThumbUpIcon className="text-info" />
              <p> 99 % </p>{" "}
            </div>
            <div className="d-flex">
              <ChatBubbleIcon className="text-info" />
              <p> 35 Feedback </p>{" "}
            </div>{" "}
            <div className="d-flex">
              <RoomIcon className="text-info" />
              <p> Newyork, USA </p>{" "}
            </div>{" "}
            <div className="d-flex">
              <LocalAtmIcon className="text-info" />
              <p> {doctorData?.appointmentFee} per hour </p>{" "}
            </div>{" "}
            <div className="d-flex p-4 fw-bold">
              <BookmarkBorderIcon className="text-info  ms-2" />
              <ChatBubbleIcon className="text-info  ms-4" />
              <CallIcon className="text-info  ms-4" />
              <VideocamIcon className="text-info  ms-4" />
            </div>
            <Link to={`/doctor/booking/${doctorData?._id}`} className="me-2">
              <button className="btn btn-primary btn-lg">
                Book Appointment
              </button>
            </Link>
            <Link
              onClick={(e) =>
                !doctorData.firstName || !doctorData.chatRoomId
                  ? e.preventDefault()
                  : null
              }
              to={`/chat?name=${doctorData.firstName}&room=${doctorData.chatRoomId}`}
            >
              <button className="btn btn-primary btn-lg">
                Chat With Doctor
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className=" container mt-5">
        <DoctorsMainTabs doctorData={doctorData}> </DoctorsMainTabs>{" "}
      </div>
    </main>
  );
};

export default DoctorDetails;
