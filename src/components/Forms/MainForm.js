import React, { Component } from "react";
import Form from "./Form";

class MainForm extends Component {
  render() {
    return (
      <div id="form-container">
        <Form generalInfo={this.props.getAllData} />
      </div>
    );
  }
}

export default MainForm;
