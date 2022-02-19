import React, { Component } from "react";
import "./styles/MainForm.css";
import FormAbout from "./Form_About";
import FormContact from "./Form_Contact";
import FormEducation from "./Form_Education";
import FormGeneral from "./Form_General";
import FormExperience from "./Form_Experience";
import FormSkills from "./Form_Skills";

class MainForm extends Component {
  render() {
    return (
      <div id="form-container">
        <FormGeneral generalInfo={this.props.getAllData} />
        <FormContact generalInfo={this.props.getAllData} />
        <FormAbout generalInfo={this.props.getAllData} />
        <FormEducation generalInfo={this.props.getAllData} />
        <FormExperience generalInfo={this.props.getAllData} />
        <FormSkills generalInfo={this.props.getAllData} />
      </div>
    );
  }
}

export default MainForm;
