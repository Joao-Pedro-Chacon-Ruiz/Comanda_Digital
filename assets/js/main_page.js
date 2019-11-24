document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
	let mesa = params['mesa']

	let bebidas = document.querySelector('a1')
	let entradas = document.querySelector('a2')
	let pratos = document.querySelector('a3')
	let sobremesas = document.querySelector('a4')

	let bebidas1 = {
		'bebidas': {
			'Suco de abacaxi com hortelã': {
				'acompanha': false,
				'valor': 'R$8,00'
			},
			'Coca-Cola': {
				'acompanha': false,
				'valor': 'R$5,00'
			},
			'Brahma': {
				'acompanha': false,
				'valor': 'R$11,00'
			},
			'Baden Baden': {
				'acompanha': false,
				'valor': 'R$14,00'
			},
		},
	}

	let entradas1 = {
		'entradas': {
			'Ceasar Salad': {
				'acompanha': false,
				'valor': 'R$25,00'
			},
		},
	}

	let pratos1 = {
		'pratos': {
			'Parmegiana de Frango': {
				'acompanha': true,
				'acompanhamento': 'Acompanha arroz e fritas',
				'valor': 'R$28,00'
			},
			'Schnitzel': {
				'acompanha': true,
				'acompanhamento': 'Acompanha salada de batata',
				'valor': 'R$32,00'
			},
			'Espeto de Carne': {
				'acompanha': true,
				'acompanhamento': 'Acompanha farofa',
				'valor': 'R$6,20'
			},
		},
	}

	let sobremesas1 = {
		'sobremesas': {
			'Pudim de Doce de Leite': {
				'acompanha': false,
				'valor': 'R$11,00'
			},
		},
	}



	coDesReplace('.header-container', params)


	bebidas.addEventListener('click', function(){

		// let informacao = document.querySelector('ul')
		// context = bebidas1
		// informacao.innerHTML = context
		coDesReplace('.list', bebidas1)

	})		

	entradas.addEventListener('click', function(){

		// let informacao = document.querySelector('ul')
		// context = entradas1
		// informacao.innerHTML = context
		coDesReplace('.list', entradas1)

	})	

	pratos.addEventListener('click', function(){

		// let informacao = document.querySelector('ul')
		// context = pratos1
		// informacao.innerHTML = context
		coDesReplace('.list', pratos1)

	})	

	sobremesas.addEventListener('click', function(){

		// let informacao = document.querySelector('ul')
		// context = sobremesas1
		// informacao.innerHTML = context
		coDesReplace('.list', sobremesas1)
	})

}) 