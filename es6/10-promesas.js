

let promise = new Promise((resolve, reject) => {
	if (Math.random() < 0.5) {
		setTimeout(() => resolve('Value'), 2000);
	} else {
		setTimeout(() => reject('Reason'), 2000);
	}
});

promise.then(
	function (value) {
		console.log("success", value);
	},
	function (reason) {
		console.log("error ", reason);
	}
);