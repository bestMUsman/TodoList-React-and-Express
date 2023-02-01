import React, { Component } from "react";
import $ from "jquery";
import ReactDOM from "react-dom";
import ToDo from "./ToDo";
require("jquery-ui/ui/widgets/sortable");

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
    this.getIdsForSort = this.getIdsForSort.bind(this);
  }

  componentDidMount() {
    this.$node = $(this.refs.sortable);
    this.$node.sortable({
      update: (event, ui) => this.handleOnUpdate(event, ui),
    });
  }

  getIdsForSort() {
    let items = document.querySelectorAll("li");
    let itemsId = [];
    for (let i = items.length - 1; i > -1; i--) {
      itemsId.push(items[i].id);
    }
    return itemsId;
  }

  handleOnUpdate(event, ui) {
    this.props.reOrderList(this.getIdsForSort());
  }

  render() {
    return (
      <section className="todo">
        <ul className="todo-list" id="todo" ref="sortable">
          {this.props.fetchDataLoaded ? (this.props.fetchData.map(todo => {
            return (
              <ToDo
                todoData={todo}
                key={todo.id}
                deleteForm={this.props.deleteForm}
                editForm={this.props.editForm}
                editChecked={this.props.editChecked}
              />
            );
          })): <p className="loading">Loading....</p>}
        </ul>
      </section>
    );
  }
}

export default ToDoList;
