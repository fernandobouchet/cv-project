import React, { Component } from "react";

class FormContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactData: {
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        porfolio: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        contactData: {
          ...this.state.contactData,
          [e.target.name]: e.target.value,
        },
      },
      () => this.props.generalInfo(this.state)
    );
  };

  render() {
    const { contactData } = this.state;

    return (
      <div className="contact-form-container form-container">
        <h2>Contact</h2>
        <form className="form" autoComplete="off">
          <input
            type="text"
            name="email"
            onChange={(e) => {
              this.handleChange(e);
            }}
            value={contactData.email}
            placeholder="Email"
          ></input>
          <input
            type="text"
            name="phone"
            onChange={(e) => {
              this.handleChange(e);
            }}
            value={contactData.phone}
            placeholder="Phone"
          ></input>
          <input
            type="text"
            name="linkedin"
            onChange={(e) => {
              this.handleChange(e);
            }}
            value={contactData.linkedin}
            placeholder="Linkedin"
          ></input>
          <input
            type="text"
            name="github"
            onChange={(e) => {
              this.handleChange(e);
            }}
            value={contactData.github}
            placeholder="Github"
          ></input>
          <input
            type="text"
            name="porfolio"
            onChange={(e) => {
              this.handleChange(e);
            }}
            value={contactData.porfolio}
            placeholder="Porfolio"
          ></input>
        </form>
      </div>
    );
  }
}

export default FormContact;
