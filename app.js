/*
Desafíos
Crea una lista vacía llamada "listaGenerica".
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

//1.
let listaGenerica = [];
console.log(listaGenerica);

//2.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguagesDeProgramacion);

//3.
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');
console.log(lenguagesDeProgramacion);

//4.
function mostrarLista(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Elemento ${i+1}: ${arr[i]}`);
    }
}

mostrarLista(lenguagesDeProgramacion);

//5.
function mostrarListaInversa(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(`Elemento ${i}: ${arr[i]}`);
    }
}

mostrarListaInversa(lenguagesDeProgramacion);

//6.
function calcularPromedio(arr) {
    let promedio = 0;
    for (let i = 0; i < arr.length; i++) {
        promedio += arr[i];
    }
    return promedio / arr.length;
}

let miArrayNumeros = [15, 10, 5, 12, 3, 45, 1];
console.log("El promedio de la lista es: " + calcularPromedio(miArrayNumeros));

//7.
function buscarMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
        if (arr[i] < menor) {
            menor = arr[i];
        }
    }
    console.log('El numero mayor es: ' + mayor);
    console.log('El numero menor es: ' + menor);
}

buscarMenorMayor(miArrayNumeros);

//8.
function sumarLista(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

console.log('La suma de la lista es: ' + sumarLista(miArrayNumeros));

//9.
function elementoParametroLista(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            return i;
        }
    }
    return -1;
}

console.log('Buscando el elemento GoLang en mi lista: ' +  elementoParametroLista(lenguagesDeProgramacion, "GoLang"));
console.log('Buscando el elemento 45 en mi lista: ' +  elementoParametroLista(miArrayNumeros, 45));

//10.
function sumaElementosLista(list1, list2){
    if (list1.length === list2.length){
        let listSuma = [];
        for (i = 0; i < list1.length; i++){
            listSuma.push(list1[i]+list2[i]);
        }
        return listSuma;
    }else{
        console.log('Las listas no son del mismo tamaño.')
    }
}

let listaUno = [15,110,25,36,87,5,9];
let listaDos = [5,2,6,3,7,6,1];

console.log(sumaElementosLista(listaUno,listaDos));

//11.

function cuadradoLista(arr){
    let cuadrado = [];
    for (i = 0; i < arr.length; i++){
        cuadrado.push(Math.pow(arr[i],2));
    }
    return cuadrado;
}

console.log(`El cuadrado de las lista ${listaDos}, es ${cuadradoLista(listaDos)}`);