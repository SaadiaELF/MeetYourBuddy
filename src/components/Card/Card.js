import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import mentorsData from "../../data/mentors";
import Button from "../Button/Button";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Card = () => {
  const technologies = ["HTML", "CSS", "Javascript", "React"];
  const [mentors, setMentors] = useState(mentorsData);
  const [dates, setDates] = useState([new Date()]);

  // Handle technologies dropdown select
  const handleTechnologiesDropdown = (e) => {
    let filteredMentors = mentors.filter((mentor) => {
      return mentor.languages.includes(e.target.value);
    });
    setMentors(filteredMentors);
  };

  // Handle mentors dropdown select
  const handleMentorsDropdown = (e) => {
    // Initialize date to today's date
    setDates([new Date()]);

    // Get availability data
    let mentor = mentors.filter((mentor) => mentor.id === e.target.value);
    let dates = Object.keys(mentor[0].availability);

    // convert dates and filter out dates before todays date
    dates = dates
      .map((date) => {
        let arr = date.split("/");
        return (date = new Date(arr[2], arr[0] - 1, arr[1]));
      })
      .filter((date) => {
        return date > new Date();
      });
    setDates(dates);
    setMentors(mentors);
  };

  return (
    <div className="card">
      <div className="card__heading">
        <div className="card__icon"></div>
        <div className="card__title">MeetYourMentor</div>
      </div>

      <div className="card__body">
        <Dropdown
          onChange={handleTechnologiesDropdown}
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
          minDate={new Date()}
          readOnlyInput
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
