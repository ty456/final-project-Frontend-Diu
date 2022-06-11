import React, { useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import Appointments from "./Appointments";
import Prescriptions from "./Prescriptions";

const AdditionalInfo = () => {
  const [key, setKey] = useState("Appointments");
  return (
    <Card className="mt-3 p-3">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Appointments" title="Appointments">
          <Appointments />
        </Tab>
        <Tab eventKey="Prescriptions" title="Prescriptions">
          <Prescriptions />
        </Tab>
        <Tab eventKey="medical Records" title="Medical Records">
          <h6>Okay 3</h6>
        </Tab>
        <Tab eventKey="billing" title="Billing">
          <h6>Okay 4</h6>
        </Tab>
      </Tabs>
    </Card>
  );
};

export default AdditionalInfo;
