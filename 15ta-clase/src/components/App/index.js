import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css'
import Nav from '../Nav'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Shop from '../../pages/Shop'
import ItemDetail from '../../pages/ItemDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Shop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDetail} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
