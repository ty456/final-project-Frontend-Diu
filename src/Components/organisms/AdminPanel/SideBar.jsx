import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem>
          Add Pharmacy
          <Link to="/admin/add-pharmacy" className="d-block m-0 w-100 p-2 " />
        </MenuItem>
        <MenuItem>
          Doctor List
          <Link to="/admin/doctor-list" className="d-block m-0 w-100 p-2 " />
        </MenuItem>
        {/* <SubMenu title="Components">
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu> */}
      </Menu>
    </ProSidebar>
  );
};

export default SideBar;
