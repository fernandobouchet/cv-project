import React, { Component } from "react";

class About extends Component {
  constructor() {
    super();

    this.state = {
      about: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      about: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    this.setState({
      about: "",
    });
  };

  render() {
    return (
      <div>
        <h2>ABOUT ME</h2>
        <div className="about-container main">
          <textarea
            onChange={this.handleChange}
            placeholder="Description"
          ></textarea>
        </div>
      </div>
    );
  }
}

export default About;
