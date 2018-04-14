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

var counter = 0;
var browserRunning = setInterval(function(){
	console.log('browser runnning ', counter, 'seconds');
	counter++;
}, 1000);

// var QuestionsPage = require('../pageObjects/questionsPage');

browser.url('http://tqen.mot.gov.il/safety/vehicles-motorcycles');


function wait(ms){
	var start = new Date().getTime();
  	var end = start;
	while(end < start + ms) {
	end = new Date().getTime();
	}
}

wait(20000);

var result = browser.execute(function() {

	// Inject jquery version with http support
		(function() {
	  var el=document.createElement('div'),
	   b=document.getElementsByTagName('body')[0];
	   otherlib=false,
	   msg='';
	  el.style.position='fixed';
	  el.style.height='32px';
	  el.style.width='220px';
	  el.style.marginLeft='-110px';
	  el.style.top='0';
	  el.style.left='50%';
	  el.style.padding='5px 10px';
	  el.style.zIndex = 1001;
	  el.style.fontSize='12px';
	  el.style.color='#222';
	  el.style.backgroundColor='#f99';
	  
	  // more or less stolen form jquery core and adapted by paul irish
	  function getScript(url,success){
	 var script=document.createElement('script');
	 script.src=url;
	 var head=document.getElementsByTagName('head')[0],
	  done=false;
	 // Attach handlers for all browsers
	 script.onload=script.onreadystatechange = function(){
	   if ( !done && (!this.readyState
	     || this.readyState == 'loaded'
	     || this.readyState == 'complete') ) {
	  done=true;
	  success();
	  script.onload = script.onreadystatechange = null;
	  head.removeChild(script);
	   }
	 };
	 head.appendChild(script);
	  }
	  getScript('https://code.jquery.com/jquery-latest.min.js',function() {
	 if (typeof jQuery=='undefined') {
	   msg='Sorry, but jQuery wasn\'t able to load';
	 } else {
	   msg='This page is now jQuerified with v' + jQuery.fn.jquery;
	   if (otherlib) {msg+=' and noConflict(). Use $jq(), not $().';}
	 }
	 return showMsg();
	  });
	  function showMsg() {
	 el.innerHTML=msg;
	 b.appendChild(el);
	 window.setTimeout(function() {
	   if (typeof jQuery=='undefined') {
	  b.removeChild(el);
	   } else {
	  jQuery(el).fadeOut('slow',function() {
	    jQuery(this).remove();
	  });
	  if (otherlib) {
	    $jq=jQuery.noConflict();
	  }
	   }
	 } ,2500);
	  }
	})();
	// End of latest jquery injection

	

	function wait(ms){
	   	var start = new Date().getTime();
	  	var end = start;
		while(end < start + ms) {
		end = new Date().getTime();
		}
	}

		var questionCount = 0;
		var list = document.getElementsByClassName("jcepopup");
		console.log('this is the list array', list);
		var newList = [];

		var saveQLoop = setInterval(function(){
				list[questionCount].click();
				
				wait(1000);
				var questionText = list[questionCount].innerText;
				console.log('this is the questionText',questionText);
				var question_id = questionText.substring(0, 4);
				console.log('this is the substr',question_id);
						
				var correctAnswerBtn = document.getElementById('correctAnswer'+question_id);
				console.log('this is the correctAnswerBtn', correctAnswerBtn);

				answerText = correctAnswerBtn.innerText;

				var img = document.querySelector('#jsn-content-popup > div > div > div > div > img');
					if(img){
						var imgSrc = $(img).attr('src');						
					} else {
						var imgSrc = 'www.pizzahut.com';
					}
				var qAndAObj = {"question_id": question_id, "question": questionText, "answer": answerText, "img": imgSrc, "section": 3};
				console.log('this is the qAndAObj', qAndAObj);
				
				$.post( "http://localhost:8080/api/drivingquestions", 
				  	qAndAObj,
						function(data) {
					  console.log(data);
				});

				var openQuestions = document.querySelectorAll("#jcemediabox-popup-page");
				console.log(openQuestions);
				wait(1000);
				openQuestions[0].remove();
				var closeBtn = document.getElementById("jcemediabox-popup-closelink");
				console.log('this is the closeBtn',closeBtn);
				closeBtn.click();

				questionCount +=1;
				console.log('added one to questionCount', questionCount);
				

				if(questionCount ==5){
					clearInterval(saveQLoop);
				}

			}, 3000);
	    return newList;

	});

    // node.js context - client and console are available
result.then(function (qAndAArray) {
    console.log('this is the list printed in node cli',qAndAArray);
});

// // browser.end();

// console.log('this is the questions and answer array', newList);
			

// window.location.replace("http://stackoverflow.com");


	// var pages = document.getElementsByClassName("navigation-page");
	// console.log('these are the elements which hold links to all the page',pages);
	
	// var pageLink = pages[0].innerHTML;
	// console.log(pageLink);

	// for (i = 0; i < pages.length; i++) { 
	// 	var pageLink = pages[i].innerHTML;
	// 	console.log(pageLink);
	// }