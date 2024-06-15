// tests/example.spec.js
const { test } = require('@playwright/test');
const PageModel = require('../autoTestPages/mainPage');

test('basic test with page model', async ({ page }) => {
    const pageModel = new PageModel(page);
    await pageModel.goto();
    await pageModel.expectTitle('Playwright');
});