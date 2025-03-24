import React, { Component } from 'react';

class ToggleGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello"
    };
    
   
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      message: "Goodbye"
    });
  }
  
  render() {
    return (
      <div>
        <span>{this.state.message}</span>{" "}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ToggleGreeting;