const { execSync } = require('child_process');
const path = require('path');

// Define the environment based on NODE_ENV or default to 'browser'
const env = process.env.NODE_ENV || 'browser';
console.log(`Running tests for ${env} environment...`);

try {
    // Run tests using cucumber-js
    console.log(`Running Cucumber tests for ${env}...`);
    execSync(`npx cucumber-js --require-module ts-node/register --require features/**/*.ts`, { stdio: 'inherit' });

    console.log('Tests completed.');

} catch (error) {
    console.error('Test execution failed:', error);
    process.exit(1);
}
