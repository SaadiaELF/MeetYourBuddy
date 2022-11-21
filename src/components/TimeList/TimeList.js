import React from "react";
import moment from "moment";
import Button from "../Button/Button";

const TimeList = (props) => {
  return (
    <>
      <p className="card__subtitle">
        {moment(props.date).format("dddd, MMMM Do YYYY")}
      </p>
      <div className="time__container">
        {props.time
          ? props.time.map((slot, index) => {
              return <Button key={index} variant="secondary" text={slot} />;
            })
          : ""}
      </div>
    </>
  );
};

export default TimeList;
