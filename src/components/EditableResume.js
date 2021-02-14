import React, { Component } from "react";
import styled from "styled-components";
import ResumeHeader from "./ResumeHeader";

const ResumeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ResumeForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  border: 1px solid #aaa;
  box-shadow: 10px 10px;
`;

const ResumeBody = styled.form`
  display: flex;
  flex-direction: column;
`;
const WorkExperiences = styled.div`
  background-color: blue;
`;
const Education = styled.div`
  background-color: yellow;
`;
const Skills = styled.div`
  background-color: green;
`;
class EditableResume extends Component {
  render() {
    return (
      <ResumeWrapper>
        <ResumeForm>
          <ResumeHeader />
          <ResumeBody>
            <WorkExperiences>Work Experiences</WorkExperiences>
            <Education>Education</Education>
            <Skills>Skills</Skills>
          </ResumeBody>
        </ResumeForm>
      </ResumeWrapper>
    );
  }
}

export default EditableResume;
