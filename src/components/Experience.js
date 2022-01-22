import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div>
        <h2>Experience</h2>
        <div className="Experience-container main">
          <input placeholder="Company"></input>
          <input placeholder="Position"></input>
          <input placeholder="From"></input>
          <input placeholder="To"></input>
        </div>
      </div>
    );
  }
}

export default Experience;
