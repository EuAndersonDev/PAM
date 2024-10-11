// Objetos

var aluno1  = {
    matricula: 7627364,
    nome: 'Danilo Ferreira',
    curso: 'Bootcamp Front End',
    ativo: true
};

var aluno2 = {
    matricula: 230245,
    nome: 'Matheus Vinicius Rodrigues Brito',
    curso: 'Desenvolvimento de Sistemas',
    ativo: true,
    turma: '2DS'
}

var aluno3 = {
    matricula: 230244,
    nome: 'Anderson Augusto Santos Reis',
    curso: 'Desenvolvimento de Sistemas',
    ativo: true,
    turma: '2DS'
}




console.log(aluno1.nome);

aluno1.dataNascimento = '03/07/1985';
aluno2.dataNascimento = '21/11/2007';
aluno3.dataNascimento = '25/02/2008';
console.log(aluno1.dataNascimento);

console.log(aluno2);
console.log(aluno3);


delete aluno1.dataNascimento;

// Undefined e null

var x;
var y = null;

// Arrays

var frutas = ['Banana', 'Laranja', 'Maçã'];