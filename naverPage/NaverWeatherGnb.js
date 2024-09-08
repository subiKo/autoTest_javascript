const fs = require('fs');
const yaml = require('yaml');

// YAML 파일 읽고 파싱
const file = fs.readFileSync('./dataSet.yaml', 'utf8');
const yamlData = yaml.parse(file);

const comparePageButton = 'div.menu_area >> a >> text="예보비교"';
const mainPageButton = 'div.menu_area >> a >> text="홈"';
const airPageButton = 'div.menu_area >> a >> text="미세먼지"';
const mapPageButton = 'div.menu_area >> a >> text="지도"';
const videoPageButton = 'div.menu_area >> a >> text="영상"';
const warningPageButton = 'div.menu_area >> a >> text="기상특보"';

class NaverWeatherGnb {

    constructor(page) {
        this.page = page;
    }

    async clickCompareMenuButton(){
        this.page.locator(comparePageButton).click();
    }
    async clickMainMenuButton(){
        this.page.locator(mainPageButton).click();
    }
    async clickAirMenuButton(){
        this.page.locator(airPageButton).click();
    }
    async clickMapMenuButton(){
        this.page.locator(mapPageButton).click();
    }
    async clickVideoMenuButton(){
        this.page.locator(videoPageButton).click();
    }
    async clickWarningMenuButton(){
        this.page.locator(warningPageButton).click();
    }
}

module.exports = NaverWeatherGnb;