import React, { Component } from 'react';


class App extends Component {
  render() {
    return <h1>Hello {this.props.name} {this.props.age}!</h1>;
  }
}


export default App;
