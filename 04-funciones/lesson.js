/*
==================
  * Funciones *
==================
*/


function saludar (nombre, apellido){
  console.log('Hola ' + nombre + ' ' + apellido);
}

saludar('Jorge' , 'Perez'); 

// variables antes de pasar argumentos; 

const nombre = 'Luis';
const apellido = 'Mata'; 

saludar(nombre , apellido); 


// => valor de retorno: 

let sumar = (sum1, sum2) => {
  return sum1 + sum2; 
} 

console.log(sumar(3,2)); // las funciones son expresiones que devuelven un valor




