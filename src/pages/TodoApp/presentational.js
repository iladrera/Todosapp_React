import React, { Component } from "react";
import HeaderContainer from "../../components/Header";
import TodoListContainer from "../../components/TodoList";
import TodoShowFiltersContainer from "../../components/TodoShowFilters";
import ItemsLeftContainer from "../../components/ItemsLeft";
import { ClearCompletedContainer } from "../../components/ClearCompleted";

export default class TodoApp extends Component {
  _isTodoListEmpty = () => {
    return this.props.todoTasks.length > 0 ? false : true;
  };

  _showTodoList = () => {
    return (
      <section className="main">
        <TodoListContainer
          todoList={this.props.todoTasks}
          todoRemove={this.props.removeTodo}
          toggleCompleted={this.props.toggleCompleted}
          showFilters={this.props.showFilters}
        />

        <footer className="footer">
          <ItemsLeftContainer todoList={this.props.todoTasks} />
          <TodoShowFiltersContainer
            toggleShowFilters={this.props.toggleShowFilters}
          />
          <ClearCompletedContainer clearCompleted={this.props.clearCompleted} />
        </footer>
      </section>
    );
  };

  render() {
    return (
      <section className="todoapp">
        {/* la prop.newTodoTask lanza la funcion _addTodo, 
        asignandose como nuevo elemento al array: state.todoTasks */}
        <HeaderContainer newTodoTask={this.props.addTodo} />

        {/* si tengo elementos en state.todoTasks > _showTodoList()) */}
        {!this._isTodoListEmpty() && this._showTodoList()}
      </section>
    );
  }
}
