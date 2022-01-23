import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      company: "",
      position: "",
      from: "",
      to: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    this.setState({
      company: "",
      position: "",
      from: "",
      to: "",
    });
  };

  render() {
    return (
      <div>
        <h2>EXPERIENCE</h2>
        <div className="Experience-container main">
          <input
            type="text"
            name="company"
            onChange={this.handleChange}
            placeholder="Company"
          ></input>
          <input
            type="text"
            name="position"
            onChange={this.handleChange}
            placeholder="Position"
          ></input>
          <input
            type="text"
            name="from"
            onChange={this.handleChange}
            placeholder="From"
          ></input>
          <input
            type="text"
            name="to"
            onChange={this.handleChange}
            placeholder="To"
          ></input>
        </div>
      </div>
    );
  }
}

export default Experience;
