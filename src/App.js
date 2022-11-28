import React, { Component } from "react";
import "./App.css";
import Window from "./components/Window";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Window number="8"></Window>
        <Window number="10"></Window>
        <Window number="13"></Window>
        <Window number="5"></Window>
        <Window number="19"></Window>
        <Window number="21"></Window>
        <Window number="16"></Window>
        <Window number="2"></Window>
        <Window number="22"></Window>
        <Window number="3"></Window>
        <Window number="18"></Window>
        <Window number="7"></Window>
        <Window number="14"></Window>
        <Window number="23"></Window>
        <Window number="9"></Window>
        <Window number="4"></Window>
        <Window number="20"></Window>
        <Window number="17"></Window>
        <Window number="11"></Window>
        <Window number="1"></Window>
        <Window number="24"></Window>
        <Window number="6"></Window>
        <Window number="15"></Window>
        <Window number="12"></Window>
      </div>
    );
  }
}

export default App;
