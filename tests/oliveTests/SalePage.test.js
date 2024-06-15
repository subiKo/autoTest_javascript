// tests/example.spec.js
const { test } = require('@playwright/test');
const MainPage = require('../../olivePage/MainPage');
const SalePage = require('../../olivePage/SalePage');

let mainPage;
let salePage;
const expectMessage = '전체 0 개의 상품이 등록되어 있습니다.';

test.beforeEach(async ({page}) => {
    console.log('SalePage.test.js 테스트 수행 시작');
    mainPage = new MainPage(page);
    salePage = new SalePage(page);
    await mainPage.gotoPage();
});

test.afterEach(async () => {
    console.log('SalePage.test.js 테스트 수행 완료');
});

test('세일 페이지에서 마지막 페이지도 이동 시 결함 확인', async ({ page }) => {

    await mainPage.clickSaleMenuButton();
    await salePage.clickMansButton();
    await salePage.clickNextPageButton();
    await salePage.expectCategoryText(expectMessage);

});