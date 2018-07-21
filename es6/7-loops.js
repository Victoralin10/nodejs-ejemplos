
var numbers = [1, 2, 3, 4, 5];
for (let item of numbers) {
	console.log(item);
}

let iterable = [3, 5, 7];
iterable.foo = "hello";
for (let i in iterable) {
	console.log(i); // logs 0, 1, 2, "foo"
}

for (let i of iterable) {
	console.log(i); // logs 3, 5, 7
}