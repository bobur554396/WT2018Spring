import React, { Component } from 'react';

class Clock extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      date: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick(){
    this.setState({
      date: new Date()
    });  
      
  }


  render() {
    return (
      <h3>{this.state.date.toString()}</h3>
    );
  }
}


export default Clock;