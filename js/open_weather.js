import apiKey from './apikey';
import { Task } from 'types';
const { compose } = R;

const makeWeatherUrl = zip => `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&APPID=${apiKey}`;

const fetchIt = url => Task((rej, res) => fetch(url).then(res).catch(rej));

const openWeather = {
	fetch: compose(fetchIt, makeWeatherUrl),
};

const app = () => {
	const goButton = document.getElementById('go');
	const input = document.getElementById('zip');
	const result = document.getElementById('results');

	goButton.addEventListener('click', () => {
		const zipCode = input.value.trim();
		openWeather.fetch(zipCode, apiKey).fork(console.error, console.log);
	});
};
