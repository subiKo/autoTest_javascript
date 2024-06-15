// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    workers: 1,
    testDir: './tests',
    timeout: 0,
    expect: {
        timeout: 5000
    },
    fullyParallel: true,
    reporter: [
        ['list'],
        ['allure-playwright'],
    ],
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 0,
        ignoreHTTPSErrors: true,
        video: 'on',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
        // {
        //     name: 'firefox',
        //     use: { browserName: 'firefox' },
        // },

        // {
        //     name: 'msedge',
        //     use: {
        //         browserName: 'chromium',
        //         channel: 'msedge', // Edge 브라우저 설정
        //     },
        // },
    ],
    outputDir: 'test-results/',

});