const assoc = (key, value, object) => {
	object[key] = value;
	return { ...object, [key]: object[key] };
};
console.log(assoc('name', 'Bobo', {}));
console.log(assoc('age', 25, { name: 'Bobo' }));
console.log(assoc('bestFriend', { name: 'Bruce Wayne' }, { name: 'Bobo' }));

const get_names = users => {
	return users.map(user => user.name);
};
console.log(get_names([{ name: 'Bruce Wayne' }, { name: 'Bobo' }, { name: 'Flash' }]));

const append = (item, list) => {
	return [...list, item];
};
console.log(append(4, [1, 2, 3]));
console.log(append('Ramda', ['Hello', 'World']));

const sort_ascending = numbers => [...numbers].sort((a, b) => a > b ? 1 : -1);
console.log(sort_ascending([3, 1, 5, 54, 2, 7, 8]));
