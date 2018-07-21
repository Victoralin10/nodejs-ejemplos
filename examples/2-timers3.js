
let t = 0;

function something() {
	console.log('Hello world ' + t);
	t++;
}

const intervalObj = setInterval(something, 1000);

// clearInterval(intervalObj);