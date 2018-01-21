import React, { Component } from 'react';

class ToDo extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      items: [],
      inputValue: ""
    };

    this.inputChanged = this.inputChanged.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  inputChanged(e){
    this.setState({
      inputValue: e.target.value
    });
  }

  buttonClicked(){
    this.setState({
      items: [...this.state.items, this.state.inputValue],
      inputValue: '',
    });
  }

  deleteItem(index){
    this.setState({
      items: this.state.items.filter(function(el, i){ return i !== index })
    });
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.items.map((item, index) =>
              <li key={index}>{item}<button onClick={this.deleteItem.bind(this, index)}>Delete</button></li>
            )
          }
        </ul>  
        <input value={this.state.inputValue} onChange={this.inputChanged} />
        <button onClick={this.buttonClicked} >Add Item</button>
      </div>
    );
  }
}


export default ToDo;
