import React from 'react'
import { connect } from 'react-redux'

import { Container } from './styled'
import { redeemProductThunk } from '../../store'

const ProductItem = ({ _id, name, cost, category, img, onRedeemProduct }) => {
  const handleRedeemProduct = productId => onRedeemProduct(productId)

  return (
    <Container onClick={() => handleRedeemProduct(_id)}>
      <img src={img.url} alt={name} />
      <div className="product-info">
        <p>{category}</p>
        <h4>{name}</h4>
      </div>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  onRedeemProduct: productId => dispatch(redeemProductThunk(productId)),
})

export default connect(
  null,
  mapDispatchToProps
)(ProductItem)
