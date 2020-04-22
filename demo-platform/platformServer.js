"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const oidc_provider_1 = require("oidc-provider");
const cors_1 = __importDefault(require("cors"));
const toolStub = { clientId: '-1' };
const app = express_1.default();
app.use(cors_1.default());
app.get('/auth', (req, res) => {
    res.sendStatus(200);
});
app.listen(2020, async () => {
    console.log('demo platform running on port 2020');
    const adapter = require('./adapters/mongodb');
    await adapter.connect('mongodb://localhost:27017/lti-platform');
    const provider = new oidc_provider_1.Provider('http://localhost:2020', { adapter });
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
        const test = await axios_1.default.post(loginLink, {
            iss: 'http://localhost:2020',
            target_link_uri: 'http://localhost:3000',
            lti_login_hint: '1',
            lti_message_hint: '377',
        });
        loginResponse = test;
        res.send(test.headers);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});
app.use('/platform', express_1.default.static('../public'));
//# sourceMappingURL=platformServer.js.map