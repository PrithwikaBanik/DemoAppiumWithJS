module.exports = {
    platformName: 'Android',
    deviceName: process.env.MOBILE_DEVICE_NAME || 'Android Emulator',
    platformVersion: process.env.MOBILE_DEVICE_PLATFORM || '13.0',
    appPackage: 'com.example.app',
    appActivity: '.MainActivity',
    automationName: 'UiAutomator2'
};