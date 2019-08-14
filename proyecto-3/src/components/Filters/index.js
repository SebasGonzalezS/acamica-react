import React, { useState } from 'react'

import { Container } from './styled'
import Button from '../Button'

const filters = [{ text: 'Most recent' }, { text: 'Lowest price' }, { text: 'Highest price' }]

const Filters = () => {
  const [activeButton, setActiveButton] = useState(filters[0].text)

  const handleButtonClick = buttonName => setActiveButton(buttonName)

  return (
    <Container>
      <div>
        <div className="total-products">16 of 32 products</div>
        <div className="sort-by">
          <span>Sort by:</span>
          {filters.map(filter => (
            <Button
              key={filter.text}
              active={activeButton === filter.text}
              onClick={() => handleButtonClick(filter.text)}
            >
              {filter.text}
            </Button>
          ))}
        </div>
      </div>
      <div className="more-products">
        <img src={require('../../assets/icons/arrow-right.svg')} alt="Arrow Right" />
      </div>
    </Container>
  )
}

export default Filters
