import React, { Component } from "react";
import "./styles/General.css";
class General extends Component {
  render() {
    return (
      <div className="general-container">
        <h1 className="general-name">
          {this.props.general.generalData.firstName.toUpperCase()}
        </h1>
        <h1 className="general-name">
          {this.props.general.generalData.lastName.toUpperCase()}
        </h1>
        <h3 className="general-title">
          {this.props.general.generalData.title.toUpperCase()}
        </h3>
      </div>
    );
  }
}

export default General;
