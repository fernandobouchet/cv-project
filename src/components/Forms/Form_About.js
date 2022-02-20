import React, { Component } from "react";

class FormAbout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: "",
      hidden: true,
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        ...this.state,
        about: e.target.value,
      },
      () => this.props.generalInfo(this.state)
    );
  };

  showHideForm = () => {
    this.setState({
      hidden: this.state.hidden ? false : true,
    });
  };

  render() {
    return (
      <div className="about-form-container form-container">
        <div className="title-container">
          <h2>About</h2>
          <button className="hide-show-button" onClick={this.showHideForm}>
            {!this.state.hidden ? "Hide" : "Show"}
          </button>
        </div>
        {!this.state.hidden && (
          <div className="about-container">
            <textarea
              onChange={this.handleChange}
              value={this.props.allData.about}
              placeholder="Description"
            ></textarea>
          </div>
        )}
      </div>
    );
  }
}

export default FormAbout;
