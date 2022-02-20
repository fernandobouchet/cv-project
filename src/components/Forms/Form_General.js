import React, { Component } from "react";

class FormGeneral extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalData: {
        firstName: "",
        lastName: "",
        title: "",
      },
      hidden: true,
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        generalData: {
          ...this.state.generalData,
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
      <div className="general-form-container form-container">
        <div className="title-container">
          <h2>Personal Info</h2>
          <button className="hide-show-button" onClick={this.showHideForm}>
            {!this.state.hidden ? "Hide" : "Show"}
          </button>
        </div>
        {!this.state.hidden && (
          <form className="form" autoComplete="off">
            <input
              type="text"
              name="firstName"
              onChange={(e) => {
                this.handleChange(e);
              }}
              value={this.props.allData.generalData.firstName}
              placeholder="First Name"
            ></input>
            <input
              type="text"
              name="lastName"
              onChange={(e) => {
                this.handleChange(e);
              }}
              value={this.props.allData.generalData.lastName}
              placeholder="Last Name"
            ></input>
            <input
              type="text"
              name="title"
              onChange={(e) => {
                this.handleChange(e);
              }}
              value={this.props.allData.generalData.title}
              placeholder="Title"
            ></input>
          </form>
        )}
      </div>
    );
  }
}

export default FormGeneral;
