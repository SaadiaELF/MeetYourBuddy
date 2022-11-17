import React from "react";
import Dropdown from "../Dropdown/Dropdown";
const technologies = ["HTML", "CSS", "Javascript", "React"];

const Card = () => {
  return (
    <div className="card">
      <div className="card__heading">
        <div className="card__icon"></div>
        <div className="card__title">MeetYourMentor</div>
      </div>

      <div className="card__body">
        <Dropdown options={technologies} />
      </div>
    </div>
  );
};

export default Card;
