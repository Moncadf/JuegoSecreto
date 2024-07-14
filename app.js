let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

/**
 * Desafíos
1. Crea una lista vacía llamada "listaGenerica".
2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6. Crea una función que calcule el promedio de los elementos en una lista de números.
7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8. Crea una función que devuelva la suma de todos los elementos en una lista.
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */
// 1. Lista vacía
const listaGenerica = [];

// 2. Lista de lenguajes de programación
const lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Agregar elementos a la lista
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// 4. Mostrar elementos de la lista
function mostrarElementos(lista) {
  console.log("Elementos de la lista:");
  for (const elemento of lista) {
    console.log(elemento);
  }
}

// 5. Mostrar elementos en orden inverso
function mostrarEnOrdenInverso(lista) {
  console.log("Elementos en orden inverso:");
  for (let i = lista.length - 1; i >= 0; i--) {
    console.log(lista[i]);
  }
}

// 6. Calcular promedio de una lista de números
function calcularPromedio(numeros) {
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  return suma / numeros.length;
}

// 7. Mostrar número más grande y más pequeño
function mostrarMaximoMinimo(numeros) {
  const maximo = Math.max(...numeros);
  const minimo = Math.min(...numeros);
  console.log(`Número más grande: ${maximo}, Número más pequeño: ${minimo}`);
}

// 8. Sumar elementos de una lista
function sumarElementos(numeros) {
  return numeros.reduce((acc, num) => acc + num, 0);
}

// 9. Encontrar posición de un elemento
function encontrarPosicion(lista, elemento) {
  return lista.indexOf(elemento);
}

// 10. Sumar elementos de dos listas uno a uno
function sumarListas(lista1, lista2) {
  if (lista1.length !== lista2.length) {
    throw new Error("Las listas deben tener la misma longitud.");
  }
  const resultado = [];
  for (let i = 0; i < lista1.length; i++) {
    resultado.push(lista1[i] + lista2[i]);
  }
  return resultado;
}

// 11. Elevar al cuadrado elementos de una lista
function elevarAlCuadrado(numeros) {
  return numeros.map(num => num * num);
}

// Ejemplos de uso
mostrarElementos(lenguajesDeProgramacion);
mostrarEnOrdenInverso(lenguajesDeProgramacion);

const numeros = [5, 12, 3, 8, 1];
console.log(`Promedio: ${calcularPromedio(numeros)}`);
mostrarMaximoMinimo(numeros);
console.log(`Suma: ${sumarElementos(numeros)}`);

const elementoBuscado = 'Python';
const posicion = encontrarPosicion(lenguajesDeProgramacion, elementoBuscado);
console.log(`Posición de ${elementoBuscado}: ${posicion}`);

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
console.log(`Suma de listas: ${sumarListas(lista1, lista2)}`);

console.log(`Cuadrados: ${elevarAlCuadrado(numeros)}`);