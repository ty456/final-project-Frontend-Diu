import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import AdminHeader from "../../organisms/AdminPanel/AdminHeader";
import SideBar from "../../organisms/AdminPanel/SideBar";

const AdminLayout = ({ children }) => {
  return (
    <Wrapper>
      <AdminHeader />
      <div className="d-flex h-100">
        <div>
          <SideBar />
        </div>
        <div className="w-100">{children}</div>
      </div>
    </Wrapper>
  );
};

export default AdminLayout;

const Wrapper = styled.div`
  height: calc(100vh - 55px);
`;
