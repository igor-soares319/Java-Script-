var conta = []
var num 
var num1
var soma = 0 
var i = 0


do{
var conta = Number (prompt(`Qual tipo de conta gostaria de realizar\n[1] Soma\n[2] Subtração\n[3] Multiplicação\n[4] Divisão\n[5] Finalizar`))

switch(conta){
    case 1: var num = Number(prompt(`Digite um número`));
            var num1 = Number(prompt(`Digite um segundo número`));
            var soma = prompt(soma = num + num1)
            break;

    case 2: var num = Number(prompt(`Digite um número`));
            var num1 = Number(prompt(`Digite um segundo número`));
            var soma = prompt(soma = num - num1)
          
            break;

    case 3: var num = Number(prompt(`Digite um número`));
            var num1 = Number(prompt(`Digite um segundo número`));
            var soma = prompt(soma = num * num1)
            break;

    case 4: var num = Number(prompt(`Digite um número`));
            var num1 = Number(prompt(`Digite um segundo número`));
            var soma = prompt(soma = num / num1)
            while(num1 == 0){
                var num1 = Number(alert("ERRO.\nDigite outro número"))
            }
            break;
}

}while(conta != 5)
    alert("Programa finalizado")