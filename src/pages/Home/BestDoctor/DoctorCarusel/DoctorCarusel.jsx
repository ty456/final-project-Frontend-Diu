import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import RoomIcon from "@material-ui/icons/Room";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";

import "./DoctorCarusel.css";

import dortorimg from "../../../../images/doctor-03.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import required modules
import { FreeMode, Navigation } from "swiper";
import { NavLink } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import DoctorCard from "./DoctorCard";
import { doctorApi } from "../../../../libs/api/doctorApi";

const doctorinfo = [
  {
    name: "abul",
    id: "1",
    expert: "medicine",
  },
  {
    name: "abul",
    id: "1",
    expert: "medicine",
  },
  {
    name: "abul",
    id: "1",
    expert: "medicine",
  },
  {
    name: "abul",
    id: "1",
    expert: "medicine",
  },
  {
    name: "abul",
    id: "1",
    expert: "medicine",
  },
  {
    name: "abul",
    id: "1",
    expert: "medicine",
  },
  {
    name: "abul",
    id: "1",
    expert: "medicine",
  },
  {
    name: "abul",
    id: "1",
    expert: "medicine",
  },
];

export default function DoctorCarusel({ doctorData }) {
  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={10}
        freeMode={false}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {doctorData.map((data, idx) => {
          return (
            <SwiperSlide key={idx}>
              <DoctorCard data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>{" "}
    </>
  );
}
