const { remote } = require('webdriverio');
const browserConfig = require('../config/browserConfig');

async function browserDriver() {
    const driver = await remote({
        capabilities: browserConfig
    });
    return driver;
}

module.exports = browserDriver;
