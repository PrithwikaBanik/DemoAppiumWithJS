const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { buildDriver } = require('../../drivers');

BeforeAll(async function() {
    this.driver = await buildDriver();
});

AfterAll(async function() {
    if (this.driver) {
        await this.driver.quit();
    }
});
