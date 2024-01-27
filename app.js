/*
Desafíos:
1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de 
su altura en metros y peso en kilogramos, que se recibirán como parámetros.
2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3.Crea una función que convierta un valor en dólares, pasado como parámetro, 
y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80.
4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.
5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

//1.
function imc(altura, peso) {
    return peso / Math.pow(altura, 2);
}

let indice = imc(1.78, 286);
console.log("El IMC es " + indice);

//2.
function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

let numeroFactorial = factorial(5);
console.log("El factorial de 5 es " + numeroFactorial);

//3.
function dolares(moneda) {
    return moneda * 4.80;
}

let dinero = dolares(100);
console.log("Los $100 son " + dinero);

//4.
function areaRectangulo(ancho, largo) {
    let base = ancho * largo;
    let perimetro = largo * 2 + ancho * 2;
    console.log(`El area del rectangulo es:  ${base}`);
    console.log(`El perimetro del rectangulo es:  ${perimetro}`);
}

areaRectangulo(5, 5);

//5.
function areaCirculo(radio) {
    let pi = 3.14;
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;
    console.log('area  del circulo '+ area);
    console.log('Perimetro del Circulo ' + perimetro);
}

areaCirculo(3);

//6.
function tabladeMutiplicar(numero){
    for (var i=1;i<=10;i++){
        console.log(i +" x "+numero+" = "+(i*numero));
    }
}

tabladeMutiplicar(5)