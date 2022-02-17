import React, { Component } from "react";
import FormContact from "./Form_Contact";
import FormGeneral from "./Form_General";

class MainForm extends Component {
  render() {
    return (
      <div id="form-container">
        <FormGeneral generalInfo={this.props.getAllData} />
        <FormContact generalInfo={this.props.getAllData} />
      </div>
    );
  }
}

export default MainForm;
