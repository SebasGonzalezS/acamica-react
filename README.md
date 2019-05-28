# Acámica - Frontend Avanzado con React

## Segundo Proyecto - NewsFeed

### API

API: https://api.canillitapp.com
Documentación: https://github.com/Canillitapp/headlines-api

#### Categorías (5):

- Política: https://api.canillitapp.com/news/category/1
- Internacionales: https://api.canillitapp.com/news/category/2
- Tecnología: https://api.canillitapp.com/news/category/3
- Espectáculos: https://api.canillitapp.com/news/category/4
- Deportes: https://api.canillitapp.com/news/category/5

### Otros endpoints (4):

- Popular por cantidad `https://api.canillitapp.com/trending/:yyyy-mm-dd/:quantity`
  Por ejemplo: https://api.canillitapp.com/trending/2017-04-08/2

- Popular sin cantidad (solo 3) `https://api.canillitapp.com/trending/:yyyy-mm-dd`
  Por ejemplo: https://api.canillitapp.com/trending/2017-04-08/2

- Últimas noticias, devuelve toda las noticias ordenadas de más nuevas a más viejas `https://api.canillitapp.com/latest/:yyyy-mm-dd`
  Por ejemplo: https://api.canillitapp.com/latest/2017-04-08

- Búsqueda `https://api.canillitapp.com/search/:foo`
  Por ejemplo: https://api.canillitapp.com/search/messi

### Diseño

El diseño lo pueden hacer en base del siguiente link, identificando los componentes correspondiente usando styled-components: [Diseño](https://s3.amazonaws.com/resources.acamica.com/contenidos/react/news-room/components.pdf)

Lo pueden hacer con Bulma u otro framework CSS, o basandose en algún diseño de [Behance](https://www.behance.net) o [Dribbble](https://dribbble.com).

Link a plataforma de [Acámica](https://www.acamica.com/cursos/506)

### Funcionalidad

- [ ] Poder visualizar en la ruta `/` todas las noticias del día de la fecha usando el endpoint de la API `/latest` y pasandole por `query` la fecha actual con el formato `yyyy-mm-dd`.

* [ ] Poder clickear en cada categoría y ver las noticias de esa categoría.
      Cada categoría me llevaría a su propia ruta por ej: `/categoria/politica` o `/categoria/internacionales`.

- [ ] Poder buscar por título cualquier noticia usando el endpoint de Búsqueda de la API.
      Esto me llevaría a la ruta de `/busqueda/:query` por ej: `/busqueda/messi`.
      Para obtener por props el `query`, y fetchear usando el endpoint de `/search`.

* [ ] En cada noticia debo poder hacer click en algún link para ir a la fuente original.

### Tecnologías

- React y React DOM
- React Router
- Styled-components ( Opcional )
- Bulma u otro framework CSS ( opcional )

### Como crear un proyecto desde cero:

1. Usamos create-react-app: `npx create-react-app news-feed`
2. Borramos algunos archivos del boilerplate: `App.test.js`, `serviceWorker.js`, `logo.svg`, y `index.css`.
3. Nos movemos al `index.js` y borramos las lineas: `import './index.css';`, `import * as serviceWorker from './serviceWorker';` y `serviceWorker.unregister();`
4. Nos movemos al `App.js` y borramos la linea: `import logo from './logo.svg';`
5. Crear las carpetas: `/components`, `/components/App` y `/pages`.
6. Movemos nuestro `App.js` ( y lo renombramos a `index.js` ) y `App.css` a `/components/App`.
7. Modificamos el `index.js` para importar App usando `import App from './components/App';`
8. Instalamos dependencias: `react-router-dom` y `styled-components` usando `npm install react-router-dom styled-components`
9. Correr el proyecto con: `npm start` o `npm run start`
