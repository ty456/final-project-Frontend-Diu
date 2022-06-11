import React from "react";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import GradeIcon from "@mui/icons-material/Grade";
import styled from "styled-components";

const Reviews = ({ doctorData }) => {
  return (
    <div>
      <div>
        <div className="d-flex p-4 border-bottom mt-4">
          <div className="col-4">
            <h3>Richard Wilson</h3>
            <p>Reviewed 2 Days ago</p>
            <h6 className="text-primary ps-3">
              <ThumbUpIcon /> I recommend the doctor.
            </h6>
            <div className="d-flex">
              <div className="text-warning">
                <GradeIcon />
                <GradeIcon />
                <GradeIcon />
                <GradeIcon />
              </div>
              <div style={{ Color: "#E0E0E0" }}>
                <GradeIcon />
              </div>
            </div>
          </div>
          <div className="col-8 ps-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              quam iure maiores iste sint quibusdam dolores dicta qui commodi
              perspiciatis ipsum, blanditiis magnam ut tenetur sed velit
              nostrum! Officiis, asperiores.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="d-flex p-4 border-bottom mt-4">
          <div className="col-4">
            <h3>Richard Wilson</h3>
            <p>Reviewed 2 Days ago</p>
            <h6 className="text-primary ps-3">
              <ThumbUpIcon /> I recommend the doctor.
            </h6>
            <div className="d-flex">
              <div className="text-warning">
                <GradeIcon />
                <GradeIcon />
                <GradeIcon />
                <GradeIcon />
              </div>
              <div style={{ Color: "#E0E0E0" }}>
                <GradeIcon />
              </div>
            </div>
          </div>

          <div className="col-8 ps-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              quam iure maiores iste sint quibusdam dolores dicta qui commodi
              perspiciatis ipsum, blanditiis magnam ut tenetur sed velit
              nostrum! Officiis, asperiores.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="d-flex p-4 border-bottom mt-4">
          <div className="col-4">
            <h3>Richard Wilson</h3>
            <p>Reviewed 2 Days ago</p>
            <h6 className="text-primary ps-3">
              <ThumbUpIcon /> I recommend the doctor.
            </h6>
            <div className="d-flex">
              <div className="text-warning">
                <GradeIcon />
                <GradeIcon />
                <GradeIcon />
                <GradeIcon />
              </div>
              <div style={{ Color: "#E0E0E0" }}>
                <GradeIcon />
              </div>
            </div>
          </div>

          <div className="col-8 ps-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              quam iure maiores iste sint quibusdam dolores dicta qui commodi
              perspiciatis ipsum, blanditiis magnam ut tenetur sed velit
              nostrum! Officiis, asperiores.
            </p>
          </div>
        </div>
      </div>

      <WriteReviewWrapper className="my-4">
        <p>
          Write a review <b>{doctorData?.firstName + doctorData?.lastName}</b>
        </p>
      </WriteReviewWrapper>
    </div>
  );
};

export default Reviews;

const WriteReviewWrapper = styled.div``;
