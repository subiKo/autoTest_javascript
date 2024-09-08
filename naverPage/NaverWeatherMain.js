const fs = require('fs');
const yaml = require('yaml');

// YAML 파일 읽고 파싱
const file = fs.readFileSync('./dataSet.yaml', 'utf8');
const yamlData = yaml.parse(file);

const nationLayer = 'div#nation';
const weeklyList ='ul.weekly_list[role=tablist]';
const contentLayer = 'div#content';

class NaverWeatherMain {

    constructor(page) {
        this.page = page;
    }

    async gotoPage() {
        await this.page.goto(yamlData.domain.naverWeather);
    }


    async weeklyListClick(){
        // 'weeklyList'에 해당하는 모든 'li' 요소들이 화면에 보이는지 확인
        await this.page.locator(weeklyList).isVisible();

        // 'weeklyList'에 있는 모든 'li' 요소 가져오기
        const dayButtons = this.page.locator(weeklyList).locator('li.item');
        const count = await dayButtons.count();  // li 요소 개수 확인

        // 각 요소를 순회하면서 클릭
        for (let i = 0; i < count; i++) {
            const dayButton = dayButtons.nth(i);  // 각 li 요소 선택
            await dayButton.click();  // 클릭
            await this.page.waitForTimeout(1500);  // 1.5초 대기
        }
    }

    async loadCheck(){
        const isVisible = await this.page.locator(contentLayer).isVisible();
        // 요소가 실제로 보이는지 여부를 출력
        if (isVisible) {
            console.log('The element is actually visible on the screen');
        } else {
            console.log('The element is not visible on the screen');
        }
    }


}

module.exports = NaverWeatherMain;