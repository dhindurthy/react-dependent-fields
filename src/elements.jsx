import React from "react";
import Input from "./input.jsx";
import Checkbox from "./checkbox.jsx";
import Select from "./select.jsx";

class Elements extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <section className="element-section">
        {this.props.field.type === "text" && (
          <Input
            label={this.props.field.label}
            value={this.props.field.value}
            onInputChange={this.props.changeSelect}
            onInputKeyDown={this.props.onInputKeyDown}
          />
        )}
        {this.props.field.type === "checkbox" && (
          <Checkbox
            label={this.props.field.label}
            value={this.props.field.value}
            onInputChange={this.props.changeSelect}
            onInputKeyDown={this.props.onInputKeyDown}
          />
        )}
        {this.props.field.type === "select" && (
          <Select
            label={this.props.field.label}
            optionData={this.props.field.options}
            value={this.props.field.value}
            onChange={this.props.changeSelect}
          />
        )}
      </section>
    );
  }
}

export default Elements;
