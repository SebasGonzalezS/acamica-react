import React, { Component } from 'react'

import Card from '../components/Card'

class Shop extends Component {
  state = {
    items: [],
    error: null,
    isLoading: false,
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true })

      const response = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/items/list')
      const data = await response.json()

      this.setState({ items: data })
    } catch (error) {
      console.log('TCL: Shop -> componentDidMount -> error', error)
      this.setState({ error: String(error) })
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { items, error, isLoading } = this.state

    return (
      <div>
        <h1 className="is-size-2">Fortnite Shop</h1>

        {isLoading && <p>loading...</p>}
        {error && <p>Ups, hubo un error: {error}</p>}

        <div className="columns">
          {items.length > 0 &&
            items.slice(0, 3).map(item => (
              <div className="column is-4" key={item.identifier}>
                <Card {...item} />
              </div>
            ))}
        </div>
      </div>
    )
  }
}
export default Shop
