import express from 'express';
import axios from 'axios';
import { Provider } from 'oidc-provider';
import cors from 'cors';

const toolStub = { clientId: '-1' };

const app = express();

app.use(cors());

app.get('/auth', (req, res) => {
	res.sendStatus(200);
});

app.listen(2020, async () => {
	console.log('demo platform running on port 2020');
	const adapter = require('./adapters/mongodb');
	await adapter.connect('mongodb://localhost:27017/lti-platform');
	const provider = new Provider('http://localhost:2020', { adapter });
	app.use(provider.callback);
});

// Register demo tool to platform
(() => {
	toolStub.clientId = '1';
})();

app.get('/testtoollaunch', async (req, res) => {
	const LtiResourceLinkRequest = {};
	// send POST init to with login request:
	const loginLink = 'http://localhost:3000/login';
	let loginResponse;
	try {
		const test = await axios.post(loginLink, {
			iss: 'http://localhost:2020',
			target_link_uri: 'http://localhost:3000',
			lti_login_hint: '1',
			lti_message_hint: '377',
		});
		loginResponse = test;
		res.send(test.headers);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

app.use('/platform', express.static('../public'));
