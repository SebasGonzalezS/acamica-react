import styled from 'styled-components'

const Container = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 42px;
  background-color: white;

  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
      margin-right: 18px;
      cursor: pointer;
    }
  }
`

export { Container }
