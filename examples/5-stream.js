
const fs = require('fs');

const inp = fs.createReadStream('text.txt');

inp.on('data', function (data) {
	console.log('data:', data.toString());
});

inp.on('end', function () {
	console.log('Finalizado');
});