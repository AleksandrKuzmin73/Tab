describe ("Test Tab", function(){
    var common = require('../config/common.js'),
        tabForm = new common.tabForm(),
        thirdTab = element (by.xpath('//div[@class="farme_window"]'));
        browser.waitForAngularEnabled(false);

    beforeEach(function () {
        tabForm.getSite();
    });

    // 1.Создание скрина;
    it("Tab 1", function () {
        tabForm.auth();
        tabForm.tab();
        expect(thirdTab.getText()).toBe('Open Window-3');
    });

});