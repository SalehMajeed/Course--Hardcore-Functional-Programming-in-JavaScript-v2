const {curry, test, ifElse, where, equals, map, prop, pluck, filter, propSatisfies, both, gte, lte, either } = R;

const count_bobos = test(/bobo/gi);
console.log(count_bobos('Bobo went to the store.'));
console.log(count_bobos('Who went to the store ?'));
console.log(count_bobos('bobo did.'));
console.log(count_bobos('I did not know that!'));
console.log(count_bobos('Well now you know.'));

const shouldCode = ifElse(
	where({
		lovesTech: equals(true),
		worksHard: equals(true),
	}),
	person => `${person.name} may enjoy a tech career!`,
	person => `${person.name} wouldn't enjoy a tech career.`
);
console.log(shouldCode({ name: 'Spongebob', lovesTech: false, worksHard: true }));
console.log(shouldCode({ name: 'Squidward', lovesTech: false, worksHard: false }));
console.log(shouldCode({ name: 'Sandy', lovesTech: true, worksHard: true }));
console.log(shouldCode({ name: 'Patrick', lovesTech: true, worksHard: false }));

let getAges = pluck('age');
console.log(getAges([{ age: 20 }, { age: 39 }, { age: 14 }, { age: 33 }, { age: 60 }, { age: 45 }]));

getAges = map(prop('age'));
console.log(getAges([{ age: 20 }, { age: 39 }, { age: 14 }, { age: 33 }, { age: 60 }, { age: 45 }]));

const youngAdultAge = both(gte(18), lte(25));
const isYoungAdult = propSatisfies(youngAdultAge, 'age');
const keepYoungAdults1 = filter(isYoungAdult);
console.log(keepYoungAdults1({ age: 20 }, { age: 16 }, { age: 18 }, { age: 26 }, { age: 25 }, { age: 19 }));

const defaultTo = curry((default_val, val) => (val == null ? default_val : val));
const default_val = defaultTo('Bobo');
console.log(default_val('Patrick'));
console.log(default_val(null));
console.log(default_val(undefined));
console.log(default_val({}));
console.log(default_val(0));
console.log(default_val(false));
