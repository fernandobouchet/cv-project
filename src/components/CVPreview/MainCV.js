import React, { Component } from "react";
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
          <About />
          <Education />
          <Experience />
          <Skills />
        </div>
      </div>
    );
  }
}

export default MainCV;
