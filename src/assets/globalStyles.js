import styled from "styled-components";

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

const CVSectionWrapper = styled.div`
  padding: 15px;
  margin: 5px;
  border-bottom: 3px solid #888;
`;
const CVSectionItems = styled.div``;
const CVSectionTitle = styled.div`
  font-size: 1.3em;
  font-family: "Roboto Mono", monospace;
  font-weight: bolder;
  padding: 5px;
  border-bottom: 1px solid black;
`;

export { Button, CVSectionWrapper, CVSectionItems, CVSectionTitle };
