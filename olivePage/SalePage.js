const { expect } = require('@playwright/test');

const mansButton ='button >> text="맨즈케어"';
const cosmeticButton ='button >> text="더모 코스메틱"';
const pageLayer = 'div.pageing';
const nextPageButton = 'a.next';
const categoryInfoLayer ='div.TabsConts.on >> p.cate_info_tx';

class SalePage {

    constructor(page) {
        this.page = page;
    }

    async clickCosmeticButton() {
        await this.page.locator(cosmeticButton).click();
    }

    async clickMansButton() {
        await this.page.locator(mansButton).click();
    }

    async clickNextPageButton() {
        await this.page.locator(pageLayer).locator(nextPageButton).click();
    }

    async expectCategoryText(text) {
        await expect(this.page.locator(categoryInfoLayer)).toHaveText(text);
    }

}

module.exports = SalePage;