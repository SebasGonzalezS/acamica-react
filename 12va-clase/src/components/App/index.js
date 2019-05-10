import React, { Component } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

import Hero from '../Hero'
import Filters from '../Filters'
import Hotels from '../Hotels'

dayjs.locale('es')

const API_URL = 'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica'

class App extends Component {
  state = {
    filters: {
      dateFrom: dayjs(),
      dateTo: dayjs(),
      country: '',
      price: 0,
      rooms: 0,
    },
    hotels: [],
  }

  async componentDidMount() {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()

      this.setState({ hotels: data })
    } catch (error) {
      console.error(error)
    }
  }

  handleFilterChange = newFilters => this.setState({ filters: newFilters })

  render() {
    const { filters, hotels } = this.state

    return (
      <div className="container">
        <Hero filters={filters} />
        <Filters filters={filters} onFilterChange={this.handleFilterChange} />
        <Hotels data={hotels} />
      </div>
    )
  }
}

export default App
