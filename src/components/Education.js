import React, { Component } from "react";
import "../assets/fonts.css";
import FormButton from "./FormButton";
import EducationForm from "./EducationForm";
import {
  CVSectionWrapper,
  CVSectionItems,
  CVSectionTitle,
} from "../assets/globalStyles";

export default class WorkExperiences extends Component {
  render() {
    return (
      <CVSectionWrapper>
        <CVSectionTitle>Education</CVSectionTitle>
        <CVSectionItems></CVSectionItems>
        <FormButton title="Education">
          <EducationForm />
        </FormButton>
      </CVSectionWrapper>
    );
  }
}
