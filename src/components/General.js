import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      title: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    this.setState({
      firstName: "",
      lastName: "",
      title: "",
    });
  };

  render() {
    return (
      <div className="general-container main">
        <form autoComplete="off" className="form-left">
          <input
            type="text"
            name="firstName"
            className="form-left-input"
            onChange={this.handleChange}
            placeholder="First Name"
          ></input>
          <input
            type="text"
            name="lastName"
            className="form-left-input"
            onChange={this.handleChange}
            placeholder="Last Name"
          ></input>
          <div id="title-div">
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              placeholder="Title"
              className="form-left-input"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default General;
