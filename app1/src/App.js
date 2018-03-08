import React, {Component} from "react"
import "./App.css"
import FilterableProductTable from "./FilterableProductTable.js"
import Calculator from "./Calculator.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={this.props.products}/>
        <Calculator/>
      </div>
    )
  }
}

export default App;