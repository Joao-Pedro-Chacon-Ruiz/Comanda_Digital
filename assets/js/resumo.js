document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
	let mesa = params['mesa']

	coDesReplace('.header-container', params)

	console.log(mesa)

})