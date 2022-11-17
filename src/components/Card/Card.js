import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import mentors from "../../data/mentors";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Card = () => {
  const technologies = ["HTML", "CSS", "Javascript", "React"];
  const [date, setDate] = useState(new Date());

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
        <Dropdown name="mentors" option="mentor" options={mentors} />
      </div>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default Card;
