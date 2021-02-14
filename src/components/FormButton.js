import React, { Component } from "react";
import { Button } from "../assets/globalStyles";
import { AiFillPlusCircle } from "react-icons/ai";
import styled from "styled-components";
import WorkExperienceForm from "./WorkExperienceForm";

const FButton = styled(Button)`
  font-size: 1em;
  width: 250px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default class FormButton extends Component {
  constructor(props) {
    super(props);
    this.state = { formShown: false };
    this.toggleForm = this.toggleForm.bind(this);
  }
  toggleForm(event) {
    this.setState({ formShown: !this.state.formShown });
    event.preventDefault();
  }
  render() {
    if (this.state.formShown) {
      return (
        <div>
          {React.cloneElement(this.props.children, {
            toggleForm: this.toggleForm,
          })}
        </div>
      );
    }
    return (
      <FButton onClick={this.toggleForm}>
        <AiFillPlusCircle />
        {this.props.title}
      </FButton>
    );
  }
}
