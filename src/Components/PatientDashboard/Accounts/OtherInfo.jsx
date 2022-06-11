import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

const OtherInfo = () => {
  const [key, setKey] = useState("Accounts");

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Accounts" title="Accounts">
          <p>No data found!</p>
        </Tab>
        <Tab eventKey="request" title="Doctor Request">
          <p>No data found!</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default OtherInfo;
