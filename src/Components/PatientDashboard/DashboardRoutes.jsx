import React from "react";
import { Card } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import DependentLists from "./DependentLists/DependentLists";
import DoctorLists from "./FavoriteDoctors/DoctorLists";
import PDashboard from "./PDasgboard/PDashboard";
import Accounts from "./Accounts/Accounts";
import Orders from "./AllOrders/Orders";
import PatientProfileSetting from "./PatientProfileSetting/PatientProfileSetting";
import ChangePassword from "./ChangePassword/ChangePassword";

const DashboardRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/profile-dashboard">
          <PDashboard />
        </Route>
        <Route path="/profile-dashboard/favorites">
          <DoctorLists />
        </Route>
        <Route exact path="/profile-dashboard/dependent">
          <DependentLists />
        </Route>
        <Route exact path="/profile-dashboard/accounts">
          <Accounts />
        </Route>
        <Route exact path="/profile-dashboard/orders">
          <Orders />
        </Route>
        <Route exact path="/profile-dashboard/profile-setting">
          <PatientProfileSetting />
        </Route>
        <Route exact path="/profile-dashboard/change-password">
          <ChangePassword />
        </Route>
      </Switch>
    </div>
  );
};

export default DashboardRoutes;
