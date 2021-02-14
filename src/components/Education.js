import React, { Component } from "react";
import "../assets/fonts.css";
import FormButton from "./FormButton";
import EducationForm from "./EducationForm";
import EducationItem from "./EducationItem";
import {
  CVSectionWrapper,
  CVSectionItems,
  CVSectionTitle,
} from "../assets/globalStyles";

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = { educationArr: [] };
    this.addEducation = this.addEducation.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
  }
  addEducation(education) {
    this.setState({ educationArr: this.state.educationArr.concat(education) });
  }
  removeEducation(index) {
    let newArr = this.state.educationArr;
    newArr.splice(index, 1);
    this.setState({ educationArr: newArr });
  }
  render() {
    return (
      <CVSectionWrapper>
        <CVSectionTitle>Education</CVSectionTitle>
        <CVSectionItems>
          {this.state.educationArr.map((item, i) => (
            <EducationItem
              key={i}
              data={item}
              removeEducation={this.removeEducation}
            />
          ))}
        </CVSectionItems>
        <FormButton title="Education">
          <EducationForm addEducation={this.addEducation} />
        </FormButton>
      </CVSectionWrapper>
    );
  }
}
