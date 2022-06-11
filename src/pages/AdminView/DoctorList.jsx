import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { doctorApi } from "../../libs/api/doctorApi";

const DoctorList = () => {
  const [doctorList, setDoctorList] = useState([]);
  const [isDoctorVerified, setIsDoctorVerified] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const { success, data, message } = await doctorApi.getAllDoctors();
        if (success) {
          setDoctorList(data);
        } else {
          alert(message);
        }
      } catch (error) {}
    })();
  }, [isDoctorVerified]);

  const handleVerifyChange = (e, id) => {
    // console.log(e.target.checked);
    verifyDoctorList(e.target.checked, id);
  };

  const verifyDoctorList = async (isVerified, id) => {
    try {
      const { success, data, message } = await doctorApi.verifyDoctor(
        isVerified,
        id
      );
      if (success) {
        // setDoctorList(data);
        setIsDoctorVerified(!isDoctorVerified);
        console.log(data);
      } else {
        alert(message);
      }
    } catch (error) {}
  };
  console.log(doctorList);
  return (
    <Row className="my-3 justify-content-center">
      {doctorList.length > 0 &&
        doctorList.map((item, idx) => {
          return (
            <Col key={idx} lg={4} md={5} className="text-center ">
              <Card className="m-1 p-3 shadow-sm">
                <div style={{ minHeight: "140px" }}>
                  <Image src={item.photoUrl} width={130} alt="Image" />
                </div>
                <h6 className="my-2">
                  Doctor Name: {item?.firstName + item?.lastName}
                </h6>
                <h6 className="my-2">Email: {item?.email}</h6>
                <h6 className="">
                  Verify Status :
                  <span
                    className={
                      item?.isVerified ? "text-success" : "text-danger"
                    }
                  >
                    {!item?.isVerified ? " Not verified" : " Verified"}
                  </span>
                </h6>
                <div className="m-2 d-flex justify-content-center">
                  <Form.Label className="me-2" style={{ fontWeight: 600 }}>
                    {item?.isVerified ? "Verified" : "Rejected"}{" "}
                  </Form.Label>
                  <Form.Check
                    type="switch"
                    id={`custom-switch-${idx}`}
                    defaultChecked={item?.isVerified}
                    onChange={(e) => handleVerifyChange(e, item?._id)}
                  />
                </div>
                {/* <Button onClick={verifyDoctorList} className="mt-3">
                  Click to verify
                </Button> */}
              </Card>
            </Col>
          );
        })}
    </Row>
  );
};

export default DoctorList;
