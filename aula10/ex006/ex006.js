/*
var area = document.getElementById("area");

function clicar() {
	area.innerText = "Clicou!";
	area.style.background = "red";
}

function entrar() {
	area.innerText = "Entrou!";
}

function sair() {
	area.innerText = "Saiu!";
	area.style.background = "green";
}
*/

// com addEventListener
// ajuda a não poluir o HTML

var area = document.getElementById("area");
area.addEventListener("click", clicar);
area.addEventListener("mouseover", entrar);
area.addEventListener("mouseout", sair);

function clicar() {
	area.innerText = "Clicou!";
	area.style.background = "red";
}

function entrar() {
	area.innerText = "Entrou!";
}

function sair() {
	area.innerText = "Saiu!";
	area.style.background = "green";
}