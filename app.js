let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteado = [];
let numeroMaximo = 10;
let numeroSorteos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'ves' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
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
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    // Si el número esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    console.log(numeroSorteos);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteado.length == numeroMaximo || numeroSorteos >= 3) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {       
        if (listaNumerosSorteado.includes(numeroGenerado)) {            
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteado.push(numeroGenerado);
            numeroSorteos++;
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el número aleatorio    
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();