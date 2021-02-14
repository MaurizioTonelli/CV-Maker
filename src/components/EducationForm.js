import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "../assets/globalStyles";
import "../assets/fonts.css";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Roboto Mono", monospace;
`;
const Field = styled.div`
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

export default class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      university: "",
      city: "",
      from: "",
      to: "",
      degree: "",
      description: "",
    };
    this.submitEducation = this.submitEducation.bind(this);
    this.handleUniversityChange = this.handleUniversityChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }
  submitEducation(event) {
    event.preventDefault();
    this.props.addEducation(this.state);
    this.props.toggleForm(event);
  }
  handleUniversityChange(event) {
    this.setState({ university: event.target.value });
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
  handleDegreeChange(event) {
    this.setState({ degree: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    return (
      <FormWrapper autoComplete="off">
        <Field>
          <Label htmlFor="university">University</Label>
          <Input
            onChange={this.handleUniversityChange}
            name="university"
            type="text"
            placeholder="University Name"
          />
        </Field>
        <Field>
          <Label htmlFor="city">City</Label>
          <Input
            onChange={this.handleCityChange}
            name="city"
            type="text"
            placeholder="City"
          />
        </Field>
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
        <Field>
          <Label htmlFor="degree">Degree</Label>
          <Input
            onChange={this.handleDegreeChange}
            name="degree"
            type="text"
            placeholder="Degree"
          />
        </Field>
        <Field>
          <Label htmlFor="description">Description and achievements</Label>
          <LongInput
            onChange={this.handleDescriptionChange}
            name="description"
            type="text"
            placeholder="Write here..."
          />
        </Field>
        <ButtonsWrapper>
          <Button title="Add" onClick={this.submitEducation}>
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
