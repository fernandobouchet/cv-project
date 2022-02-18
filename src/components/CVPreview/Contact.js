import React, { Component } from "react";
import "./styles/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <h2 className="contact-title">CONTACT</h2>
        <h3 className="contact">{this.props.general.contactData.email}</h3>
        <h3 className="contact">{this.props.general.contactData.phone}</h3>
        <h3 className="contact">{this.props.general.contactData.linkedin}</h3>
        <h3 className="contact">{this.props.general.contactData.github}</h3>
        <h3 className="contact">{this.props.general.contactData.porfolio}</h3>
      </div>
    );
  }
}

export default Contact;
