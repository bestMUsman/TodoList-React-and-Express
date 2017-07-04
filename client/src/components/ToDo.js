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
  }

  handleToDoChange(e) {
    this.setState({ newToDoValue: e.target.value });
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
            // this.nameInput.focus();
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
              className="editInputBox"
              autoFocus
            />
          </li>
        </form>
      </li>
    );
  }

  renderToDo() {
    return (
      <li className="item">
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
        </span>{" "}
        {this.props.todoData.content}
      </li>
      // <div className="tweed">
      //   {this.props.todoData.content}
      //   <button onClick={() => this.props.deleteForm(this.props.todoData.id)} >Delete</button>
      //   <button
      //     onClick={() => {
      //       this.setState({ isBeingEdited: true })
      //     }}>
      //     Edit
      //   </button>
      // </div>
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
