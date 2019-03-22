/*
Empezamos con ES6!
  https://flaviocopes.com/es6

*/

// ECMAScript o ES, es un conjunto de especificaciones que salen año tras año.
// ECMAScript6 o ES2015, fue el conjunto de features más grande hasta el momento.

// Concepto de scope o ámbito. Si qu
var carrera = 'Front end avanzado'

function mostrarNombres() {
  console.log(carrera)

  var nombreEmpresa = 'Acamica'
  console.log('nombreEmpresa: ', nombreEmpresa)
}

mostrarNombres()

// IIFE: Son funciones anónimas que se auto-ejecutan y se solían usar para scopear las variables definidas con var
;(function() {
  console.log(carrera)

  var nombreEmpresa = 'Acamica'
  console.log('nombreEmpresa: ', nombreEmpresa)
})()

// Ahora con let y const podemos definir scopes por bloque de código. Estas variables viven y mueren dentro de nuestro bloque.
// No podemos acceder a este tipo de variables fuera del bloque.
if (true === true) {
  let nombreAlumno = 'Franco'

  console.log('nombreAlumno: ', nombreAlumno)
}

// Propiedades de let:
// - Reasignar el valor a la variable
// - No podemos utilizar una variable con el mismo nombre
// - Nos permite scopear la variable dentro de un bloque {} ( if, for, function, while )

// Deberíamos de seguir utilizando var?
// Con let nuestro código es más explícito, y tenemos manejo de errores como por ejemplo cuando definimos una nueva variable con el mismo nombre.

// Definiendo variables con const:
const PI = 3.14

const API_URL = 'https://api-acamica.com/estudiantes'

const alumno = {
  nombre: 'Jorge',
}

alumno.nombre = 'Matías'

console.log('alumno: ', alumno)

// Hay que tener cuidado con const ya que esto no nos dice que nuestra variable sea inmutable
// Si queremos que nuestro objeto u array sea inmutable podemos usar Object.freeze()

// Propiedades de const:
// - No nos brinda valores inmutables en objetos y array. Es decir podemos modificar las propiedades/atributos/keys de los objetos.
// - No podemos utilizar una variable con el mismo nombre
// - Nos permite scopear la variable dentro de un bloque {} ( if, for, function, while )

/* ------------- */
const alumnos = [
  'German David Neira Rivera',
  'Santiago Pascual Plaus',
  'Santiago Canosa',
  'FranciscoCampos',
  'Daniel Andres Gallo Garcia',
  'Juanse Calviño',
  'Jorge Roldan',
  'Leymar Gutierrez',
  'Juan Jose Diaz',
  'Matias Fernandez',
  'Leandro Amaro',
  'Franco Carini',
  'Francisco Escobar Sabio',
  'Pilar Castro',
  'Sebastian Rodriguez',
  'Carlos Martin Rodriguez',
  'Pablo Aramayo',
  'Christian',
]

// Deberíamos definir alumnos con var, let o const?
// Lo redefinimos con const para que otro programador o yo del futuro no re-asigne el valor a esta variable.

const numeros = [1, 2, 3, 4]

// Podemos obtener valores usando destructuring, en este caso obtuvimos los primeros 2 elementos del array numeros
const [numeroUno, numeroDos] = numeros

// Podemos obtener un elemento de una posición en especial por ej el elemento en el indice 2, llenando con espacios vacios
const [, , numeroTres] = numeros

// Definimos un objeto clima
const clima = {
  unidad: 'Celsius',
  temperatura: 21,
  provincia: 'Buenos Aires',
  pais: 'Argentina',
}

// Era pre-ES6
var temperature = clima.temperatura
var unidad = clima.unidad

// Como puedo obtener la propiedad temperatura, pais y la propiedad unidad?
// Obtuvimos la propiedad unidad y le cambiamos el nombre a unit
const { temperatura, pais, unidad: unit } = clima

// Rest operator. Puedo obtener la propiedad name, y por otro lado obtener un nuevo objeto con las propiedades website y founders?
const empresa = {
  name: 'Acámica',
  website: 'https://acamica.com',
  founders: ['Tomás Escobar', 'Ignacio Puig', 'Juanchi', 'Gonzalo Orsi'],
}

const { name, ...otherInfo } = empresa
console.log('name: ', name)
console.log('otherInfo: ', otherInfo)

// Como hago para obtener la propiedad temperatura, y por el otro lado obtener un objeto que contenga las demas propiedades?
const { temperatura: temp, ...climateInfo } = clima
console.log('temp: ', temp)
console.log('climateInfo: ', climateInfo)

// Como puedo fusionar propiedades de objetos?
const paisEmpresa = {
  nombrePais: 'Argentina',
  presidentePais: 'Mauricio Macri',
}

// Usando spread operator. Distribuimos los elementos del array u objeto en un nuevo array u objeto

const numerosNegativos = [-20, -80, -1000]
const numerosPositivos = [20, 120, 800, 420]

const numerosReales = [...numerosNegativos, ...numerosPositivos] // [ numerosNegativos[0], numerosNegativos[1], numerosNegativos[2], numerosPositivos[0], numerosPositivoos[1], etc ]
console.log('numerosReales: ', numerosReales)

// Quiero obtener un objeto nuevo con todas las propiedades de empresa y todas las propiedas de paisEmpresa. Como puedo hacer?
const empresaOficial = {
  ...empresa,
  ...paisEmpresa,
}

// Spread nos va a servir para crear nuevos objetos u arrays sin referenciar a las propiedades de los mismos

// Métodos .map y .filter
console.log('numeros', numeros)

// Quiero obtener un nuevo array donde tenga todos los mismos numeros pero duplicados
const numerosDuplicados = []

for (let index = 0; index < numeros.length; index++) {
  const numero = numeros[index]
  numerosDuplicados[index] = numero * 2
}

console.log('numerosDuplicados: ', numerosDuplicados)

// Los métodos de los arrays como map, filter, reduce y demás, nos permite tener código más declarativo
// El método map nos devuelvo un nuevo array con los mismos elementos pero aplicandole una transformación (opcional) a estos
// Recibe como parámetro un callback (función) que se ejecuta por cada elemento
// Ventajas? Mayor declaratividad, más rápido de escribir y más simple. No modifica el array original. Es más difícil realizar una mutacioón involuntaria.
// Desventajas? Itera en todos los elementos pero no podemos saltear o cortar el for, es decir no podemos usar break o continue.

const numerosTriplicados = numeros.map(function(numero) {
  return numero * 3
})
console.log('numerosTriplicados: ', numerosTriplicados)

// Filter funciona de la misma manera que map.
// Debemos devolver una condición, si esta es verdad el elemento será incluido en el array, y si es falsa se excluye del mismo.

// Quiero obtener todos los
const numerosMayoresCien = numerosReales.filter(function(numero) {
  return numero > 100
})
console.log('numerosMayoresCien: ', numerosMayoresCien)

// Quiero obtener todos los números entre -200 y 200
const numerosEnRango = numerosReales.filter(function(numero) {
  return numero > -200 && numero < 200
})

console.log('numerosEnRango: ', numerosEnRango)

// Arrow functions
const isNumberLowerThanOneHundred = numero => numero < 100

// deberia de devolver false
isNumberLowerThanOneHundred(4) //?

const numbersLowThanOneHundred = numerosReales.filter(isNumberLowerThanOneHundred)

// Template Literals
