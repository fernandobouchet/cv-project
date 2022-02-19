import React, { Component } from "react";

class FormExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: {
        company: "",
        position: "",
        from: "",
        to: "",
        description: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        experience: {
          ...this.state.experience,
          [e.target.name]: e.target.value,
        },
      },
      () => this.props.generalInfo(this.state)
    );
  };

  render() {
    return (
      <div className="company-container form-container">
        <h2>Experience</h2>
        <form autoComplete="off" className="form">
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
    );
  }
}

export default FormExperience;
