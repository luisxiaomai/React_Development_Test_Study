import React, { Component } from "react"
import "./App.css"
import FilterableProductTable from "./components/FilterableProductTable"
import Calculator from "./components/Calculator"
import CounterContainer from './containers/CounterContainer'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import { Link, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Calculator</Link></li>
              <li><Link to='/CounterContainer'>CounterContainer</Link></li>
              <li><Link to='/FilterableProductTable'>FilterableProductTable</Link></li>
              <li><Link to='/todos'>todos</Link></li>

            </ul>
          </nav>
        </header>
        <div className="App">
          <Route exact path='/' component={Calculator} />
          <Route exact path='/CounterContainer' component={CounterContainer} />
          <Route exact path='/FilterableProductTable' render={(props) => (
            <FilterableProductTable {...props} products={this.props.products} />
          )} />
          <Route exact path='/todos' render={(props) => (
            <div style={{ backgroundColor: 'white', padding: 15, margin: 15 }}>
              <AddTodo />
              <VisibleTodoList />
              <Footer />
            </div>
          )} />

        </div>
      </div>

    )
  }
}

export default App;