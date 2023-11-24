/*
===========================
  * Arreglos y Objetos *
===========================
*/
// => Estructuras de datos:
// - Las estructuras de datos son estructuras que nos permiten almacenar y organizar datos de manera eficiente. Existen diferentes tipos de estructuras de datos, cada una con sus propias características y ventajas.

// => Objetos literales:
// - Son una forma de crear estructuras de datos de manera concisa y directa. Nos permiten agrupar datos y entidades más complejas de manera estructurada.

const obj = {} // Objeto literal vacío
// - Los objetos pueden contener propiedades y métodos.
const persona = {
  // Las propiedades: son pares de llave(propiedad)-valor.
  nombre: 'Juan',
  apellido: 'Perez', // Las llaves son cadenas de texto (string)
  edad: 25,
  direccion: {
    calle: {
      nombre: 'Av. Los Pinos',
      numeroExt: 123
    },
    numero: 123
  },
  'codigo postal': 15082 // Si el nombre de la propiedad tiene espacios, se debe usar comillas 
}

// => Acceso a las propiedades de un objeto:
// - Para acceder a las propiedades de un objeto se utiliza la notación de punto (objeto.propiedad) o la notación de corchetes (objeto['propiedad']).
// Ejemplo:
console.log(persona.nombre)
console.log(persona['nombre'])
console.log(persona.apellido)
console.log(persona['apellido'])
console.log(persona.direccion['calle'].nombre)
console.log(persona['direccion'].calle['numeroExt'])
console.log(persona['codigo postal'])
console.log(persona.direccion.calle.nombre)

// => Modificación de las propiedades de un objeto:
// - Para modificar una propiedad de un objeto se puede utilizar ambas notaciones.
// - Si la propiedad no existe, se crea.
// - Si la propiedad existe, se modifica.
// Ejemplo:
persona.correo = 'juan@correo.com'
persona.nombre = 'Juan Carlos' // Modifica la propiedad nombre

console.log(persona)
console.log(persona.nombre)

// => Eliminación de las propiedades de un objeto:
// - Para eliminar una propiedad de un objeto se utiliza la palabra reservada delete.
// Ejemplo:
delete persona['codigo postal']
delete persona.direccion

console.log(persona)

const a = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 25
}

// Formulario de registro:
const b = 'nombre' // campo de un formulario

// Programa que nos regresa el dato que usuario solicte
console.log(a[b]) // Propiedades dinámicas

// => Comprobación de la existencia de una propiedad de un objeto:
// - Para comprobar si una propiedad existe en un objeto se utiliza la palabra reservada in.
// - Las propiedades deben ir entre comillas.
// Ejemplo:
console.log('manzana' in a)
console.log('nombre' in a)

// => Encadenamiento opcional:
// - El encadenamiento opcional permite acceder a las propiedades de un objeto anidado sin tener que comprobar si las propiedades existen.
// - Se utiliza el signo de interrogación ? para indicar que la propiedad es opcional.
// Ejemplo:
const mascota = {
  nombre: 'michi',
  raza: 'gato',
  dueno: {
    nombre: 'Jesús',
    segundoNombre: 'Alberto',
  }
}

console.log(mascota.dueno.nombre) // undefined
console.log(mascota.dueno?.segundoNombre) // undefined

// => Métodos:
// - Los métodos son funciones que se pasan como valores de las propiedades de un objeto.
const auto = {
  marca: 'Ford',
  modelo: 'Mustang',
  color: 'Rojo',
  // Método
  encender: function () {
    console.log('El ' + this.marca + ' se ha encendido')
  }
}

auto.encender() // Notación de punto
auto['encender']() // Notación de corchetes

// Crear un nuevo método:
// - Si la propiedad no existe, se crea.
// - Si la propiedad existe, se modifica.

auto.informacion = function () {
  return 'El auto es un ' + this.marca + ' ' + this.modelo
}

console.log(auto.informacion())

// => Los objetos son pasados por referencia:
// - Cuando se asigna un objeto a una variable, lo que se asigna es la referencia al objeto.
// Ejemplo:
const objeto = { a: 1 }
// objeto.a = 2
console.log(objeto.a)
const copyObj = { a: 1 }

console.log(objeto)
console.log(copyObj)
console.log(objeto === copyObj)
console.log({} == {})

const copy = objeto
console.log(objeto === copy)
