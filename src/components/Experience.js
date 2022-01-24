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
        <div className="company-container main">
          <form autoComplete="off" id="experience-form">
            <div className="year-container">
              <input
                type="text"
                name="from"
                onChange={this.handleChange}
                placeholder="From"
              ></input>
            </div>
            <div id="experience-container">
              <input
                type="text"
                name="company"
                onChange={this.handleChange}
                placeholder="Company Name"
              ></input>
              <input
                type="text"
                name="position"
                onChange={this.handleChange}
                placeholder="Position"
              ></input>
              <textarea
                type="text"
                name="description"
                onChange={this.handleChange}
                placeholder="Job Description"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Experience;
