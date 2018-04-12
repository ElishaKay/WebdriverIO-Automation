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

function wait(ms){
					   var start = new Date().getTime();
					   var end = start;
					   while(end < start + ms) {
					     end = new Date().getTime();
					  }
					}

wait(15000);

var result = browser.execute(function() {
    var saveQLoop = setInterval(function(){
    var list = document.getElementsByClassName("jcepopup");
    console.log('this is the list array', list);
    var newList = [];
    for (i = 0; i < list.length; i++) { 
         	// eventFire(list[i], 'click');
         	// setInterval(function() {
         	
 	        	list[i].click();

 	        	
			var questionText = list[i].innerText;
			console.log('this is the questionText',questionText);
			var substr = questionText.substring(0, 4);
			console.log('this is the substr',substr);
			

			var correctAnswerBtn = document.getElementById('correctAnswer'+substr);
			console.log('this is the correctAnswerBtn', correctAnswerBtn);

			answerText = correctAnswerBtn.innerText;
       		
       		var qAndAObj = {"question": questionText, "answer": answerText};

         	newList.push(qAndAObj);
         	
         	//   
		}
	console.log('this is the questions and answer array', newList);
	clearInterval(saveQLoop);
    // browser context - you may not access client or console
    }, 5000);
    return newList;
 	});

    // node.js context - client and console are available
result.then(function (qAndAArray) {
    console.log('this is the list printed in node cli',qAndAArray);
});

// // browser.end();