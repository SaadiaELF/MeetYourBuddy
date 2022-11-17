import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import mentors from "../../data/mentors";

const technologies = ["HTML", "CSS", "Javascript", "React"];
const mentorsNames = mentors.map((mentor) => {
  return `${mentor.firstName} ${mentor.lastName}`;
});

const Card = () => {
  return (
    <div className="card">
      <div className="card__heading">
        <div className="card__icon"></div>
        <div className="card__title">MeetYourMentor</div>
      </div>

      <div className="card__body">
        <Dropdown
          name="technologies"
          option="technology"
          options={technologies}
        />
        <Dropdown name="mentors" option="mentor" options={mentorsNames} />
      </div>
    </div>
  );
};

export default Card;
