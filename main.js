let numero1 = document.querySelector('#enterone');
let numero2 = document.querySelector('#entertwo');
let resul = document.querySelector('#resultado');
let resulu = document.querySelector('#resultadoB')

function somar() {
    resul.value = Number(numero1.value) + Number(numero2.value);
    resulu.innerHTML = Number(numero1.value) + Number(numero2.value);
}

function subtrair() {
    resul.value = Number(numero1.value) - Number(numero2.value);
    resulu.innerHTML = Number(numero1.value) - Number(numero2.value);
}
function dividir() {
    resul.value = Number(numero1.value) / Number(numero2.value);
    resulu.innerHTML = Number(numero1.value) / Number(numero2.value);
}
function multiplicar() {
    resul.value = Number(numero1.value) * Number(numero2.value);
    resulu.innerHTML = Number(numero1.value) * Number(numero2.value);
}
function limpar() {
    numero1.value = "";
    numero2.value = "";
    resul.value = "";
    resulu.innerHTML = "";
}


let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')
let cal = document.querySelector('#calcular')

function imc() {
   
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');

    let resultadoIMC = Number(peso) / (Number(altura) * Number(altura));

    document.querySelector('#imcResultado').value = resultadoIMC.toFixed(2);

    // Definir as considerações baseadas no IMC calculado
    let consideracoes = document.getElementById('consideracoes');
    if (resultadoIMC < 18.5) {
        consideracoes.textContent = 'Abaixo do peso';
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
        consideracoes.textContent = 'Peso normal';
    } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
        consideracoes.textContent = 'Sobrepeso';
    } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
        consideracoes.textContent = 'Obesidade grau 1';
    } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
        consideracoes.textContent = 'Obesidade grau 2';
    } else {
        consideracoes.textContent = 'Obesidade grau 3';
    }

}
