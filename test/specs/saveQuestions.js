var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome' //Browser choice
    }
};

browser = webdriverio
    .remote(options) //Passing configurations
    .init() // Initiating webdriverIo

 browser.timeouts({
        "script": 999990,
        "pageLoad": 999990,
        "implicit": 999990
});

var QuestionsPage = require('../pageObjects/questionsPage');

browser.url('http://tqen.mot.gov.il/know-your-vehicle?start=80') 

// var questions = browser.elements('.jcepopup');

// // var closeBtn = ('#jcemediabox-popup-closelink');


// var correctAnswerBtn = browser.element("#jsn-content-popup > div > div > div > div > div > span:nth-child(2) > button");

// correctAnswerBtn.waitForExist(5000);

// console.log('this is the correctAnswerBtn', correctAnswerBtn);
         	


// questions.then(function (questionsArray) {
//     console.log('this is the browser.elements list',questionsArray);
//     for (i = 0; i < questionsArray.length; i++) { 
//          	// eventFire(list[i], 'click');
//          	questionsArray[i].click();
//          	var correct = ("#jsn-content-popup > div > div > div > div > div > span:nth-child(2) > button");
//          	correct.then(function (correctAnswerBtn) {
//          		correctAnswerBtn.click();
//          	});
//          	// var closeBtn = ('#jcemediabox-popup-closelink')
//          	// browser.timeoutsImplicitWait(3000);
// 			// closeBtn.waitForVisible(3000);
//          	// closeBtn.click();
//          	console.log('this is the text of question #',i,': ',questionsArray[i].innerText);
         	
// }});


var result = browser.execute(function() {
    setInterval(function(){
    var list = document.getElementsByClassName("jcepopup");
    console.log('this is the list array', list);
    var newList = [];
    for (i = 0; i < 1; i++) { 
         	// eventFire(list[i], 'click');
         	// setInterval(function() {
         	
 	        	list[i].click();

 	        	function wait(ms){
					   var start = new Date().getTime();
					   var end = start;
					   while(end < start + ms) {
					     end = new Date().getTime();
					  }
					}

				// wait(2000);
			var questionText = list[i].innerText;
			console.log('this is the questionText',questionText);
			var substr = questionText.substring(1, 5);
			console.log('this is the substr',substr);
			

			var correctAnswerBtn = document.getElementById('correctAnswer'+substr);
			console.log('this is the correctAnswerBtn', correctAnswerBtn);
         	
         	newList.push(questionText);
         	
         	//   
		}
    // browser context - you may not access client or console
    }, 5000);
    return newList;
 	});

//     // node.js context - client and console are available
// result.then(function (questionsArray) {
//     console.log('this is the list printed in node cli',questionsArray);
//     for (i = 0; i < questionsArray.length; i++) { 
//     		  questionsArray[i].click;
// 			  // method to be executed;
			

// 	   //  	    setInterval(function() {
// 				//     var close = document.getElementById('jcemediabox-popup-closelink');
// 	   //  			close.click();				  // method to be executed;
// 				// }, 5000);   	


//          	// eventFire(list[i], 'click');
//          	console.log('this is the text of question #',i,': ',questionsArray[i].innerText);
//          	// var closeBtn = ('#jcemediabox-popup-closelink')

// 			// closeBtn.waitForVisible(3000);
//          	// closeBtn.click();
// 		}

// });

// // browser.end();