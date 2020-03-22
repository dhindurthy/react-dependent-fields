import React from "react";
import Elements from "./elements.jsx";
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        {
          type: "select",
          label: "Old Names",
          options: [
            {
              value: "Ana",
              label: "Ana "
            },
            {
              value: "Tillman",
              label: "Tillman "
            }
          ]
        },
        {
          type: "text",
          label: "Parent",
          key: "parent",
          children: []
        },
        {
          type: "text",
          label: "Daughter",
          parent: "parent"
        },
        {
          type: "select",
          label: "New Names",
          options: [
            {
              value: "ruby",
              label: "Ruby",
              key: "ruby"
            },
            {
              value: "king",
              label: "King ",
              key: "king"
            }
          ],
          children: [
            {
              type: "text",
              label: "Ruby Daughter",
              parent: "ruby",
              hidden: true
            },
            {
              type: "text",
              label: "King Son",
              parent: "king",
              hidden: true
            }
          ]
        },
        {
          type: "checkbox",
          label: "Alive",
          key: "alive",
          checked: false,
          children: [
            {
              type: "text",
              label: "Living thing",
              parent: "alive",
              hidden: true
            }
          ]
        }
      ]
    };
    this.inputChange = this.inputChange.bind(this);
  }
  inputChange(field, index, event) {
    console.log(field.type);
    let value = event.target.value;
    let fields = this.state.fields;
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
    fields[index] = field;
    this.setState(state => ({
      fields: fields
    }));
  }
  render() {
    return (
      <section>
        {this.state.fields.map((field, index) => (
          <section key={index}>
            <Elements
              field={field}
              changeSelect={this.inputChange.bind(this, field, index)}
            />
            {field.children &&
              field.children.map((child, index) => (
                <section
                  key={index}
                  className="element-section"
                  hidden={child.hidden}
                >
                  <Elements field={child} />
                </section>
              ))}
          </section>
        ))}
      </section>
    );
  }
}

export default View;
