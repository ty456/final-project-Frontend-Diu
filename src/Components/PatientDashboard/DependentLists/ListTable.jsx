import React from "react";
import { Image, Table } from "react-bootstrap";

const ListTable = () => {
  return (
    <Table bordered hover responsive>
      <thead>
        <tr>
          <th>Dependent</th>
          <th>Relationship</th>
          <th>Gender</th>
          <th>Number</th>
          <th>Blood Group</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="d-flex">
              <Image
                src="/images/user.jpg"
                width={35}
                className="me-2"
                roundedCircle
              />
              <h6>Christopher</h6>
            </div>
          </td>
          <td>son</td>
          <td>Male</td>
          <td>303-297-6170</td>
          <td>AB+</td>
          <td>Coming</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ListTable;
