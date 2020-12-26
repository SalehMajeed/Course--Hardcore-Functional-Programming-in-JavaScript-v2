// Definitions
// ====================
let Right = x => ({
	chain: f => f(x),
	map: f => Right(f(x)),
	fold: (f, g) => g(x),
	toString: () => `Right(${x})`,
});

let Left = x => ({
	chain: f => Left(x),
	map: f => Left(x),
	fold: (f, g) => f(x),
	toString: () => `Left(${x})`,
});

let fromNullable = x => (x != null ? Right(x) : Left(null));

let tryCatch = f => {
	try {
		return Right(f());
	} catch (e) {
		return Left(e);
	}
};

let logIt = x => {
	console.log(x);
	return x;
};

let DB_REGEX = /postgres:\/\/([^:]+):([^@]+)@.*?\/(.+)$/i;

// Exercise: Either
// Goal: Refactor each example using Either
// Bonus: no curlies
// =========================

// Ex1: Refactor streetName to use Either instead of nested if's
// =========================
let street = user =>
	fromNullable(user.address)
		.map(address => address.street)
		.fold(
			() => 'no street',
			x => x
		);

        
	let user = { address: { street: { name: 'Willow' } } };
	console.log(street(user), { name: 'Willow' });
	console.log(street({}), 'no street');

// Ex1: Refactor streetName to use Either instead of nested if's
// =========================
let streetName = user =>
	fromNullable(user.address)
		.chain(address => fromNullable(address.street))
		.map(street => street.name)
		.fold(
			() => 'no street',
			x => x
		);

	user = { address: { street: { name: 'Willow' } } };
	console.log(streetName(user), 'Willow');
	console.log(streetName({}), 'no street');
	console.log(streetName({ address: { street: null } }), 'no street');

// Ex2: Refactor parseDbUrl to return an Either instead of try/catch
// =========================
let parseDbUrl = cfg =>
	tryCatch(() => JSON.parse(cfg))
		.map(c => c.url.match(DB_REGEX))
		.fold(
			x => null,
			x => x
		);

	let config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}';
	console.log(parseDbUrl(config)[1], 'sally');
	console.log(parseDbUrl(), null);

// Ex3: Using Either and the functions above, refactor startApp
// =========================
let startApp = cfg =>
	fromNullable(parseDbUrl(cfg))
		.map(([_, user, password, db]) => `starting ${db}, ${user}, ${password}`)
		.fold(
			() => "can't get config",
			x => x
		);

	config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}';
	console.log(String(startApp(config)), 'starting mydb, sally, muppets');
	console.log(String(startApp()), "can't get config");