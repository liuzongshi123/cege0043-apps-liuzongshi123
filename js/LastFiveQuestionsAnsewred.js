function getLastFiveQuestionsAnsewred() {
$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
	"/LastFiveQuestionsAnsewred/"+ httpsPortNumberAPI,
		crossDomain: true,
		success: function(result){
		loadLastFiveQuestionsAnsewred(result);
	}}); //end of the AJAX call
} // end of getLastFiveQuestionsAnsewred

var LastFiveQuestionsAnsewredLayer; 
function loadLastFiveQuestionsAnsewred(formData) { 
	// load the geoJSON layer
	formData[0].features.reverse();
	LastFiveQuestionsAnsewredLayer = L.geoJson(formData,
		{
			// use point to layer to create the points 
			pointToLayer: function (feature, latlng)
			{ 
			// in this case, we build an HTML DIV string 
			// using the values in the data
			var htmlString = "<DIV id='popup'"+ feature.properties.id + "><h2>" + feature.properties.question_title + "</h2><br>";
			htmlString = htmlString + "<h3>"+feature.properties.question_text + "</h3><br>";
			htmlString = htmlString + "<input type='radio' name='answer' id ='"+feature.properties.id+"_1'/>"+feature.properties.answer_1+"<br>";
			htmlString = htmlString + "<input type='radio' name='answer' id ='"+feature.properties.id+"_2'/>"+feature.properties.answer_2+"<br>";
			htmlString = htmlString + "<input type='radio' name='answer' id ='"+feature.properties.id+"_3'/>"+feature.properties.answer_3+"<br>";
			htmlString = htmlString + "<input type='radio' name='answer' id ='"+feature.properties.id+"_4'/>"+feature.properties.answer_4+"<br>";
			// now include a hidden element with the answer 
			// in this case the answer is alwasy the first choice 
			// for the assignment this will of course vary - you can use feature.properties.correct_answer
			htmlString = htmlString + "<div id=answer" + feature.properties.id + " hidden>" + feature.properties.correct_answer + "</div>";
			htmlString = htmlString + "</div>";
			if (feature.properties.answer_correct === true) {
				return L.marker(latlng,{icon:testMarkerGreen}).bindPopup(htmlString);
			};
			if (feature.properties.answer_correct === false) {
				return L.marker(latlng,{icon:testMarkerRed}).bindPopup(htmlString);
			};
			},
		}).addTo(mymap);
	mymap.removeLayer(formLayer);
	if (AnsweredWrongLayer !== undefined) {
		mymap.removeLayer(AnsweredWrongLayer);
	}
	mymap.fitBounds(LastFiveQuestionsAnsewredLayer.getBounds());
	alert("Last Five Answered Questions Have been Loaded!");
}


function RemoveLastFiveQuestionsAnsewred() { 
	mymap.removeLayer(LastFiveQuestionsAnsewredLayer);
	formLayer.addTo(mymap);
	alert("Last Five Answered Questions Have been Removed!");
}

