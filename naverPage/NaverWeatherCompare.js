
const contentLayer = 'div#content';

class NaverWeatherCompare {

    constructor(page) {
        this.page = page;
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

module.exports = NaverWeatherCompare;