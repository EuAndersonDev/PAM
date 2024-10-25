function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function calcular() {
    let a = parseFloat(prompt("Digite o primeiro número:"));
    console.log('Primeiro número: ' + a);
    let b = parseFloat(prompt("Digite o segundo número:"));
    console.log('Segundo número: ' + b);

    alert("Resultados:\n" +
          "Soma: " + soma(a, b) + "\n" +
          "Subtração: " + subtracao(a, b) + "\n" +
          "Multiplicação: " + multiplicacao(a, b) + "\n" +
          "Divisão: " + (b !== 0 ? divisao(a, b) : "Divisão por zero não é permitida."));
    
}

calcular();