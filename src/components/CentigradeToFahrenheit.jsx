import { Component } from "react";

export default class CentigradeToFahrenheit extends Component {

  render() {
    return (
      <div>
        <label for="centigrade">ºC</label>
        <input
          type="number"
          name="centigrade"
          id="centigrade"
          value={this.props.centigrade}
          onChange={this.props.onCentigradeChange}
        />
      </div>
    );
  }
}
