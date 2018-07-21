
setInterval(() => {
	console.log('hi world');
}, 100);

let vowels = ['a', 'e', 'i', 'o', 'u'];
vowels.forEach(value => {
	console.log('vowel :' + value);
});


let sum = (a, b) => a + b;
console.log(sum(4, 5));


function hello(name = 'Victor') {
	console.log('Hello ' + name);
}

hello();
hello('Josue');