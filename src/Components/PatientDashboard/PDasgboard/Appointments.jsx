import React from "react";
import { Image, Table } from "react-bootstrap";

const Appointments = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Appt Date</th>
            <th>Booking Date</th>
            <th>Amount</th>
            <th>Follow Up</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <Image src="/images/user.jpg" width={40} roundedCircle />
                <div className="ms-2">
                  <p>Dr. Ruby Perry</p>
                  <p>Dental</p>
                </div>
              </div>
            </td>
            <td>
              <p>14 Nov 2019</p>
              <p className="text-primary">10.00 AM</p>
            </td>
            <td>
              <div>
                <p className="mb-0 mt-2 pb-0">12 Nov 2019</p>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <p className="mb-0 mt-2 pb-0">$160</p>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <p className="mb-0 mt-2 pb-0">16 Nov 2019</p>
              </div>
            </td>
            <td>
              <p className="mb-0 mt-2 pb-0">confirm</p>
            </td>
            <td>
              <p className="mb-0 mt-2 pb-0">confirm</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Appointments;
