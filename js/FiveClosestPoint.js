function LoadUserLocation() { 
	navigator.geolocation.getCurrentPosition(GetFiveClosestPoint);
} 
var UserPositionLayer;
function GetFiveClosestPoint(position) { 
	var serviceUrl= "https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI+"/FiveClosestPoint"
	var postString = "latitude=" + position.coords.latitude + "&longitude=" + position.coords.longitude;
	UserPositionLayer = L.marker([position.coords.latitude,position.coords.longitude],
			{icon:testMarkerPink}).addTo(mymap).bindPopup("Here is Your Position");
	$.ajax({ 
		url: serviceUrl, 
		crossDomain: true, 
		type: "POST", 
		success: function(data){console.log(data); loadFiveClosestPoint(data);}, 
		data: postString 
	}); 
}

var FiveClosestPointLayer; 

function loadFiveClosestPoint(formData) {

	// load the geoJSON layer
	FiveClosestPointLayer = L.geoJson(formData,
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
			return L.marker(latlng,{icon:testMarkerBlack}).bindPopup(htmlString);
			},
		}).addTo(mymap);
	mymap.fitBounds(FiveClosestPointLayer.getBounds());
	alert("Five Closest Points Have been Loaded!");
}

function RemoveQuestionLastWeek() { 
	mymap.removeLayer(FiveClosestPointLayer);
	mymap.removeLayer(UserPositionLayer);
	alert("Five Closest Points Have been Removed!");
}