import React, { Component } from "react";
import "./styles/MainCV.css";
import General from "./General";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class MainCV extends Component {
  render() {
    return (
      <div id="cv-container">
        <div id="main-left">
          <General general={this.props.allData} />
          <Contact general={this.props.allData} />
        </div>
        <div id="main-right">
          <About general={this.props.allData} />
          <Education general={this.props.allData} />
          <Experience general={this.props.allData} />
          <Skills general={this.props.allData} />
        </div>
      </div>
    );
  }
}

export default MainCV;
