import styled from 'styled-components'

const Container = styled.header`
  height: 412px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${require('../../assets/header-x1.png')});
  position: relative;

  h2 {
    font-size: 64px;
    color: #ffffff;
    position: absolute;
    left: 133px;
    bottom: 52px;
  }
`

export { Container }
