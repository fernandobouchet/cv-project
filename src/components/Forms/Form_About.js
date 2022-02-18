import React, { Component } from "react";

class FormAbout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: "",
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        ...this.state.contactData,
        about: e.target.value,
      },
      () => this.props.generalInfo(this.state)
    );
  };

  render() {
    return (
      <div className="about-form-container">
        <h2>About</h2>
        <div className="about-container">
          <textarea
            onChange={this.handleChange}
            placeholder="Description"
          ></textarea>
        </div>
      </div>
    );
  }
}

export default FormAbout;
