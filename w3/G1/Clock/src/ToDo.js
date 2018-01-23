/*
* @Author: bobur554395
* @Date:   2018-01-23 14:46:11
* @Last Modified by:   bobur554395
* @Last Modified time: 2018-01-23 15:30:02
*/
import React, { Component } from 'react';

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

  inputChanged(event){
    this.setState({
      inputValue: event.target.value 
    });
  }

  buttonClicked(){
    // let arr = this.state.items;
    // arr.push(this.state.inputValue);

    this.setState({
      items: [...this.state.items, this.state.inputValue],
      inputValue: ''
    });
  }

  deleteItem(_index){
    this.setState({
      items: this.state.items.filter((item, index) => index !== _index) 
    });
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.items.map((item, index) =>
              <li key={index}>
                  {item}
                  <button>Edit</button>
                  <button onClick={this.deleteItem.bind(this, index)}>Delete</button>
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