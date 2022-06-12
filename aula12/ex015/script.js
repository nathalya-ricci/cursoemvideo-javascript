function verificar() {
	var data = new Date()
	var ano = data.getFullYear()
	var fAno = document.getElementById('txtano')
	var res = document.querySelector('div#res')

	if (fAno.value.length == 0 || Number(fAno.value) > ano) {
		alert('[ERRO] Verifique os dados e tente novamente!')
	} else {
		var fSex = document.getElementsByName('radiosex')
		var idade = ano - Number(fAno.value)
		var genero = ''
		var img = document.createElement('img')
		img.setAttribute('id', 'foto')

		if (fSex[0].checked) {
			genero = 'Homem'

			if (idade >= 0 && idade < 10) {
				// criança
				img.setAttribute('src', './assets/images/crianca-menino.jpg')
			} else if (idade >= 10 && idade < 21) {
				// jovem
				img.setAttribute('src', './assets/images/jovem-homem.jpg')
			} else if (idade < 50) {
				// adulto
				img.setAttribute('src', './assets/images/homem-adulto.jpg')
			} else {
				// idoso
				img.setAttribute('src', './assets/images/idoso-homem.jpg')
			}
		} else if (fSex[1].checked) {
			genero = 'Mulher'

			if (idade >= 0 && idade < 10) {
				// criança
				img.setAttribute('src', './assets/images/crianca-menina.jpg')
			} else if (idade >= 10 && idade < 21) {
				// jovem
				img.setAttribute('src', './assets/images/jovem-mulher.jpg')
			} else if (idade < 50) {
				// adulto
				img.setAttribute('src', './assets/images/mulher-adulta.jpg')
			} else {
				// idosa
				img.setAttribute('src', './assets/images/idosa-mulher.jpg')
			}
		}
		res.style.textAlign = 'center'
		res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
		res.appendChild(img)
		img.style.width = '300px'
		img.style.height = '300px'
		img.style.borderRadius = '50%'
	}
}