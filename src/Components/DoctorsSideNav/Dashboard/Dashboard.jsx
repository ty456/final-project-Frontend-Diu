import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "./ProgressBar";
import TabsList from "./TabsList";
import TabContent from "./TabContent";
import { Card } from "react-bootstrap";
import { doctorApi } from "../../../libs/api/doctorApi";

const Dashboard = ({ id }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    getPatientIds();
  }, [id]);
  const getPatientIds = async () => {
    try {
      const { success, data, message } = await doctorApi.getPatientIdByDoctorId(
        id
      );
      if (success) {
        setPatientData(data);
      } else {
        alert("something went wrong!");
      }
    } catch (error) {}
  };

  return (
    <Card className="p-4">
      <ProgressBar patientData={patientData} />
      <div className="mt-5 mb-3">
        <h3>Patient Appoinment</h3>
      </div>
      <div>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            backgroundColor: "white",
          }}
        >
          <TabContext value={value}>
            <TabsList handleChange={handleChange} />
            <TabPanel sx={{ textAlign: "left" }} value="1">
              <TabContent />
            </TabPanel>
            <TabPanel sx={{ textAlign: "left" }} value="2">
              <TabContent />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </Card>
  );
};

export default Dashboard;
