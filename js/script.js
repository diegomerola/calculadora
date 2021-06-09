// Variables
const resultado = document.querySelector('#resultado');
const btnSumar = document.querySelector('#btnSumar');
const btnRestar = document.querySelector('#btnRestar');
const btnMultiplicar = document.querySelector('#btnMultiplicar');
const btnDividir = document.querySelector('#btnDividir');
let total;

// Eventos
btnSumar.addEventListener('click', () => {
    hacerOperacion(sumar);
});

btnRestar.addEventListener('click', () => {
    hacerOperacion(restar);
});

btnMultiplicar.addEventListener('click', () => {
    hacerOperacion(multiplicar);
});

btnDividir.addEventListener('click', () => {
    hacerOperacion(dividir);
});

// Funciones para operaciones
function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}


// Funciones
function hacerOperacion(operacion) {
    // Limpiar HTML
    limpiarHTML();

    // Obtener inputs
    const operando1 = document.querySelector('#operando1').value;
    const operando2 = document.querySelector('#operando2').value;

    //-- Agregar codigo para validar operando1 y operando2 --

    // Calcular total
    // Number: convierte un string u otro valor a uno de tipo numérico. Si es === '' convierte a 0.
    total = operacion(Number(operando1), Number(operando2));

    // Insertar total en el HTML
    insertarHTML(total);
}


function insertarHTML(total) {

    // Crear divResultado y agregar clases
    const divResultado = document.createElement('div');
    divResultado.classList.add('border', 'border-primary', 'rounded', 'my-3', 'p-3', 'text-center')
    divResultado.innerHTML = `
        <span class = 'font-600'>El resultado es:</span>
        <p class = 'font-600 text-primary my-0 py-0 '>${total}</p>
    `

    // Agregar divResultado a resultado
    resultado.appendChild(divResultado);

    // Eliminar dsp de 3 segundos
    setTimeout(function () {
        divResultado.remove();
    }, 3000)
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}




