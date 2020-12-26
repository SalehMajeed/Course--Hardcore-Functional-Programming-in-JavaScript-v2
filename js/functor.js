const box = x => ({
	map: f => box(f(x)),
	fold: f => f(x),
	to_string: `box(${x})`,
});

var next_char_for_numbering = str => {
	return box(str)
		.map(x => x.trim())
		.map(trimmed => parseInt(trimmed, 10))
		.map(number => new Number(number + 1))
		.fold(String.fromCharCode);
};

var result = next_char_for_numbering('     87');
console.log(result);
console.log('');

const compose = (f, g) => x => box(x).map(g).fold(f)

let first = xs => xs[0];
let half_the_first_large_number = xs => {
	return box(xs)
		.map(xs => xs.filter(x => x >= 20))
		.map(found => first(found) / 2)
		.fold(answer => `the answer is ${answer}`);
};
result = half_the_first_large_number([1, 4, 50]);
console.log(result);
console.log('');
