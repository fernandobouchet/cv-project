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
      hidden: true,
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

  showHideForm = () => {
    this.setState({
      hidden: this.state.hidden ? false : true,
    });
  };

  render() {
    return (
      <div className="contact-form-container form-container">
        <div className="title-container">
          <h2>Contact</h2>
          <button className="hide-show-button" onClick={this.showHideForm}>
            {!this.state.hidden ? "Hide" : "Show"}
          </button>
        </div>
        {!this.state.hidden && (
          <form className="form" autoComplete="off">
            <input
              type="text"
              name="email"
              onChange={(e) => {
                this.handleChange(e);
              }}
              value={this.props.allData.contactData.email}
              placeholder="Email"
            ></input>
            <input
              type="text"
              name="phone"
              onChange={(e) => {
                this.handleChange(e);
              }}
              value={this.props.allData.contactData.phone}
              placeholder="Phone"
            ></input>
            <input
              type="text"
              name="linkedin"
              onChange={(e) => {
                this.handleChange(e);
              }}
              value={this.props.allData.contactData.linkedin}
              placeholder="Linkedin"
            ></input>
            <input
              type="text"
              name="github"
              onChange={(e) => {
                this.handleChange(e);
              }}
              value={this.props.allData.contactData.github}
              placeholder="Github"
            ></input>
            <input
              type="text"
              name="porfolio"
              onChange={(e) => {
                this.handleChange(e);
              }}
              value={this.props.allData.contactData.porfolio}
              placeholder="Porfolio"
            ></input>
          </form>
        )}
      </div>
    );
  }
}

export default FormContact;
