

var webdriverio = require('webdriverio');


var options = {
    desiredCapabilities: {
        browserName: 'chrome' //Browser choice
    }
};

browser = webdriverio
    .remote(options) //Passing configurations
    .init() // Initiating webdriverIo

var LoginPage = require('../pageObjects/loginPage');

LoginPage.loginClick();

 console.log("anything");

    var begin = LoginPage.loginButton;

    console.log(begin);

    begin.click();


    browser.url('http://tqen.mot.gov.il/know-your-vehicle?start=80') //Navigates to google.com
    .getTitle().then(function(title) { // Gets the title of the page.
        console.log('Title was: ' + title); // Prints the title of the page.
    });

   
    // 

    // browser.end();