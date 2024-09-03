const wd = require('wd');
const androidConfig = require('../config/androidConfig');
const iosConfig = require('../config/iosConfig');
const browserConfig = require('../config/browserConfig');

async function buildDriver() {
    const env = process.env.NODE_ENV;
    let config;
    let driver;

    switch (env) {
        case 'android':
            config = androidConfig;
            break;
        case 'ios':
            config = iosConfig;
            break;
        case 'chrome': // Use 'chrome' for browser testing
            config = browserConfig;
            break;
        default:
            throw new Error('Unknown environment');
    }

    // Create a connection to the Appium server
    driver = wd.promiseChainRemote('127.0.0.1', 4723); // or your Appium server's URL and port

    // Initialize the driver with capabilities
    await driver.init(config);

    return driver;
}

module.exports = { buildDriver };
