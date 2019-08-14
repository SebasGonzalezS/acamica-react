import styled from 'styled-components'

const Container = styled.div`
  width: 276px;
  height: 276px;
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 12px 12px 24px;
  transition: all 400ms ease-in-out;

  img {
    height: 180px;
    max-width: 250px;
    border-bottom: 1px solid #d9d9d9;
  }

  .product-info {
    padding-top: 20px;
  }

  :hover {
    color: #ffffff;
    cursor: pointer;
    transform: scale(1.05);
    background-color: rgb(10, 212, 250, 0.8);

    img {
      mix-blend-mode: multiply;
    }
  }
`

export { Container }
