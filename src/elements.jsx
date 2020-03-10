import React from "react";
import Input from "./input.jsx";
import Checkbox from "./checkbox.jsx";
import Select from "./select.jsx";

class Elements extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.inputChange = this.inputChange.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
  }
  componentDidMount() {}
  inputChange(e) {
    //show hide children
  }
  onInputKeyDown(event) {}
  changeSelect(field, event) {
    //show hide respective children for the appropriate parent-child key\
    console.log(event.target.value);
    let value = event.target.value;
    console.log(field);
    if (field.children) {
      for (let i = 0; i < field.options.length; i++) {
        if (field.options[i].value === value) {
          for (let a = 0; a < field.children.length; a++) {
            if (value === field.children[a].parent) {
              field.children[a].hidden = false;
            } else {
              field.children[a].hidden = true;
            }
          }
        }
      }
    }
    console.log(field);
    //notice that the child is turning true
  }
  init() {}
  render() {
    return (
      <section className="element-section">
        {this.props.field.type === "text" && (
          <Input
            label={this.props.field.label}
            value={this.props.field.value}
            onInputChange={this.inputChange}
            onInputKeyDown={this.onInputKeyDown}
          />
        )}
        {this.props.field.type === "checkbox" && (
          <Checkbox
            label={this.props.field.label}
            value={this.props.field.value}
            onInputChange={this.inputChange}
            onInputKeyDown={this.onInputKeyDown}
          />
        )}
        {this.props.field.type === "select" && (
          <Select
            label={this.props.field.label}
            optionData={this.props.field.options}
            value={this.props.field.value}
            onChange={this.changeSelect.bind(this, this.props.field)}
          />
        )}
      </section>
    );
  }
}

export default Elements;
