import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div>
        <h2>SKILLS</h2>
        <div className="skills-container main">
          <ul>
            <li>{this.props.general.skills}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
