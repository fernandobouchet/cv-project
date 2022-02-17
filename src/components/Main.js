import React, { Component } from "react";
import MainCV from "./CVPreview/MainCV";
import MainForm from "./Forms/MainForm";

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
    console.log(this.state);
  };

  render() {
    const { mainData } = this.state;
    return (
      <div id="main-container">
        <MainForm getAllData={this.updateState} />
        <MainCV allData={mainData} />
      </div>
    );
  }
}

export default Main;
