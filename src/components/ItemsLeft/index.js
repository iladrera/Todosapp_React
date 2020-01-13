import React, { Component } from "react";

export default class ItemsLeftContainer extends Component {
  // function que devuelve el total de Todos Activos
  _itemsLeft = () => {
    let itemsLeft = 0;
    this.props.todoList.map((todoListElement, index) => {
      if (!todoListElement.completed) {
        itemsLeft += 1;
      }
    });
    return itemsLeft;
  };

  render() {
    let pluralPref = "";
    if (this.props.itemsLeft > 1) {
      pluralPref = "s";
    }
    return (
      <span className="todo-count">
        {this._itemsLeft()} item{pluralPref} left
      </span>
    );
  }
}
