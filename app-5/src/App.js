import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image newImage={"https://via.placeholder.com/500"} />
      </div>
    );
  }
}

export default App;
