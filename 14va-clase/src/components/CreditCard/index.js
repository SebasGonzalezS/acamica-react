import React from 'react'

import { CreditCardWrapper, CreditCardHeader, CreditCardBody, CreditCardFooter } from './styled'

const CreditCard = ({ logo, number, expiry, name }) => {
  return (
    <CreditCardWrapper>
      <CreditCardHeader>
        <p>{logo}</p>
        <p>...</p>
      </CreditCardHeader>

      <CreditCardBody>
        {number.split(' ').map(numberPart => (
          <p>{numberPart}</p>
        ))}
      </CreditCardBody>

      <CreditCardFooter>
        <div>
          <p className="footer-title">Card Holder</p>
          <p className="footer-value">{name}</p>
        </div>
        <div>
          <p className="footer-title">Expires</p>
          <p className="footer-value">{expiry}</p>
        </div>
      </CreditCardFooter>
    </CreditCardWrapper>
  )
}

export default CreditCard
