import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies.jsx";

class App extends Component {
  render() {
    return (
      <div className="contain">
        <Movies />
      </div>
    );
  }
}

export default App;
