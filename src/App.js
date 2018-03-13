import React, { Component } from "react"
import "./App.css"
import FilterableProductTable from "./components/FilterableProductTable"
import Calculator from "./components/Calculator"
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={this.props.products} />
        <Calculator />
        <Counter
          value={this.props.value}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
        />
      </div>
    )
  }
}

export default App;