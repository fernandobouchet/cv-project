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
      hidden: true,
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

  showHideForm = () => {
    this.setState({
      hidden: this.state.hidden ? false : true,
    });
  };

  render() {
    return (
      <div className="company-container form-container">
        <div className="title-container">
          <h2>Experience</h2>
          <button className="hide-show-button" onClick={this.showHideForm}>
            {!this.state.hidden ? "Hide" : "Show"}
          </button>
        </div>
        {!this.state.hidden && (
          <form autoComplete="off" className="form">
            <div className="form-year-container">
              <input
                type="text"
                name="from"
                onChange={this.handleChange}
                value={this.props.allData.experience.from}
                placeholder="From"
              ></input>
            </div>
            <div id="experience-container">
              <input
                type="text"
                name="company"
                onChange={this.handleChange}
                value={this.props.allData.experience.company}
                placeholder="Company Name"
              ></input>
              <input
                type="text"
                name="position"
                onChange={this.handleChange}
                value={this.props.allData.experience.position}
                placeholder="Position"
              ></input>
              <textarea
                type="text"
                name="description"
                onChange={this.handleChange}
                value={this.props.allData.experience.description}
                placeholder="Job Description"
              ></textarea>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default FormExperience;
