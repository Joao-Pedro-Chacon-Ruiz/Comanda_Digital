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
			'abacaxi': {
				'acompanha': false,
				'valor': 'R$8,00',
				'nome': 'Suco de abacaxi com hortelã'
			},
			'coca': {
				'acompanha': false,
				'valor': 'R$5,00',
				'nome':'Coca-Cola'
			},
			'brahma': {
				'acompanha': false,
				'valor': 'R$11,00',
				'nome': 'Brahma'
			},
			'baden': {
				'acompanha': false,
				'valor': 'R$14,00',
				'nome': 'Baden Baden'
			},
		},
	}

	let entradas1 = {
		'entradas': {
			'salada': {
				'acompanha': false,
				'valor': 'R$25,00',
				'nome': 'Ceasar Salad'
			},
		},
	}

	let pratos1 = {
		'pratos': {
			'parmegiana': {
				'acompanha': true,
				'acompanhamento': 'Acompanha arroz e fritas',
				'valor': 'R$28,00',
				'nome': 'Parmegiana de Frango'
			},
			'schnitz': {
				'acompanha': true,
				'acompanhamento': 'Acompanha salada de batata',
				'valor': 'R$32,00',
				'nome': 'Schnitzel'
			},
			'espeto': {
				'acompanha': true,
				'acompanhamento': 'Acompanha farofa',
				'valor': 'R$6,20',
				'nome': 'Espeto de Carne'
			},
		},
	}

	let sobremesas1 = {
		'sobremesas': {
			'pudim': {
				'acompanha': false,
				'valor': 'R$11,00',
				'nome': 'Pudim de Doce de Leite'
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