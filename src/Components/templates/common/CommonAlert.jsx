import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { getAdminState, getDoctorState } from "../../../store/actions";

const CommonAlert = ({ loggedInAs, goToPanel, slug }) => {
  //   const router = useHistory();
  // const {profile} = useSelector(getDoctorState);
  // const {profile} = useSelector(getAdminState);
  return (
    <Wrapper>
      <h6>Currently You Are Logged In As {loggedInAs}</h6>
      <Link to={slug}>Go To {goToPanel}</Link>
    </Wrapper>
  );
};

export default CommonAlert;
const Wrapper = styled.div`
  background-color: #1e284e;
  margin: 7px;
  border-radius: 3px;
  color: #c9e4ff;
  padding: 0.875rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  a {
    font-weight: 600;
    text-decoration: underline;
    color: #c9e4ff;
  }
`;
