import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import { store } from './store'
import Shop from './pages/Shop'

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>,

  document.querySelector('#root')
)
