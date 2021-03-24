import { Component } from "react";

export default class FahrenheitToCentigrade extends Component {

  render() {
    return (
      <div>
        <label for="fahrenheit">ºF</label>
        <input
          type="number"
          name="fahrenheit"
          id="fahrenheit"
          value={this.props.fahrenheit}
          onChange={this.props.onFahrenheitChange}
        />
      </div>
    );
  }
}
