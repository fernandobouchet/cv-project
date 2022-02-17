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

  onSubmitTask = (e) => {
    this.setState({
      generalData: {
        firstName: "",
        lastName: "",
        title: "",
        phone: "",
      },
    });
  };

  render() {
    const { generalData } = this.state;

    return (
      <div className="general-form-container">
        <form autoComplete="off">
          <input
            type="text"
            name="firstName"
            onChange={(e) => {
              this.handleChange(e);
            }}
            value={generalData.firstName}
            placeholder="First Name"
          ></input>
          <input
            type="text"
            name="lastName"
            onChange={(e) => {
              this.handleChange(e);
            }}
            value={generalData.lastName}
            placeholder="Last Name"
          ></input>
          <input
            type="text"
            name="title"
            onChange={(e) => {
              this.handleChange(e);
            }}
            value={generalData.title}
            placeholder="Title"
          ></input>
        </form>
      </div>
    );
  }
}

export default FormGeneral;
