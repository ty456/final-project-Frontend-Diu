import React from "react";

import { Switch, Route } from "react-router-dom";

import DoctorDetails from "./Components/DoctorDetails/DoctorDetails";
import Headers from "./pages/Shared/Headers/Headers";
import DoctorsSideNav from "./Components/DoctorsSideNav/DoctorsSideNav";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Auth";
import PrivateRoute from "./libs/PrivateRoute";
import Register from "./pages/Auth/Register/Register";
import PatientDashboard from "./Components/PatientDashboard/PatientDashboard";
import Doctors from "./pages/Doctors/Doctors";
import DoctorBooking from "./pages/Doctors/DoctorBooking";
import PatientCheckout from "./pages/Patient/PatientCheckout";
import BookingSuccess from "./pages/Booking/BookingSuccess";
import AdminView from "./pages/AdminView/AdminView";
import AdminPrivateRoute from "./libs/AdminPrivateRoute";
import AdminLogin from "./pages/AdminView/AdminLogin";
import AdminLayout from "./Components/templates/Layouts/AdminLayout";
import DoctorPrivateRoute from "./libs/DoctorPrivateRoute";
import DoctorPanel from "./panels/DoctorPanel/DoctorPanel";
import { useSelector } from "react-redux";
import { getAdminState, getDoctorState } from "./store/actions";
import CommonAlert from "./Components/templates/common/CommonAlert";
import Chat from "./ChatAllThings/Chat/Chat";
import Join from "./ChatAllThings/Join/Join";
import Blogs from "./pages/Blogs";
import Pharmacy from "./Components/Pharmacy/Pharmacy";

const Routes = () => {
  const { doctorProfile } = useSelector(getDoctorState);
  const { adminProfile } = useSelector(getAdminState);
  console.log(doctorProfile);
  return (
    <>
      <Switch>
        <Route exact path="/">
          {doctorProfile?.userType && (
            <CommonAlert
              loggedInAs={doctorProfile?.userType}
              goToPanel="Doctor Panel"
              slug="/doctor-panel"
            />
          )}
          {adminProfile?.userType && (
            <CommonAlert
              loggedInAs={adminProfile?.userType}
              goToPanel="Admin Panel"
              slug="/admin"
            />
          )}
          <Headers></Headers>
          <Home></Home>
        </Route>
        <Route path="/home">
          <Headers></Headers>
          <Home></Home>
        </Route>
        <Route path="/login">
          <Headers></Headers>
          <Login />
        </Route>
        <Route path="/register">
          <Headers></Headers>
          <Register />
        </Route>

        <Route exact path="/join">
          <Join />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>

        <PrivateRoute path="/profile-dashboard">
          <Headers></Headers>
          <PatientDashboard />
        </PrivateRoute>
        <Route exact path="/doctors">
          <Headers></Headers>
          <Doctors />
        </Route>
        <Route path="/pharmacy">
          <Headers></Headers>
          <Pharmacy />
        </Route>
        <Route path="/blogs">
          <Headers></Headers>
          <Blogs />
        </Route>
        <Route path="/all-labs">
          <Headers></Headers>
          <h5>Labs Coming soon</h5>
        </Route>
        <Route path="/doctordetails/:id">
          <Headers></Headers>
          <DoctorDetails />
        </Route>
        <PrivateRoute exact path="/doctor/booking/:id">
          <Headers></Headers>
          <DoctorBooking />
        </PrivateRoute>
        <Route path="/booking-success">
          <Headers></Headers>
          <BookingSuccess />
        </Route>
        <Route path="/doctor/booking/checkout">
          <Headers></Headers>
          <PatientCheckout />
        </Route>
        {/* <Route path="/patients">
          <Headers></Headers>
          <h1>Patients</h1>
        </Route> */}
        {/* <PrivateRoute path="/doctorsidenav">
          <Headers></Headers>
         
        </PrivateRoute> */}
      </Switch>
      {/* admin login */}
      <Switch>
        <AdminPrivateRoute path="/admin">
          <AdminLayout>
            <AdminView />
          </AdminLayout>
        </AdminPrivateRoute>
        <Route exact path="/admin-login">
          <AdminLogin />
        </Route>
        {/* <AdminPrivateRoute path="/admin">
          <AdminLayout>
            <AdminView />
          </AdminLayout>
        </AdminPrivateRoute> */}
      </Switch>
      {/* doctor login */}
      <Switch>
        <DoctorPrivateRoute path="/doctor-panel">
          <DoctorPanel />
        </DoctorPrivateRoute>
      </Switch>
    </>
  );
};

export default Routes;
