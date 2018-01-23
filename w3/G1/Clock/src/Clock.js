/*
* @Author: bobur554395
* @Date:   2018-01-23 14:20:47
* @Last Modified by:   bobur554395
* @Last Modified time: 2018-01-23 14:43:17
*/
import React, { Component } from 'react';

class Clock extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      date: new Date(),
      cnt: 0
    };

    this.tick = this.tick.bind(this);
    this.incCnt = this.incCnt.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000);    
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  incCnt(){
    this.setState({
      cnt: this.state.cnt + 10,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toString()}</h1>
        <h1>{this.state.cnt}</h1>
        <button onClick={this.incCnt}>Inc Cnt</button>
      </div>
    );
  }
}

export default Clock;