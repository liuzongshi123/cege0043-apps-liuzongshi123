function getAnsweredWrong() {
$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
	"/AnsweredWrong",
		crossDomain: true,
		success: function(result){	
		loadAnsweredWrong(result);
	}}); //end of the AJAX call
} // end of getQuestionLastWeek


var AnsweredWrongLayer; 
function loadAnsweredWrong(formData) { 

	// load the geoJSON layer
	AnsweredWrongLayer = L.geoJson(formData,
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
			htmlString = htmlString + "<button onclick='checkAnswer(" + feature.properties.id + ");return false;'>Submit Answer</button>";
			// now include a hidden element with the answer 
			// now include a hidden element with the answer 
			// in this case the answer is alwasy the first choice 
			// for the assignment this will of course vary - you can use feature.properties.correct_answer
			htmlString = htmlString + "<div id=answer" + feature.properties.id + " hidden>" + feature.properties.correct_answer + "</div>";
			htmlString = htmlString + "</div>";
			return L.marker(latlng,{icon:testMarkerDarkblue}).bindPopup(htmlString);
			},
		}).addTo(mymap);
	mymap.removeLayer(formLayer);
	if (LastFiveQuestionsAnsewredLayer !== undefined) {
		mymap.removeLayer(LastFiveQuestionsAnsewredLayer);
	}
	navigator.geolocation.getCurrentPosition(closestWrongPoint);
	mymap.fitBounds(AnsweredWrongLayer.getBounds());
	alert("Questions Have been Loaded!");
}


function RemoveAnsweredWrong() { 
	mymap.removeLayer(AnsweredWrongLayer);
	formLayer.addTo(mymap);
	alert("Questions Have been Removed!");
}

function closestWrongPoint(position) {
	// take the leaflet formdata layer 
	// go through each point one by one 
	// and measure the distance to Warren Street 
	// for the closest point show the pop up of that point
	var minDistance = 100000000000; 
	var closestFormPoint = 0;

	// for this example, use the latitude/longitude of warren street 
	// in your assignment replace this with the user's location
	var userlat = position.coords.latitude; 
	var userlng = position.coords.longitude;
	AnsweredWrongLayer.eachLayer(function(layer) {
		var distance = calculateDistance(userlat,userlng,layer.getLatLng().lat, layer.getLatLng().lng, 'K');
		if (distance < minDistance){
			minDistance = distance;
			closestFormPoint = layer.feature.properties.id;
		}
	});

	// for this to be a proximity alert, the minDistance must be 
	// closer than a given distance - you can check that here 
	// using an if statement 
	// show the popup for the closest point
	AnsweredWrongLayer.eachLayer(function(layer) {
		if (layer.feature.properties.id == closestFormPoint){
			layer.openPopup();
		}
	});
}