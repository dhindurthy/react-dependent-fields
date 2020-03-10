import React from "react";
import "./styles.css";

function Checkbox(props) {
  return (
    <React.Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        autoComplete="off"
        id={props.id}
        onChange={props.onInputChange}
        checked={props.checked}
        type="checkbox"
        onKeyDown={props.onInputKeyDown}
      />
    </React.Fragment>
  );
}
export default Checkbox;
