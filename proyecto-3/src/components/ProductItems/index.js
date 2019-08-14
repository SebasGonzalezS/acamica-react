import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { Container } from './styled'
import ProductItem from '../ProductItem'
import { getProductsThunk } from '../../store'

const ProductItems = ({ products, onGetProducts }) => {
  useEffect(() => {
    onGetProducts()
  }, [onGetProducts])

  return (
    <Container>
      {products.map(product => (
        <ProductItem key={product._id} {...product} />
      ))}
    </Container>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = dispatch => ({
  onGetProducts: () => dispatch(getProductsThunk()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItems)
