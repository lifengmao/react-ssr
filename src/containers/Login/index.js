import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <div>
        Login ffdddd
        <button onClick={this.handleClick}>login click</button>
      </div>
    )
  }
  handleClick() {
    alert('login click')
  }
};

export default Login;