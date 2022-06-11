import React, { useEffect, useRef, useState } from "react";

import { get30DatesFromToday } from "../../utils/helpers";
import { CalenderView, SingleDate } from "./style";
import dateFormat from "dateformat";
import styled from "styled-components";

const BookingDetails = ({
  setBookingDetails,
  setSelected,
  slots,
  selected,
  bookingDetails,
}) => {
  const dates = get30DatesFromToday();
  const timeRef = useRef();
  useEffect(() => {
    if (slots?.length > 0) setSelected((x) => ({ ...x, slot: slots[0] }));
    const matchedIdx = dates.findIndex((e) => e === selected.date);
    if (slots?.length === 0) {
      timeRef.current = setTimeout(() => {
        setSelected((x) => ({ ...x, date: dates[matchedIdx + 1] }));
        clearTimeout(timeRef.current);
      }, 200);
    }
  }, [selected.date]);
  // console.log(selected.date);
  useEffect(() => {
    setBookingDetails((prevState) => ({
      ...prevState,
      appointmentDate: new Date(selected.date).toISOString(),
    }));
  }, [selected.date, setBookingDetails]);

  const handleSlotChange = (e) => {
    setBookingDetails((prevState) => ({
      ...prevState,
      timeSlot: e.target.innerText,
    }));
  };

  return (
    <div>
      <CalenderView>
        {dates?.length > 0 &&
          dates.map((el, i) => (
            <SingleDate
              key={i}
              onClick={() => setSelected((x) => ({ ...x, date: el }))}
              className={el === selected.date ? "selected" : ""}
            >
              <span className="Week">{dateFormat(el, "ddd")}</span>
              <span className="Date">{dateFormat(el, "dd")}</span>
              <span className="Month">{dateFormat(el, "mmm")}</span>
            </SingleDate>
          ))}
      </CalenderView>
      <div className="border p-3 rounded bg-light">
        <h6>Availability</h6>
        <p>Please select Your Slot</p>
        <Availability>
          {slots.length > 0 &&
            slots.map((date, idx) => {
              return (
                <AvailableCard
                  className={bookingDetails.timeSlot === date ? "active" : ""}
                  onClick={handleSlotChange}
                  key={idx}
                >
                  <p>{date}</p>
                </AvailableCard>
              );
            })}
        </Availability>
      </div>
    </div>
  );
};

export default BookingDetails;

const Availability = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  margin: 1rem 0;
  .active {
    border: 1px solid red !important;
    background-color: #ff000010;
  }
`;

const AvailableCard = styled.div`
  border: 1px solid #969696;
  padding: 1rem;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
`;
