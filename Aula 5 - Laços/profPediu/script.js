function criarTabuadas() {
    const grid = document.getElementById('grid');

    for (let i = 1; i <= 10; i++) {
        // Cria o elemento para cada tabuada
        const tabuadaDiv = document.createElement('div');
        tabuadaDiv.classList.add('tabuada');

        // Adiciona o título da tabuada
        const titulo = document.createElement('h2');
        titulo.textContent = `Tabuada de ${i}`;
        tabuadaDiv.appendChild(titulo);

        // Adiciona os cálculos da tabuada
        for (let j = 1; j <= 10; j++) {
            const linha = document.createElement('p');
            linha.textContent = `${i} x ${j} = ${i * j}`;
            tabuadaDiv.appendChild(linha);
        }

        // Insere a tabuada no grid
        grid.appendChild(tabuadaDiv);
    }
}

// Chama a função para gerar as tabuadas ao carregar a página
window.onload = criarTabuadas;
