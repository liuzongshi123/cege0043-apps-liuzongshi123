var questionLayer;
function checkAnswer(questionID) {
	// get the answer from the hidden div 
	// NB - do this BEFORE you close the pop-up as when you close the pop-up the DIV is destroyed
	var answer = document.getElementById("answer"+questionID).innerHTML;

	// now check the question radio buttons
	var correctAnswer = false; 
	var answerSelected = 0;
	for (var i=1; i < 5; i++) { 
		if (document.getElementById(questionID+"_"+i).checked){ 
			answerSelected = i; 
		}
		if ((document.getElementById(questionID+"_"+i).checked) && (i == answer)) { 
			alert ("Well done"); 
			correctAnswer = true;
			questionLayer.setIcon(testMarkerGreen);

		} 
	}
	if (correctAnswer === false) { 
	// they didn't get it right 
	alert("Better luck next time"); 
	questionLayer.setIcon(testMarkerRed);
	} 
	// now close the popup 
	mymap.closePopup();
	// the code to upload the answer to the server would go here 
	// call an AJAX routine using the data 
	// the answerSelected variable holds the number of the answer 
	// that the user picked
	console.log("start answer upload");
	var postString = "port_id="+httpsPortNumberAPI+"&question_id="+questionID+"&answer_selected="+answerSelected+"&correct_answer="+answer;
	alert (postString);
	processAnswer(postString);
}

function processAnswer(postString) { 
	var serviceUrl= "https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI+"/insertAnswerData" 
	$.ajax({ 
		url: serviceUrl, 
		crossDomain: true, 
		type: "POST", 
		success: function(data){console.log(data)}, 
		data: postString 
	}); 
}

function deleteAnswer() {
	var deleteID = document.getElementById("answer_id").value;
	var deleteString = "id="+deleteID + "&port_id="+httpsPortNumberAPI;
	var serviceUrl= "https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI+"/deleteAnswerData";
	$.ajax({ 
		url: serviceUrl, 
		crossDomain: true, 
		type: "POST", 
		success: function(data){console.log(data); AnswerDeleted(data);}, 
		data: deleteString 
});
}

function AnswerDeleted(data){ 
	document.getElementById("AnswerDeleteResult").innerHTML = JSON.stringify(data); 
}