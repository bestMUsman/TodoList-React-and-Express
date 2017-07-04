import React, { Component } from "react";
import Header from "./components/Header";
import AddInput from "./components/AddInput";
import ToDoList from "./components/ToDoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchDataLoaded: false,
      fetchData: [],
      content: "",
    };
    this.submitForm = this.submitForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
    this.editForm = this.editForm.bind(this);
  }

  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData() {
    fetch("http://localhost:3001/api/todolist")
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState(prevState => {
          return {
            fetchDataLoaded: true,
            fetchData: responseJson.data.todolist,
          };
        });
      });
  }

  deleteForm(id) {
    fetch(`http://localhost:3001/api/todolist/${id}`, {
      method: "DELETE",
    }).then(response => {
      if (response.status === 200) {
        this.fetchAllData();
      }
    });
  }

  editForm(e, id) {
    fetch(`http://localhost:3001/api/todolist/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: e.target.content.value,
      }),
    }).then(response => {
      this.fetchAllData();
    });
  }

  submitForm(e) {
    e.preventDefault();
    fetch("http://localhost:3001/api/todolist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: e.target.content.value,
      }),
    }).then(response => {
      if (response.status === 200) {
        this.fetchAllData();
      }
    });
    e.target.content.value = "";
  }

  fetchComplete() {
    if (this.state.fetchDataLoaded) {
      return (
        <ToDoList
          fetchData={this.state.fetchData}
          deleteForm={this.deleteForm}
          editForm={this.editForm}
        />
      );
    } else return <p className="loading">Loading....</p>;
  }

  render() {
    return (
      <div className="main">
        <Header />
        <AddInput submitForm={this.submitForm} />
        {this.fetchComplete()}
      </div>
    );
  }
}

export default App;
