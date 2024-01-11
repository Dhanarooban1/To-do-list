import React, { Component } from "react";

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputText: "",
    };

    //   this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  handleSubmit = () => {
    if (this.state.inputText === "") {
      return;
    }

    this.setState({
      todos: [...this.state.todos, this.state.inputText],
      inputText: "",
    });
  };

  handleUpdate = (idx, text) => {
    let newArr = this.state.todos.map((ele, index) => {
      if (index === idx) {
        return text;
      }
      return ele;
    });

    this.setState({
      todos: newArr,
    });
  };

  handleDelete = (idx) => {
    let newArr = this.state.todos.filter((ele, index) => {
      if (index !== idx) {
        return ele;
      }
    });

    this.setState({
      todos: newArr,
    });
  };

  render() {
    return (
      <div id="mo">
        <div>
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSubmit}>ADD ITEM</button>
        </div>

        <div>
          {this.state.todos.map((ele, idx) => {
            return (
              <div>
                <input
                  className="inputElement"
                  type="text"
                  value={ele}
                  onChange={(e) => this.handleUpdate(idx, e.target.value)}
                />
                <button
                  onClick={() => {
                    this.handleDelete(idx);
                  }}
                >
                  Delete Item
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ToDo;
