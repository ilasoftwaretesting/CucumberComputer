$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Resources/Features/Computer.feature");
formatter.feature({
  "line": 3,
  "name": "I m on home page so I can buy a products from computer category",
  "description": "     so that I can email to friend",
  "id": "i-m-on-home-page-so-i-can-buy-a-products-from-computer-category",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Computer"
    }
  ]
});
formatter.before({
  "duration": 10210723202,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "I am able to purchase products",
  "description": "",
  "id": "i-m-on-home-page-so-i-can-buy-a-products-from-computer-category;i-am-able-to-purchase-products",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on the computer category",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on desktop from computer category",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on first product",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the Email a friend",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter the friend email address",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter my email address",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I write the massage to friend Hope you doing well",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the send email Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should able to buy product and send review for with massage successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_am_on_homepage()"
});
formatter.result({
  "duration": 89471980,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_the_computer_category()"
});
formatter.result({
  "duration": 895202161,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_desktop_from_computer_category()"
});
formatter.result({
  "duration": 130161333,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_first_product()"
});
formatter.result({
  "duration": 4107043093,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_the_Email_a_friend()"
});
formatter.result({
  "duration": 1212771129,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_enter_the_friend_email_address()"
});
formatter.result({
  "duration": 133675929,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_enter_my_email_address()"
});
formatter.result({
  "duration": 96536626,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_write_the_massage_to_friend_Hope_you_doing_well()"
});
formatter.result({
  "duration": 86021295,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_the_send_email_Button()"
});
formatter.result({
  "duration": 80311359,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_should_able_to_buy_product_and_send_review_for_with_massage_successfully()"
});
formatter.result({
  "duration": 38240239,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SD-PC\u0027, ip: \u0027169.254.135.4\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\SD\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:49711}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d6227e8ef256d8aea743cd5362204ed4\n*** Element info: {Using\u003dcss selector, value\u003dhtml/body/div[6]/div[3]/div/div/div/div[2]/form/div[1]/ul/li}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.MyStepDef.i_should_able_to_buy_product_and_send_review_for_with_massage_successfully(MyStepDef.java:79)\r\n\tat ✽.Then I should able to buy product and send review for with massage successfully(src/Resources/Features/Computer.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1128459,
  "status": "passed"
});
});