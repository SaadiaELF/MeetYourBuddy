import React, { useState } from "react";
import Card from "./components/Card/Card";
import Dropdown from "./components/Dropdown/Dropdown";
import Button from "./components/Button/Button";
import { Calendar } from "primereact/calendar";
import mentorsData from "./data/mentors";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";

function App() {
  const technologies = ["HTML", "CSS", "Javascript", "React"];
  const [mentors, setMentors] = useState(mentorsData);
  const [dates, setDates] = useState([new Date()]);

  // Handle technologies dropdown select
  const handleTechnologiesChange = (e) => {
    let filteredMentors = mentorsData.filter((mentor) => {
      return mentor.languages.includes(e.target.value);
    });
    setMentors(filteredMentors);
    setDates([new Date()]);
  };

  // Handle mentors dropdown select
  const handleMentorsChange = (e) => {
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
    <>
      <Card>
        {" "}
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
          value={dates}
        />
        <Button />
      </Card>
    </>
  );
}

export default App;
