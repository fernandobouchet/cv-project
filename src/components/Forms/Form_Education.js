import React, { Component } from "react";

class FormEducation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        institution: "",
        degree: "",
        from: "",
        to: "",
      },
      hidden: true,
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        education: {
          ...this.state.education,
          [e.target.name]: e.target.value,
        },
      },
      () => this.props.generalInfo(this.state)
    );
  };

  showHideForm = () => {
    this.setState({
      hidden: this.state.hidden ? false : true,
    });
  };

  render() {
    return (
      <div className="education-form-container form-container">
        <div className="title-container">
          <h2>Education</h2>
          <button className="hide-show-button" onClick={this.showHideForm}>
            {!this.state.hidden ? "Hide" : "Show"}
          </button>
        </div>
        {!this.state.hidden && (
          <form className="form" autoComplete="off">
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
        )}
      </div>
    );
  }
}

export default FormEducation;
