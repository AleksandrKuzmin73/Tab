/**
 * Created by Aleksandr Kuzmin on 27.11.2017.
 */
var tabForm = function() {
    var url = 'http://way2automation.com/way2auto_jquery/menu.php',
        EC = protractor.ExpectedConditions,
        buttonMenu = element (by.xpath('//ul[@class="boxed_style block"]//a[@href="frames-and-windows.php"]//img')),
        buttonInNewTab = element (by.xpath('/html/body/div/p/a')),
        buttonInputAlert = element (by.xpath('//a[@href="#example-1-tab-4"]')),
        buttonLogIn = element (by.xpath('//a[text()="Signin"]')),
        loginForm = element (by.xpath('//div[@id="login"]//input[@name="username"]')),
        passForm = element (by.xpath('//div[@id="login"]//input[@name="password"]')),
        linkNewTab = element (by.xpath('//div[@class="farme_window"]//a[@href="#"]')),
        buttonSubmit = element (by.xpath('//div[@id="login"]//input[@type="submit"]'));


    this.getSite = function () {
        browser.driver.manage().window().maximize();
        browser.get(url);
    };

    this.auth = function () {
        buttonLogIn.click();
        loginForm.sendKeys('Egoist73');
        passForm.sendKeys('Alex1992');
        buttonSubmit.click();
        browser.wait(EC.visibilityOf(buttonMenu), 15000, 'Элемент подтверждающий авторизацию на страницу не найден :(');
        buttonMenu.click();
        browser.wait(EC.visibilityOf(buttonInputAlert), 15000, 'Элемент подтверждающий переход на страницу не найден :(');
    };

    this.tab = function () {
        buttonInputAlert.click();
        browser.switchTo().frame(3);
        linkNewTab.click();
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
            });
        });
        buttonInNewTab.click();
    };


};
module.exports = tabForm;