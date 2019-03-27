const fetch = require('isomorphic-fetch')

// Revisión ejercicios
const alumnos = [
  { nombre: 'German David Neira Rivera', edad: 23 },
  { nombre: 'Santiago Pascual Plaus', edad: 32 },
  { nombre: 'Santiago Canosa', edad: 40 },
  { nombre: 'Francisco Campos', edad: 46 },
  { nombre: 'Daniel Andres Gallo Garcia', edad: 22 },
  { nombre: 'Juanse Calviño', edad: 28 },
  { nombre: 'Jorge Roldan', edad: 31 },
  { nombre: 'Leymar Gutierrez', edad: 42 },
  { nombre: 'Juan Jose Diaz', edad: 27 },
  { nombre: 'Matias Fernandez', edad: 29 },
  { nombre: 'Leandro Amaro', edad: 26 },
  { nombre: 'Franco Carini', edad: 31 },
  { nombre: 'Francisco Escobar Sabio', edad: 28 },
  { nombre: 'Pilar Castro', edad: 27 },
  { nombre: 'Sebastian Rodriguez', edad: 31 },
  { nombre: 'Carlos Martin Rodriguez', edad: 28 },
  { nombre: 'Pablo Aramayo', edad: 33 },
]

// DISCLAIMER: La edad es ficticia y solo destinada para realizar los siguientes ejercicios

// 1. Obtener un array de strings con solo nombres de cada alumno usando .map()
// const nombreAlumnos = alumnos.map((alumno) => alumno.nombre)
const nombreAlumnos = alumnos.map(({ nombre }) => nombre)

// 2. Obtener un array con aquellos alumnos mayores a 30 años usando .filter()
const alumnosMayoresATreinta = alumnos.filter(({ edad }) => edad > 30)

// 3. Obtener en una constante un entero con la edad total de todos los alumnos usando .reduce() ( Investigar )

// Con reduce podemos reducir al mismo tamaño o a un menor tamaño menor una estructura de datos a la misma o a otra estructura.
// Por ejemplo: convertir un array a un array más chicos de elementos, o un array a un objeto o viceversa
// También podemos reducir una tipo de dato como por ejemplo un array a un número o un string

// Funciona de la misma manera que map y filter, itera por todos los elementos del array.

const edadTotalAlumnos = alumnos.reduce((contador, { edad }) => edad + contador, 0)

// 4. Obtener en una constante la edad de "Leandro Amaro" usando .find() ( Investigar ) y destructuring del resultado

// El método find nos permite buscar un primer elemento que cumpla una condición por verdadero
// Investigar método includes

const alumnoEncontrado = alumnos.find(({ nombre }) => nombre.includes('Amaro'))

// Chequeamos si realmente existe el alumno. En caos que sea undefined, es decir no encontrado, no accede dentro del bloque
if (alumnoEncontrado) {
  const { edad } = alumnoEncontrado
  console.log(edad)
}

// 5. Obtener en una constante el primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también
const [primerAlumno, segundoAlumno] = alumnos

const { nombre: nombrePrimerAlumno } = primerAlumno

// const [{ nombre: nombrePrimerAlumno }] = alumnos
// 2 destructuring en 1, destructuring del primer elemento del array y a su vez de la propiedad nombre

// 6. Obtener un array con aquellos alumnos que empiezan con la letra "F", usando .filter()

// 7. Obtener un array agregando una propiedad/key/atributo llamada asistioUltimaClase con valor en falso más a cada elemento usando .map()

// 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos

// ---------------------------------------------------------------------------------------------------------------

// Revisión ejercicios ✅
// Operador Ternario ✅
// Function default values ✅
// Rest in Function arguments ✅

// Template literals  ✅
// Promises. Ejemplo con setTimeout. Fetch https://jsonplaceholder.typicode.com/todos  ✅

// Async / Await
// Class. Implementar la clase API.
// Import / Export

// Consultas extra-curriculares

let headers = ['timestamp', 'not-timestamp', 'timestamp']

/*
let newRow = headers.map(function(header) {
  return header === 'timestamp' ? new Date() : e.parameter[header]
})
 */

// Operador Ternario
primerAlumno //?

if (primerAlumno.edad >= 18) {
  console.log('Es mayor de edad')
} else {
  console.log('Es menor de edad')
}

// El operador ternario devuelve un valor (cualquier tipo de dato), si la condición se cumple se devuelve el valor después del ?, y sino se cumple se devuelve el valor después del :
const mensaje = primerAlumno.edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad'
console.log(mensaje)

// Rest in function arguments

// Como puedo hacer para agrupar todos los argumentos dentro de un array?
const suma = (num1, num2, num3, num4, num5) => [num1, num2, num3, num4, num5].reduce((total, num) => total + num, 0)

// Puedo usar el rest operator para acumular todos nuestros parámetros de entrada dentro de un array
const sumaRest = (...numbers) => numbers.reduce((total, num) => total + num, 0)

suma(1, 1, 1, 2, 4, 7) //?

sumaRest(12, 23, 49, 100, 21, 2, 0, -100) //?

// Function default values

// Podemos asignar opcionalmente a nuestros argumentos un valor inicial.
// En el caso que nos olvidemos de enviar algún parámetro estamos preveniendo que nuestra función siga sin errores.
const sumaDosNumeros = (a = 0, b = 0) => a + b

sumaDosNumeros(20) //?

// Promises. Ejemplo con setTimeout. Fetch https://jsonplaceholder.typicode.com/todos

// Como JavaScript es por naturaleza síncrónico y mono-hilo ( un solo thread ), las promesas nos permiten manejar código asíncrónico de una manera más sencilla.
// Estas Promises serán almacenadas dentro de una pila de Promesas y serán ejecutadas en el orden de llegada ( solo por si quieren investigar un poco más Promises Queue )

const b = 2

let a = 4

setTimeout(() => {
  console.log('hola')
  a++
  console.log('a', a)
}, 0)

const segundoResultado = a + b

console.log('TCL: segundoResultado', segundoResultado)

// Podemos pensar las promesas como burbujas de tiempo
// que nos van a permitir ejecutar un bloque de código cuando algo de naturaleza asíncrónica finalize

const delay = ms => {
  return new Promise((resolve, reject) => {
    if (ms > 3000) reject(`Se rechazo la promesa porque tarda mas de 3s`)

    setTimeout(() => {
      resolve(`Se ejecuto despues de ${ms}ms`)
    }, ms)
  })
}

// "Promisificamos" o convertimos en una promesa al setTimeout, lo que nos permite ahora esperar a que se ejecute el mismo para posterior ejecutar otro tipo de lógica
delay(1000)
  .then(data => console.log(data))
  .catch(error => console.log(error))

// JSON: JavaScript Object Notation. Es el estándar de formato para mover datos a través de servidores y clientes.
// Básicamente es un string con datos dentro del mismo, y cuando lo obtenemos debemos de parsearlo, es decir convertirlo en un elemento válido de JavaScript.

// Vamos a usar Fetch, es una API exclusiva de los navegadores para obtener recursos de los servidores usando Promesas.
// Podemos utilizar cualquier método HTTP como GET, POST, PUT, y DELETE
// Fetch por defecto va a parsear el string para que sea JS válido.

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(users => console.log(users))
