// models/pageModel.js
const { expect } = require('@playwright/test');

class MainPage {


    constructor(page) {
        this.page = page;
        this.title = page.locator('.navbar__title');
    }

    async goto() {
        await this.page.goto('https://playwright.dev/');
    }

    async expectTitle(text) {
        await expect(this.title).toHaveText(text);
    }
}

module.exports = MainPage;