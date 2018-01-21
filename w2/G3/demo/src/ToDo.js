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

  render() {
    return (
      <div>
        <ul>
          {
            this.state.items.map((item, index) =>
              <li key={index}>{item}</li>
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
