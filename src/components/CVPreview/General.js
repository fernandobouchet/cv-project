import React, { Component } from "react";

class General extends Component {
  render() {
    return (
      <div className="general-container main">
        {this.props.general.generalData.generalData && (
          <div className="form-left">
            <h2>{this.props.general.generalData.generalData.firstName}</h2>
            <h2>{this.props.general.generalData.generalData.lastName}</h2>
            <h3>{this.props.general.generalData.generalData.title}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default General;
