import React, { useState } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { profileSideNavData } from "../../utils/profile.constants";
import Appoinment from "./Appoinments/Appoinment";
import Dashboard from "./Dashboard/Dashboard";
import ProfileSetting from "./ProfileSetting/ProfileSetting";
import MyPatients from "./MyPatients/MyPatients";
import Invoice from "./Invoice/Invoice";
import ScheduleTiming from "./Schedule Timings/ScheduleTiming";
import { revokeAuthDoctor } from "../../store/doctor/doctor.action";

const DoctorsSideNav = ({ userInfo }) => {
  const history = useHistory();
  const [activeMenu, setActiveMenu] = useState("");
  const handleMenuActive = (slug) => {
    if (slug === history?.location?.pathname) {
      setActiveMenu(slug);
    }
  };

  return (
    <Wrapper>
      <div className=" w-100 text-start p-3 text-white ps-5 fw-bold bg-primary d-flex justify-content-between">
        <div>
          <small>Home </small>
          <h5>Doctor Panel</h5>
        </div>
        <div>
          <Button className="LogoutBtn" onClick={() => revokeAuthDoctor()}>
            Logout
          </Button>
        </div>
      </div>

      <Row className="w-100 mx-auto my-3">
        <Col xs={10} md={3}>
          <Card className="border-0">
            <div className="pt-4  text-center img-rounded">
              <Image
                roundedCircle
                width={130}
                src={
                  userInfo.photoUrl
                    ? userInfo.photoUrl
                    : "/images/Doctor Image.jpg"
                }
                alt="profile-photo"
              />
            </div>
            <Card.Body className="text-center mb-2">
              <Card.Title>{userInfo.firstName + userInfo.lastName}</Card.Title>
              <Card.Text>{userInfo.specialty}</Card.Text>
            </Card.Body>
          </Card>
          <hr />
          <ListGroup
            variant="flush"
            className="text-start bg-white rounded p-3"
          >
            {profileSideNavData?.map((el, i) => {
              return (
                <button
                  key={i}
                  className={`${
                    el?.slug === history?.location?.pathname ||
                    el?.slug === activeMenu
                      ? "activeMenu"
                      : ""
                  } LinkButton `}
                  onClick={() => handleMenuActive(el?.slug)}
                >
                  <Link to={el?.slug}>{el?.value}</Link>
                </button>
              );
            })}
          </ListGroup>
        </Col>

        <Col xs={12} md={9}>
          <Route exact path="/doctor-panel">
            <Dashboard id={userInfo._id} />
          </Route>
          <Route path="/doctor-panel/dashboard">
            <Dashboard id={userInfo._id} />
          </Route>
          <Route path="/doctor-panel/profile-setting">
            <ProfileSetting userInfo={userInfo}></ProfileSetting>
          </Route>

          <Route path="/doctor-panel/appointments">
            <Appoinment id={userInfo._id} />
          </Route>

          <Route path="/doctor-panel/my-patients">
            <MyPatients id={userInfo._id}></MyPatients>
          </Route>

          <Route path="/doctor-panel/schedule-timing">
            <ScheduleTiming></ScheduleTiming>
          </Route>

          <Route path="/doctor-panel/invoice">
            <Invoice></Invoice>
          </Route>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default DoctorsSideNav;

const Wrapper = styled.div`
  .LinkButton {
    background-color: transparent;
    border: none;
    text-align: left;
    margin-bottom: 0;
    margin-top: 3px;

    &:hover {
      background-color: #1a8dff;
      border-radius: 4px;
      a {
        color: #ffffff;
      }
    }
  }
  .activeMenu {
    background-color: #1a8dff;
    border-radius: 4px;
    a {
      color: #ffffff !important;
    }
  }
  .list-group {
    a {
      display: inline-block;
      width: 100%;
      text-decoration: none;
      padding: 0.625rem;
      color: #000000;
    }
  }
  .LogoutBtn {
    background-color: #0015b3;
  }
`;
