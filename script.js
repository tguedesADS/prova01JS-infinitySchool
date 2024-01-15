var nota1 = parseFloat(prompt("Digite a 1ª nota: "))
var peso1 = parseFloat(prompt("Digite o peso da 1ª nota: "))

var nota2 = parseFloat(prompt("Digite a 2ª nota: "))
var peso2 = parseFloat(prompt("Digite o peso da 2ª nota: "))

var nota3 = parseFloat(prompt("Digite a 3ª nota: "))
var peso3 = parseFloat(prompt("Digite o peso da 3ª nota: "))

var media = (nota1*peso1) + (nota2*peso2) + (nota3*peso3);

console.log(`A média ponderada é ${media}`); 