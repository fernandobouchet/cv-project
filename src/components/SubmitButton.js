import React, { Component } from "react";

class SubmitButton extends Component {
  exampleData = {
    generalData: {
      firstName: "fernando",
      lastName: "bouchet",
      title: "developer",
    },
    contactData: {
      email: "fernandobouchet@gmail.com",
      phone: "",
      linkedin: "linkedin.com/in/fernandobouchet",
      github: "https://fernandobouchet.github.io",
      porfolio: "https://fernandobouchet.github.io",
    },
    about:
      "Im from Buenos Aires, Argentina, computing enthusiast, currently I'm studying a degree in computer science at UNAHUR university, I am also learning self-taught way javascript and React while still working in a furniture factory. I am looking for a IT job where I can show my skills and to keep getting more knowledge. You can see all my projects in my github. My goal is to become a Full stack developer.",
    education: {
      institution: "UNAHUR UNIVERSITY",
      degree: "DEGREE IN COMPUTER SCIENCE",
      from: "2021",
      to: "2025",
    },
    experience: {
      company: "FURNITURE FACTORY",
      position: "EMPLOYEE",
      from: "2007",
      to: "2022",
      description:
        "Teaching new hires how to get started.Organize and delegate according to the work to be done in a timely manner.Payment of salaries to staff",
    },
    skills: ["Html", "Css", "Javascript", "React", "Git", "MySQL"],
  };

  handleClick = () => {
    this.props.getAllData(this.exampleData);
  };

  render() {
    return (
      <div className="buttons-container">
        <button type="submit">Reset</button>
        <button type="button" onClick={this.handleClick}>
          Load Example
        </button>
        <button type="button">Download PDF</button>
      </div>
    );
  }
}

export default SubmitButton;
