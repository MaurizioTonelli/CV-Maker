import NavBar from "./components/NavBar";
import "./assets/reset.css";
import styled from "styled-components";
import EditableResume from "./components/EditableResume";

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #999;
  margin: 5px;
`;
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <NavBar />
      <Line />
      <EditableResume />
    </AppWrapper>
  );
}

export default App;
