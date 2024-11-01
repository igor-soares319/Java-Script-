var dados = ""
var lista = []
const readline = require (`readline-sync`)
var resultado = "";
var i = 0;


do {
    console.log("--------------------------------------------------------\n[1] Adicionar [2] Remover [3] Listar [4] Sair")

    var escolha = readline.questionInt(`\nO que deseja fazer? (Digite de acordo com o numero)`);
    
    switch(escolha){

        case 1:
            dados = readline.question(`O que deseja adicionar? `);
            lista.push(dados);
            console.log(`Dados "${dados}" adicionado`)            
        break;

        case 2:

        if (dados.length == 0) {
            console.log('Nenhum dado disponível para remover.');
        }
            console.log('Dados disponíveis para remoção:');
            for (i;  < dados.length; i++) {
                console.log(`[${i}] ${dados[i]}`);
            }

            const iRemove = readline.questionInt('Digite o índice do dado que deseja remover: '); 
            const dadoRemover = dados[iRemove]; 
            if (dadoRemover) {
            dados.splice(iRemove, 1);
            console.log(`Dado "${dadoRemover}" removido.`);

            }           
        break;

        case 3:
            if(lista.length == 0){
            console.log("Nenhum dado disponivel para remover. ");
            }
            else{
                for(i;i < lista.length; i++){
                 console.log(`[${i+1}] ${lista[i]}`)   
                }
            }
            break;

    }
}while (escolha != 4);
console.log("Saindo")


