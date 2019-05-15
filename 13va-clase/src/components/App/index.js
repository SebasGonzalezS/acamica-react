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
    hotelsBackup: [],
    hotelsFiltered: [],
  }

  async componentDidMount() {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()

      // hotelsBackup va a tener una copia de los hoteles iniciales sin modificar
      // en caso que hagamos una limpieza de filtros y quisieramos mostrar todos nuevamente

      // hotelsFiltered va a ser el array de hoteles que van a estar efectivamente filtrados por:
      // desde fecha X (dateFrom) hasta fecha Y (dateTo), por país, por precio, y por cantidad de habitaciones

      this.setState({ hotelsBackup: data, hotelsFiltered: data })
    } catch (error) {
      console.error(error)
    }
  }

  handleFilterChange = newFilters => {
    this.setState({ filters: newFilters }, () => {
      // El callback del setState se ejecuta efectivamente cuando el estado se seteo.
      // Lo cual la documentación de React misma nos dice que no nos asegura que el estado se haya seteado si ejecutamos algo de código en la próximas lineas.
      // setState no devuelve una Promise cuando se cumple por ende no podemos anteponer await al mismo.
      // Es decir que estoy seguro que ahora filters tiene como valor newFilters.

      this.handleApplyFilters()
    })
  }

  handleApplyFilters = () => {
    const { filters, hotelsBackup } = this.state

    const hotelsFiltered = hotelsBackup
      .filter(hotel => dayjs(hotel.availabilityFrom).isAfter(filters.dateFrom))
      .filter(hotel => dayjs(hotel.availabilityTo).isBefore(filters.dateTo))
      .filter(hotel => {
        if (filters.country === '' || filters.country === 'Todos los países') return true
        if (filters.country === hotel.country) return true

        return false
      })
      .filter(hotel => {
        const filterPrice = Number(filters.price)

        if (filterPrice === 0 || filterPrice === 'Cualquier precio') return true
        if (filterPrice === hotel.price) return true

        return false
      })
      .filter(hotel => {
        if (filters.rooms === 0 || filters.rooms === 'Cualquier tamaño') return true
        if (hotel.rooms >= filters.rooms) return true

        return false
      })

    this.setState({ hotelsFiltered })

    /* Filtros:
      1. La fecha del hotel (availabilityFrom) tiene que estar después de filters.dateFrom y el availabilityTo tiene que estar antes del filters.dateTo
      2. Sino hay filtro de país seleccionado ("") o el filtro es "Todos los países" devolvemos true (todos), también si filters.country es igual a hotel.country
      3. Sino hay filtro de precio (0) o el filtro es "Cualquier precio" devolver true (todos), también si el precio del filtro es menor o igual al precio del hotel
      4. Sino hay filtro de habitaciones (0) o el filtro es "Cualquier tamaño" devolver true (todos), también si las habitaciones de filters es igual a las habitaciones del hotel
    */
  }

  render() {
    const { filters, hotelsFiltered } = this.state

    return (
      <div className="container">
        <Hero filters={filters} />
        <Filters filters={filters} onFilterChange={this.handleFilterChange} />
        <Hotels data={hotelsFiltered} />
      </div>
    )
  }
}

export default App
