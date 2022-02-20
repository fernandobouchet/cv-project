import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div className="experience-container">
        <h2>EXPERIENCE</h2>
        <div className="company-container">
          <div id="experience-form">
            <div className="year-container">
              <h3 className="cv-h3">{this.props.general.experience.from} |</h3>
            </div>
            <div id="experience-container">
              <h3 className="cv-h3">{this.props.general.experience.company}</h3>
              <h3 className="cv-h3">
                {this.props.general.experience.position}
              </h3>
              <textarea
                type="text"
                name="description"
                className="text-area"
                defaultValue={this.props.general.experience.description}
                disabled={true}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
