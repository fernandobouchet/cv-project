import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      porfolio: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    this.setState({
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      porfolio: "",
    });
  };

  render() {
    return (
      <div>
        <h2>CONTACT</h2>
        <div className="contact-container main">
          <form autoComplete="off" className="form-left">
            <input
              type="text"
              name="email"
              className="form-left-input"
              onChange={this.handleChange}
              placeholder="Email"
              disabled={true}
              defaultValue={this.props.general.contactData.email}
            ></input>
            <input
              type="text"
              name="phone"
              className="form-left-input"
              onChange={this.handleChange}
              placeholder="Phone"
              disabled={true}
              defaultValue={this.props.general.contactData.phone}
            ></input>
            <input
              type="text"
              name="linkedin"
              className="form-left-input"
              onChange={this.handleChange}
              placeholder="Linkedin"
              disabled={true}
              defaultValue={this.props.general.contactData.linkedin}
            ></input>
            <input
              type="text"
              name="github"
              className="form-left-input"
              onChange={this.handleChange}
              placeholder="Github"
              disabled={true}
              defaultValue={this.props.general.contactData.github}
            ></input>
            <input
              type="text"
              name="porfolio"
              className="form-left-input"
              onChange={this.handleChange}
              placeholder="Porfolio"
              disabled={true}
              defaultValue={this.props.general.contactData.porfolio}
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
