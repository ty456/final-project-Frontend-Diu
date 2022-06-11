import React from "react";
import { Box, Tab } from "@mui/material";
import { TabList } from "@mui/lab";
const TabsList = ({ handleChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab
          sx={{
            fontWeight: "bold",
            fontSize: 13,
            p: 3,
            width: 220,
            border: 1,
            borderRadius: 50,
          }}
          label="Upcoming"
          value="1"
        />
        <Tab
          sx={{
            fontWeight: "bold",
            fontSize: 13,
            p: 3,
            width: 220,
            border: 1,
            borderRadius: 50,
          }}
          label="Today"
          value="2"
        />
      </TabList>
    </Box>
  );
};

export default TabsList;
