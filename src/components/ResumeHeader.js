import React, { Component } from "react";
import styled from "styled-components";

const ResumeHeaderWrapper = styled.div`
  width: 100%;
  height: 20%;
  background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2em;
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const FirstName = styled.span`
  font-size: 3em;
  margin-right: 20px;
`;
const LastName = styled.span`
  font-size: 2em;
`;
const Role = styled.span`
  font-size: 1em;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Address = styled.span`
  font-size: 0.8em;
`;
const Phone = styled.span`
  font-size: 0.8em;
`;
const Email = styled.span`
  font-size: 0.8em;
`;
const Linkedin = styled.span`
  font-size: 0.8 em;
`;

class ResumeHeader extends Component {
  render() {
    return (
      <ResumeHeaderWrapper>
        <BasicInfo>
          <Name>
            <FirstName>FirstName</FirstName>
            <LastName>LastName</LastName>
          </Name>
          <Role>Role</Role>
        </BasicInfo>
        <Contact>
          <Address>Address</Address>
          <Phone>Phone</Phone>
          <Email>Email</Email>
          <Linkedin>LinkedIn</Linkedin>
        </Contact>
      </ResumeHeaderWrapper>
    );
  }
}

export default ResumeHeader;
