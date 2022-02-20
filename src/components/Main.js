import React, { Component } from "react";
import MainCV from "./CVPreview/MainCV";
import MainForm from "./Forms/MainForm";
import SubmitButton from "./SubmitButton";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainData: {
        generalData: {
          firstName: "",
          lastName: "",
          title: "",
        },
        contactData: {
          email: "",
          phone: "",
          linkedin: "",
          github: "",
          porfolio: "",
        },
        about: "",
        education: {
          institution: "",
          degree: "",
          from: "",
          to: "",
        },
        experience: {
          company: "",
          position: "",
          from: "",
          to: "",
          description: "",
        },
        skills: "",
      },
    };
  }

  updateState = (data) => {
    this.setState({
      mainData: {
        ...this.state.mainData,
        ...data,
      },
    });
  };

  render() {
    const { mainData } = this.state;
    return (
      <div>
        <div id="main-container">
          <MainForm getAllData={this.updateState} allData={mainData} />
          <MainCV allData={mainData} />
        </div>
        <SubmitButton getAllData={this.updateState} />
      </div>
    );
  }
}

export default Main;
