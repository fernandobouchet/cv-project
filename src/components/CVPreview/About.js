import React, { Component } from "react";
import "./styles/About.css";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h2>ABOUT ME</h2>
        <div>
          <textarea
            className="about-text-area"
            defaultValue={this.props.general.about}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default About;
