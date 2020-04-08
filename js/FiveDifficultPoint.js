function getFiveDifficultPoint() {
$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
	"/FiveDifficultPoint",
		crossDomain: true,
		success: function(result){
		console.log(result);	
		loadFiveDifficultPoint(result);
	}}); //end of the AJAX call
} // end of getFiveDifficultPoint


var FiveDifficultPointLayer=[];
function loadFiveDifficultPoint(result) {

	var feature = result[0].array_to_json[0];
	alert(feature);
	console.log(feature);
		var htmlString = "<DIV id='popup'"+ feature.id + "><h2>" + feature.question_title + "</h2><br>";
			htmlString = htmlString + "<h3>"+feature.question_text + "</h3><br>";
			htmlString = htmlString + "<input type='radio' name='answer' id ='"+feature.id+"_1'/>"+feature.answer_1+"<br>";
			htmlString = htmlString + "<input type='radio' name='answer' id ='"+feature.id+"_2'/>"+feature.answer_2+"<br>";
			htmlString = htmlString + "<input type='radio' name='answer' id ='"+feature.id+"_3'/>"+feature.answer_3+"<br>";
			htmlString = htmlString + "<input type='radio' name='answer' id ='"+feature.id+"_4'/>"+feature.answer_4+"<br>";
			htmlString = htmlString + "</div>";
			FiveDifficultPointLayer.push(htmlString);
	document.getElementById('FiveDifficultPoint').innerHTML = htmlString		
	console.log(FiveDifficultPointLayer);
	console.log(result);
	alert(FiveDifficultPointLayer);
}