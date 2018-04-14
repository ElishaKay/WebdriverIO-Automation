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
	var substr = questionText.substring(0, 4);
	console.log('this is the substr',substr);
			
	var correctAnswerBtn = document.getElementById('correctAnswer'+substr);
	console.log('this is the correctAnswerBtn', correctAnswerBtn);

	answerText = correctAnswerBtn.innerText;
	var qAndAObj = {"question": questionText, "answer": answerText};

	newList.push(qAndAObj);
	var openQuestions = document.querySelectorAll("#jcemediabox-popup-page");
	console.log(openQuestions);
	wait(1000);
	openQuestions[0].remove();
	var closeBtn = document.getElementById("jcemediabox-popup-closelink");
	console.log('this is the closeBtn',closeBtn);
	closeBtn.click();

	questionCount +=1;
	console.log('added one to questionCount', questionCount);
	console.log(newList);
	if(questionCount ==5){
		clearInterval(saveQLoop);
	}

}, 3000);