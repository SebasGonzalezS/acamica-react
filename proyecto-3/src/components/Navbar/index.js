import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { Container } from './styled'
import UserPoints from '../UserPoints'
import { getUserThunk } from '../../store'

const Navbar = ({ user, onGetUser }) => {
  useEffect(() => {
    onGetUser()
  }, [onGetUser])

  return (
    <Container>
      <img src={require('../../assets/aerolab-logo.svg')} alt="Aerolab" />

      {user && (
        <div className="user-info">
          <h3>{user.name}</h3>
          <UserPoints points={user.points} />
        </div>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  onGetUser: () => dispatch(getUserThunk()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
