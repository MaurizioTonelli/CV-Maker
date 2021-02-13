import React, { Component } from "react";
import styled from "styled-components";
import ResumeHeader from "./ResumeHeader";

const ResumeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

class EditableResume extends Component {
  render() {
    return (
      <ResumeWrapper>
        <ResumeForm>
          <ResumeHeader />
          {/* <ResumeBody>
            <WorkExperiences></WorkExperiences>
            <Education></Education>
            <Skills></Skills>
          </ResumeBody> */}
        </ResumeForm>
      </ResumeWrapper>
    );
  }
}

export default EditableResume;
