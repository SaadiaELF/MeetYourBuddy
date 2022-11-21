import React from "react";
import Button from "../Button/Button";

const TimeList = (props) => {
  return (
    <>
      <p className="card__subtitle">{props.date}</p>
      <div className="time__options">
        <Button variant="secondary" text="10:00" />
      </div>
    </>
  );
};

export default TimeList;
