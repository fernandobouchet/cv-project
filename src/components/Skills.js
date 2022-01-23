import React, { Component } from "react";

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      skill: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    this.setState({
      skill: "",
    });
  };

  render() {
    return (
      <div>
        <h2>SKILLS</h2>
        <div className="skills-container main">
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
      </div>
    );
  }
}

export default Skills;
