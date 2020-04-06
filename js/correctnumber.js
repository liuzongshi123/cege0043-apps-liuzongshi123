var correctnumber;
function getCorrectNumber() {
$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
	"/quizanswers/correctnumber",
		crossDomain: true,
		success: function(result){	
		correctnumber = result[0].array_to_json[0].num_questions;
		correctnumber = "You have answered "+correctnumber+" questions correctly!";
		alert(correctnumber);
	}}); //end of the AJAX call
} // end of getFormData
