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
const FromField = styled.div`
  display: flex;
`;

export default class WorkExperienceForm extends Component {
  render() {
    return (
      <FormWrapper autoComplete="off">
        <Company>
          <Label htmlFor="university">University</Label>
          <Input name="university" type="text" placeholder="University Name" />
        </Company>
        <City>
          <Label htmlFor="city">City</Label>
          <Input name="city" type="text" placeholder="City" />
        </City>
        <FromToField>
          <From>
            <Label htmlFor="from" placeholder="YYYY">
              From
            </Label>
            <Input name="from" type="number" placeholder="YYYY" />
          </From>
          <To>
            <Label htmlFor="to" placeholder="YYYY">
              To
            </Label>
            <Input name="to" type="number" placeholder="YYYY" />
          </To>
        </FromToField>
        <Role>
          <Label htmlFor="degree">Degree</Label>
          <Input name="degree" type="text" placeholder="Degree" />
        </Role>
        <Description>
          <Label htmlFor="description">Description and achievements</Label>
          <LongInput
            name="description"
            type="text"
            placeholder="Write here..."
          />
        </Description>
        <ButtonsWrapper>
          <Button title="Add">Add</Button>
          <Button title="Cancel" onClick={this.props.toggleForm}>
            Cancel
          </Button>
        </ButtonsWrapper>
      </FormWrapper>
    );
  }
}
