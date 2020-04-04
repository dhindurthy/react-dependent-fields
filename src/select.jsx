import React from "react";

function Select(props) {
  return (
    <React.Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <select onChange={props.onChange} value={props.value}>
        <option disabled selected value="">
          Select
        </option>
        {props.optionData.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}

export default Select;
