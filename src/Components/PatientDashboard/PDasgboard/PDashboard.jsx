import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import AdditionalInfo from "./AdditionalInfo";
import GraphStatus from "./GraphStatus";
import TopInfo from "./TopInfo";

const PDashboard = () => {
  return (
    <div>
      <TopInfo />
      <GraphStatus />
      <AdditionalInfo />
    </div>
  );
};

export default PDashboard;
