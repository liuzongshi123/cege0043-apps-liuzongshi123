function getFiveDifficultPoint() {
$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
	"/FiveDifficultPoint",
		crossDomain: true,
		success: function(result){
		console.log(result);	
		loadFiveDifficultPoint(result);
	}}); //end of the AJAX call
} // end of getFiveDifficultPoint


function loadFiveDifficultPoint(result) {
	var length = result[0].array_to_json.length-1;
	var QuestionString = "";
	for (var i=0; i <= length; i++) {
		var feature = result[0].array_to_json[i];
			QuestionString = QuestionString +"<div class='form-group d-flex justify-content-center' id='popup'"+ feature.id + "><h4> Question "+ feature.id + " { " + feature.question_title + " }</h4></div>";
			QuestionString = QuestionString + "<div class='form-group d-flex justify-content-center'><h5>"+feature.question_text + "</h5></div>";
			QuestionString = QuestionString + "<div class='form-group d-flex justify-content-center'><div class='col-sm-10 d-flex justify-content-around'>";
			QuestionString = QuestionString + "<label class='radio-inline'><input type='radio' name='answer' id ='"+feature.id+"_1'/>"+feature.answer_1+ "</label>";
			QuestionString = QuestionString + "<label class='radio-inline'><input type='radio' name='answer' id ='"+feature.id+"_2'/>"+feature.answer_2+ "</label>";
			QuestionString = QuestionString + "<label class='radio-inline'><input type='radio' name='answer' id ='"+feature.id+"_3'/>"+feature.answer_3+ "</label>";
			QuestionString = QuestionString + "<label class='radio-inline'><input type='radio' name='answer' id ='"+feature.id+"_4'/>"+feature.answer_4+ "</label>";
			QuestionString = QuestionString + "</div></div>";
	};	

	document.getElementById('FiveDifficultPoint').innerHTML = QuestionString;
	document.getElementById("mymap").innerHTML = "#mapContainer { height: 0px; }";
	document.getElementById('participationRateAll').style.display = 'none';
  	document.getElementById('participationRateMy').style.display = 'none';
	document.getElementById('FiveDifficultPoint').style.display = 'block';
}

function RemoveFiveDifficultPoint() {
	document.getElementById('FiveDifficultPoint').style.display = 'none';
	document.getElementById("mymap").innerHTML = "#mapContainer { height: 600px; }";
	document.getElementById('participationRateAll').style.display = 'none';
  	document.getElementById('participationRateMy').style.display = 'none';
}
