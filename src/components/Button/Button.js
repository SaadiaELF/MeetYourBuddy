import React from "react";

const Button = (props) => {
  return <button className={"btn btn--" + props.variant} onClick={props.handleClick}>{props.text}</button>;
};

export default Button;
