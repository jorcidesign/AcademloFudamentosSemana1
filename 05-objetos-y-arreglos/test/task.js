// </ #5 Objetos y Arreglos />

/*
  Ejercicio #1
  Realiza la que se te pide en cada comentario.
  Reeplaza null por el valor correspondiente en cada operación
*/

// Declara un objeto vacío.
const objetoVacio = null

// Agrega tres propiedades al objeto persona: nombre, edad y ciudad.
const persona = {}

// Tu código:
// Ejemplo: persona.nombre = 'Juan'

// Accede a las redes sociales de Diego y extrae la url de su perfil de facebook y twiter.
const estudiante = {
  nombre: 'Diego',
  edad: 21,
  correo: 'diego@correo.com',
  social: [
    {
      cuenta: 'facebook',
      'perfil url': 'facebook/diego'
    },
    {
      cuenta: 'twitter',
      'perfil url': 'twitter/diego'
    }
  ],
  genero: 'Hombre'
}

// Tu código:
const urlFacebook = estudiante
const urlTwitter = estudiante

// Agrega un método (función dentro de un objeto) llamado saludar al objeto usuario, que retorne el string 'Hola, soy {nombre} y tengo {edad} años.' usando las propiedades nombre y edad.
const usuario = {
  nombre: 'Fernando',
  edad: 23
}

// Ejemplo: usuario.saludar = fn () {...}
// Tu código:

// Declara un arreglo vacío.
const arregloVacio = null

// Agrega tres elementos al arreglo
const comidaDeliciosa = []
// Ejemplo: comidaDeliciosa[0] = 'sandwich'
// Tu código:

// Reemplaza el elemento en la posición 0 por 'Cereal'.
const comidaSaludable = comidaDeliciosa
// Tu código:

// Extrae el color "rosado" del siguiente arreglo
const colores = ['rojo', 'azul', 'verde', ['amarillo', 'rosado', 'morado']]

// Tu código:
const elementoExtraido = colores

/*
  Ejercicio #2
  Desarrolla la lógica de las siguientes funciones.
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

function agregarElementoAlFinalDelArreglo (arreglo, elemento) {
  // Debes agregar un elemento al final del arreglo y retornar el arreglo.
  // Ejemplo: in: (arreglo: [1, 2, 3], elemento: 4) ~ out: => [1, 2, 3, 4]
  // Tu código:
}

function agregarElementoAlInicioDelArreglo (arreglo, elemento) {
  // Debes agregar un elemento al inicio del arreglo y retornar el arreglo.
  // Ejemplo: in: (arreglo: [1, 2, 3], elemento: 4) ~ out: => [4, 1, 2, 3]
  // Tu código:
}

function extraerElementoAlFinalDelArreglo (arreglo) {
  // Debes extraer el último elemento del arreglo y retornar el elemento.
  // Ejemplo: in: (arreglo: [1, 2, 3]) ~ out: => 3
  // Tu código:
}

function extraerElementoAlInicioDelArreglo (arreglo) {
  // Debes extraer el primer elemento del arreglo y retornar el elemento.
  // Ejemplo: in: (arreglo: [1, 2, 3]) ~ out: => 1
  // Tu código:
}

function obtenerLargoDelArreglo (arreglo) {
  // Debes retornar el largo del arreglo.
  // Ejemplo: in: (arreglo: [1, 2, 3]) ~ out: => 3
  // Tu código:
}

function obtenerElNombreDeLaPersona (persona) {
  // Debes retornar el nombre de la persona.
  // Ejemplo: in: (persona: { nombre: 'Juan' }) ~ out: => 'Juan'
  // Tu código:
}

function obtenerLaEdadDeLaPersona (persona) {
  // Debes retornar la edad de la persona.
  // Ejemplo: in: (persona: { edad: 20 }) ~ out: => 20
  // Tu código:
}

function agregarUnaNuevaPropiedad (persona, propiedad, valor) {
  // Debes agregar una nueva propiedad al objeto y retornar el objeto.
  // Ejemplo: in: (persona: { nombre: 'Juan' }), propiedad: 'edad', valor: 20 ~ out: => { nombre: 'Juan', edad: 20 }
  // Tu código:
}

function eliminarUnaPropiedad (persona, propiedad) {
  // Debes eliminar una propiedad del objeto y retornar el objeto.
  // Ejemplo: in: (persona: { nombre: 'Juan', edad: 20 }), propiedad: 'edad' ~ out: => { nombre: 'Juan' }
  // Tu código:
}

function verificarSiLaPropiedadExiste (persona, propiedad) {
  // Debes verificar si una propiedad existe en el objeto y retornar true o false según corresponda.
  // Ejemplo: in: (persona: { nombre: 'Juan' }), propiedad: 'edad' ~ out: => false
  // Tu código:
}

function nuevoUsuario (nombre, edad, password) {
  // Debes crear un nuevo objeto (usuario) y retornarlo.
  // El objeto debe usar como propiedades los parámetros recibidos.
  // Ejemplo: in: (nombre: 'Juan', edad: 21, password: '1234') ~ out: => { nombre: 'Juan', edad: 21, password: '1234' }
  // Tu código:
}

function obtenerNombres (estudiantes) {
  // Debes obtener todos los nombres de los estudiantes y retornarlos en un arreglo.
  // Ten en cuenta que la longitud del arreglo siempre será de 5 elementos.
  // Cada estudiante es un objeto con la siguiente estructura:
  /* Ejemplo: in: (estudiantes: [
  {
    nombre: 'Juan',
    edad: 25,
    correo: 'juan@academlo.com',
    social: [
      { cuenta: 'facebook', 'perfil url': 'facebook/juan' },
      { cuenta: 'twitter', 'perfil url': 'twitter/juan' }
    ],
    genero: 'Hombre'
  }
  ...
]) ~ out: => ['Juan', ...] */
  // Tu código:
}

function obtenerPerfilFacebook (estudiantes) {
  // Debes obtener el perfil de facebook de todos los estudiantes y retornarlos en un arreglo.
  // Ten en cuenta que la longitud del arreglo siempre será de 5 elementos.
  // Cada estudiante es un objeto con la siguiente estructura:
  /* Ejemplo: in: (estudiantes: [
  {
    nombre: 'Juan',
    edad: 25,
    correo: 'juan@academlo.com',
    social: [
      { cuenta: 'facebook', 'perfil url': 'facebook/juan' },
      { cuenta: 'twitter', 'perfil url': 'twitter/juan' }
    ],
    genero: 'Hombre'
  }
  ...
]) ~ out: => ['facebook/juan', ...] */
  // Tu código:
}

// NO TOCAR ESTE CÓDIGO
module.exports = {
  arregloVacio,
  comidaDeliciosa,
  comidaSaludable,
  elementoExtraido,
  objetoVacio,
  persona,
  urlFacebook,
  urlTwitter,
  usuario,
  agregarElementoAlFinalDelArreglo,
  agregarElementoAlInicioDelArreglo,
  extraerElementoAlFinalDelArreglo,
  extraerElementoAlInicioDelArreglo,
  obtenerLargoDelArreglo,
  obtenerElNombreDeLaPersona,
  obtenerLaEdadDeLaPersona,
  agregarUnaNuevaPropiedad,
  eliminarUnaPropiedad,
  verificarSiLaPropiedadExiste,
  nuevoUsuario,
  obtenerNombres,
  obtenerPerfilFacebook
}
