import React, { Component } from "react";
import "../assets/fonts.css";
import FormButton from "./FormButton";
import SkillsForm from "./SkillsForm";
import {
  DeleteButton,
  CVSectionWrapper,
  CVSectionItems,
  CVSectionTitle,
} from "../assets/globalStyles";
import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";

const Skill = styled.li`
  padding: 0px 5px;
  margin-left: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 40px;
  margin: 3px;
  width: 50%;
  display: flex;
  align-items: center;
`;
const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SmallDeletebutton = styled(DeleteButton)`
  height: 40px;
  width: 40px;
  overflow: hidden;
`;

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { skills: [] };
    this.addSkill = this.addSkill.bind(this);
  }
  addSkill(skill) {
    this.setState({
      skills: this.state.skills.concat(skill),
    });
  }
  render() {
    return (
      <CVSectionWrapper>
        <CVSectionTitle>Skills</CVSectionTitle>
        <CVSectionItems>
          {this.state.skills.map((item, i) => (
            <SkillWrapper key={i}>
              <Skill>{item}</Skill>
              <SmallDeletebutton>
                <BsFillTrashFill />
              </SmallDeletebutton>
            </SkillWrapper>
          ))}
        </CVSectionItems>
        <FormButton title="Skill">
          <SkillsForm addSkill={this.addSkill} />
        </FormButton>
      </CVSectionWrapper>
    );
  }
}
