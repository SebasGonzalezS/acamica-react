import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import Nav from '../Nav'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Shop from '../../pages/Shop'
import ItemDetail from '../../pages/ItemDetail'
import store from '../../store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/shop/:id" component={ItemDetail} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
