import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { date, handleChange } = this.props

    return <input type="date" value={date} onChange={handleChange} />
  }
}

export default Input
