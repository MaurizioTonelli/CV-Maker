import React, { Component } from "react";
import "../assets/fonts.css";
import FormButton from "./FormButton";
import WorkExperienceForm from "./WorkExperienceForm";
import WorkExperienceItem from "./WorkExperienceItem";

import {
  CVSectionWrapper,
  CVSectionItems,
  CVSectionTitle,
} from "../assets/globalStyles";

export default class WorkExperiences extends Component {
  constructor(props) {
    super(props);
    this.state = { workExperienceArr: [] };
    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.removeWorkExperience = this.removeWorkExperience.bind(this);
  }

  addWorkExperience(experience) {
    this.setState({
      workExperienceArr: this.state.workExperienceArr.concat(experience),
    });
  }
  removeWorkExperience(index) {
    let newArr = this.state.workExperienceArr;
    newArr.splice(index, 1);
    this.setState({ workExperienceArr: newArr });
  }
  render() {
    return (
      <CVSectionWrapper>
        <CVSectionTitle>Work Experience</CVSectionTitle>
        <CVSectionItems>
          {this.state.workExperienceArr.map((item, i) => (
            <WorkExperienceItem
              key={i}
              data={item}
              removeWorkExperience={this.removeWorkExperience}
            />
          ))}
        </CVSectionItems>
        <FormButton title="Work Experience">
          <WorkExperienceForm addWorkExperience={this.addWorkExperience} />
        </FormButton>
      </CVSectionWrapper>
    );
  }
}
