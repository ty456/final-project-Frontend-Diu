import React, { useEffect, useState } from "react";
import { Row, Col, Image, Button, Badge } from "react-bootstrap";
import { bookingApi } from "../../../libs/api/bookingApi";
import { getDoctorState, getUserState } from "../../../store/actions";
import { useSelector } from "react-redux";
import AppointmentDetails from "./AppointmentDetails";

const Appoinment = ({ id }) => {
  // const { profile } = useSelector(getDoctorState);
  const [show, setShow] = useState(false);
  // const [appointmentStatus, setAppointmentStatus] = useState(null)
  // console.log(profile);
  const [appointmentData, setappointmentData] = useState([]);
  const [appointmentStatus, setAppointmentStatus] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { success, data, message } =
          await bookingApi.getBookingByDoctorId(id);
        if (success) {
          setappointmentData(data);
        } else {
          alert("error");
        }
      } catch (error) {
        alert(error);
      }
    })();
  }, [appointmentStatus]);

  const handleShow = (userId) => {
    setUserId(userId);
    setShow(true);
  };

  const handleAppointment = async (id) => {
    try {
      const { success, data, message } =
        await bookingApi.updateAppointmentStatus("ACCEPTED", id);
      if (success) {
        setAppointmentStatus(!appointmentStatus);
      } else alert(message);
    } catch (error) {
      alert("jani na ki hoise");
    }
  };
  return (
    <div>
      {appointmentData.map((el, i) => {
        return (
          <div className="border p-2 bg-light shadow-sm rounded mb-2">
            <Row className=" p-1 text-center ">
              <Col md={8} className="d-flex align-items-center">
                <div>
                  <Image
                    style={{ width: "140px", height: "140px" }}
                    src={el?.patientPhotoUrl}
                  ></Image>
                </div>
                <div className="d-flex flex-column p-3 text-start">
                  <h5>{el?.patientName}</h5>
                  {/* <small>{el?.Location}</small> */}
                  <small> {el?.patientEmail}</small>
                  <small> {el?.paymentUserPhone}</small>
                  <small className="text-danger">
                    Appointment on : <b>{el?.appointmentDate}</b>
                  </small>
                  <small className="text-danger">
                    Time Slot : <b>{el?.timeSlot}</b>
                  </small>
                  <small className="text-success">
                    Payment Status : <b>{el?.paymentStatus}</b>
                  </small>
                  <small className="text-success">
                    Appointment Status : <b>{el?.appointmentStatus}</b>
                  </small>
                </div>
              </Col>
              <Col
                md={4}
                className="d-flex justify-content-center align-items-center"
              >
                <Button
                  onClick={() => handleShow(el?._id)}
                  variant="success"
                  className="m-2 text-white"
                >
                  View
                </Button>
                {el.appointmentStatus !== "ACCEPTED" ? (
                  <>
                    <Button
                      className="m-2 text-white"
                      onClick={() => handleAppointment(el?._id)}
                    >
                      Accept
                    </Button>
                    <Button variant="danger" className="m-2 text-white">
                      Reject
                    </Button>
                  </>
                ) : (
                  <Badge pill bg="warning" className="py-2 px-4 text-dark">
                    Accepted
                  </Badge>
                )}
              </Col>
            </Row>
          </div>
        );
      })}
      <AppointmentDetails
        setShow={setShow}
        show={show}
        appointmentData={appointmentData}
        clickedId={userId}
      />
    </div>
  );
};
export default Appoinment;
