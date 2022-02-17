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
      },
    };
  }

  updateState = (data) => {
    console.log(data);
    this.setState({
      mainData: {
        ...this.state.mainData,
        generalData: { ...data },
      },
    });
  };

  render() {
    const { mainData } = this.state;
    return (
      <>
        <MainForm getAllData={this.updateState} />
        <MainCV allData={mainData} />
      </>
    );
  }
}

export default Main;
