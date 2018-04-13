import React, { Component } from 'react';
import client from './client'

class ToDo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      inputValue: ''
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this); 

  }

  componentDidMount(){
    client.getTodos((todos) => {
      this.setState({
        items: todos
      });
    });
  }

  inputChanged(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  buttonClicked() {

    const data = {
      'title': this.state.inputValue,
      'created_at': new Date().toISOString()
    }
    
    this.setState({
      items: [...this.state.items, data],
      inputValue: ''
    });
    
    client.createTodo(data, (todo) => {
      if (todo)
        alert('Created!');
    });  

  }

  deleteItem(id) {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id)
    });

    client.deleteTodo(id, (todo) => {
      if(todo)
        alert('Deleted!')
    });
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.items.map((item, index) =>
              <li key={index}>
                <h2>{item.title}</h2>
                <p>{item.created_at}</p>
                <button onClick={this.deleteItem.bind(this, item.id)}>Delete</button>
              </li>
            )
          }
        </ul>
        <input value={this.state.inputValue} onChange={this.inputChanged} />
        <button onClick={this.buttonClicked}>Add item</button>
      </div>
    );
  }
}


export default ToDo;