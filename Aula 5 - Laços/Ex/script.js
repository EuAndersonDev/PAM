

function tabuada(multiplicado) {
    let resultadoHTML = '';
    for (var i = 0; i <= 10; i++) {
        let resultado = multiplicado * i;
        resultadoHTML += multiplicado + " x " + i + " = " + resultado + "<br>";
    }
    return resultadoHTML;
}


function gerarTabuada() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    if (numero === '') {
        resultadoDiv.innerHTML = 'Por favor, digite um número!';
    } else {
        resultadoDiv.innerHTML = tabuada(parseInt(numero));
    }
}

function limpar() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}

