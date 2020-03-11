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
          label: "Alive"
        }
      ]
    };
  }

  render() {
    return (
      <section>
        {this.state.fields.map((field, index) => (
          <section key={index}>
            <Elements field={field} />
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
