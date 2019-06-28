# Redux

Link al CodeSandbox: https://codesandbox.io/s/eager-cori-8ujmg

## Parte II

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
- [ ] Nos permita filtrar por: Todas, Activas y Completadas

3. Hagamos un e-commerce donde:

- [ ] Podamos visualizar una lista de productos
- [ ] Cada producto tiene un nombre, precio y stock
- [ ] Podamos agregar productos a nuestro carrito
- [ ] En nuestro carrito podamos visualizar el total
