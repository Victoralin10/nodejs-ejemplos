

let [x, y] = [1, 2];
console.log('x+y:', x + y);

function foo() {
	return [175, 75];
};
let [height, weight] = foo();
console.log('hw:', height, weight);

let obj = {a: 5, b: 10};
let {a, b} = obj;
console.log('a*b:', a*b);

let [m, n, ...iterObj] = [1, 2, 3, 4, 5];
console.log(m, n, iterObj);