module.exports = {
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            w3c: true,
        },
        platformName: 'mac', // or 'any' or 'windows', depending on your environment
    },
    hostname: '127.0.0.1',
    port: 4723, // Default port for Selenium
};
