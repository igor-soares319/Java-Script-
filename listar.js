let dados = [];


const readline = require('readline-sync');


const opcoes = ["Adicionar", "Remover", "Listar", "Sair"];


while (true) {
    console.log('-----------------------------------------------------------------');

    for (let i = 0; i < opcoes.length; i++) {
        console.log(`[${i}] ${opcoes[i]}`)};

    const escolha = readline.questionInt('O que deseja fazer? (Digite um número para confirmar) ');

    if (escolha == 0) {
        const dado = readline.question('O que deseja adicionar? ');
        dados.unshift(dado);
        console.log(`Dado "${dado}" adicionado.`);
    } 
    else if (escolha == 1) {
        if (dados.length == 0) {
            console.log('Nenhum dado disponível para remover.');
        } else {
            console.log('Dados disponíveis para remoção:');
            for (let i = 0; i < dados.length; i++) {
                console.log(`[${i}] ${dados[i]}`);
            }

            const iRemove = readline.questionInt('Digite o índice do dado que deseja remover: '); 
            const dadoRemover = dados[iRemove]; 
            if (dadoRemover) {
            dados.splice(iRemove, 1);
            console.log(`Dado "${dadoRemover}" removido.`);

            } else {
                console.log('Índice inválido!');
            }
        }
    } 
    else if (escolha == 2) {
        console.log('Dados:\n', dados.length > 0 ? dados.join('\n') : 'Nenhum dado disponível.');
    } 
    else if (escolha == 3) {
        break; 
    } 
    else {
        console.log('Escolha inválida! Tente novamente.');
    }

}
