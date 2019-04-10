// ❓ Preguntas de los ejercicios o clase anterior

// 📆 Clase Martes 9 de Abril
// Empezando con React y JSX!!

// 🥊 Guía
// 1) Link a documentación: https://es.reactjs.org/docs/getting-started.html

// 2) Agreguemos React, React DOM, y Babel
/*
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
*/

// 3) Agreguemos nuestro script y empezemos a codear!
/*
<script type="text/babel">

</script>
*/

// 4) Creemos nuestro primer elemento de React con React.createElement,
//    quiero un h1 con una clase "title", y que como hijo tenga de nombre "Acámica"
// Ejemplo con un form sin clase y 2 hijos que serán <input type="text"/> y <input type="submit"/>

// 5) Primer ejercicio: Creemos un header sin ninguna clase, y que muestre 2 hijos: <h2>React.js</h2> y <h3>Best framework ever</h3>

// 6) Que les pareció crear elementos en React?

// 7) Empezemos con JSX, qué es JSX ? Qué nos permite además de que se vea bonito ? Son los atributos iguales?
// Ejemplo de Formulario del punto 4 con JSX

// 8) Segundo ejercicio: Convertir el siguiente componente de React.createElement() a JSX

/*
React.createElement('article', { className: 'card' }, [
  React.createElement('div', { className: 'head' }, React.createElement('img', { src: 'https://placehold.it/150' })),
  React.createElement(
    'div',
    { className: 'body' },
    React.createElement('div', { className: 'content' }, [
      React.createElement('h4', null, 'Nombre: '),
      React.createElement('h5', null, 'Especie: '),
      React.createElement('h6', null, 'Planeta: '),
    ])
  ),
])
*/
