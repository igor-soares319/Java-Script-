var num, num1
var soma
conta

function soma1(n1,n2){
 result = n1  + n2
 alert (`Resultado = ${result}`)}

function soma2(n1,n2){
 result = n1 - n2
 alert (`Resultado = ${result}`)}

function soma3(n1,n2){
 result = n1 * n2
 alert (`Resultado = ${result}`)}

function soma4(n1,n2){
 result = n1 / n2
 alert (`Resultado = ${result}`)}


do{
    var conta = Number (prompt(`Qual tipo de conta gostaria de realizar\n[1] Soma\n[2] Subtração\n[3] Multiplicação\n[4] Divisão\n[5] Finalizar`))
    
    switch(conta){
        case 1: var num = Number(prompt(`Digite um número`));
                var num1 = Number(prompt(`Digite um segundo número`));
                soma1(num,num1)
                break;
    
        case 2: var num = Number(prompt(`Digite um número`));
                var num1 = Number(prompt(`Digite um segundo número`));
                soma2(num,num1)            
                break;
    
        case 3: var num = Number(prompt(`Digite um número`));
                var num1 = Number(prompt(`Digite um segundo número`));
                soma3(num,num1)
                break;
    
        case 4: var num = Number(prompt(`Digite um número`));
                var num1 = Number(prompt(`Digite um segundo número`));
                soma4(num,num1)
                while(num1 == 0){
                    var num1 = Number(alert("ERRO.\nDigite outro número"))
                }
                break;
    }
    
    }while(conta != 5)
        alert("Programa finalizado")