import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import mentors from "../../data/mentors";
import Button from "../Button/Button";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Card = () => {
  const technologies = ["HTML", "CSS", "Javascript", "React"];
  const [dates, setDates] = useState([new Date()]);

  const handleMentorsDropdown = (e) => {
    let mentor = mentors.filter((mentor) => mentor.id === e.target.value);
    let dates = Object.keys(mentor[0].availability);
    dates = dates.map((date) => {
      let arr = date.split("/");
      return (date = new Date(arr[2], arr[0] - 1, arr[1]));
    });
    setDates(dates);
  };

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
        <Dropdown
          onChange={handleMentorsDropdown}
          name="mentors"
          option="mentor"
          options={mentors}
        />
        <Calendar
          selectionMode="multiple"
          inline
          onChange={setDates}
          value={dates}
        />
        <Button />
      </div>
    </div>
  );
};

export default Card;
