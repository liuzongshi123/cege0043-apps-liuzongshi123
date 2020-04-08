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

	var feature = result[0].array_to_json[0];
		var htmlString = "<div class='form-group d-flex justify-content-center' id='popup'"+ feature.id + "><h4> Question { " + feature.question_title + " }</h4></div>";
			htmlString = htmlString + "<div class='form-group d-flex justify-content-center'><h5>"+feature.question_text + "</h5></div>";
			htmlString = htmlString + "<div class='form-group d-flex justify-content-center'><div class='col-sm-6 d-flex justify-content-around'>";
			htmlString = htmlString + "<label class='radio-inline'><input type='radio' name='answer' id ='"+feature.id+"_1'/>"+feature.answer_1+ "</label>";
			htmlString = htmlString + "<label class='radio-inline'><input type='radio' name='answer' id ='"+feature.id+"_2'/>"+feature.answer_2+ "</label>";
			htmlString = htmlString + "<label class='radio-inline'><input type='radio' name='answer' id ='"+feature.id+"_3'/>"+feature.answer_3+ "</label>";
			htmlString = htmlString + "<label class='radio-inline'><input type='radio' name='answer' id ='"+feature.id+"_4'/>"+feature.answer_4+ "</label>";
			htmlString = htmlString + "</div></div>";

	feature = result[0].array_to_json[1];
			htmlString = htmlString +"<div class='form-group d-flex justify-content-center' id='popup'"+ feature.id + "><h4> Question { " + feature.question_title + " }</h4></div>";
			htmlString = htmlString + "<div class='form-group d-flex justify-content-center'><h5>"+feature.question_text + "</h5></div>";
			htmlString = htmlString + "<div class='form-group d-flex justify-content-center'><div class='col-sm-6 d-flex justify-content-around'>";
			htmlString = htmlString + "<label class='radio-inline'><input type='radio' name='answer' id ='"+feature.id+"_1'/>"+feature.answer_1+ "</label>";
			htmlString = htmlString + "<label class='radio-inline'><input type='radio' name='answer' id ='"+feature.id+"_2'/>"+feature.answer_2+ "</label>";
			htmlString = htmlString + "<label class='radio-inline'><input type='radio' name='answer' id ='"+feature.id+"_3'/>"+feature.answer_3+ "</label>";
			htmlString = htmlString + "<label class='radio-inline'><input type='radio' name='answer' id ='"+feature.id+"_4'/>"+feature.answer_4+ "</label>";
			htmlString = htmlString + "</div></div>";

	document.getElementById('FiveDifficultPoint').innerHTML = htmlString;
	document.getElementById("mymap").innerHTML = "#mapContainer { height: 0px; }";
	document.getElementById('FiveDifficultPoint').style.display = 'block';
}

function RemoveFiveDifficultPoint() {
	document.getElementById('FiveDifficultPoint').style.display = 'none';
	document.getElementById("mymap").innerHTML = "#mapContainer { height: 600px; }";
}
