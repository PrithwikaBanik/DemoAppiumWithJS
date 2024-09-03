const cucumberHtmlReporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        browser: {
            name: 'chrome',
            version: '73'
        },
        platform: {
            name: 'Mac OS X',
            version: '10.14'
        }
    }
};

cucumberHtmlReporter.generate(options);
