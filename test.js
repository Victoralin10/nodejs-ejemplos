
const fs = require('fs');

fs.readFile('./text.txt', function (err, data) {
	if (err) {
		return console.error(err);
	}

	console.log(data.toString());
    fs.unlink('./text.txt');
});
