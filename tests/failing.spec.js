// tests/failing.spec.js
const { test } = require('@playwright/test');
const PageModel = require('../autoTestPages/mainPage');

test('failing test with page model', async ({ page }) => {
    const pageModel = new PageModel(page);
    await pageModel.goto();
    // 의도적으로 실패하도록 잘못된 텍스트를 검증합니다.
    await pageModel.expectTitle('Nonexistent Title');
});