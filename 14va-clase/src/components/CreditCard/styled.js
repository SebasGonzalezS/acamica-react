import styled from 'styled-components'

export const CreditCardWrapper = styled.div`
  width: 295px;
  height: 174px;
  box-shadow: 0px 8px 28px rgba(134, 118, 251, 0.6);
  background: linear-gradient(121.05deg, #8676fb 0%, #ab7bff 100%);
  border-radius: 6px;
  color: white;
  margin: 20px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CreditCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
`

export const CreditCardBody = styled.div`
  font-size: 20px;
  line-height: 26px;
  display: flex;
  justify-content: space-between;
`

export const CreditCardFooter = styled.div`
  display: flex;
  justify-content: space-between;

  .footer-title {
    opacity: 0.8;
    font-size: 12px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .footer-value {
    font-weight: 600;
  }
`
