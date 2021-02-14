import React, { Component } from "react";
import styled from "styled-components";
import ResumeHeader from "./ResumeHeader";
import WorkExperiences from "./WorkExperiences";
import Education from "./Education";
import Skills from "./Skills";

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
  box-shadow: 10px 10px #888;
`;

const ResumeBody = styled.form`
  display: flex;
  flex-direction: column;
`;

class EditableResume extends Component {
  render() {
    return (
      <ResumeWrapper>
        <ResumeForm>
          <ResumeHeader />
          <ResumeBody>
            <WorkExperiences />
            <Education />
            <Skills />
          </ResumeBody>
        </ResumeForm>
      </ResumeWrapper>
    );
  }
}

export default EditableResume;
