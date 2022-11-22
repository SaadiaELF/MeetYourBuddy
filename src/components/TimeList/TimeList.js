import React from "react";
import Button from "../Button/Button";
import "./TimeList.css";

const TimeList = (props) => {
  return (
    <>
      <p className="card__subtitle">{props.date}</p>
      <div className="time__container">
        {props.time
          ? props.time.map((slot, index) => {
              return (
                <Button
                  key={index}
                  variant="secondary"
                  text={slot}
                  handleClick={props.handleClick}
                />
              );
            })
          : ""}
      </div>
    </>
  );
};

export default TimeList;
