import React, { Component } from "react";

class AddInput extends Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.submitForm}>
          <div className="form-wrapper" name="checkListForm">
            <input type="text" id="thing" name="content" required />
            <button className="button" id="addbttn">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddInput;
