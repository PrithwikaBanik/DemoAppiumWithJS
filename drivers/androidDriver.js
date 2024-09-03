const { remote } = require('webdriverio');
const androidConfig = require('../config/androidConfig');

async function androidDriver() {
    const driver = await remote({
        port: 4723,
        capabilities: androidConfig
    });
    return driver;
}

module.exports = androidDriver;
