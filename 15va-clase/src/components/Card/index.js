import React from 'react'
import { Link } from 'react-router-dom'

const Card = props => {
  const { name, identifier, description, cost, images } = props

  return (
    <Link to={`/shop/${identifier}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={images.info} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Name: {name}</p>
              <p className="subtitle is-6">Cost: {cost}usd</p>
            </div>
          </div>

          <div className="content">
            {description}
            <br />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
