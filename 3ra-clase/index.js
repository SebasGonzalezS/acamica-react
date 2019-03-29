const fetch = require('isomorphic-fetch')

// Repaso de Promises usando Fetch ( con y sin async/await ) https://jsonplaceholder.typicode.com

// Class. Implementar la clase API. Pasandole el baseUrl, un resource y un método (GET, POST)
// Exportando e importando nuestra clase usando Import / Export

// Métodos nuevos de Strings: startsWith, endsWith e includes.

// Intro a Reactividad. Componentes.

// Fetch es solo una API que vive en los navegadores, por ej Firefox, Chrome, etc
// Si estan en un entorno en Node lo tienen que instalar a través de un paquete de NPM

// -----------------------

// Definición Promesas

// Def Pilar: Podemos esperar a que se cumpla una lógica asincrónica,
// por ej un fetch a un servidor y posteriormente una nuestra lógica en el frontend

// El .then() y el .catch() es parte de la API de Promises, no de fetch en sí, sino que este último utiliza Promises.

fetch('https://jsonplaceholder.typicode.com/users') // Ya hicimos la llamada y nuestra Promesa esta en estado Pending
  .then(response => response.json()) // Nuestra promesa en estado success, y en el 1er then ya tenemos los datos. Tenemos que parsearlos
  .then(users => {
    // En el 2do then() ya podemos acceder a los datos que nos devuelve el servidor
    console.log(users)
  })

// Async / Await

// Las Promises nos ayudaron bastante para pensar código asincrónico de una manera sincrónica
// pero por defecto ya nos esta generando mucha identación de código, y podemos llegar a tener 1 o más promesas anidadas

// Async/await viene a resolver esto de una manera más sencilla y más legible.

// Como lo usamos?
// Requerimientos:
// 1. Necesitamos una función que tenga antepuesta la keyword async

// Dato de vital importancia:
// Async/Await solo funciona si utilizamos APIs que utilizen Promises por ej fetch
// Entonces podemos esperar a que se finalize o pase a estado Success nuestra Promesa

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return users
}

// Podemos llamar a nuestra función getUsers() que como tiene la palabra async ahora podemos usar la API de Promises sobre ella
// getUsers().then(data => console.log(data))

// 1 - Podemos usar await cuando invocamos getUsers() ? Si podemos porque esta es una Promise
// 2 - Necesitamos algo más ? Si, necesitamos por encima una función async

const mainLogic = async () => {
  const users = await getUsers()
  console.log('los usuarios son', users)
}

mainLogic()

// Promise.all() nos permite ejecutar en paralelo varias Promesas, por ej varios fetch a la vez
// Es más rápido resolver llamadas en paralelo que esperar a que se resuelva una tras otra

// Como manejamos errores en Async/Await ?
// Usando try/catch, encapsulamos nuestra lógica dentro del bloque de try, y en el catch recibimos el error, y decidimos que hacer con el mismo
async function getUsersIds() {
  try {
    const users = await getUsers() // En caso que suceda un error se ejecuta no la siguiente, sino directamente el catch
    const userIds = users.map(({ id }) => id)

    return userIds
  } catch (error) {
    // Manejar / handlear el error. No se va "pinchar" nuestro frontend o backend
    console.error(error)
  }
}

// Class. Implementar la clase API. Pasandole el baseUrl y un resource. Teniendo métodos de get, post, put y delete

// En JavaScript no tenemos por defecto una primitiva de Clase / Class
// Entonces en ES6 ( ECMAScript6 ) surgió Class que son una sugar-syntax para usar clases, es decir que son una simulación.
// Se ven como clases pero no lo son realmente. Investigar (opcional): como funcionan las clases en JavaScript ? Hint: Usan prototype por debajo

// Para que nos sirven las clase?
// Para poder crear instancias que nos permitan re-utilizar métodos y atributos del objeto

// Por ej una persona, tiene un nombre, apellido, un DNI ( atributos ), y puede realizar acciones como caminar, aprender ( métodos )
// Como todas las personas tienen los mismos atributos y métodos, podemos a través de una Clase Persona, generar varias personas ( instancias )

/*

// Cada vez que queremos generar una persona, tenemos que volver a escribir los métodos y atributos.
const mariana = {
  nombre: 'Mariana',
  caminar: function() {
    console.log('caminando')
  },
  aprender: function() {
    console.log('aprendiendo')
  },
  obtenerNombreCompleto: function() {
    return this.nombre
  },
}

const lean = {
  nombre: 'Leandro',
  apellido: 'Amaro',
  caminar: function() {
    console.log('caminando')
  },
  aprender: function() {
    console.log('aprendiendo')
  },
  obtenerNombreCompleto: function() {
    return this.nombre
  },
}
 */

class Persona {
  constructor(nombre, apellido, dni) {
    this.nombre = nombre
    this.apellido = apellido
    this.dni = dni
  }

  obtenerDNI() {
    return this.dni
  }

  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`
  }
}

const matias = new Persona('Matias', 'Fernandez', '38921874')
const sebastian = new Persona('Sebastian', 'Rodriguez', '34923574')

matias.obtenerDNI() //?
sebastian.obtenerDNI() //?

matias.obtenerNombreCompleto() //?
sebastian.obtenerNombreCompleto() //?

// Implementar la clase API. Pasandole al constructor un baseUrl, un resource. Además tendrá métodos como get, put, delete, y post

class API {
  constructor(baseUrl, resource) {
    this.baseUrl = baseUrl
    this.resource = resource
    this.methods = { get: 'GET', put: 'PUT', post: 'POST', delete: 'DELETE' }
  }

  async ajax(method = '', headers = {}, body = {}) {
    const response = await fetch(`${this.baseUrl}${this.resource}`, { method, headers, body })
    const data = await response.json()

    return data
  }

  async get() {
    return await this.ajax(this.methods.get)
  }

  async put() {
    return await this.ajax(this.methods.put)
  }

  async post() {
    return await this.ajax(this.methods.post)
  }

  async delete() {
    return await this.ajax(this.methods.delete)
  }
}

const usersApi = new API('https://jsonplaceholder.typicode.com', '/users')

usersApi.get().then(users => console.log(users))

// Refactorizar método ajax en clase API para que utilize try/catch
// Poder pasar como parámetros headers y body a los métodos  get, put, post y delete, y después enviarselos al método ajax()
