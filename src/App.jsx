import "./App.css";
import { Component } from "react";
import Title from "./components/Title";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Lifting State Up</Title>
      </div>
    );
  }
}
