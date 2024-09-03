module.exports = {
    platformName: 'iOS',
    deviceName: process.env.MOBILE_DEVICE_NAME || 'iPhone Simulator',
    platformVersion: process.env.MOBILE_DEVICE_PLATFORM || '13.0',
    bundleId: 'com.example.app',
    automationName: 'XCUITest',
    // Optionally, specify the path to the app if you're using a specific .app or .ipa file
    // app: '/path/to/your/app.app',
};
