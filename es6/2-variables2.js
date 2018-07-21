// "use strict";

function myf() {
	var global = "global";
	var local = "local";
	console.log(global);
	console.log(local);
	if (true) {
		var global = "I'm global";
		let local = "I'm only local";
		console.log("if:", local);
	}
	console.log(global); // I'm global
	console.log(local); //undefined
}

myf();