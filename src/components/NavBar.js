import React from "react";
import styled from "styled-components";
import { FiPaperclip } from "react-icons/fi";
import "../assets/fonts.css";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CVLogo = styled.p`
  font-size: 3em;
  font-family: "Roboto Mono", monospace;
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

const Button = styled.button`
  border: 1px solid #aaa;
  border-radius: 8px;
  background-color: white;
  padding: 10px;
  width: 9em;
  color: black;
  margin: 10px;
  font-family: "Roboto Mono", monospace;
  font-size: 1em;
  &:hover {
    transform: translateY(-3px);
    background-color: #aaa;
    cursor: pointer;
  }
`;

const NavBar = (props) => {
  return (
    <NavWrapper>
      <CVLogo>
        <FiPaperclip /> Curriculum Maker
      </CVLogo>
      <CVButtonWrapper>
        <Button>Edit Mode</Button>
        <Button>Preview Mode</Button>
      </CVButtonWrapper>
    </NavWrapper>
  );
};

export default NavBar;
