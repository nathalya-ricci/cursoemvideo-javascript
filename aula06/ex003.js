var n1 = prompt("Digite um número: ");
var n2 = prompt("Digite outro número: ");
var s = n1 + n2;
alert("A soma dos valores é " + s); // Contatenação
// (number + number) para adição
// (string + string) para concatenação


var n1 = parseInt(prompt("Digite um número: ")); //parseInt converte um número para inteiro
var n2 = parseInt(prompt("Digite outro número: ")); //parseInt converte um número para inteiro
var s = n1 + n2;
alert("A soma dos valores é " + s);


var n1 = parseFloat(prompt("Digite um número: ")); //parseInt converte um número para real (ex.: 5.4)
var n2 = parseFloat(prompt("Digite outro número: ")); //parseInt converte um número para real (ex.: 5.4)
var s = n1 + n2;
alert("A soma dos valores é " + s);

var n1 = Number(prompt("Digite um número: "));
var n2 = Number(prompt("Digite outro número: "));
var s = n1 + n2;
alert("A soma dos valores é " + s);
// apenas Number converte sozinho tanto para Inteiro quanto para Real. *quando realmente quiser forçar um único tipo, usar parse 