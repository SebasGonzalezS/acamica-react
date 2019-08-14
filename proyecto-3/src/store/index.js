import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

/* Helpers */
import api from '../utils/api'

/* Action */
const GET_USER = 'GET_USER'
const GET_PRODUCTS = 'GET_PRODUCTS'

/* Action Creator */
const getUser = payload => ({ type: GET_USER, payload })
const getProducts = payload => ({ type: GET_PRODUCTS, payload })

/* Initial State */
const INITIAL_STATE = {
  user: null,
  products: [],
}

/* Reducer */
const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
      }
    }

    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      }
    }

    default: {
      return state
    }
  }
}

/* Thunks */
const getUserThunk = () => {
  return async dispatch => {
    const user = await api.getUser()
    dispatch(getUser(user))
  }
}

const getProductsThunk = () => {
  return async dispatch => {
    const products = await api.getProducts()
    dispatch(getProducts(products))
  }
}

const redeemProductThunk = productId => {
  return async dispatch => {
    const message = await api.redeemProduct(productId)
    dispatch(getUserThunk())
  }
}

/* Store creation */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(storeReducer, composeEnhancers(applyMiddleware(thunk)))

export { store, getUser, getUserThunk, getProductsThunk, redeemProductThunk }
