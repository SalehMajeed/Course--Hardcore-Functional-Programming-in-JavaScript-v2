const Box = x => ({
	map: f => Box(f(x)),
	chain: f => f(x),
	fold: f => f(x),
	toString: () => `Box(${x})`,
});

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces

// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat = str =>
	Box(str)
		.map(s => s.replace(/\$/, ''))
		.fold(s => parseFloat(s));

console.log(String(moneyToFloat('$5.00')), 5);


// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat = str =>
	Box(str)
		.map(s => s.replace(/\%/, ''))
		.map(s => parseFloat(s))
		.fold(f => f * 0.01);

console.log(String(percentToFloat('20%')), 0.2);

// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const applyDiscount = (price, discount) =>
	Box(moneyToFloat(price)).fold(cents => Box(percentToFloat(discount)).fold(savings => cents - cents * savings));

console.log(String(applyDiscount('$5.00', '20%')), 4);


// const applyDiscount = (price, discount) =>
// 	Box(moneyToFloat(price))
// 		.chain(cents => Box(percentToFloat(discount)).map(savings => cents - cents * savings))
// 		.fold(x => x);
