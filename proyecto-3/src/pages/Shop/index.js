import React from 'react'

import { Container } from './styled'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Filters from '../../components/Filters'
import ProductItems from '../../components/ProductItems'

const Shop = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <div className="container">
        <Filters />
        <ProductItems />
      </div>
    </Container>
  )
}

export default Shop
