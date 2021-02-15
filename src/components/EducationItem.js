import React, { Component } from "react";
import styled from "styled-components";
import "../assets/fonts.css";
import { Button } from "../assets/globalStyles";
import { BsFillTrashFill } from "react-icons/bs";
import ModeContext from "../assets/context";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto Mono", monospace;
  padding: 15px;
  width: 90%;
`;
const University = styled.span`
  font-size: 1.3vw;
  font-weight: bold;
  margin-right: 10px;
`;
const City = styled.span`
  margin-left: 10px;
`;
const Date = styled.span`
  font-size: 0.9vw;
`;
const Degree = styled.span``;
const Description = styled.span`
  font-size: 1vw;
  color: #888;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border-bottom: 1px solid #eee;
  padding: 5px;
  width: 80%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const DeleteButton = styled(Button)`
  background-color: #a50000;
  font-size: 2em;
  color: white;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
class EducationItem extends Component {
  static contextType = ModeContext;
  render() {
    let buttons =
      this.context === "edit" ? (
        <ButtonWrapper>
          <DeleteButton
            onClick={() => this.props.removeEducation(this.props.key)}
          >
            <BsFillTrashFill />
          </DeleteButton>
        </ButtonWrapper>
      ) : (
        <div></div>
      );
    return (
      <Wrapper>
        <ItemWrapper>
          <Title>
            <University>{this.props.data.university}</University> |
            <City> {this.props.data.city}</City>
          </Title>
          <Date>
            {this.props.data.from} - {this.props.data.to}
          </Date>
          <Degree>{this.props.data.degree}</Degree>
          <Description>{this.props.data.description}</Description>
        </ItemWrapper>
        {buttons}
      </Wrapper>
    );
  }
}

export default EducationItem;
