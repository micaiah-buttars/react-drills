import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      numbers: [1, 2, 3, 4, 5]
    }
  }


  render() {
    let numArr = this.state.numbers.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
      {numArr}
      </div>
    );
  }
}

export default App;
