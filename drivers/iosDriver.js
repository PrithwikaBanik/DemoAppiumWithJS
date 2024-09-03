const { remote } = require('webdriverio');
const androidConfig = require('../config/iosConfig');

async function iosDriver() {
    const driver = await remote({
        port: 4723,
        capabilities: iosConfig
    });
    return driver;
}

module.exports = iosDriver;