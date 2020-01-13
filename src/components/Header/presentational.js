import React from "react";

export const Header = props => (
  <header className="header">
    <h1>todos</h1>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={props.inputChangeValue}
      onKeyUp={props.inputKeyUp}
      type="text"
      value={props.inputValue}
    />
  </header>
);
