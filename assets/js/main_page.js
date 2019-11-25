document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
	let mesa = params['mesa']

	let bebidas = document.querySelector('a1')
	let bebida = document.querySelector('ul1')
	let entradas = document.querySelector('a2')
	let entrada = document.querySelector('ul2')
	let pratos = document.querySelector('a3')
	let prato = document.querySelector('ul3')
	let sobremesas = document.querySelector('a4')
	let sobremesa = document.querySelector('ul4')

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
	coDesReplace('.footer-item', params)
	coDesReplace('.list1', bebidas1)
	coDesReplace('.list2', entradas1)
	coDesReplace('.list3', pratos1)
	coDesReplace('.list4', sobremesas1)

	bebida.classList.add('hidden')
	entrada.classList.add('hidden')
	prato.classList.add('hidden')
	sobremesa.classList.add('hidden')


	bebidas.addEventListener('click', function(){
		bebida.classList.add('hidden')
		entrada.classList.add('hidden')
		prato.classList.add('hidden')
		sobremesa.classList.add('hidden')
		bebida.classList.remove('hidden')


	})		

	entradas.addEventListener('click', function(){
		bebida.classList.add('hidden')
		entrada.classList.add('hidden')
		prato.classList.add('hidden')
		sobremesa.classList.add('hidden')
		entrada.classList.remove('hidden')

	})	

	pratos.addEventListener('click', function(){
		bebida.classList.add('hidden')
		entrada.classList.add('hidden')
		prato.classList.add('hidden')
		sobremesa.classList.add('hidden')
		prato.classList.remove('hidden')

	})	

	sobremesas.addEventListener('click', function(){
		bebida.classList.add('hidden')
		entrada.classList.add('hidden')
		prato.classList.add('hidden')
		sobremesa.classList.add('hidden')
		sobremesa.classList.remove('hidden')
		
	})

}) 