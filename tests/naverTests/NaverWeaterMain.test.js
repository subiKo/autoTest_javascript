const { test } = require('@playwright/test');
const MainPage = require('../../naverPage/NaverWeatherMain');
const GnbPage = require('../../naverPage/NaverWeatherGnb');
const ComparePage = require('../../naverPage/NaverWeatherCompare');

let mainPage;
let gnbPage;
let comparePage;

test.beforeEach(async ({page}) => {
    mainPage = new MainPage(page);
    gnbPage = new GnbPage(page);
    comparePage = new ComparePage(page);
    await mainPage.gotoPage();
});


test('전국 날씨 탭 기능 확인', async ({ page }) => {
    await gnbPage.clickAirMenuButton();
    await page.waitForTimeout(2000);

    await gnbPage.clickCompareMenuButton();
    await comparePage.loadCheck();
    await page.waitForTimeout(2000);

    await gnbPage.clickMapMenuButton();
    await page.waitForTimeout(2000);

    await gnbPage.clickVideoMenuButton();
    await page.waitForTimeout(2000);

    await gnbPage.clickWarningMenuButton();
    await page.waitForTimeout(2000);

    await gnbPage.clickMainMenuButton();
    await page.waitForTimeout(2000);

    await mainPage.weeklyListClick();
    await page.waitForTimeout(2000);

});