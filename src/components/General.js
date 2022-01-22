import React, { Component } from "react";

class General extends Component {
  render() {
    return (
      <div>
        <h2>Personal Information</h2>
        <div className="general-container main">
          <input placeholder="First Name"></input>
          <input placeholder="Last Name"></input>
          <input placeholder="Title"></input>
          <input placeholder="Email"></input>
          <input placeholder="Phone"></input>
          <input placeholder="Linkedin"></input>
          <input placeholder="Github"></input>
          <input placeholder="Porfolio"></input>
        </div>
      </div>
    );
  }
}

export default General;
