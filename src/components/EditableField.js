import React, { Component } from "react";

export default class EditableField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      value: props.children,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  toggleEdit(event) {
    if (this.state.editing && event.target.value.length <= 0) {
      return;
    }
    this.setState({ editing: !this.state.editing });
  }
  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }
  handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value.length > 0) {
        this.setState({
          editing: !this.state.editing,
          value: event.target.value,
        });
      }
    } else {
      return;
    }
  }
  render() {
    let field = !this.state.editing ? (
      <div onDoubleClick={this.toggleEdit}>{this.state.value}</div>
    ) : (
      <input
        value={this.state.value}
        onChange={this.handleInputChange}
        onBlur={this.toggleEdit}
        onKeyDown={this.handleKeyDown}
      />
    );
    return <div>{field}</div>;
  }
}
