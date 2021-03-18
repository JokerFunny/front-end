import React, { Component } from "react";
import AddTodo from "./TODO/AddTodo";
import TodoList from "./TODO/TodoList";
import VisibilityFilters from "./TODO/VisibilityFilter";
import "./styles.css";

class TodoPage extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className="todo-app">
          <h2>Todo List</h2>
          <AddTodo />
          <TodoList />
          <VisibilityFilters />
        </div>
      </div>
    );
  }
}

export { TodoPage };