import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "./assets/reset.css";
import styled from "styled-components";
import EditableResume from "./components/EditableResume";
import ModeContext from "./assets/context";

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

class App extends Component {
  constructor() {
    super();
    this.state = { mode: "edit" };
    this.setMode = this.setMode.bind(this);
  }
  setMode(m) {
    this.setState({ mode: m });
  }
  render() {
    return (
      <ModeContext.Provider value={this.state.mode}>
        <AppWrapper>
          <NavBar setMode={this.setMode} />
          <Line />
          <EditableResume />
        </AppWrapper>
      </ModeContext.Provider>
    );
  }
}

export default App;
