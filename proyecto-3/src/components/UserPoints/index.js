import React from 'react'

import { Container } from './styled'

const UserPoints = ({ points }) => {
  return (
    <Container>
      <span className="points">{points}</span>
      <img className="coin" src={require('../../assets/icons/coin.svg')} alt="Coin" />
    </Container>
  )
}

export default UserPoints
