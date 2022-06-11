import React from "react";
import { Image, Table } from "react-bootstrap";

const Prescriptions = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Created By</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>14 Nov 2019</p>
          </td>
          <td>
            <div>
              <p className="mb-0 mt-2 pb-0">Prescription 1</p>
            </div>
          </td>

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
            <p className="mb-0 mt-2 pb-0">confirm</p>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Prescriptions;
