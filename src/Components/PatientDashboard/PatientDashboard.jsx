import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { revokeAuthUser } from "../../store/user/user.action";
import DashboardRoutes from "./DashboardRoutes";
import { useSelector } from "react-redux";
import { getUserState } from "../../store/actions";
const PatientDashboard = () => {
  const history = useHistory();

  const { profile } = useSelector(getUserState);

  const handleLogout = async () => {
    await revokeAuthUser();
    history.push("/");
  };

  return (
    <Row className="w-100 p-4 bg-light">
      <Col md={3}>
        <Card className="p-3">
          <div
            style={{
              width: "150px",
              borderRadius: "50rem",
              overflow: "hidden",
              border: "1px solid #0000003e",
            }}
            className="mx-auto"
          >
            <Card.Img
              src={profile?.photoUrl ? profile?.photoUrl : "/images/user.jpg"}
              style={{ width: "150px" }}
            />
          </div>
          <InfoWrapper className="text-center my-2">
            <Card.Title>{profile?.firstName + profile?.lastName}</Card.Title>
            <Card.Text className="UserInfoText">
              {profile?.dateOfBirth}, {profile.age} years
            </Card.Text>
            {profile.city && (
              <Card.Text className="UserInfoText">
                {profile.city}, {profile.country}
              </Card.Text>
            )}
          </InfoWrapper>
        </Card>
        <LinksWrapper className="mt-3">
          <Link to="/profile-dashboard">Dashboard</Link>
          <Link to="/profile-dashboard/favorites">Favorites</Link>
          <Link to="/profile-dashboard/dependent">Dependent</Link>
          <Link>Message</Link>
          <Link to="/profile-dashboard/accounts">Accounts</Link>
          <Link to="/profile-dashboard/orders">Orders</Link>
          {/* <Link>Add Medical Records</Link>
          <Link>Medical Details</Link> */}
          <Link to="/profile-dashboard/profile-setting">Profile Setting</Link>
          <Link to="/profile-dashboard/change-password">Change Password</Link>
          <Link onClick={handleLogout}>Logout</Link>
        </LinksWrapper>
      </Col>
      <Col md={9}>
        <DashboardRoutes />
      </Col>
    </Row>
  );
};

export default PatientDashboard;

const InfoWrapper = styled.div`
  .UserInfoText {
    font-size: 0.875rem;
    color: #868686;
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    border: 1px solid #95959548;
    /* border-bottom: none; */
    padding: 0.825rem;
    text-decoration: none;
    background-color: #ffffff;
    color: #575757;
    &:hover {
      background-color: #95959535;
    }
  }
`;
