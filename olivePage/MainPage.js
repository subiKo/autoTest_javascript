const { expect } = require('@playwright/test');

const fs = require('fs');

const rawData = fs.readFileSync('dataSet.json', 'utf8');
const jsonData = JSON.parse(rawData);


const saleMenuButton = "a[data-attr=\"공통^GNB^세일\"]";

class MainPage {

    constructor(page) {
        this.page = page;
        this.title = page.locator('.navbar__title');
    }

    async gotoPage() {
        await this.page.goto(jsonData.oliveDomain);
    }

    async clickSaleMenuButton(){
        this.page.locator(saleMenuButton).click();
    }
}

module.exports = MainPage;