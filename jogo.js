
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaCoronaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	//1500
	criaCoronaTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaCoronaTempo = 1000
} else if (nivel === 'chucknorris') {
	//750
	criaCoronaTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)


function posicaoRandomica() {


	//remover o corona anterior (caso exista)
	if(document.getElementById('corona')) {
		document.getElementById('corona').remove()

		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var corona = document.createElement('img')
	corona.src = 'imagens/corona.png'
	corona.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	corona.style.left = posicaoX + 'px'
	corona.style.top = posicaoY + 'px'
	corona.style.position = 'absolute'
	corona.id = 'corona'
	corona.onclick = function() {
		this.remove()
	}

	document.body.appendChild(corona)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'corona1'
		
		case 1:
			return 'corona2'

		case 2:
			return 'corona3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}

