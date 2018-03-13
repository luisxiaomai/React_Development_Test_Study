import React, { Component } from "react"
import "./App.css"
import FilterableProductTable from "./components/FilterableProductTable"
import Calculator from "./components/Calculator"
import CounterContainer from './containers/CounterContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={this.props.products} />
        <Calculator />
        <CounterContainer/>
      </div>
    )
  }
}

export default App;