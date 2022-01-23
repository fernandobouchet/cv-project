import React, { Component } from "react";

class SubmitButton extends Component {
  render() {
    return (
      <div>
        <button type="submit">Load Example</button>
        <button type="submit">Reset</button>
        <button type="button">Download PDF</button>
      </div>
    );
  }
}

export default SubmitButton;
