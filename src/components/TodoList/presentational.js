import React, { Component } from "react";

export default class TodoList extends Component {
  _todoListElement(todoListElement, index) {
    return (
      <li key={index} className={todoListElement.completed ? "completed" : ""}>
        <div
          className="view"
          onDoubleClick={() => alert("aqui habria que editar el elemento")}
        >
          <input
            className="toggle"
            checked={todoListElement.completed}
            onChange={() => {
              this.props.toggleCompleted(index);
            }}
            type="checkbox"
          />
          <label>{todoListElement.title}</label>
          <button
            className="destroy"
            // onclick > ejecuto la props.function todoRemove de ese index
            onClick={() => {
              this.props.todoRemove(index);
            }}
          />
        </div>
      </li>
    );
  }

  render() {
    return (
      <ul className="todo-list">
        {this.props.todoList.map((todoListElement, index) => {
          switch (this.props.showFilters) {
            case "active": {
              if (!todoListElement.completed) {
                return this._todoListElement(todoListElement, index);
              }
              break;
            }
            case "completed": {
              if (todoListElement.completed) {
                return this._todoListElement(todoListElement, index);
              }
              break;
            }
            default: {
              return this._todoListElement(todoListElement, index);
            }
          }
        })}
      </ul>
    );
  }
}
