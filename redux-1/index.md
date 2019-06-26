# Redux

Link al CodeSandbox: https://codesandbox.io/s/infallible-germain-bb632

## Parte I

- Para qué necesitamos esta herramienta?

  - En parte Redux viene a solucionar el problema del prop-drilling
  - También soluciona el problema de Lifting the State Up para evitar tener un componente con muchos métodos para enviar por props

## Features

- Predictivo: nos brinda consistencia
- Centralizado: centralizando el estado de la aplicación podemos hacer cosas como persistencia.
- Debugeable: las DevTools de Redux nos permiten trackear cuando, donde, porque y como el estado de nuestra aplicación cambio.
- Flexible: funciona con cualquier capa de UI, por ej Angular, Vue, React.

## Conceptos de Redux

### Store

El store contiene:

- el estado de nuestra aplicación
- los métodos para interactuar con él

### Reducer

Función pura: es una función sin side-effects (efectos colaterales), por ej: llamados a una API, setTimeout, acceder a variables fuera del scope, etc. Llamando n veces la misma función con los mismos parámetros siempre tiene que devolver el mismo resultado.

Ejemplo función impura:

```javascript
let c = 0

const suma = (a, b) => {
  c = c + a
  return a + b + c
}

suma(2, 2) // 6
suma(2, 2) // 8
```

Ejemplo función pura:

```javascript
const suma = (a, b) => {
  return a + b
}

suma(2, 2) // 4
suma(2, 2) // 4
```

Es una función pura del tipo (state, action) => state, que describe como una acción transforma el estado en el siguiente estado.
El estado que devuelve la función reducer **siempre** tiene que ser un estado nuevo.
La forma del estado puede ser la que querramos: un número, un array, un objeto, etc.
Lo **importánte** es que **no mutemos** el estado si fuese un array o un objeto, creando uno nuevo.

## Primer ejemplo

```javascript
import { createStore } from 'redux'

const INITIAL_STATE = 0

// Siempre tenemos que tener en cuenta un default parameter, o parámetro por defecto para inicializar nuestro state con algún valor.

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1
    }

    case 'DECREMENT': {
      return state - 1
    }

    default: {
      return state
    }
  }
}

// Creamos un store de redux que contiene el estado de nuestra app.
// Esta API nos brinda los métodos: subscribe, dispatch y getState.
// El método createStore recibe como parámetro un solo reducer.
const store = createStore(counterReducer)

// Spoiler alert: si tenemos más de 1 reducer los combinamos en 1 solo
// y pasamos este combinado al método createStore

// Podemos usar el método subscribe() para actualizar la UI en respuesta a los cambios de estado.
store.subscribe(() => {
  const state = store.getState()
  console.log('state', state)
})

// Más adelante usaremos una librería para bindear el subscribe a un componete por ejemplo usando react-redux para no usar subscribe() directamente.

// La única manera de mutar el estado es despachando una acción.
store.dispatch({ type: 'INCREMENT' })
// Ahora nuestro estado es ?

store.dispatch({ type: 'INCREMENT' })
// Ahora nuestro estado es ?

store.dispatch({ type: 'DECREMENT' })
// Ahora nuestro estado es ?
```

### Actions

Especificamos las mutaciones que queremos hacer a través de objetos planos llamados **acciones**.
El cuál deben de seguir la siguiente forma:

```javascript
const exampleAction = { type: 'INCREMENT' }
```

```javascript
const exampleAction = {
  type: 'SUM',
  payload: { number: 3 },
}
```

Siendo el payload un objeto con información extra que quisieramos enviar, pero de manera opcional.

Después escribimos una función especial llamada reducer, que ya hicimos para decidir que hacer con cada acción que transforma el estado de nuestra aplicación.

## Apps en la vida real

Una aplicación típica con Redux esta compuesta de un solo store con una sola función raíz de reducer. Mientras nuestra aplicación crece dividimos el reducer principal en pequeños reducers independientes que operan en distintas partes de nuestro árbol de estado.

La arquitectura parece un overkill para un contador pero este patrón nos permite escalar largas y complejas aplicaciones.
También nos permite con las devtools analizar cada acción que hizo una mutación en nuestro estado.
Podes guardar sesiones de usuarios y reproducirlas solo reproduciendo cada acción.

## Ejercicios

1. Repliquemos el contador para repasar los conceptos.

2. Hagamos una ToDo App que:

- [ ] Nos permita agregar una tarea
- [ ] Nos permita completar una tarea
- [ ] Nos permita filtrar por : Todas, Activas y Completadas

3. Hagamos un e-commerce donde:

- [ ] Podamos visualizar una lista de productos
- [ ] Cada producto tiene un nombre, precio y stock
- [ ] Podamos agregar productos a nuestro carrito
- [ ] En nuestro carrito podamos visualizar el total
