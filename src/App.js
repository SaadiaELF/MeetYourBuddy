import React, { useState } from "react";
import Card from "./components/Card/Card";
import Dropdown from "./components/Dropdown/Dropdown";
import Button from "./components/Button/Button";
import TimeList from "./components/TimeList/TimeList";
import moment from "moment";
import mentorsData from "./data/mentors";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";

function App() {
  const technologies = ["HTML", "CSS", "Javascript", "React"];
  const [mentors, setMentors] = useState(mentorsData);
  const [mentor, setMentor] = useState(mentorsData[0]);
  const [dates, setDates] = useState([new Date()]);
  const [date, setDate] = useState(moment(new Date()).format("MM/DD/YYYY"));
  const [time, setTime] = useState(["10:00", "12:30", "18:15"]);

  // Handle technologies dropdown select
  function handleTechnologiesChange(e) {
    let filteredMentors = mentorsData.filter((mentor) => {
      return mentor.languages.includes(e.target.value);
    });
    setMentors(filteredMentors);
    setDates([new Date()]);
  }

  // Handle mentors dropdown select
  function handleMentorsChange(e) {
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

    // Setting state variable
    setDates(dates);
    setMentors(mentors);
    setMentor(mentor);
  }

  // Handle Select date
  function handleSelectDate(e) {
    setDate(e.value.toLocaleDateString());
    setTime(mentor.availability[date]);
  }

  // Handle reset button click
  function handleResetBtnClick() {
    setDates([new Date()]);
    setMentors(mentorsData);
  }

  return (
    <>
      <Card>
        <Dropdown
          onChange={handleTechnologiesChange}
          name="technologies"
          option="technology"
          options={technologies}
        />
        <Dropdown
          onChange={handleMentorsChange}
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
          onSelect={handleSelectDate}
          value={dates}
        />
        <div className="btn-container">
          <Button variant="primary" text="Confirm" />
          <Button
            variant="secondary"
            text="Reset"
            handleClick={handleResetBtnClick}
          />
        </div>
      </Card>
      <Card>
        <TimeList date={date} time={time} />
      </Card>
    </>
  );
}

export default App;
