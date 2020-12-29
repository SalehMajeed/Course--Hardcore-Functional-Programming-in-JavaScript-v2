const { Task } = types;
const { compose } = 'ramda';

const box = f => ({
	map: g => box(compose(f, g)),
	fold: f,
});

box(() => 2)
	.map(two => two + 1)
	.fold();

Task.of(2).map(two => two + 1);
const t1 = Task((rej, res) => res(2))
	.chain(two => Task.of(two + 1))
	.map(three => three * 2);
t1.fork(consoles.error, console.log);
