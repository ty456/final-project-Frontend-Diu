import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Overview from "./TabList/Overview";
import Locations from "./TabList/Locations";
import Reviews from "./TabList/Reviews";
import BusinessHours from "./TabList/BusinessHours";

export default function DoctorsMainTabs({ doctorData }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", backgroundColor: "white" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab
              sx={{ fontWeight: "bold", fontSize: 18, p: 3, width: 320 }}
              label="Overview"
              value="1"
            />
            <Tab
              sx={{ fontWeight: "bold", fontSize: 18, p: 3, width: 320 }}
              label="Locations"
              value="2"
            />
            <Tab
              sx={{ fontWeight: "bold", fontSize: 18, p: 3, width: 320 }}
              label="Reviews"
              value="3"
            />
            <Tab
              sx={{ fontWeight: "bold", fontSize: 18, p: 3, width: 320 }}
              label="Business Hours"
              value="4"
            />
          </TabList>
        </Box>
        <TabPanel sx={{ textAlign: "left" }} value="1">
          {" "}
          <Overview />{" "}
        </TabPanel>
        <TabPanel sx={{ textAlign: "left" }} value="2">
          {" "}
          <Locations />{" "}
        </TabPanel>
        <TabPanel sx={{ textAlign: "left" }} value="3">
          <Reviews doctorData={doctorData} />{" "}
        </TabPanel>
        <TabPanel value="4">
          {" "}
          <BusinessHours />{" "}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
