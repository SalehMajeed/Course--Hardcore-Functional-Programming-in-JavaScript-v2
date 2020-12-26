const right = x => ({
	map: f => left(f(x)),
	chain: f => right(x),
	fold: (f, g) => f(x),
	inspect: `Right(${x})`,
});

const left = x => ({
	map: f => left(f(x)),
	chain: f => left(x),
	fold: (f, g) => f(x),
	inspect: `Left(${x})`,
});

const from_nullable = x => (x != null ? right(x) : left(null));

const try_catch = () => {
	try {
		return right(f());
	} catch (e) {
		return left(e);
	}
};

const readFileSync = path =>
    try_catch(() => fs.readFileSync(path))

const parse_json = contents =>
        try_catch(() => JSON.parse(contents)) 

const get_port = () => 
    readFileSync('config.json')
        .chain(contents => parse_json(contents))
        .map(config => config.port)
    .fold(() => 8080, x => x)

    const result = get_port()
console.log(result);
