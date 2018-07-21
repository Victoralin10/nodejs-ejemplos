
function something() {
	console.log('Hello world.');
}

console.log('Antes');
const immediateObj = setImmediate(something);
console.log('Despues');


// clearImmediate(immediateObj);