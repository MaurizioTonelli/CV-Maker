import React from "react";
import styled from "styled-components";
import "../assets/fonts.css";
import { Button } from "../assets/globalStyles";
import { BsFillTrashFill } from "react-icons/bs";

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
const Company = styled.span`
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
const Role = styled.span``;
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

const WorkExperienceItem = (props) => {
  return (
    <Wrapper>
      <ItemWrapper>
        <Title>
          <Company>{props.data.company}</Company> |
          <City> {props.data.city}</City>
        </Title>
        <Date>
          {props.data.from} - {props.data.to}
        </Date>
        <Role>{props.data.role}</Role>
        <Description>{props.data.description}</Description>
      </ItemWrapper>
      <ButtonWrapper>
        <DeleteButton>
          <BsFillTrashFill />
        </DeleteButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default WorkExperienceItem;
