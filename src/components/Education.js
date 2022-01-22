import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <div className="education-container main">
          <input placeholder="Institution Name"></input>
          <input placeholder="City"></input>
          <input placeholder="Degree"></input>
          <input placeholder="From"></input>
          <input placeholder="To"></input>
        </div>
      </div>
    );
  }
}

export default Education;
