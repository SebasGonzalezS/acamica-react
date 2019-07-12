import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from '../components/Card'
import { getProductsRequest } from '../store'

class Shop extends Component {
  componentDidMount() {
    const { getProductsItems } = this.props
    console.log('1) componentDidMount dispara getProductsItems ')
    getProductsItems()
  }

  render() {
    const { productsItems, loading, error } = this.props
    // console.log('6) obtengo el loading en true de fetchProductsRequest')
    // console.log('11)  obtengo el productsItems de fetchProductsSuccess')

    return (
      <div>
        <h1 className="is-size-2">Fortnite Shop</h1>

        {loading && <p>loading...</p>}
        {error && <p>Ups, hubo un error: {error}</p>}

        <div className="columns">
          {productsItems.length > 0 &&
            productsItems.slice(0, 3).map(item => (
              <div className="column is-4" key={item.identifier}>
                <Card {...item} />
              </div>
            ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    productsItems: state.products,
    loading: state.loading,
    error: state.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProductsItems: () => dispatch(getProductsRequest()),
  }
}

// Sino utilizo mapDispatchToProps ( 2do argumento del connnect ) entonces nos va a llegar por props el método dispatch
// Si utilizo mapDispatchToProps entonces NO nos va a llegar por props el método dispatch
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop)
