var i = 0
var dados = []

const readline = require('readline-sync');

var tamanho = Number(readline.questionInt("Quantos projetos deseja adicionar?\nDigite em número inteiro"))

while (tamanho <= 0){
    var tamanho = readline.question("Valor invalido. Digite outro")
}

function pi(){
    for(i;i < tamanho; i++){
    const dado = readline.question('O que deseja adicionar? ');
    dados.push(dado);
    }
}

function mostrar(){
    i = 1
    for(i=1;i <= dados.length; i++){
        console.log(`${dados [i-1]}`)
        }
}

pi()
mostrar()
    