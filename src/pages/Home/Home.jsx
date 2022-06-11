import React, { useEffect, useState } from "react";
import Headers from "../Shared/Headers/Headers";
// import HeadersDropdown from '../Shared/Headers/HeadersDropdown';

import Banner from "./Banner/Banner";
import BrowseBySpecilities from "./BrowseBySpecilities/BrowseBySpecilities";
import LookingFor from "./LookingFor/LookingFor";
import MainService from "./MainService/MainService";
import Specialities from "./Specialities/Specialities";
import AvailablrFeature from "./AvailableFeature/AvailableFeature";
import BestDoctor from "./BestDoctor/BestDoctor";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "../Shared/Footer/Footer";
import { useHistory } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
      <MainService />
      <Specialities />
      <LookingFor />
      <BrowseBySpecilities />
      <BestDoctor />
      <AvailablrFeature />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
