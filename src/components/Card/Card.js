import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import mentors from "../../data/mentors";
import Button from "../Button/Button";
import "react-calendar/dist/Calendar.css";

const Card = () => {
  const technologies = ["HTML", "CSS", "Javascript", "React"];
  // const [date, setDate] = useState(new Date());
  // const [selected, setSelected] = useState("");

  // const handleMentorsDropdown = (e) => {
  //   console.log("test", e.target.value);
  //   let mentor = mentors.filter((mentor) => mentor.id === e.target.value);
  //   let dates = Object.keys(mentor[0].availability);
  //   let datesArr = dates.map((date) => {
  //     let arr = date.split("/");
  //     return (date = new Date(
  //       parseInt(arr[2]),
  //       parseInt(arr[0]) - 1,
  //       parseInt(arr[1])
  //     ));
  //   });
  //   console.log(datesArr, new Date());
  //   setDate(new Date(2022, 10, 19), new Date(2022, 10, 22));
  // };
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
          // onChange={handleMentorsDropdown}
          name="mentors"
          option="mentor"
          options={mentors}
        />
        {/* <Calendar onChange={setDate} value={date} /> */}
        <Button />
      </div>
    </div>
  );
};

export default Card;
