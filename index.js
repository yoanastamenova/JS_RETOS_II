
// RETO 1

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Introduce la figura que quieres (circulo, triangulo, cuadrado): ", (figura) => {

//   switch(figura){
//     case "circulo":
//         rl.question("Introduce el radio del circulo: ", (input) => {
//             let radio = parseFloat(input);
//             let areaCirculo = Math.PI * Math.pow(radio, 2);   
//             console.log(`La area del circulo es: ${areaCirculo}`);
//             rl.close();
//         });
//         break;
//     case "triangulo":
//         rl.question("Introduce la base del triangulo: ", (input) => {
//             let base = parseFloat(input);
//             rl.question("Introduce la altura del triangulo: ", (input) => {
//                 let altura = parseFloat(input);
//                 let areaTriangulo = base * altura / 2;
//                 console.log(`La area del triangulo es: ${areaTriangulo}`);
//                 rl.close();
//             });
//         });
//         break;
//     case "cuadrado":
//         rl.question("Introduce el lado del cuadrado: ", (input) => {
//             let lado = parseFloat(input);
//             let areaCuadrado = lado * lado;             
//             console.log(`La area del cuadrado es: ${areaCuadrado}`);
//             rl.close();
//         });
//         break;
//     default:
//         console.log("No conozco esta figura! Intenta de nuevo!");
//         rl.close();
//         break;
//   }
// });

// RETO 2
// // RETO 2
/*Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
por el usuario (prompt). Crea un método donde pasamos como parámetros entre qué
números queremos que los genere, podemos pedirlas al usuario antes de generar los
números. Este método devolverá un número entero aleatorio. Muestra estos números por
consola.*/

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Introduce tu valor minima: ") 
// rl.question("Introduce tu valor maxima: ") 

// // returns a number between the min and max 
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   console.log(`Tu numero es: ${numero}`);

// RETO 3
/* Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
por parámetro para que nos indique si es o no un número primo, debe devolver true si es
primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por
ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.*/

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Indica tu numero: ', (userNum) => {
//     console.log(Primo(userNum));
//     rl.close();
// });

// function Primo(userNum) {
//     userNum = parseInt(userNum);
//     if (userNum < 2) return false;
//     for(let i = 2; i <= Math.sqrt(userNum); i++){
//         if(userNum % i === 0) return false;
//     }
//     return true;
// }

// RETO 4
/*Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
realizará mediante un método al que le pasamos el número como parámetro. Para calcular
el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si
introducimos un 5, realizará esta operación 5*4*3*2*1=120.*/

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Please enter a number: ', (num) => {
//     console.log(`The factorial of ${num} is ${factorial(num)}`);
//     rl.close();
// });

// function factorial(n) {
//     n = parseInt(n);
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

//RETO 5
// Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un String
// con el número convertido a binario. Para convertir un número decimal a binario, debemos
// dividir entre 2 el número y el resultado de esa división se divide entre 2 de nuevo hasta que
// no se pueda dividir más, el resto que obtengamos de cada división formará el número
// binario, de abajo a arriba.

// const readline = require('readline');

// function decimalABinario(numero) {
//     let binario = '';
//     while(numero > 0){
//         binario = (numero % 2) + binario;
//         numero = Math.floor(numero / 2);
//     }
//     return binario;
// }

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Por favor, introduce un número decimal: ', (numero) => {
//     console.log(`El número decimal ${numero} en binario es: ${decimalABinario(numero)}`);
//     rl.close();
// });

//RETO 6

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function contarCifras(numero) {
//     return numero.toString().length;
// }

// let numero = parseInt(prompt("Por favor, introduce un número entero positivo: "));

// if(!Number.isInteger(numero) || numero < 0){
//     alert("El valor introducido no es un número entero positivo.");
// }else{
//     alert("El número de cifras es: " + contarCifras(numero));
// }

//RETO 7

// const readline = require('readline');

// let libras = 0.86;
// let dolares = 1.28611;
// let yenes = 129.852;

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Introduce la cantidad aqui: ', (cantidad) => {
//     rl.question('¿Qué valuta quieres cambiarla? ', (valuta) => {
//         switch(valuta){
//             case "libras":
//                 let resultLibras = cantidad * libras;
//                 console.log(`La cantidad en libras es ${resultLibras}`);
//                 break;

//             case "dolares":
//                 let resultDolares = cantidad * dolares;
//                 console.log(`La cantidad en dolares es ${resultDolares}`);
//                 break;

//             case "yenes":
//                 let resultYenes = cantidad * yenes;
//                 console.log(`La cantidad en yenes es ${resultYenes}`);
//                 break;
                
//             default:
//                 console.log("No puedo convertir con la valuta elegida!");
//                 break;
//         }
//         rl.close();
//     });
// });

// RETO 8

// 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
// valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método para
// rellenar el array(que tenga como parámetros los números entre los que tenga que generar)
// y otro para mostrar el contenido y la suma del array.

// const readline = require('readline');

// function rellenarArray(tamano, min, max) {
//     let arrayNumeros = [];
//     for(let i = 0; i < tamano; i++) {
//         arrayNumeros[i] = Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     return arrayNumeros;
// }

// function mostrarArray(arrayNumeros) {
//     let suma = arrayNumeros.reduce((a, b) => a + b, 0);
//     console.log(`El contenido del array es: ${arrayNumeros}`);
//     console.log(`La suma de todos los valores es: ${suma}`);
// }

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Introduce el tamaño del array: ', (tamaño) => {
//     let arrayNumeros = rellenarArray(parseInt(tamaño), 0, 9);
//     mostrarArray(arrayNumeros);
//     rl.close();
// });

// RETO 10

// Crea un array de números de un tamaño pasado por prompt, el array contendrá
// números aleatorios primos entre los números deseados, por último, nos indica cuál es el
// mayor de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
// hacer todos los métodos que necesites.

// const readline = require('readline');

// function generarRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function esPrimo(num) {
//     if (num < 2) {
//         return false;
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function generarArrayPrimos(tamano, min, max) {
//     let primos = [];

//     while (primos.length < tamano) {
//         let num = generarRandom(min, max);

//         if(esPrimo(num)) {
//             primos.push(num);
//         }
//     }

//     return primos;
// }

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Introduce el tamaño del array: ', (tamaño) => {
//     rl.question('Introduce el valor mínimo: ', (min) => {
//         rl.question('Introduce el valor máximo: ', (max) => {
//             let arr = generarArrayPrimos(parseInt(tamaño), parseInt(min), parseInt(max));
//             console.log(`El array de números primos es: ${arr}`);
//             console.log(`El número primo mayor en el array es: ${Math.max(...arr)}`);
//             rl.close();
//         });
//     });
// });

