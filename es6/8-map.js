let map = new Map();
map.set('foo', 123);

let user = { userId: 1 };
map.set(user, 'Alex');
map.get('foo'); //123
map.get(user); //Alex

for (let [key, value] of map) {
	console.log(key, value);
}

map.size; //2
map.has('foo'); //true
map.delete('foo'); //true
map.has('foo'); //false

map.clear();
map.size; //0