import React, { Component } from "react"
import "./App.css"
import FilterableProductTable from "./components/FilterableProductTable"
import Calculator from "./components/Calculator"
import CounterContainer from './containers/CounterContainer'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={this.props.products} />
        <Calculator />
        <CounterContainer />
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;