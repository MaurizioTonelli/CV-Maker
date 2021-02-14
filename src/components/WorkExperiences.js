import React, { Component } from "react";
import "../assets/fonts.css";
import FormButton from "./FormButton";
import WorkExperienceForm from "./WorkExperienceForm";
import {
  CVSectionWrapper,
  CVSectionItems,
  CVSectionTitle,
} from "../assets/globalStyles";

export default class WorkExperiences extends Component {
  render() {
    return (
      <CVSectionWrapper>
        <CVSectionTitle>Work Experience</CVSectionTitle>
        <CVSectionItems></CVSectionItems>
        <FormButton title="Work Experience">
          <WorkExperienceForm />
        </FormButton>
      </CVSectionWrapper>
    );
  }
}
