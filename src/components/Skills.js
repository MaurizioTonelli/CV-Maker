import React, { Component } from "react";
import "../assets/fonts.css";
import FormButton from "./FormButton";
import SkillsForm from "./SkillsForm";
import {
  CVSectionWrapper,
  CVSectionItems,
  CVSectionTitle,
} from "../assets/globalStyles";

export default class WorkExperiences extends Component {
  render() {
    return (
      <CVSectionWrapper>
        <CVSectionTitle>Skills</CVSectionTitle>
        <CVSectionItems></CVSectionItems>
        <FormButton title="Skill">
          <SkillsForm />
        </FormButton>
      </CVSectionWrapper>
    );
  }
}
