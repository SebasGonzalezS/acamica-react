import React, { Component } from 'react'

import Card from '../components/Card'

const categoriesId = {
  politica: '1',
  internacionales: '2',
  tecnologia: '3',
  espectaculos: '4',
  deportes: '5',
}

// Este "slug" llega por "this.props.match.params.slug" que esta donde definimos la Ruta, por ej: <Route path="/categorias/:slug" component={Categories} />
const slug = 'politica'

console.log('categoriesId de politica es:', categoriesId[slug])

class ItemDetail extends Component {
  state = {
    item: null,
    error: null,
    isLoading: false,
  }

  componentDidMount() {
    this.fetchForniteItem()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchForniteItem()
    }
  }

  async fetchForniteItem() {
    const { id } = this.props.match.params

    try {
      this.setState({ isLoading: true })

      const response = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${id}`)
      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      this.setState({ item: data })
    } catch (error) {
      this.setState({ error: String(error) })
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { item, error, isLoading } = this.state

    return (
      <div>
        <h1 className="is-size-2">Fortnite Item Detail</h1>

        {isLoading && <p>loading...</p>}
        {error && <p>Ups, hubo un error: {error}</p>}

        {item && (
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <p className="title">
                {item.name} - {item.type}
              </p>
              <p className="subtitle">{item.description}</p>
              <figure className="image is-4by3">
                <img src={item.images.transparent} alt={item.name} />
              </figure>
            </article>
          </div>
        )}
      </div>
    )
  }
}
export default ItemDetail
