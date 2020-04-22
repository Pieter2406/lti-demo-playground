import { Provider } from 'ltijs';
import * as Database from 'ltijs-postgresql';
import cors from 'cors';

// const DBConfig = (process.env.DATABASE_CONFIG && JSON.parse(process.env.DATABASE_CONFIG));

// const db = new Database(DBConfig);

const lti = new Provider('EXAMPLEKEY', { url: 'mongodb://localhost:27017/lti-tool' }, { appUrl: '/', loginUrl: '/login', logger: true });
// LTI setup:

(async () => {
	await lti.deploy();
	lti.app.use(cors());

	lti.onConnect((connection, request, response) => {
		console.log(connection);
		lti.redirect(response, '/main');
	});
	await lti.registerPlatform({
		url: 'http://localhost:2020',
		name: 'ILearn demo-platform',
		clientId: 'fxdx7rvDMkknQwWAczGZ94I1OUJICyfo',
		authenticationEndpoint: 'http://localhost:2020/auth',
		accesstokenEndpoint: 'http://localhost:2020/token',
		authConfig: {
			method: 'JWK_SET',
			key: 'http://localhost:2020/jwks',
		},
	});

	lti.app.get('/main', (req, res) => {
		// Id token
		console.log(res.locals.token);
		res.send("It's alive!");
	});
})();
