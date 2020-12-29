import { Task } from 'types';
const fs = require('fs');

const read_file = (path, enc) =>
	Task((rej, res) => fs.readFile(path, enc, (err, contents) => (err ? rej(err) : res(contents))));

const write_file = (path, contents) =>
	Task((rej, res) => fs.writeFile(path, contents, (err, contents) => (err ? rej(err) : res(contents))));

const app = () =>
	read_file('config.json', 'utf-8')
		.map(contents => contents.replace(/3/g, '6'))
		.chain(newContents => write_file('config1.json', newContents));

app().fork(console.error, () => console.log('Success'));
