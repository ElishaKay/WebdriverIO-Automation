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

	
	var pages = document.getElementsByClassName("navigation-page");
	console.log('these are the elements which hold links to all the page',pages);
	
	var pageLink = pages[0].innerHTML;

	var loopAndSave = function (){
			var saveQLoop = setInterval(function(){
		    var list = document.getElementsByClassName("jcepopup");
		    console.log('this is the list array', list);
		    var newList = [];
		    for (i = 0; i < list.length; i++) { 
		      	
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
				}

			console.log('this is the questions and answer array', newList);
			$.post( "http://localhost/api/drivingquestions", 
				  { 'theQuestions': newList },
				function(   data ) {
				  console.log(data);
			});
			window.location.replace("http://stackoverflow.com");
			// clearInterval(saveQLoop);
    // browser context - you may not access client or console
    }, 5000);
    return newList;
 	};

    loopAndSave();
});

    // node.js context - client and console are available
result.then(function (qAndAArray) {
    console.log('this is the list printed in node cli',qAndAArray);
});

// // browser.end();