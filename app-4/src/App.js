import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
  }
  handleChangeUser(value){
    this.setState({username: value});
  }
  handleChangePass(value){
    this.setState({password: value});
  }
  handleClick(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }


  // displayInfo = `Username: ${this.state.username} Password: ${this.state.password}`
  


  render() {
    return (
      <div className="App">
      <input onChange={e => this.handleChangeUser(e.target.value)} type="text"/>
      <input onChange={e => this.handleChangePass(e.target.value)} type="text"/>



      <button onClick={e => this.handleClick(e.target.value)}>Login</button>
      </div>
    );
  }
}


export default App;
