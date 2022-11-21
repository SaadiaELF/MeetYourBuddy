import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__heading">
        <div className="card__icon"></div>
        <div className="card__title">MeetYourMentor</div>
      </div>
      <div className="card__body">{props.children}</div>
    </div>
  );
};

export default Card;
