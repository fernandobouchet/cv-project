import React, { Component } from "react";

class FormSkills extends Component {
  constructor() {
    super();

    this.state = {
      skills: "",
      hidden: true,
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

  showHideForm = () => {
    this.setState({
      hidden: this.state.hidden ? false : true,
    });
  };

  render() {
    return (
      <div className="skills-container form-container">
        <div className="title-container">
          <h2>Skills</h2>
          <button className="hide-show-button" onClick={this.showHideForm}>
            {!this.state.hidden ? "Hide" : "Show"}
          </button>
        </div>
        {!this.state.hidden && (
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
        )}
      </div>
    );
  }
}

export default FormSkills;
