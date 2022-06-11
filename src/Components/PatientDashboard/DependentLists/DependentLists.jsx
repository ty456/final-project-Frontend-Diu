import React, { useState } from "react";
import { Button, Card, Image, Table } from "react-bootstrap";
import AddDependentModal from "./AddDependentModal";
import ListTable from "./ListTable";

const DependentLists = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <Card className="p-3">
      <div className="d-flex justify-content-between align-items-center my-3">
        <h4>Dependent</h4>
        <Button onClick={handleShow}>Add Dependent</Button>
      </div>
      <ListTable />
      <AddDependentModal show={show} setShow={setShow} />
    </Card>
  );
};

export default DependentLists;
