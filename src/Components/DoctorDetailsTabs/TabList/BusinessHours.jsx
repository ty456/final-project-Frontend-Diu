import React from "react";

const BusinessHours = () => {
  return (
    <div className="border rounded shadow-sm r  w-75 m-auto p-4">
      <div className="d-flex border-bottom">
        <div className="col-6 text-start ">
          <h4>Today</h4>
          <p>7 June 2022</p>
        </div>
        <div className="col-6 text-end">
          <h6 className="text-info">Open Now</h6>
          <p>07.00 AM - 08.00 PM</p>
        </div>
      </div>

      <div className="d-flex mt-2">
        <div className="col-6 text-start ">
          <h6>Monday</h6>
        </div>
        <div className="col-6 text-end ">
          <p>07.00 AM - 08.00 PM</p>
        </div>
      </div>

      <div className="d-flex mt-2">
        <div className="col-6 text-start ">
          <h6>Thursday</h6>
        </div>
        <div className="col-6 text-end ">
          <p>07.00 AM - 08.00 PM</p>
        </div>
      </div>

      <div className="d-flex mt-2">
        <div className="col-6 text-start ">
          <h6>Wednesday</h6>
        </div>
        <div className="col-6 text-end ">
          <p>07.00 AM - 08.00 PM</p>
        </div>
      </div>

      <div className="d-flex mt-2">
        <div className="col-6 text-start ">
          <h6>Tuesday</h6>
        </div>
        <div className="col-6 text-end ">
          <p>07.00 AM - 08.00 PM</p>
        </div>
      </div>

      <div className="d-flex mt-2">
        <div className="col-6 text-start ">
          <h6>Monday</h6>
        </div>
        <div className="col-6 text-end ">
          <p>07.00 AM - 08.00 PM</p>
        </div>
      </div>

      <div className="d-flex mt-2">
        <div className="col-6 text-start ">
          <h6>Monday</h6>
        </div>
        <div className="col-6 text-end ">
          <p>07.00 AM - 08.00 PM</p>
        </div>
      </div>

      <div className="d-flex mt-2">
        <div className="col-6 text-start ">
          <h6>Sunday</h6>
        </div>
        <div className="col-6 text-end text-danger fw-bold">
          <p>CLOSED</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
