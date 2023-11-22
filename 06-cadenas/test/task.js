// </ #6 Cadenas de texto />

/*
  Ejercicio #1
  Realiza los siguientes ejercicios de cadenas de texto (strings)
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

function obtenerLongitud (cadena) {
  // Devuelve la longitud de la cadena
  // Ejemplo: in: (cadena: 'Hola') ~ out: => 4
  // Tu código:
}

function ultimoCaracter (cadena) {
  // Devuelve el ultimo carácter de la cadena
  // Ejemplo: in: (cadena: 'Hola') ~ out: => 'a'
  // Tu código:
}

function obtenerIndiceDelUltimoEspacio (cadena) {
  // Devuelve el índice del último espacio en blanco de la cadena
  // Ejemplo: in: (cadena: 'Estoy aprendiendo JavaScript') ~ out: => 17
  // Tu código:
}

function obtenerIndiceDelSegundoEspacio (cadena) {
  // Devuelve el índice del segundo espacio en blanco de la cadena
  // Ejemplo: in: (cadena: 'Me encanta el módulo de fundamentos') ~ out: => 10
  // Tu código:
}

function extraeLaPrimeraPalabra (frase) {
  // Devuelve la primera palabra de la frase
  // Ejemplo: in: (frase: 'Hola mundo') ~ out: => 'Hola'
  // Tu código:
}

function reemplazaLaPalabraPorOtra (frase, palabraAReemplazar, palabraNueva) {
  // Reemplaza la palabra por otra
  // Ejemplo:
  // in: (frase: 'JavaScript es tremendo', palabraAReemplazar: 'tremendo', palabraNueva: 'genial')
  // out: => 'JavaScript es genial'
  // Tu código:
}

function fraseEnMayusculas (frase) {
  // Regresa la cadena en mayúsculas
  // Ejemplo: in: (frase: 'En Academlo soy feliz') ~ out: => 'EN ACADEMLO SOY FELIZ'
  // Tu código:
}

function nombreCompleto (nombre, apellido) {
  // Devuelve el nombre completo de la persona.
  // Ejemplo: in: (nombre: 'Ada', apellido: 'Lovelace') ~ out: => 'Ada Lovelace'
  // Tu código:
}

function enCamelCase (frase) {
  // Devuelve la frase en camelCase, es decir, sin espacios, la primera letra de cada palabra en mayúscula y las demás letras en minúscula, excepto la primera palabra.
  // Ten en cuenta que la frase siempre tendrá 4 palabras.
  // Ejemplo: in: (frase: 'Mi nombre es Diego') ~ out: => 'miNombreEsDiego'
  // Tu código:
}

// NO TOCAR ESTE CÓDIGO
module.exports = {
  obtenerLongitud,
  ultimoCaracter,
  obtenerIndiceDelUltimoEspacio,
  obtenerIndiceDelSegundoEspacio,
  extraeLaPrimeraPalabra,
  reemplazaLaPalabraPorOtra,
  fraseEnMayusculas,
  nombreCompleto,
  enCamelCase
}
