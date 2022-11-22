import React from "react";
import "./Message.css";

const Message = (props) => {
  return (
    <p className="confirm-msg">
      Do you want to confirm this time slot: {props.day} at {props.time} ?
    </p>
  );
};

export default Message;
