import React, { Component } from "react";

class AddInput extends Component {
  constructor(props) {
    super(props);
    this.trimSpaces = this.trimSpaces.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  trimSpaces(e) {
    if (e.target.content.value.trim() === "") {
      return false;
    } else {
      e.target.content.value = e.target.content.value.trim();
      return true;
    }
  }

  handleForm(e) {
    e.preventDefault();
    if (this.trimSpaces(e)) {
      this.props.submitForm(e);
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={e => this.handleForm(e)}>
          <div className="form-wrapper" name="checkListForm">
            <input type="text" id="thing" name="content" required />
            <button className="button" id="addbttn">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddInput;
