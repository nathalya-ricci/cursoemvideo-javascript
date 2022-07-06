/*
let valores = [8, 1, 7, 4, 2, 9];

for (let pos = 0; pos < valores.length; pos++) {
	console.log(`A posição ${pos} tem o valor de ${valores[pos]}`);
}
*/

// versão mais recente e simplificada

let valores = [8, 1, 7, 4, 2, 9];

for (let pos in valores) { // só funciona com arrays e objetos
	console.log(`A posição ${pos} tem o valor de ${valores[pos]}`);
}
