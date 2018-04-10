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

var questions = browser.elements('.jcepopup');

questions.then(function (questionsArray) {
    console.log('this is the browser.elements list',questionsArray);
	console.log('this is the list printed in node cli',questionsArray);
    for (i = 0; i < questionsArray.length; i++) { 
         	// eventFire(list[i], 'click');
         	// questionsArray[i].click();
         	// var closeBtn = ('#jcemediabox-popup-closelink')
         	// browser.timeoutsImplicitWait(3000);
			// closeBtn.waitForVisible(3000);
         	// closeBtn.click();
         	console.log('this is the text of question #',i,': ',questionsArray[i].innerText);
         	
}});


var result = browser.execute(function() {
    var list = document.getElementsByClassName("jcepopup");
    console.log('this is the list array', list);
    var newList = [];
    for (i = 0; i < list.length; i++) { 
         	// eventFire(list[i], 'click');
         	// list[i].click();
         	console.log('this is the text of question #',i,': ',list[i].innerText);
         	var questionText = list[i].innerText;
         	newList.push(questionText);         	
		}
    // browser context - you may not access client or console
    return newList;
 	});


    // node.js context - client and console are available
result.then(function (questionsArray) {
    console.log('this is the list printed in node cli',questionsArray);
    for (i = 0; i < questionsArray.length; i++) { 
         	// eventFire(list[i], 'click');
         	console.log('this is the text of question #',i,': ',questionsArray[i].innerText);
         	// var closeBtn = ('#jcemediabox-popup-closelink')

			// closeBtn.waitForVisible(3000);
         	// closeBtn.click();
		}

});

// browser.end();