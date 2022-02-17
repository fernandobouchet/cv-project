import React, { Component } from "react";

class General extends Component {
  render() {
    return (
      <div className="general-container main">
        <form autoComplete="off" className="form-left">
          <input
            type="text"
            name="firstName"
            className="form-left-input"
            placeholder="First Name"
            disabled={true}
            defaultValue={this.props.general.generalData.firstName.toUpperCase()}
          ></input>
          <input
            type="text"
            name="lastName"
            className="form-left-input"
            placeholder="Last Name"
            disabled={true}
            defaultValue={this.props.general.generalData.lastName.toUpperCase()}
          ></input>
          <div id="title-div">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="form-left-input"
              disabled={true}
              defaultValue={this.props.general.generalData.title.toUpperCase()}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default General;
