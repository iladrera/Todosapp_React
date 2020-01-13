import React, { Component } from "react";
import { Header } from "./presentational";

const INITIAL_STATE = {
  inputValue: ""
};

export default class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  _onChangeValue = e => {
    // cada vez que el input cambia acualizo el state
    this.setState({ inputValue: e.target.value });
  };

  _onKeyUp = e => {
    if (e.keyCode === 13) {
      if (/\S/.test(this.state.inputValue)) {
        // si es enter(keyCode 13) y state.inputValue no es solo whitespaces
        // devuelvo inputValue atraves de la .props.newTodoTask
        this.props.newTodoTask(this.state.inputValue);
        // tras devolver el valor del input, lo devuelvo a su state inicial
        this.setState({ ...INITIAL_STATE });
      }
    }
  };

  render() {
    return (
      <Header
        inputValue={this.state.inputValue}
        inputChangeValue={this._onChangeValue}
        inputKeyUp={this._onKeyUp}
      />
    );
  }
}
