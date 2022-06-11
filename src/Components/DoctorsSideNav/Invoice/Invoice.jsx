import React from "react";
import { Col, Row } from "react-bootstrap";

const InvoiceData = [
  {
    InvoiceID: 1,
    InvoiceNo: "#P01247",
    InvoiceDate: "11 NOV 2022",
    InvoiceTime: "10.10 AM",
    InvoiceType: "General",
    InvoiceAmount: "$150",
  },
  {
    InvoiceID: 2,
    InvoiceNo: "#Q4510",
    InvoiceDate: "12 NOV 2022",
    InvoiceTime: "10.30 AM",
    InvoiceType: "General",
    InvoiceAmount: "$160",
  },
  {
    InvoiceID: 3,
    InvoiceNo: "#P44247",
    InvoiceDate: "11 NOV 2022",
    InvoiceTime: "11.10 AM",
    InvoiceType: "General",
    InvoiceAmount: "$250",
  },
];
const Invoice = () => {
  return (
    <div>
      <Row className="fw-bold py-4 border">
        <Col md={4}>Incoice No</Col>
        <Col md={2}>Appt Date</Col>
        <Col md={2}>Type</Col>
        <Col md={2}>Paid Amount</Col>
      </Row>
      {InvoiceData.map((el, i) => {
        return (
          <div>
            <Row className="p-2 border">
              <Col md={4} key={i}>
                <div>
                  <p>{el?.InvoiceNo}</p>
                </div>
              </Col>
              <Col md={2}>
                <div>
                  <p>{el?.InvoiceDate}</p>
                  <p>{el?.InvoiceTime}</p>
                  
                </div>
              </Col>
              <Col md={2}>
              <p>{el?.InvoiceType}</p>
              </Col>
              <Col md={2}> {el?.InvoiceAmount} </Col>
              <Col md={2}>
                <div className="d-flex">
                  <p className="bg-info px-4 py-2 m-2">View</p>
                  <p className="bg-primary px-4 py-2 m-2 text-white">Print</p>
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default Invoice;
