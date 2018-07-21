
function something() {
	console.log('Something function.');
}

console.log('Antes');

process.nextTick(something);

console.log('Despues');