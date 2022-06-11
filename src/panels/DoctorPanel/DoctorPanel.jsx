import React from "react";
import { useSelector } from "react-redux";
import DoctorsSideNav from "../../Components/DoctorsSideNav/DoctorsSideNav";
import { getDoctorState } from "../../store/actions";

const DoctorPanel = () => {
  const { doctorProfile } = useSelector(getDoctorState);
  return (
    <div>
      <DoctorsSideNav userInfo={doctorProfile} />
    </div>
  );
};

export default DoctorPanel;
