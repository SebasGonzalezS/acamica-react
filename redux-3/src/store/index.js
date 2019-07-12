import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: null,
}

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST': {
      console.log('5) se ejecuta fetchProductsRequest en reducer')

      return {
        ...state,
        loading: true,
      }
    }

    case 'FETCH_PRODUCTS_SUCCESS': {
      const { products } = action.payload
      console.log('10) se ejecuta fetchProductsSuccess en reducer')

      return {
        ...state,
        products,
        loading: false,
      }
    }

    case 'FETCH_PRODUCTS_FAILURE': {
      const { error } = action.payload

      return {
        ...state,
        error,
        loading: false,
      }
    }

    default: {
      return state
    }
  }
}

// Concepto nuevo: Thunk
// Tenemos que devolver una función que nos brinda por parámetros el dispatch y el getState()
// Para que dentro de esta poder realizar lógica asincrónica y despachar las acciones que querramos posteriormente
const getProductsRequest = () => {
  console.log('2) se ejecuta el thunk getProductsItems ')

  return async function(dispatch) {
    try {
      console.log('3) se dispara fetchProductsRequest')
      dispatch(fetchProductsRequest())

      console.log('7) se dispara el fetch a la API')
      const BASE_URL = 'https://fortnite-public-api.theapinetwork.com'
      const response = await fetch(`${BASE_URL}/prod09/items/list`)
      const products = await response.json()

      console.log('8) se dispara fetchProductsSuccess')
      dispatch(fetchProductsSuccess(products))
    } catch (error) {
      dispatch(fetchProductsFailure(error.message))
    }
  }
}

// Concepto nuevo: Action Creators
// Es una función que genera la acción devolviendo el objeto de la misma
// Nos abstrae de estar generando la acción/objeto a mano, una y otra vez
const fetchProductsRequest = () => {
  console.log('4) se ejecuta fetchProductsRequest en actionCreator')
  return {
    type: 'FETCH_PRODUCTS_REQUEST',
  }
}

const fetchProductsSuccess = products => {
  console.log('9) se ejecuta fetchProductsSuccess en actionCreator')

  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: { products },
  }
}

const fetchProductsFailure = error => {
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: { error },
  }
}

// Concepto nuevo: Middleware
const middlewares = applyMiddleware(thunk)
const store = createStore(productsReducer, middlewares)

export { store as default, getProductsRequest }
