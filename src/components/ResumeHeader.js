import React, { Component } from "react";
import styled from "styled-components";
import { FaAddressCard } from "react-icons/fa";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import EditableField from "./EditableField";

const ResumeHeaderWrapper = styled.div`
  width: 100%;
  height: 20%;
  background-color: #a50000;
  padding: 10px;
  color: #ddd;
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
  font-family: "Roboto Mono", monospace;
`;

const FirstName = styled.div`
  font-size: 1.5em;
  margin-right: 20px;
  input {
    font-size: 1em;
    border: none;
    background-color: #b50000;
    color: white;
    width: 8ch;
    font-family: "Roboto Mono", monospace;
  }
`;
const LastName = styled.span`
  font-size: 1.5em;
  input {
    font-size: 1em;
    border: none;
    background-color: #b50000;
    color: white;
    width: 8ch;
    font-family: "Roboto Mono", monospace;
  }
`;
const Role = styled.span`
  font-size: 0.9em;
  font-family: "Roboto Mono", monospace;
  input {
    font-size: 0.7em;
    border: none;
    background-color: #b50000;
    color: white;
    width: 8ch;
    font-family: "Roboto Mono", monospace;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto Mono", monospace;
  input {
    font-size: 0.8em;
    border: none;
    background-color: #b50000;
    color: white;
    width: 14ch;
    font-family: "Roboto Mono", monospace;
  }
`;

const Address = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
`;
const Phone = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
`;
const Email = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
`;
const Linkedin = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
`;
const AddressIcon = styled(FaAddressCard)`
  margin-right: 5px;
`;
const PhoneIcon = styled(AiTwotonePhone)`
  margin-right: 5px;
`;
const EmailIcon = styled(MdEmail)`
  margin-right: 5px;
`;
const LinkedinIcon = styled(IoLogoLinkedin)`
  margin-right: 5px;
`;

class ResumeHeader extends Component {
  render() {
    return (
      <ResumeHeaderWrapper>
        <BasicInfo>
          <Name>
            <FirstName>
              <EditableField>FirstName</EditableField>
            </FirstName>
            <LastName>
              <EditableField>LastName</EditableField>
            </LastName>
          </Name>
          <Role>
            <EditableField>Role</EditableField>
          </Role>
        </BasicInfo>
        <Contact>
          <Address>
            <AddressIcon />
            <EditableField>Address</EditableField>
          </Address>
          <Phone>
            <PhoneIcon />
            <EditableField>Phone</EditableField>
          </Phone>
          <Email>
            <EmailIcon />
            <EditableField>Email</EditableField>
          </Email>
          <Linkedin>
            <LinkedinIcon />
            <EditableField>LinkedIn</EditableField>
          </Linkedin>
        </Contact>
      </ResumeHeaderWrapper>
    );
  }
}

export default ResumeHeader;
