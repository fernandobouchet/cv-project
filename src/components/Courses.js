import React, { Component } from "react";

class Courses extends Component {
  render() {
    return (
      <div>
        <h2>Courses</h2>
        <div className="courses-container main">
          <input placeholder="Institution Name"></input>
          <input placeholder="Certification"></input>
          <input placeholder="From"></input>
          <input placeholder="To"></input>
        </div>
      </div>
    );
  }
}

export default Courses;
