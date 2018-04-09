var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'mozilla' //Browser choice
    }
};

browser = webdriverio
    .remote(options) //Passing configurations
    .init() // Initiating webdriverIo

var QuestionsPage = require('../pageObjects/questionsPage');

browser.url('http://tqen.mot.gov.il/know-your-vehicle?start=80') 

var result = browser.execute(function() {
    var list = document.getElementsByClassName("jcepopup");
    console.log('this is the list array', list);
    for (i = 0; i < list.length; i++) { 
         	// eventFire(list[i], 'click');
         	list[i].click();
		}
    // browser context - you may not access client or console
    return list;
 	});

    // node.js context - client and console are available
result.then(function (k) {
    console.log('this is the list printed in node cli',result);
});

// browser.end();