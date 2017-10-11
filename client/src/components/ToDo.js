import React, { Component } from "react";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: false,
      newToDoValue: this.props.todoData.content,
      focus: false,
    };
    this.renderEditForm = this.renderEditForm.bind(this);
    this.handleToDoChange = this.handleToDoChange.bind(this);
    this.handleCheckedSubmit = this.handleCheckedSubmit.bind(this);
  }

  handleToDoChange(e) {
    this.setState({ newToDoValue: e.target.value });
  }

  handleCheckedSubmit() {
    let checked;
    if (this.props.todoData.checked) {
      checked = false;
    } else {
      checked = true;
    }
    this.props.editChecked(this.props.todoData.id, this.props.todoData.content, checked);
  }

  renderEditForm() {
    return (
      <li className="editItem">
        <form
          id="editForm"
          onSubmit={e => {
            e.preventDefault();
            this.props.editForm(e, this.props.todoData.id);
            this.setState({ isBeingEdited: false });
          }}
        >
          <li className="item">
            <button className="editimgbox">
              <img
                src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698873-icon-136-document-edit-512.png"
                className="editimg currentlyBeingEditedImg"
                alt="edit button image"
              />
            </button>
            <span
              className="signc"
              onClick={() => this.props.deleteForm(this.props.todoData.id)}
            >
              <div className="signcc">&times;</div>
            </span>
            <input
              type="text"
              value={this.state.newToDoValue}
              onChange={this.handleToDoChange}
              name="content"
              className="content"
              autoFocus
            />
            <input
              type="hidden"
              value={this.props.todoData.checked}
              name="checked"
            />
          </li>
        </form>
      </li>
    );
  }

  renderToDo() {
    return (
      <li className={"item " + (this.props.todoData.checked ? "checked" : "")}>
        <div
          className="editimgbox"
          onClick={() => {
            this.setState({ isBeingEdited: true });
          }}
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698873-icon-136-document-edit-512.png"
            className="editimg"
            alt="edit button image"
          />
        </div>
        <span
          className="signc"
          onClick={() => this.props.deleteForm(this.props.todoData.id)}
        >
          <div className="signcc">&times;</div>
        </span>
        <div
          className="content" 
          onClick={this.handleCheckedSubmit}
        >
          {this.props.todoData.content}
        </div>
      </li>
    );
  }

  render() {
    if (this.state.isBeingEdited === false) {
      return this.renderToDo();
    } else {
      return this.renderEditForm();
    }
  }
}

export default ToDo;
