import React, { Component } from "react";
import ToDo from "./ToDo";

class ToDoList extends Component {
  render() {
    return (
      <section className="todo">
        <ul className="todo-list" id="todo">
          {this.props.fetchData.map(todo => {
            return (
              <ToDo
                todoData={todo}
                key={todo.id}
                deleteForm={this.props.deleteForm}
                editForm={this.props.editForm}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ToDoList;
