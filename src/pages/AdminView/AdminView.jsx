import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import AddPharmacy from "./AddPharmacy";
import AddDoctor from "./AddPharmacy";
import DoctorList from "./DoctorList";

const AdminView = () => {
  return (
    <>
      <Route exact path="/admin">
        <AddPharmacy />
      </Route>
      <Route path="/admin/add-pharmacy">
        <AddDoctor />
      </Route>
      <Route path="/admin/doctor-list">
        <DoctorList />
      </Route>
    </>
  );
};

export default AdminView;
