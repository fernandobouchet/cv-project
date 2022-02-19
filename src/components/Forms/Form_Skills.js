import React, { Component } from "react";

class FormSkills extends Component {
  constructor() {
    super();

    this.state = {
      skills: "",
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        ...this.state,
        skills: e.target.value,
      },
      () => this.props.generalInfo(this.state)
    );
  };

  render() {
    return (
      <div className="skills-container form-container">
        <h2>SKILLS</h2>
        <ul>
          <li>
            <input
              type="text"
              name="skill"
              onChange={this.handleChange}
              placeholder="Skill Name"
            ></input>
          </li>
        </ul>
      </div>
    );
  }
}

export default FormSkills;
