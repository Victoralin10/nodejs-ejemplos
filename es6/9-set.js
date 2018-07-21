
let set = new Set();
set.add('foo');
set.add('bar');
set.size //2
for (let item of set) {
	console.log(item);
}

set.has('foo'); //true
set.delete('foo'); //true
set.has('foo'); //false
set.size //1
set.clear();
set.size //0
