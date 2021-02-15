import React, { Component } from "react";
import styled from "styled-components";
import { FiPaperclip } from "react-icons/fi";
import { Button } from "../assets/globalStyles";
import "../assets/fonts.css";
import ModeContext from "../assets/context";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CVLogo = styled.p`
  font-size: 3em;
  font-family: "Roboto Mono", monospace;
  font-weight: bolder;
  color: #cccccc;
  background-color: #a50000;
  width: 100%;
  heigth: 100%;
  margin: 0;
  text-align: center;
  padding: 10px;
`;
const CVButtonWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

class NavBar extends Component {
  static contextType = ModeContext;
  render() {
    const EButton = styled(Button)`
      background-color: ${() =>
        this.context === "edit" ? "#a50000" : "white"};
      color: ${() => (this.context === "edit" ? "white" : "black")};
    `;
    const PButton = styled(Button)`
      background-color: ${() =>
        this.context === "edit" ? "white" : "#a50000"};
      color: ${() => (this.context === "edit" ? "black" : "white")};
    `;
    console.log(this.context);
    return (
      <NavWrapper>
        <CVLogo>
          <FiPaperclip /> CVMaker
        </CVLogo>
        <CVButtonWrapper>
          <EButton onClick={(e) => this.props.setMode("edit")}>
            Edit Mode
          </EButton>
          <PButton onClick={(e) => this.props.setMode("preview")}>
            Preview Mode
          </PButton>
        </CVButtonWrapper>
      </NavWrapper>
    );
  }
}

export default NavBar;
