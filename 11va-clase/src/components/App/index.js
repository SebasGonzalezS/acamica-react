import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

import './index.css'
import Input from '../Input'

dayjs.locale('es') // use Spanish locale globally

const API_URL = 'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      date: '',
      hotels: [],
      isLoading: false,
    }
  }

  async componentDidMount() {
    // - Todos los side-effects, como por ej setTimeouts, o llamados a APIs van en componentDidMount
    // - Nos sirve por ej cuando queremos pre-popular la aplicación con datos sin que el usuario dispare un evento

    // - Por qué no en componentWillMount? Es un método que se va a deprecar en React 17 y además si el fetch
    // se resuelve antes de renderizar la vista podríamos no llegar a ver un spinner / loader.

    try {
      this.setState({ isLoading: true })

      await delay(2000)

      const response = await fetch(API_URL)
      const hotels = await response.json()

      this.setState({ hotels })
    } catch (error) {
      console.error('error encontrado: ', error)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  // handleChange esta "atado" a el component App.
  // Debido a que estamos usando un arrow function la cuál esta atando el método al this de esta clase
  handleChange = event => {
    const { value } = event.target
    this.setState({ date: value })
  }

  parseDate = timestamp => dayjs(timestamp).format('dddd[,] D [de] MMMM [de] YYYY')

  render() {
    const { isLoading, hotels, date } = this.state

    return (
      <div>
        <Input date={date} handleChange={this.handleChange} />

        {isLoading === true && <p>Cargando hoteles</p>}

        {hotels.length > 0 && (
          <ul>
            {hotels.map(hotel => (
              <li key={hotel.slug}>
                <p>Nombre: {hotel.name}</p>
                <p>Fecha disponble desde: {this.parseDate(hotel.availabilityFrom)}</p>
                <p>Fecha disponble hasta: {this.parseDate(hotel.availabilityTo)}</p>
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
