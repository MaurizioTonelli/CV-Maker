import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "../assets/globalStyles";
import "../assets/fonts.css";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Roboto Mono", monospace;
`;
const Skill = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Label = styled.label`
  font-size: 1em;
  margin-top: 10px;
`;
const Input = styled.input`
  padding: 3px;
`;

export default class SkillsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.submitSkill = this.submitSkill.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  submitSkill(event) {
    event.preventDefault();
    this.props.addSkill(this.state.value);
    this.props.toggleForm(event);
  }
  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <FormWrapper autoComplete="off">
        <Skill>
          <Label htmlFor="skill">Skill</Label>
          <Input
            value={this.state.value}
            onChange={this.handleInputChange}
            name="skill"
            type="text"
            placeholder="Write a skill"
          />
        </Skill>
        <ButtonsWrapper>
          <Button title="Add" onClick={this.submitSkill}>
            Add
          </Button>
          <Button title="Cancel" onClick={this.props.toggleForm}>
            Cancel
          </Button>
        </ButtonsWrapper>
      </FormWrapper>
    );
  }
}
