import React from 'react'
import styled from 'styled-components'

import CreditCard from '../CreditCard'

const Balance = styled.p`
  font-size: 42px;
  color: var(--black);
`

class PaymentApp extends React.Component {
  render() {
    return (
      <div className="container">
        <Balance>$ 926.21</Balance>
        <CreditCard logo={'visa'} number={'**** **** **** 8014'} expiry={'08/21'} name="Lindsey Johnson" />
      </div>
    )
  }
}

export default PaymentApp
