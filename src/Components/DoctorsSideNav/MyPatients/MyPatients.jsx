import React, { useEffect, useState } from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import styled from "styled-components";
import { doctorApi } from "../../../libs/api/doctorApi";

const MyPatients = ({ id }) => {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    getPatientIds();
  }, [id]);
  const getPatientIds = async () => {
    try {
      const { success, data, message } = await doctorApi.getPatientIdByDoctorId(
        id
      );
      if (success) {
        setPatientData(data);
      } else {
        alert("something went wrong!");
      }
    } catch (error) {}
  };

  return (
    <Row>
      {patientData?.map((el, i) => {
        return (
          <Col md={3}>
            <Card
              className="p-3"
              style={{
                width: "18rem",
                textAlign: "center",
                margin: "10px",
              }}
            >
              <Card.Img
                as={Image}
                variant="top"
                className="rounded-circle"
                src={el?.patientDetails?.photoUrl}
              />
              <Card.Body>
                <Card.Title key={i}>{el?.patientDetails?.firstName}</Card.Title>
                <Card.Text>
                  <p>Patient ID: {el?.patientId}</p>
                  <p>
                    {el?.patientDetails.state +
                      ", " +
                      el?.patientDetails?.country}
                  </p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <Row>
                  <Col className="text-start ps-4">
                    <p>Phone</p>
                    <p>Age</p>
                    <p>Blood Group</p>
                  </Col>
                  <Col>
                    <p>
                      {el?.patientDetails?.phoneNumber
                        ? el?.patientDetails?.phoneNumber
                        : "Not found"}
                    </p>
                    <p>
                      {el?.patientDetails?.age}, {el?.patientDetails?.gender}
                    </p>
                    <p>{el?.patientDetails?.bloodGroup}</p>
                  </Col>
                </Row>
              </ListGroup>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

const Image = styled.img`
  max-width: 100px;
  margin: auto;
`;

export default MyPatients;
