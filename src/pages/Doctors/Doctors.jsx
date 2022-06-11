import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { doctorApi } from "../../libs/api/doctorApi";
import DoctorCard from "../Home/BestDoctor/DoctorCarusel/DoctorCard";
// import dortorimg from "../../../../images/doctor-03.jpg";
const Doctors = () => {
  const [doctors, setDoctors] = useState(new Array(12).join(""));
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { success, data, message } =
          await doctorApi.getAllVerifiedDoctor();
        if (success) {
          setDoctorData(data);
        } else {
          alert(message);
        }
      } catch (error) {}
    })();
  }, []);

  return (
    <Container className="my-4  border">
      <h5>{doctorData.length} Doctors Found</h5>
      <Row className="my-3 w-100 mx-auto justify-content-center">
        {/* {Array.from({ length: 20 }).map((_, idx) => { */}
        {/* return ( */}
        {doctorData.map((data, idx) => {
          return (
            <Col md={5} lg={4} key={idx} className="mb-3">
              <DoctorCard data={data} />
            </Col>
          );
        })}
        {/* ); */}
        {/* })} */}
      </Row>
    </Container>
  );
};

export default Doctors;
