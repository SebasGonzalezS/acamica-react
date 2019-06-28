const personasArray = [
  { nombre: 'Fran', id: '123' },
  { nombre: 'Jorge', id: '982' },
  { nombre: 'JuanJo', id: '742' },
  { nombre: 'Pili', id: '441' },
]

// CRUD => Create / Read / Update / Delete

// Create
const nuevaPersona = [...personasArray, { nombre: 'Leymar', id: '951' }]

// Read
const juanjo = personas.find(persona => persona.id === '742')

// Update
const jorge = personas.find(persona => persona.id === '982')
const jorgeModificado = { ...jorge, apellido: 'Roldán' }
const personasSinJorge = personas.filter(persona => persona.id !== '982')
const nuevoArray = [...personasSinJorge, jorgeModificado]

// Delete
const personasSinJorge = personas.filter(persona => persona.id !== '982')
return personasSinJorge

/* Si modelamos nuestro estado como un objeto */
const personas = {
  '123': { nombre: 'Fran' },
  '982': { nombre: 'Jorge' },
  '742': { nombre: 'JuanJo' },
  '441': { nombre: 'Pili' },
}

// Create
const nuevaPersona = { ...personas, '772': { nombre: 'Leo' } }

// Read
const juanjo = personas['742']

// Update
const jorgeModificado = {
  ...personas,
  ['982']: {
    ...personas['982'],
    apellido: 'Roldán',
  },
}

// Delete
const personaSinJorge = personas.omit('982')

// Como itero un objeto?
const personasEnArray = Object.entries(personas)
personasEnArray.map(([key, value]) => `<li>${value.name} - ${key}</li>`)
