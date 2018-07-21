
function printName(name, ...fancyNames) {
	var fullName = name;
	fancyNames.forEach(fancyN => fullName += ' ' + fancyN);
	console.log(fullName);
};

printName('Felipe'); // Felipe
printName('Felipe', 'Juan', 'Froilan'); //Felipe Juan Froilan