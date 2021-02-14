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
  border-bottom: 1px solid #ccc;
`;

export {
  DeleteButton,
  Button,
  CVSectionWrapper,
  CVSectionItems,
  CVSectionTitle,
};
