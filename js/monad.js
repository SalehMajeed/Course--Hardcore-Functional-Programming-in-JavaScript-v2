const right = x => ({
    chain: f => f(x),
    map: f => right(f(x)),
    fold: (f, g) => g(x),
    toString: `Right(${x})`
})

const left = x => ({
	chain: f => f(x),
	map: f => right(f(x)),
	fold: (f, g) => g(x),
	toString: `Left(${x})`,
});

const from_nullable = x => 
    x != null ? right(x) : left()

const find_color = name => 
	from_nullable({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name])

const res = () =>
	find_color('red')
		.map(x => x.toUpperCase())
        .map(x => x.slice(1));
        
console.log(res())
