import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      institution: "",
      degree: "",
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
      institution: "",
      degree: "",
      from: "",
      to: "",
    });
  };

  render() {
    return (
      <div>
        <h2>EDUCATION</h2>
        <div className="education-container main">
          <form autoComplete="off">
            <div className="name-titles">
              <input
                type="text"
                name="institution"
                onChange={this.handleChange}
                placeholder="Institution Name"
              ></input>
            </div>
            <div className="more-info-container">
              <div className="year-container">
                <input
                  type="text"
                  name="from"
                  onChange={this.handleChange}
                  placeholder="From"
                ></input>
                -
                <input
                  type="text"
                  name="to"
                  onChange={this.handleChange}
                  placeholder="To"
                ></input>
              </div>
              |
              <input
                type="text"
                name="degree"
                onChange={this.handleChange}
                placeholder="Degree"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Education;
