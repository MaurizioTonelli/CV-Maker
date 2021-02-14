import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "../assets/globalStyles";
import "../assets/fonts.css";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Roboto Mono", monospace;
`;
const Company = styled.div`
  display: flex;
  flex-direction: column;
`;
const City = styled.div`
  display: flex;
  flex-direction: column;
`;
const FromToField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const From = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;
const To = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;
const Role = styled.div`
  display: flex;
  flex-direction: column;
`;
const Description = styled.div`
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
const LongInput = styled.textarea`
  height: 100px;
  padding: 5px;
`;

export default class WorkExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      city: "",
      from: "",
      to: "",
      role: "",
      description: "",
    };
    this.submitWorkExperience = this.submitWorkExperience.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }
  submitWorkExperience(event) {
    event.preventDefault();
    this.props.addWorkExperience(this.state);
    this.props.toggleForm(event);
  }
  handleCompanyChange(event) {
    this.setState({ company: event.target.value });
  }
  handleCityChange(event) {
    this.setState({ city: event.target.value });
  }
  handleFromChange(event) {
    this.setState({ from: event.target.value });
  }
  handleToChange(event) {
    this.setState({ to: event.target.value });
  }
  handleRoleChange(event) {
    this.setState({ role: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    return (
      <FormWrapper autoComplete="off">
        <Company>
          <Label htmlFor="company">Company</Label>
          <Input
            onChange={this.handleCompanyChange}
            name="company"
            type="text"
            placeholder="Company Name"
          />
        </Company>
        <City>
          <Label htmlFor="city">City</Label>
          <Input
            onChange={this.handleCityChange}
            name="city"
            type="text"
            placeholder="City"
          />
        </City>
        <FromToField>
          <From>
            <Label htmlFor="from" placeholder="YYYY">
              From
            </Label>
            <Input
              onChange={this.handleFromChange}
              name="from"
              type="number"
              placeholder="YYYY"
            />
          </From>
          <To>
            <Label htmlFor="to" placeholder="YYYY">
              To
            </Label>
            <Input
              onChange={this.handleToChange}
              name="to"
              type="number"
              placeholder="YYYY"
            />
          </To>
        </FromToField>
        <Role>
          <Label htmlFor="role">Role</Label>
          <Input
            onChange={this.handleRoleChange}
            name="role"
            type="text"
            placeholder="Role"
          />
        </Role>
        <Description>
          <Label htmlFor="description">Description and achievements</Label>
          <LongInput
            onChange={this.handleDescriptionChange}
            name="description"
            type="text"
            placeholder="Write here..."
          />
        </Description>
        <ButtonsWrapper>
          <Button title="Add" onClick={this.submitWorkExperience}>
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
