import { Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import BookingDetails from "./BookingDetails";
import { DateRangePicker } from "rsuite";
import { Link, useHistory, useParams } from "react-router-dom";
import { doctorApi } from "../../libs/api/doctorApi";
import dateFormat from "dateformat";
import { getUserState } from "../../store/actions";
import { useSelector } from "react-redux";
import { bookingApi } from "../../libs/api/bookingApi";
import ConfirmBooking from "./ConfirmBooking";
const initialSelectedValue = {
  date: dateFormat(new Date().setDate(new Date().getDate() + 1), "yyyy-mm-dd"),
  slot: "",
};
const DoctorBooking = () => {
  const { profile } = useSelector(getUserState);
  // const {profile} = useSelector(getUserState);
  const [doctorData, setDoctorData] = useState({});
  const [bookingDetails, setBookingDetails] = useState({
    appointmentDate: "",
    bookingDate: "",
    timeSlot: "",
    patientName: "",
    patientEmail: "",
    doctorName: "",
    doctorId: "",
    patientId: "",
    paymentStatus: "",
    paymentMethod: null,
    paidAmount: null,
    patientPhotoUrl: profile.photoUrl,
    appointmentStatus: "PENDING",
  });
  const [slots, setSlots] = useState([
    "10:00AM-11:00AM",
    "11:00AM-12:00PM",
    "12:00PM-01:00PM",
  ]);
  const [changePage, setChangePage] = useState("BOOKING_PAGE");
  const [bookingOrderId, setBookingOrderId] = useState(null);

  const [selected, setSelected] = useState(initialSelectedValue);
  const router = useHistory();
  const { id } = useParams();
  // console.log(id);
  const currentDate = new Date().setDate(new Date().getDate(), "yyyy-mm-dd");
  useEffect(() => {
    (async () => {
      try {
        const { success, data, message } = await doctorApi.getSingleDoctor(id);
        if (success) {
          setDoctorData(data);
        } else {
          console.log(message);
        }
      } catch (error) {
        alert(error);
      }
    })();
  }, [id]);
  // console.log(doctorData);

  useEffect(() => {
    setBookingDetails((prevState) => ({
      ...prevState,
      bookingDate: dateFormat(currentDate),
      doctorName: doctorData?.firstName + doctorData?.lastName,
      doctorId: doctorData._id,
      patientName: profile?.firstName + " " + profile?.lastName,
      patientEmail: profile?.email,
      patientId: profile?._id,
      paymentStatus: "PENDING",
    }));
  }, [doctorData]);

  const handleBooking = async () => {
    if (changePage === "BOOKING_PAGE") {
      try {
        const { success, data, message } = await bookingApi.doctorBooking(
          bookingDetails
        );
        if (success) {
          setBookingOrderId(data.insertedId);
          setChangePage("PAYMENT");
          // router.push("/doctor/booking/checkout");
        } else {
          alert("can not post data!");
        }
      } catch (error) {
        alert(error);
      }
    }
    if (changePage === "CONFIRMED") {
    }
  };
  const goBackPreviousPage = () => {
    if (changePage === "CONFIRMED") {
    }
    if (changePage === "PAYMENT") {
      setChangePage("BOOKING_PAGE");
    }
  };

  const todayDate = new Date().toDateString();
  return (
    <Container className="my-5">
      {changePage !== "BOOKING_PAGE" && (
        <p
          style={{ cursor: "pointer" }}
          onClick={goBackPreviousPage}
          className="text-primary text-decoration-underline mb-2 cursor-pointer"
        >
          Back to Previous Page
        </p>
      )}
      <Row>
        <Col
          md={changePage === "BOOKING_PAGE" ? 12 : 4}
          className=" border p-3 rounded bg-light shadow-sm "
        >
          <h5 className="mb-3">Doctor Information</h5>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <Image src={doctorData?.photoUrl} alt="" width={80} />
            </div>
            <div>
              <h5>{doctorData?.firstName + " " + doctorData?.lastName}</h5>
              <div className="d-flex">
                <Rating
                  name="simple-controlled"
                  value={5}
                  onChange={(event, newValue) => {
                    console.log(newValue);
                    // setBookingDetails((prevState) => ({ ...prevState, : data?.url }))
                  }}
                />
                <p>35</p>
              </div>
              <p>{doctorData?.designation + ", " + doctorData?.specialty}</p>
              <p>{doctorData?.state + ", " + doctorData?.country}</p>
            </div>
          </div>
        </Col>
        <Col md={changePage === "BOOKING_PAGE" ? 12 : 8}>
          <Row>
            {changePage === "BOOKING_PAGE" && (
              <>
                <Col md={7} className="mx-auto mt-4">
                  <h4>{todayDate}</h4>
                </Col>
                <Col md={5} className="mx-auto mt-4">
                  <h4>
                    Current Month Dates{" "}
                    <h5 className="d-inline">( From Tomorrow )</h5>{" "}
                  </h4>
                </Col>
              </>
            )}
            <Col md={changePage === "PAYMENT" ? 12 : 8} className="mx-auto ">
              {changePage === "BOOKING_PAGE" && (
                <BookingDetails
                  setBookingDetails={setBookingDetails}
                  slots={slots}
                  setSlots={setSlots}
                  selected={selected}
                  setSelected={setSelected}
                  bookingDetails={bookingDetails}
                />
              )}
              {changePage === "PAYMENT" && (
                <ConfirmBooking
                  bookingDetails={bookingDetails}
                  doctorData={doctorData}
                  bookingOrderId={bookingOrderId}
                />
              )}
            </Col>
          </Row>
          <div className="text-center my-4">
            {changePage === "BOOKING_PAGE" && (
              <Button
                disabled={
                  bookingDetails.appointmentDate === "" ||
                  bookingDetails.timeSlot === ""
                }
                className="px-5"
                onClick={handleBooking}
              >
                Submit
              </Button>
            )}
            {/* {changePage === "PAYMENT" && <Button>Confirm Payment</Button>} */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorBooking;
