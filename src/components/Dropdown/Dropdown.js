import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label for="technologies">Select a technology:</label>

      <select name="technologies" id="technologies">
        {props.options.map((tech, index) => {
          return (
            <option key={index} value={tech}>
              {tech}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
