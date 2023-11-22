// </ #3 Operadores Básicos />

/*
 Ejercicio #1
 Resuelve las siguientes operaciones aritméticas
 por ejemplo: 5 + null === 8 -> es lo mismo que 5 + 3 = 8
 Reemplaza null por el valor correspondiente para que la operación sea correcta.
*/

// Suma 25 + ? === 33
const suma = 25 + null === 33

// Resta ? - 12 === 21
const resta = null - 12 === 21

// Multiplicación 8 * ? === 64
const multiplicacion = 8 * null === 64

// División ? / 5 === 5
const division = null / 5 === 5

// Módulo 23 % ? === 2
const modulo = 23 % null === 2

// Exponenciación 3 ** ? === 27
const exponenciacion = 3 ** null === 27

// Incremento
let incremento = 1

// Post Incremento: incremento++ === ?
const postIncremento = incremento++ === null

// Pre Incremento: ++incremento === ?
const preIncremento = ++incremento === null

/*
  Ejercicio #2
  Escribe el resultado de las siguientes operaciones
  Reemplaza null por el valor correspondiente para que la operación sea correcta.
*/

// ¿Cuál es el resultado? => 5 + 3 * 2
const example1 = 5 + 3 * 2 === null

// ¿Cuál es el resultado? => 3 * 2 / 2
const example2 = 3 * 2 / 2 === null

// ¿Cuál es el resultado? => 3 * (10 - 5) / 2
const example3 = 3 * (10 - 5) / 2 === null

// ¿Cuál es el resultado? => '1' + 2 + 2
const example4 = '1' + 2 + 2 === null

// ¿Cuál es el resultado? => 1 + 2 + '2'
const example5 = 1 + 2 + '2' === null

// ¿Cuál es el resultado? => 1 + +'2' + '2'
const example6 = 1 + +'2' + '2' === null

// ¿Cuál es el resultado? => 'b' + 'a' + +'a' + 'a'
const example7 = 'b' + 'a' + +'a' + 'a' === null

/*
  Ejercicio #3
  Resuelve las siguientes operaciones de asignación
  Reemplaza null por el valor correspondiente para que la operación sea correcta.
*/
let x, y

const z = y = x = 10

// ¿Cuál es el valor de x?
const valorDeX = x === null

// ¿Cuál es el valor de y?
const valorDeY = y === null

// ¿Cuál es el valor de z?
const valorDeZ = z === null

// Reeplaza los operadores por una asignación compuesta (+=, -=, *=, /=, %=, **=) dependiendo del operador que corresponda.
x = x + y
x = x * z

// ¿Cuál es el valor de x2?
const valorDeX2 = x === null

// NO TOCAR ESTE CÓDIGO
module.exports = {
  suma,
  resta,
  multiplicacion,
  division,
  modulo,
  exponenciacion,
  postIncremento,
  preIncremento,
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  valorDeX,
  valorDeY,
  valorDeZ,
  valorDeX2
}
