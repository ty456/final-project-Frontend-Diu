import React from "react";
import { Card, Table } from "react-bootstrap";

const Orders = () => {
  return (
    <Card className="p-3">
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Order Id</th>
            <th>Pharmacy Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Payment Getaway</th>
            <th>Status</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>OD1236547890</td>
            <td>Medlife Medical</td>
            <td>2</td>
            <td>$150</td>
            <td>Stripe</td>
            <td>Order Placed</td>
            <td>
              <p>11 Nov 2019</p>
              <p>10.00 AM</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default Orders;
