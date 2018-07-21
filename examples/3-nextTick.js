
function something() {
	console.log('Something function.');
}

function something2() {
	console.log('Something 2');
}

console.log('Antes');
setImmediate(something2);
process.nextTick(something);
console.log('Despues');