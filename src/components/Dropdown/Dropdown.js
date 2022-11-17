import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label htmlFor={props.name}>Select a {props.option}:</label>

      <select name={props.name} id={props.name}>
        <option key="-1" value="-1">
          Select a {props.option}
        </option>
        {props.options.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
