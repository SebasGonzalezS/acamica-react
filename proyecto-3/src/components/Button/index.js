import React from 'react'

import { Container } from './styled'

const Button = ({ children, active, onClick }) => {
  return (
    <Container active={active} onClick={onClick}>
      {children}
    </Container>
  )
}

export default Button
