function operation(user) {
	return user.firstName.toUpperCase().split('').reverse().join('');
}

const bobo = {
	firstName: 'Bobo',
	lastName: 'Flakes',
};
const upperAndReverseFirstName = user => {
	return operation(user)
};
const result = upperAndReverseFirstName(bobo);
console.log({ result });

const users = [
	{
		firstName: 'Bobo',
		lastName: 'Flakes',
	},
	{
		firstName: 'Lawrence',
		lastName: 'Shilling',
	},
	{
		firstName: 'Anon',
		lastName: 'User',
	},
];
const upperAndReverseFirstNames = users => {
	return users.map(operation)
};
console.log(upperAndReverseFirstNames(users))

