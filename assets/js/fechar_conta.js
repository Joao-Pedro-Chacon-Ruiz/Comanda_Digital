document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
	let mesa = parseInt(params['mesa'])
	let abacaxi = parseInt(params['abacaxi'])
	let coca = parseInt(params['coca'])
	let brahma = parseInt(params['brahma'])
	let baden = parseInt(params['baden'])
	let salada = parseInt(params['salada'])
	let parmegiana = parseInt(params['parmegiana'])
	let schnitzel = parseInt(params['schnitz'])
	let espeto = parseInt(params['espeto'])
	let pudim = parseInt(params['pudim'])

	let abacaxis = document.querySelector('ul1')
	let cocas = document.querySelector('ul2')
	let brahmas = document.querySelector('ul3')
	let badens = document.querySelector('ul4')
	let saladas = document.querySelector('ul5')
	let parmegianas = document.querySelector('ul6')
	let schnitzels = document.querySelector('ul7')
	let espetos = document.querySelector('ul8')
	let pudims = document.querySelector('ul9')

	calculadora = []
	let soma = 0


	coDesReplace('.header-container', params)
	coDesReplace('.dividir', params)
	
	abacaxis.classList.add('hidden')
	cocas.classList.add('hidden')
	brahmas.classList.add('hidden')
	badens.classList.add('hidden')
	saladas.classList.add('hidden')
	parmegianas.classList.add('hidden')
	schnitzels.classList.add('hidden')
	espetos.classList.add('hidden')
	pudims.classList.add('hidden')



	if(abacaxi){
		coDesReplace('.list1', params)
		abacaxis.classList.remove('hidden')
		calculadora.push(parseInt(abacaxi)*8)
	}

	if(coca){
		coDesReplace('.list2', params)
		cocas.classList.remove('hidden')
		calculadora.push(parseInt(coca)*5)
	}

	if(brahma){
		coDesReplace('.list3', params)
		brahmas.classList.remove('hidden')
		calculadora.push(parseInt(brahma)*11)
	}

	if(baden){
		coDesReplace('.list4', params)
		badens.classList.remove('hidden')
		calculadora.push(parseInt(baden)*14)
	}

	if(salada){
		coDesReplace('.list5', params)
		saladas.classList.remove('hidden')
		calculadora.push(parseInt(salada)*25)
	}

	if(parmegiana){
		coDesReplace('.list6', params)
		parmegianas.classList.remove('hidden')
		calculadora.push(parseInt(parmegiana)*28)
	}

	if(schnitzel){
		coDesReplace('.list7', params)
		schnitzels.classList.remove('hidden')
		calculadora.push(parseInt(schnitzel)*32)
	}

	if(espeto){
		coDesReplace('.list8', params)
		espetos.classList.remove('hidden')
		calculadora.push(parseInt(espeto)*6.20)
	}

	if(pudim){
		coDesReplace('.list9', params)
		pudims.classList.remove('hidden')
		calculadora.push(parseInt(pudim)*11)
	}



	for (let x of calculadora) {
		soma += x		
	}

	let final1 = {'valor': soma}


	coDesReplace('.total', final1)	




})