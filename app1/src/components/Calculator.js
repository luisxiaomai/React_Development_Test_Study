import React from 'react'
import style from "./Calculator.css"
import {toCelsius,toFahrenheit,tryConvert} from './../utils/Utils'

  /*
  function BoilingVerdict(props){
    if(props.celsius >= 100){
      return <p> water fired</p>;
    }
    return <p> water not fired</p>;

  }
  */

  const BoilingVerdict = ({celsius}) => {
    if(celsius >= 100){
      return <p> water fired</p>;
    }
    return <p> water not fired</p>;
  }

  class TemperatureInput extends React.Component{
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.scalesName = {
        c: 'Celsius',
        f: 'Fahrenheit'
      };
    }

    handleChange(e){
      this.props.onTemperatureChange(e.target.value);
    }

    render(){
      const scale = this.props.scale;
      const temperature = this.props.temperature;
      return (
        <fieldset>
          <legend>Input {this.scalesName[scale]}: </legend>
          <input value = {temperature} onChange = {this.handleChange} />
        </fieldset>
      )
    }
  }

  export default class Calculator extends React.Component{
    constructor(props){
      super(props);
      this.state = {temperature:"", scale:"c"};
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    handleCelsiusChange(temperature){
      this.setState({scale:"c",temperature})
    }
    handleFahrenheitChange(temperature){
      this.setState({scale:"f",temperature})

    }
    render(){
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === "f" ? tryConvert(temperature,toCelsius):temperature;
      const fahrenheit = scale === "c" ? tryConvert(temperature,toFahrenheit):temperature;
      return (
        <div className="calculator">
          <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
      )
    }
  }