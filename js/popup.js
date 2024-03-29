function getFormData() {
$.ajax({url:"https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +
	"/getGeoJSON/quizquestions/location/"+ httpsPortNumberAPI,
		crossDomain: true,
		success: function(result){	
		loadFormData(result);
	}}); //end of the AJAX call
} // end of getFormData


var formLayer; 
function loadFormData(formData) { 
	// convert the text received from the server to JSON 


	// load the geoJSON layer
	formLayer = L.geoJson(formData,
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
			// in this case the answer is alwasy the first choice 
			// for the assignment this will of course vary - you can use feature.properties.correct_answer
			htmlString = htmlString + "<div id=answer" + feature.properties.id + " hidden>" + feature.properties.correct_answer + "</div>";
			htmlString = htmlString + "</div>";
			return L.marker(latlng).bindPopup(htmlString);
			},
		}).addTo(mymap);
	alert("Existing Question Points Have been Loaded!");
	mymap.fitBounds(formLayer.getBounds());
}

function removeFormData() { 
	mymap.removeLayer(formLayer);
	alert("Existing Question Points Have been Removed!")
}


//Using the Layer for Distance Measurement – Proximity Alert
function closestFormPoint(position) {
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
	formLayer.eachLayer(function(layer) {
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
	formLayer.eachLayer(function(layer) {
		if (layer.feature.properties.id == closestFormPoint){
			layer.openPopup();
		}
	});
}

// code adapted from https://www.htmlgoodies.com/beyond/javascript/calculate-the-distance-between-two-points-in-your-web-apps.html
function calculateDistance(lat1, lon1, lat2, lon2, unit) { 
	var radlat1 = Math.PI * lat1/180; 
	var radlat2 = Math.PI * lat2/180; 
	var radlon1 = Math.PI * lon1/180; 
	var radlon2 = Math.PI * lon2/180; 
	var theta = lon1-lon2; 
	var radtheta = Math.PI * theta/180; 
	var subAngle = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta); 
	subAngle = Math.acos(subAngle); subAngle = subAngle * 180/Math.PI; // convert the degree value returned by acos back to degrees from radians 
	dist = (subAngle/360) * 2 * Math.PI * 3956; // ((subtended angle in degrees)/360) * 2 * pi * radius ) 
												// where radius of the earth is 3956 
	if (unit=="K") { dist = dist * 1.609344 ;} // convert miles to km 
	if (unit=="N") { dist = dist * 0.8684 ;} // convert miles to nautical miles 
	return dist; 
}



