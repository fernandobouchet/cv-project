import React, { Component } from "react";
import "./styles/Education.css";

class Education extends Component {
  render() {
    return (
      <div>
        <h2>EDUCATION</h2>
        <h3 className="education">
          {this.props.general.education.institution}
        </h3>
        <div className="education">
          <h3>
            {this.props.general.education.from} -
            {this.props.general.education.to}
          </h3>
          <h3 className="education">| {this.props.general.education.degree}</h3>
        </div>
      </div>
    );
  }
}

export default Education;
