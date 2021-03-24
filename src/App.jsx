import "./App.css";
import { Component } from "react";
import Title from "./components/Title";
import TemperatureInput from "./components/TemperatureInput";

export default class App extends Component {
  state = {
    centigrade: 0,
    fahrenheit: 32,
  };

  onFahrenheitChange = (event) => {
    this.setState({
      fahrenheit: event.target.value,
      centigrade: this.convertFtoC(event.target.value),
    });
  };

  onCentigradeChange = (event) => {
    this.setState({
      centigrade: event.target.value,
      fahrenheit: this.convertCtoF(event.target.value),
    });
  };

  convertCtoF = (centigrade) => {
    return Math.round((centigrade * 9) / 5 + 32);
  };

  convertFtoC = (centigrade) => {
    return Math.round(((centigrade - 32) * 5) / 9);
  };

  render() {
    return (
      <div className="App">
        <Title>ºC to ºF converter</Title>
        <TemperatureInput
          unitName="centigrade"
          units="C"
          temperature={this.state.centigrade}
          onChange={this.onCentigradeChange}
        />
        <TemperatureInput
          unitName="fahrenheit"
          units="F"
          temperature={this.state.fahrenheit}
          onChange={this.onFahrenheitChange}
        />
      </div>
    );
  }
}
